import React, { useContext } from 'react';
import { Box, Typography, Avatar, Link, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import quequeoContent from '../data/quequeoContent';
import { motion } from 'framer-motion';

function Quequeo() {
  const { language } = useContext(ThemeContext);
  const content = quequeoContent[language];

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h5" gutterBottom>
                {content.title}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="body1">{content.frontend}</Typography>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Typography variant="body1" mt={2}>
                {content.backend}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Typography variant="body1" mt={2}>
                {content.infrastructure}
              </Typography>
            </motion.div>

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
