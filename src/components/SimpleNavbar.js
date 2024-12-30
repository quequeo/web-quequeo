import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { Brightness7, Bedtime, GitHub, LinkedIn } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

function SimpleNavbar() {
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const greenColor = '#48BB78';
  
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? '#000' : '#f5f5f5',
        color: darkMode ? '#fff' : '#000',
        boxShadow: 'none',
        paddingX: '0rem',
        height: '4rem',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Left side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Navigation Links */}
          <Button
            onClick={() => navigate('/')}
            disableRipple
            sx={{
              color: location.pathname === '/' ? greenColor : 'inherit',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'transparent',
              },
              '&:focus': {
                backgroundColor: 'transparent',
              },
            }}
          >
            Quequeo
          </Button>

          <Button
            onClick={() => navigate('/about_me')}
            sx={{
              color: location.pathname === '/about_me' ? greenColor : 'inherit',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              },
            }}
          >
            {language === 'en' ? 'About Me' : 'Sobre mí'}
          </Button>

          <Button
            onClick={() => navigate('/work_experience')}
            sx={{
              color: location.pathname === '/work_experience' ? greenColor : 'inherit',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'transform 0.3s ease, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              },
            }}
          >
            {language === 'en' ? 'Work Experience' : 'Experiencia Laboral'}
          </Button>
        </Box>


        {/* Right side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* GitHub Icon */}
          <IconButton color="primary"
            href="https://github.com/quequeo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
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

          {/* Dark Mode Toggle */}
          <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
            {darkMode ? <Brightness7 /> : <Bedtime />}
          </IconButton>

          {/* Language Toggle */}
          <IconButton onClick={toggleLanguage} sx={{ color: 'inherit' }}>
            {language === 'en' ? (
              <img
                src="/argentina-flag.png"
                alt="Español"
                style={{ width: '20px', height: '16px' }}
              />
            ) : (
              <img
                src="/us-flag.png"
                alt="English"
                style={{ width: '20px', height: '30px' }}
              />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleNavbar;
