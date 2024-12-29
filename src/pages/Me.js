import React, { useContext } from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import PaginationDots from '../components/PaginationDots';
import meContent from '../data/meContent';

function Me() {
  const { language } = useContext(ThemeContext);
  const content = meContent[language];

  const badges = [
    'Ruby', 
    'Ruby on Rails', 
    'JavaScript', 
    'React JS', 
    'Heroku', 
    'Docker', 
    'AWS', 
    'Redis', 
    'Sidekiq', 
    'Git', 
    'Jira', 
    'RESTful API', 
    'Postgres', 
    'SQL', 
    'RSpec', 
    'Stripe', 
    'Cache', 
    'React Native',
  ];

  const greenColor = '#48BB78'; // Chakra UI green.400

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem',
        marginTop: '6rem',
        gap: '2rem',
        position: 'relative',
      }}
    >
      {/* Navigation and title */}
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
            color: greenColor, // Título en verde
          }}
        >
          About Me
        </Typography>
        <NavigationArrow direction="right" path="/experience" label="Experience" />
      </Box>

      {/* Main content */}
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
          }}
        />

        <Box
          sx={{
            maxWidth: '580px',
            textAlign: 'justify',
            lineHeight: '1.4',
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            {content.title}
          </Typography>
          <Typography variant="body1">{content.about}</Typography>
          <Typography variant="body1" mt={2}>
            {content.experience}
          </Typography>
          <Typography variant="body1" mt={2}>
            {content.more}
          </Typography>
        </Box>
      </Box>

      {/* Badges Section */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1rem',
        }}
      >
        {badges.map((badge) => (
          <Chip 
            key={badge} 
            label={badge} 
            variant="outlined" 
            sx={{
              fontSize: '0.875rem',
              padding: '0.25rem 0.5rem',
              transition: 'color 0.3s, border-color 0.3s',
              '&:hover': {
                color: greenColor,
                borderColor: greenColor,
              },
            }} 
          />
        ))}
      </Box>

      <PaginationDots currentIndex={1} paths={['/', '/me', '/experience']} />
    </Box>
  );
}

export default Me;
