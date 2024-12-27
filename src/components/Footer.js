import React from 'react';
import { Box, Typography } from '@mui/material';
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#333', 
        color: '#fff', 
        padding: '1rem', 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        textAlign: 'center' 
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