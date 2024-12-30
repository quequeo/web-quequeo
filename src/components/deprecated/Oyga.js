import React, { useContext } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';
import NavigationArrow from '../NavigationArrow';
import oygaContent from '../../data/oygaContent';

function Oyga() {
  const { language } = useContext(ThemeContext);
  const content = oygaContent[language];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem',
        marginTop: '10rem',
        gap: '6rem',
        position: 'relative',
      }}
    >
      <NavigationArrow direction="left" path="/loop" />

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
          src={content.work_experience.logo}
          alt={content.work_experience.company}
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
            {content.title}
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Company:</strong> {content.work_experience.company}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            <strong>Client:</strong> {content.work_experience.client || 'N/A'}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            <strong>Role:</strong> {content.work_experience.description}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            <strong>Stack:</strong> {content.work_experience.stack}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            {content.work_experience.start_date} - {content.work_experience.end_date}
          </Typography>
        </Box>
      </Box>

      <NavigationArrow direction="right" path="/" />
    </Box>
  );
}

export default Oyga;