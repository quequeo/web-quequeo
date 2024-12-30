import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Avatar, CircularProgress } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import { motion } from "framer-motion";
import AnimatedText from '../components/AnimatedText';
import { aboutmeContent } from '../utils/web_api';
import Badges from '../components/Badges';

function AboutMe() {
  const { language } = useContext(ThemeContext);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await aboutmeContent();
        setContent(data[language]);
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
        padding: '6rem',
        marginTop: '2rem',
        gap: '3rem',
        position: 'relative',
      }}
    >
      {/* Navigation and Title */}
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
        <NavigationArrow direction="left" path="/" label="Quequeo" />
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
          {content.page_title}
        </Typography>
        <NavigationArrow direction="right" path="/work_experience" label="Work Experience" />
      </Box>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
          }}
        >
          <Avatar
            src="/jaime_cartoon.png"
            alt="Jaime García Méndez"
            sx={{
              width: 300,
              height: 300,
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />

          <Box
            sx={{
              maxWidth: '580px',
              textAlign: 'justify',
              lineHeight: '1.4',
            }}
          >
            <AnimatedText variant="h5" gutterBottom delay={0.2}>
              {content.title}
            </AnimatedText>
            <AnimatedText variant="body1" delay={0.4}>
              {content.about}
            </AnimatedText>
            <AnimatedText variant="body1" mt={2} delay={0.6}>
              {content.experience}
            </AnimatedText>
            <AnimatedText variant="body1" mt={2} delay={0.8}>
              {content.more}
            </AnimatedText>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Badges />
      </motion.div>
    </Box>
  );
}

export default AboutMe;
