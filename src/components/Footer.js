import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import SocialMedia from './SocialMedia';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box 
      sx={{ 
        backgroundColor: darkMode ? '#333' : '#f5f5f5', 
        color: darkMode ? '#fff' : '#000', 
        padding: '1rem', 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        textAlign: 'center',
        borderTop: `1px solid ${darkMode ? '#444' : '#ddd'}`,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <SocialMedia />
      </Box>
      <Typography variant="body2">
        Quequeo © - Hosted with AWS Amplify
      </Typography>
    </Box>
  );
}

export default Footer;
