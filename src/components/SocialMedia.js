import React, { useContext } from 'react';
import { GitHub, LinkedIn, Instagram, WhatsApp } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';

function SocialMedia() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <IconButton
        component="a"
        href="https://github.com/quequeo"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: darkMode ? '#fff' : '#000' }}
      >
        <GitHub fontSize="medium" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/jaimefgarciamendez/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: darkMode ? '#fff' : '#000' }}
      >
        <LinkedIn fontSize="medium" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.instagram.com/jaimegarciamendez/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: darkMode ? '#fff' : '#000' }}
      >
        <Instagram fontSize="medium" />
      </IconButton>
      <IconButton
        component="a"
        href="https://wa.me/541162688950"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: darkMode ? '#fff' : '#000' }}
      >
        <WhatsApp fontSize="medium" />
      </IconButton>
    </Box>
  );
}

export default SocialMedia;
