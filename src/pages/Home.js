import React, { useState } from 'react';
import { Box, Typography, Avatar, IconButton, Switch } from '@mui/material';
import { GitHub, LinkedIn, Instagram, WhatsApp } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import BedtimeIcon from '@mui/icons-material/Bedtime';

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'Nova Mono, monospace',
      fontSize: 13.5,
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const textContent = {
    es: {
      welcome: 'Sobre mí',
      about: 'Soy un ingeniero de software con 7 años de experiencia, especializado en Ruby y Ruby on Rails, pero también con conocimientos de React, Heroku, Docker y AWS.',
      experience: 'Mi trabajo diario incluye el uso de herramientas como Sidekiq, Redis, AWS, Bugsnag, Git, Jira, Docker, RESTful APIs, Postgres, SQL, RSpec, Stripe, Dalli, Elastic Cache y Redlock. Me dedico principalmente a resolver problemas y realizar troubleshooting. Nunca dejo de aprender y actualmente estoy explorando React Native para un proyecto personal',
      more: 'Fuera del trabajo, tengo una familia increíble con dos hijos, y disfruto jugar al fútbol, al pádel y entrenar.'
    },
    en: {
      welcome: 'About me',
      about: 'I am a software engineer with 7 years of experience, specialized in Ruby and Ruby on Rails, but also skilled in JavaScript, React JS, Heroku, Docker, and AWS.',
      experience: 'My daily work includes using tools like Sidekiq, Redis, AWS (Athena, EC2, SNS, SQS), Bugsnag, Git, Jira, Docker, RESTful APIs, Postgres, RSpec, Stripe, Dalli, Elastic Cache, and Redlock. I primarily focus on solving problems and troubleshooting. I never stop learning; currently and I am exploring React Native for a personal project.',
      more: 'Outside of work, I have an amazing family with two children, and I enjoy playing football, paddle, and training.'
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem',
          gap: '6rem',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Brightness7Icon fontSize="small" />
            <Switch checked={darkMode} onChange={toggleDarkMode} size="small" />
            <BedtimeIcon fontSize="small" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/argentina-flag.png"
              alt="Español"
              style={{ width: '18px', height: '12px' }}
            />
            <Switch checked={language === 'en'} onChange={toggleLanguage} size="small" />
            <img
              src="/us-flag.png"
              alt="English"
              style={{ width: '20px', height: '24px' }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6rem',
          }}
        >
          <Avatar
            src="/jaime_cartoon.png"
            alt="Jaime García Méndez"
            sx={{
              width: 330,
              height: 330,
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          />

          <Box
            sx={{
              maxWidth: '580px',
              textAlign: 'justify',
              lineHeight: '1',
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              {textContent[language].welcome}
            </Typography>
            <Typography variant="body1" component="p">
              {textContent[language].about}
            </Typography>
            <Typography variant="body1" component="p" mt={2}>
              {textContent[language].experience}
            </Typography>
            <Typography variant="body1" component="p" mt={2}>
              {textContent[language].more}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 6 }}>
          <IconButton component="a" href="https://github.com/quequeo" target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/jaimefgarciamendez/" target="_blank" rel="noopener noreferrer">
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://www.instagram.com/jaimegarciamendez/" target="_blank" rel="noopener noreferrer">
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://wa.me/541162688950" target="_blank" rel="noopener noreferrer">
            <WhatsApp fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
