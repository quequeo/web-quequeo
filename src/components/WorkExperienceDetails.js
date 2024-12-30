import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

function WorkExperienceDetails({ content }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem',
        marginLeft: '6rem',
        width: '100%',
        maxWidth: '850px',
      }}
    >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: '0 0 200px',
            width: '200px',
          }}
        >
        <Avatar
          src={content.work_experience.logo}
          alt={content.work_experience.company}
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
            backgroundColor:
              content.work_experience.logo === '/loopstudio.png' && isDarkMode
                ? '#4a4a4a'
                : 'transparent',
          }}
        />

      </Box>

      <Box
        sx={{
          flex: '1',
          textAlign: 'justify',
          lineHeight: '1.2',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant="body1" component="p">
            <strong>Company:</strong> {content.work_experience.company}
          </Typography>
          <Typography variant="body1" component="p" mt={1}>
            <strong>Mode:</strong> {content.work_experience.mode}
          </Typography>
          <Typography variant="body1" component="p" mt={1}>
            <strong>Client:</strong> {content.work_experience.client || 'N/A'}
          </Typography>
          <Typography variant="body1" component="p" mt={1}>
            <strong>Role:</strong> {content.work_experience.role}
          </Typography>
          <Typography variant="body1" component="p" mt={1}>
            <strong>Stack:</strong> {content.work_experience.stack}
          </Typography>
          <Typography variant="body1" component="p" mt={1}>
            {content.work_experience.start_date} - {content.work_experience.end_date}
          </Typography>
        </motion.div>

      </Box>
    </Box>
  );
}

export default WorkExperienceDetails;
