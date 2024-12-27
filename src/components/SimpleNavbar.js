import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, Switch } from '@mui/material';
import { Brightness7, Bedtime } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';

function SimpleNavbar() {
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useContext(ThemeContext);

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top: 0,
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Dark Mode Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Brightness7
              fontSize="small"
              sx={{ color: darkMode ? '#fff' : '#000' }}
            />
            <Switch checked={darkMode} onChange={toggleDarkMode} size="small" />
            <Bedtime
              fontSize="small"
              sx={{ color: darkMode ? '#fff' : '#000' }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/arg-flag.webp"
              alt="Español"
              style={{ width: '20px', height: '20px' }}
            />
            <Switch checked={language === 'en'} onChange={toggleLanguage} size="small" />
            <img
              src="/usa-flag.webp"
              alt="English"
              style={{ width: '20px', height: '20px' }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleNavbar;
