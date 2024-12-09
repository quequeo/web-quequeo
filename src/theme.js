import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FF00', // Verde neón
    },
    secondary: {
      main: '#A020F0', // Púrpura neón
    },
    background: {
      default: '#121212', // Gris muy oscuro
      paper: '#1E1E1E', // Gris oscuro
    },
  },
  typography: {
    fontFamily: '"Press Start 2P", "Orbitron", sans-serif', // Fuentes arcade
    h1: {
      fontWeight: 'bold',
      color: '#00FF00', // Verde neón
      textShadow: '0 0 8px #00FF00',
    },
    body1: {
      color: '#E0E0E0', // Gris claro para texto normal
    },
  },
});

export default theme;
