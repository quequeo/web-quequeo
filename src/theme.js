import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', 
    },
    secondary: {
      main: '#F5A623',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#424242',
    },
    error: {
      main: '#D32F2F',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: '600',
      color: '#212121',
    },
    body1: {
      color: '#424242',
    },
  },
});

export default theme;
