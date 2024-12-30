import React, { useContext } from 'react';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
import experiencesData from '../../data/experiencesData';
import NavigationArrow from '../NavigationArrow';
import { ThemeContext } from '../context/ThemeContext';

function Experiences() {
  const { language } = useContext(ThemeContext);
  const { title, work_experiences } = experiencesData[language];

  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '6rem',
          position: 'relative'
        }}
      >
      
      <NavigationArrow direction="left" path="/" />

      <Typography variant="h4" component="h1" gutterBottom
        sx={{
          paddingBottom: '1rem',
          left: '50%'
        }}  
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%',
          maxWidth: '800px',
        }}
      >
       {work_experiences.map((experience, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              padding: '1.5rem',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Avatar
              src={experience.logo}
              alt={experience.company}
              sx={{ width: 125, height: 125, marginRight: { md: '1.5rem', xs: '0' }, marginBottom: { xs: '1rem', md: '0' } }}
            />

            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'justify',
              }}
            >
              <Typography variant="h5" component="h2">
                {experience.company}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                Client: {experience.client || 'N/A'}
              </Typography>

              <Typography variant="body1" mt={1}>
                Role: {experience.role || experience.description}
              </Typography>

              <Typography variant="body2" color="textSecondary" mt={1}>
                {experience.start_date} - {experience.end_date}
              </Typography>

              <Typography variant="body2" mt={2}>
                Stack: {experience.stack}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <NavigationArrow direction="right" path="/quequeo" />
      </Box>
    </Box>
  );
}

export default Experiences;