import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Box, Switch, IconButton, Menu, MenuItem } from '@mui/material';
import { Brightness7, Bedtime, Menu as MenuIcon } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';

function SimpleNavbar() {
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useContext(ThemeContext);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top: 0,
        zIndex: 1,
        height: '3rem', // Ajusta la altura del navbar
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Espaciado entre los elementos
          alignItems: 'center',
          height: '100%', // Ocupa toda la altura del AppBar
          paddingX: '1rem',
        }}
      >
        {/* Switches */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Brightness7 fontSize="small" sx={{ color: darkMode ? '#fff' : '#000' }} />
            <Switch checked={darkMode} onChange={toggleDarkMode} size="small" />
            <Bedtime fontSize="small" sx={{ color: darkMode ? '#fff' : '#000' }} />
          </Box>

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

        {/* Menu Hamburger */}
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleNavbar;
