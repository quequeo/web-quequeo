import React from 'react';
import { Box, Chip } from '@mui/material';

function Badges() {
  const badges = [
    'Ruby',
    'Ruby on Rails',
    'JavaScript',
    'React JS',
    'Heroku',
    'Docker',
    'AWS',
    'Redis',
    'Sidekiq',
    'Git',
    'Jira',
    'RESTful API',
    'Postgres',
    'SQL',
    'RSpec',
    'Stripe',
    'Cache',
    'React Native',
    'Typescript'
  ];

  const greenColor = '#48BB78';

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(auto-fit, minmax(150px, 1fr))' },
        gap: '0.8rem', // Espaciado entre badges
        marginTop: '1rem',
        justifyContent: 'center',
        width: '100%', // Asegura que ocupe todo el ancho disponible
        maxWidth: '1200px', // Limita el ancho máximo en desktop
      }}
    >
      {badges.map((badge) => (
        <Chip
          key={badge}
          label={badge}
          variant="outlined"
          sx={{
            fontSize: '0.85rem',
            padding: '0.25rem 0.5rem',
            transition: 'color 0.3s, border-color 0.3s',
            color: '#3182CE',
            '&:hover': {
              color: greenColor,
              borderColor: greenColor,
            },
          }}
        />
      ))}
    </Box>
  );
}

export default Badges;
