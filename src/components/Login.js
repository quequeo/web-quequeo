import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { loginUser } from "../utils/api";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      localStorage.setItem('token', response.token);
      alert(`Bienvenido de nuevo, ${response.user.email}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: 4,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0 4px 15px rgba(0, 255, 0, 0.4)',
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        mt: 6,
      }}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" sx={{ color: 'primary.main', textAlign: 'center' }}>
        Iniciar Sesión
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}
      >
        <TextField
          label="Correo Electrónico"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{ style: { color: '#00FF00' } }}
        />
        <TextField
          label="Contraseña"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
          fullWidth
          InputLabelProps={{ style: { color: '#00FF00' } }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 'bold',
            '&:hover': {
              boxShadow: '0 0 15px #00FF00',
            },
          }}
        >
          Iniciar Sesión
        </Button>
      </form>
    </Box>
  );
};

export default Login;
