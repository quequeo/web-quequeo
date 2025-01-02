import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

function NotFound() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        gap: '2rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar
          src="/stack/quequeo.png"
          alt="404 Not Found"
          sx={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </motion.div>

      <Typography variant="h4" sx={{ color: '#48BB78', fontWeight: 'bold', fontSize: '2.5rem' }}>
        404 - Page Not Found
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.mode === 'dark' ? '#FFF' : '#555',
          maxWidth: '500px',
        }}
      >
        Oops! The page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="contained"
          color="primary"
          href="/"
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
        >
          Back to Home
        </Button>
      </motion.div>

    </Box>
  );
}

export default NotFound;
