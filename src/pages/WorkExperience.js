import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import ExperienceDetails from '../components/WorkExperienceDetails';
import { motion } from "framer-motion";
import { workexperienceContent } from '../utils/web_api';

function WorkExperience() {
  const { language } = useContext(ThemeContext);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await workexperienceContent();
        const experiencesData = data[language]?.experiences || [];
        setExperiences(experiencesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [language]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) return <Typography>Error: {error}</Typography>;

  const greenColor = '#48BB78';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '2rem', md: '4rem', lg: '6rem' },
        marginTop: '2rem',
        marginBottom: '4rem',
        gap: '2rem',
        position: 'relative',
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '800px',
          position: 'absolute',
          top: '1.5rem',
          padding: { xs: '0 1rem', md: '0' },
        }}
      >
        <NavigationArrow direction="left" path="/about_me" label="About Me" />
        <Typography
          variant="h5"
          component="h1"
          textAlign="center"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: greenColor,
            fontWeight: 550,
            fontSize: { xs: '1.25rem', md: '1.75rem', lg: '2rem' },
          }}
        >
          {language === 'en' ? 'Work Experience' : 'Experiencia Laboral'}
        </Typography>
        <NavigationArrow direction="right" path="/" label="Quequeo" />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto', 
          justifyContent: 'center', 
        }}
      >
        {experiences.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceDetails content={content} />
          </motion.div>
        ))}
      </Box>

    </Box>
  );
}

export default WorkExperience;
