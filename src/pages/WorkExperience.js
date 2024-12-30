import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import ExperienceDetails from '../components/WorkExperienceDetails';
import { motion } from 'framer-motion';
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
        console.log(data);
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

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  const greenColor = '#48BB78';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem',
        marginTop: '2rem',
        gap: '3rem',
        position: 'relative',
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
          top: '2rem',
        }}
      >
        <NavigationArrow direction="left" path="/about_me" label="About Me" />
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: greenColor,
            fontWeight: 550,
          }}
        >
          {language === 'en' ? 'Work Experience' : 'Experiencia Laboral'}
        </Typography>
        <NavigationArrow direction="right" path="/" label="Quequeo" />
      </Box>

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
  );
}

export default WorkExperience;
