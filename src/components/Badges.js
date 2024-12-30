import React from 'react';
import { Box, Chip } from '@mui/material';
import badges from '../data/badgesContent';

function Badges() {

  const list_of_badges = badges;
  const greenColor = '#48BB78';

  return (
<Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1rem',
        }}
      >
        {[0, 9].map((startIndex) => (
          <Box
            key={startIndex}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {list_of_badges.slice(startIndex, startIndex + 9).map((badge) => (
              <Chip 
                key={badge} 
                label={badge} 
                variant="outlined" 
                sx={{
                  fontSize: '0.875rem',
                  padding: '0.25rem 0.5rem',
                  transition: 'color 0.3s, border-color 0.3s',
                  color: "#3182CE",
                  '&:hover': {
                    color: greenColor,
                    borderColor: greenColor,
                  },
                }} 
              />
            ))}
          </Box>
        ))}
      </Box>
  )
}

export default Badges;