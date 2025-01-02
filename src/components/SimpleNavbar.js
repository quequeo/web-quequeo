import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { Menu, Close, Brightness7, Bedtime, GitHub, LinkedIn } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

function SimpleNavbar() {
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const greenColor = '#48BB78';

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: language === 'en' ? 'Quequeo' : 'Inicio', path: '/' },
    { label: language === 'en' ? 'About Me' : 'Sobre mí', path: '/about_me' },
    { label: language === 'en' ? 'Work Experience' : 'Experiencia Laboral', path: '/work_experience' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? '#000' : '#f5f5f5',
        color: darkMode ? '#fff' : '#000',
        boxShadow: 'none',
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

        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar
              src="/logo.png"
              alt="Quequeo Logo"
              sx={{
                width: 30,
                height: 30,
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
              onClick={() => navigate('/')}
            />
            {menuItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => navigate(item.path)}
                sx={{
                  color: location.pathname === item.path ? greenColor : 'inherit',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile: Hamburger Menu */}
        {isMobile && (
          <>
            <IconButton onClick={toggleDrawer} sx={{ color: darkMode ? '#fff' : '#000' }}>
              <Menu />
            </IconButton>
            <Drawer
              anchor="bottom"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                sx: {
                  backgroundColor: darkMode ? '#000' : '#fff',
                  color: darkMode ? '#fff' : '#000',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: '1rem',
                }}
              >
                <IconButton onClick={toggleDrawer} sx={{ color: 'inherit' }}>
                  <Close />
                </IconButton>
              </Box>
              <List
  sx={{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {menuItems.map((item, index) => (
    <React.Fragment key={index}>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate(item.path);
            toggleDrawer();
          }}
          sx={{
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            width: '100%',
            color: location.pathname === item.path ? greenColor : 'inherit',
          }}
        >
          <ListItemText
            primary={item.label}
            sx={{
              fontSize: '2.5rem',
              fontWeight: 600,
              textAlign: 'center',
            }}
          />
        </ListItemButton>
      </ListItem>
      {index < menuItems.length - 1 && (
        <Divider
          sx={{
            width: '50%',
            alignSelf: 'center',
            backgroundColor: darkMode ? '#fff' : '#000',
          }}
        />
      )}
    </React.Fragment>
  ))}
</List>

              <Divider />
              {/* Icons in the bottom */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  padding: '1rem',
                }}
              >
                <IconButton
                  href="https://github.com/quequeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'inherit' }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/jaimefgarciamendez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'inherit' }}
                >
                  <LinkedIn fontSize="medium" />
                </IconButton>
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
            </Drawer>
          </>
        )}

        {/* Right side: Always visible */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginLeft: 'auto',
          }}
        >
          {!isMobile && (
            <>
              <IconButton
                href="https://github.com/quequeo"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit' }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/jaimefgarciamendez/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'inherit' }}
              >
                <LinkedIn fontSize="medium" />
              </IconButton>
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
            </>
          )}
          <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
            {darkMode ? <Brightness7 /> : <Bedtime />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleNavbar;
