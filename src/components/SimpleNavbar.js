import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, Button, Switch } from '@mui/material';
import { Brightness7, Bedtime } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

function SimpleNavbar() {
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? '#000' : '#f5f5f5',
        color: darkMode ? '#fff' : '#000',
        boxShadow: 'none',
        paddingX: '1rem',
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

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Button
            onClick={() => navigate('/')}
            sx={{ color: 'inherit', textTransform: 'none' }}
          >
            Quequeo
          </Button>
          <Button
            onClick={() => navigate('/me')}
            sx={{ color: 'inherit', textTransform: 'none' }}
          >
            About Me
          </Button>
          <Button
            onClick={() => navigate('/experience')}
            sx={{ color: 'inherit', textTransform: 'none' }}
          >
            Experience
          </Button>
          <Button
            href="https://github.com/quequeo"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'inherit', textTransform: 'none' }}
          >
            GitHub
          </Button>
        </Box>

        {/* Toggles */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Dark Mode Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Brightness7 fontSize="small" sx={{ color: darkMode ? '#fff' : '#000' }} />
            <Switch checked={darkMode} onChange={toggleDarkMode} size="small" />
            <Bedtime fontSize="small" sx={{ color: darkMode ? '#fff' : '#000' }} />
          </Box>

          {/* Language Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/argentina-flag.png"
              alt="Español"
              style={{ width: '20px', height: '14px' }}
            />
            <Switch checked={language === 'en'} onChange={toggleLanguage} size="small" />
            <img
              src="/us-flag.png"
              alt="English"
              style={{ width: '20px', height: '14px' }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleNavbar;
