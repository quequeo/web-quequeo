import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Avatar, Link, IconButton, CircularProgress } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import { motion } from "framer-motion";
import AnimatedText from '../components/AnimatedText';
import { quequeoContent } from '../utils/web_api';

function Quequeo() {
  const { language } = useContext(ThemeContext);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await quequeoContent();
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
        <NavigationArrow direction="left" path="/work_experience" label="Work Experience" />
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#48BB78',
            fontWeight: 550,
          }}
        >
          {content.page_title}
        </Typography>
        <NavigationArrow direction="right" path="/about_me" label="About Me" />
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
            src="/stack/quequeo.png"
            alt="Quequeo website"
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
              {content.frontend}
            </AnimatedText>
            <AnimatedText variant="body1" mt={2} delay={0.6}>
              {content.backend}
            </AnimatedText>
            <AnimatedText variant="body1" mt={2} delay={0.8}>
              {content.infrastructure}
            </AnimatedText>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4.5rem',
            marginTop: '-0.5rem',
          }}
        >
          <Link
            href="https://github.com/quequeo/api-quequeo/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <IconButton color="primary">
              <GitHub />
            </IconButton>
            <Typography variant="body3">API (Rails 8)</Typography>
          </Link>
          <Link
            href="https://github.com/quequeo/web-quequeo/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <IconButton color="primary">
              <GitHub />
            </IconButton>
            <Typography variant="body3">Frontend (ReactJS)</Typography>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Quequeo;
