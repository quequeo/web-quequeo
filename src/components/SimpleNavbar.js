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
          { location.pathname === '/' ? (
                <Button
                onClick={() => navigate('/')}
                sx={{ color: greenColor, textTransform: 'none', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Quequeo
              </Button>
            ) : (
              <Button
              onClick={() => navigate('/')}
              sx={{ color: 'inherit', textTransform: 'none', fontWeight: 600, fontSize: '0.9rem' }}
            >
              Quequeo
            </Button>
            )
          }
          { location.pathname === '/me' ? (
            <Button
              onClick={() => navigate('/me')}
              sx={{ color: greenColor, textTransform: 'none', fontWeight: 600, fontSize: '0.9rem' }}
            >
              {language === 'en' ? 'About Me' : 'Sobre mí'}
            </Button>
            ) : (
              <Button
                onClick={() => navigate('/me')}
                sx={{ color: 'inherit', textTransform: 'none', fontWeight: 600, fontSize: '0.9rem' }}
              >
                {language === 'en' ? 'About Me' : 'Sobre mí'}
              </Button>
            )
          }
          { location.pathname === '/experience' ? (
            <Button
              onClick={() => navigate('/experience')}
              sx={{ color: greenColor, textTransform: 'none', fontWeight: 600, fontSize: '0.9rem' }}
            >
              {language === 'en' ? 'Experience' : 'Experiencia'}
            </Button>
            ) : (
              <Button
                onClick={() => navigate('/experience')}
                sx={{ color: 'inherit', textTransform: 'none', fontWeight: 600, fontSize: '0.9rem' }}
              >
                {language === 'en' ? 'Experience' : 'Experiencia'}
              </Button>
            )
          }
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
