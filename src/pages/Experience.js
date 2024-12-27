import React from 'react';
import { Box, Typography } from '@mui/material';

function Experience() {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Mi Experiencia</Typography>
      <Typography variant="body1" paragraph>
        Esta web está diseñada con React, desplegada en AWS Amplify, y consume datos de una API en Rails 8 (api.quequeo.com). La API usa RSpec para pruebas y se despliega en AWS EC2 mediante GitHub Actions.
      </Typography>
    </Box>
  );
}

export default Experience;