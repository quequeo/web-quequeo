import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#1E1E1E',
        borderBottom: '3px solid #00FF00',
        boxShadow: '0 0 10px #00FF00',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={linkStyle}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/projects" sx={linkStyle}>
            Projects
          </Button>
        </Box>
        <Box>
          {isAuthenticated ? (
            <>
              <Button color="inherit" sx={linkStyle}>
                {user.email}
              </Button>
              <Button
                color="inherit"
                onClick={logout}
                sx={{ ...linkStyle, color: '#FF0000' }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" sx={linkStyle}>
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register" sx={linkStyle}>
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const linkStyle = {
  fontWeight: 'bold',
  textShadow: '0 0 8px #00FF00',
  '&:hover': {
    color: '#A020F0',
  },
};

export default Navbar;
