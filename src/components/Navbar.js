import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Avatar, Menu, MenuItem } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Edit } from '@mui/icons-material';
import axios from 'axios';
import API_URL from "../utils/api";
import { CircularProgress } from '@mui/material';

function Navbar() {
  const { isAuthenticated, user, logout, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAvatarUpload = async (file) => {
    const formData = new FormData();
    formData.append('avatar', file);

    setIsUploading(true);

    try {
      const response = await axios.patch(`${API_URL}/me/users/${user.id}/avatar`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUser({ ...user, avatar_url: response.data.avatar_url });
    } catch (error) {
      console.error('Error updating avatar:', error);
      alert('Failed to update avatar.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteAvatar = async () => {
    try {
      await axios.patch(`${API_URL}/me/users/${user.id}/avatar`, { avatar: null });
      setUser({ ...user, avatar_url: null });
    } catch (error) {
      console.error('Error deleting avatar:', error);
      alert('Failed to delete avatar.');
    }
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length) {
      handleAvatarUpload(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop,
  });

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
          <Button color="inherit" component={Link} to="/projects" sx={linkStyle}>
            Projects
          </Button>
          {user && isAuthenticated && (
            <Button color="inherit" component={Link} to="/create-project" sx={linkStyle}>
              Create Project
            </Button>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isAuthenticated ? (
            <>
              <Box sx={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }} {...getRootProps()}>
                { isUploading ? (
                  <CircularProgress size={24} sx={{ position: 'absolute', top: 0, left: 0, margin: '1rem' }} />
                ) : (
                <Avatar
                  src={user.avatar_url || undefined}
                  alt={user.email}
                  sx={{ width: 40, height: 40 }}
                />
                )}
                { !isUploading && (
                  <Edit
                    sx={{
                      position: 'absolute',
                      bottom: -2,
                      right: -2,
                      backgroundColor: 'lightgray',
                      borderRadius: '50%',
                      padding: '2px',
                      fontSize: 10,
                      color: '#1E1E1E',
                      boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                    }}
                  />
                )}
                <input {...getInputProps()} />
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => document.querySelector('input[type="file"]').click()}>
                  Upload New Avatar
                </MenuItem>
                <MenuItem onClick={handleDeleteAvatar}>Remove Avatar</MenuItem>
              </Menu>
              <Button color="inherit" sx={linkStyle}>
                {user.email}
              </Button>
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
              <Button color="inherit" component={Link} to="/login" sx={linkStyle}>
                Login
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
  '&:hover': { color: '#A020F0' },
};

export default Navbar;
