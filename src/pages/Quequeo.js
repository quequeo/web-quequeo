import React, { useContext } from 'react';
import { Box, Typography, Avatar, Link, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
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
        marginTop: '1rem',
        gap: '2rem',
        position: 'relative',
      }}
    >
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
        <NavigationArrow direction="left" path="/experience" label="Experience" />
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
        <NavigationArrow direction="right" path="/me" label="About Me" />
      </Box>


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
          }}
        />
        <Box
          sx={{
            maxWidth: '580px',
            textAlign: 'justify',
            lineHeight: '1.4',
          }}
        >
          <Typography variant="h5" gutterBottom>
            {content.title}
          </Typography>
          <Typography variant="body1">{content.frontend}</Typography>
          <Typography variant="body1" mt={2}>
            {content.backend}
          </Typography>
          <Typography variant="body1" mt={2}>
            {content.infrastructure}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
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
          <Typography variant="body2">API (Rails 8)</Typography>
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
          <Typography variant="body2">Frontend (ReactJS)</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Quequeo;
