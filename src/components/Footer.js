import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import PaginationDots from '../components/PaginationDots';
import { ThemeContext } from '../context/ThemeContext';
import { useLocation } from 'react-router-dom';

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();

  const paths = ['/', '/me', '/experience'];
  const currentIndex = paths.indexOf(location.pathname);

  return (
    <Box 
      sx={{ 
        backgroundColor: darkMode ? '#1a202c' : '#f5f5f5',
        color: darkMode ? '#e2e8f0' : '#2d3748',
        padding: '1rem',
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        textAlign: 'center',
        borderTop: `2px solid ${darkMode ? '#4a5568' : '#e2e8f0'}`,
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <PaginationDots
        currentIndex={currentIndex}
        paths={paths}
      />
      <Typography variant="body2" sx={{ fontSize: '0.9rem', mt: 1 }}>
        Quequeo © - Hosted with AWS Amplify
      </Typography>
    </Box>
  );
}

export default Footer;
