import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';
import NavigationArrow from '../components/NavigationArrow';
import ExperienceDetails from '../components/WorkExperienceDetails';
import ringContent from '../data/ringContent';
import oygaContent from '../data/oygaContent';
import loopContent from '../data/loopContent';
import enrondaContent from '../data/enrondaContent';

function Experience() {
  const { language } = useContext(ThemeContext);
  const greenColor = '#48BB78';

  const experiences = [
    { content: ringContent[language], key: 'ring' },
    { content: loopContent[language], key: 'loop' },
    { content: oygaContent[language], key: 'oyga' },
    { content: enrondaContent[language], key: 'enronda' }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem',
        marginTop: '2rem',
        gap: '3rem',
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
        <NavigationArrow direction="left" path="/about_me" label="About Me" />
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
          {language === 'en' ? 'Work Experience' : 'Experiencia Laboral'}
        </Typography>
        <NavigationArrow direction="right" path="/" label="Quequeo" />
      </Box>


      {experiences.map(({ content, key }) => (
        <ExperienceDetails key={key} content={content} />
      ))}
    </Box>
  );
}

export default Experience;
