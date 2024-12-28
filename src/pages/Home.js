import React, { useContext } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import homeContent from '../data/homeContent';

function Home() {
  const { language } = useContext(ThemeContext);
  const content = homeContent[language];

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
      {/* Flecha izquierda deshabilitada */}
      <NavigationArrow direction="left" path="/oyga" />

      {/* Contenido principal */}
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
          src="/jaime_cartoon.png"
          alt="Jaime García Méndez"
          sx={{
            width: 330,
            height: 330,
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
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
            {content.about}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            {content.experience}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            {content.more}
          </Typography>
        </Box>
      </Box>

      {/* Flecha derecha al primer id de experiences */}
      <NavigationArrow direction="right" path="/quequeo" />
    </Box>
  );
}

export default Home;
