import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

export const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: 'Nova Mono, monospace',
          fontSize: 13.5,
        },
      }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, language, toggleLanguage }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
