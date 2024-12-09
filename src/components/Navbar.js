import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#1E1E1E',
        borderBottom: '1px solid #424242',
        boxShadow: '0 0 10px #424242',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Button color="inherit" component={Link} to="/projects" sx={linkStyle}>Projects</Button>
          { user && isAuthenticated && <Button color="inherit" component={Link} to="/create-project" sx={linkStyle}>Create Project</Button> }
        </Box>
        <Box>
          {isAuthenticated ? (
            <>
              <Button color="inherit" sx={linkStyle}>{user.email}</Button>
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ ...linkStyle, color: '#FF0000' }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" sx={linkStyle}>Login</Button>
              {/* <Button color="inherit" component={Link} to="/register" sx={linkStyle}>Register</Button> */}
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const linkStyle = {
  fontWeight: 'bold',
  '&:hover': { color: '#A020F0' },
};

export default Navbar;
