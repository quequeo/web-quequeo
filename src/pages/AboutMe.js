import React, { useContext } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import aboutmeContent from '../data/aboutmeContent';
import Badges from '../components/Badges';

function AboutMe() {
  const { language } = useContext(ThemeContext);
  const content = aboutmeContent[language];

  const greenColor = '#48BB78';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem',
        marginTop: '1rem',
        gap: '1.7rem',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '800px',
          position: 'absolute',
          top: '2rem',
        }}
      >
        <NavigationArrow direction="left" path="/" label="Quequeo" />
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: greenColor,
            fontWeight: 550,
          }}
        >
          {content.page_title}
        </Typography>
        <NavigationArrow direction="right" path="/work_experience" label="Work Experience" />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
        }}
      >
        <Avatar
          src="/jaime_cartoon.png"
          alt="Jaime García Méndez"
          sx={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />

        <Box
          sx={{
            maxWidth: '580px',
            textAlign: 'justify',
            lineHeight: '1.4',
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            {content.title}
          </Typography>
          <Typography variant="body1">{content.about}</Typography>
          <Typography variant="body1" mt={2}>
            {content.experience}
          </Typography>
          <Typography variant="body1" mt={2}>
            {content.more}
          </Typography>
        </Box>
      </Box>
      
      <Badges />
    </Box>
  );
}

export default AboutMe;
