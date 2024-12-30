import React from 'react';
import { Box, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AnimatedText from './AnimatedText';

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
          src={content.logo}
          alt={content.company}
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
              content.logo === '/loopstudio.png' && isDarkMode
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
        
        <AnimatedText variant="body1" component="p" delay={0.2}>
          <strong>Company:</strong> {content.company}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={0.4}>
          <strong>Mode:</strong> {content.mode}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={0.6}>
          <strong>Client:</strong> {content.client || 'N/A'}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={0.8}>
          <strong>Role:</strong> {content.role}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={1.0}>
          <strong>Stack:</strong> {content.stack}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={1.2}>
          {content.start_date} - {content.end_date}
        </AnimatedText>

      </Box>
    </Box>
  );
}

export default WorkExperienceDetails;
