import React, { useContext } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import quequeoContent from '../data/quequeoContent';

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
        marginTop: '10rem',
        gap: '6rem',
        position: 'relative',
      }}
    >
      <NavigationArrow direction="left" path="/" />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6rem',
        }}
      >
        <Avatar
          src="/stack/quequeo.png"
          alt="Quequeo website"
          sx={{
            width: 330,
            height: 330,
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
          }}
        />

        <Box
          sx={{
            maxWidth: '580px',
            textAlign: 'justify',
            lineHeight: '1',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {content.title}
          </Typography>
          <Typography variant="body1" component="p">
            {content.frontend}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            {content.backend}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            {content.infrastructure}
          </Typography>
        </Box>
      </Box>

      <NavigationArrow direction="right" path="/ring" />
    </Box>
  );
}

export default Quequeo;
