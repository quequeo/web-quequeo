import React from 'react';
import { Box, Typography } from '@mui/material';

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
      <Typography variant="body2">
        © 2024 Quequeo. Deployed with AWS Amplify
      </Typography>
    </Box>
  );
}

export default Footer;