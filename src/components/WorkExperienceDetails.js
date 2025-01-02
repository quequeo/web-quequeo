import React, { useContext } from 'react';
import { Box, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AnimatedText from './AnimatedText';
import { translations } from '../utils/translations';
import { ThemeContext } from '../context/ThemeContext';

function WorkExperienceDetails({ content }) {
  const theme = useTheme();
  const { language } = useContext(ThemeContext);
  const isDarkMode = theme.palette.mode === 'dark';
  const t = translations[language] || translations.en;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        width: '100%',
        maxWidth: '850px',
        marginTop: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flex: '0 0 200px',
          width: '500px',
        }}
      >
        <Avatar
          src={content.logo}
          alt={content.company}
          sx={{
            width: 150,
            height: 150,
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
          lineHeight: '1',
          fontSize: { xs: '0.7rem', md: '0.9rem' }
        }}
      >
        <AnimatedText variant="body1" component="p" delay={0.2} sx={{ fontSize: 'inherit', lineHeight: 'inherit'  }}>
          <strong>{t.company}:</strong> {content.company}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={0.4} sx={{ fontSize: 'inherit', lineHeight: 'inherit'  }}>
          <strong>{t.mode}:</strong> {content.mode}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={0.6} sx={{ fontSize: 'inherit', lineHeight: 'inherit'  }}>
          <strong>{t.client}:</strong> {content.client || 'N/A'}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={0.8} sx={{ fontSize: 'inherit', lineHeight: 'inherit'  }}>
          <strong>{t.role}:</strong> {content.role}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={1.0} sx={{ fontSize: 'inherit', lineHeight: 'inherit'  }}>
          <strong>{t.stack}:</strong> {content.stack}
        </AnimatedText>
        <AnimatedText variant="body1" component="p" mt={1} delay={1.2} sx={{ fontSize: 'inherit', lineHeight: 'inherit'  }}>
          <strong>{t.dates}:</strong> {content.start_date} - {content.end_date}
        </AnimatedText>
      </Box>
    </Box>
  );
}

export default WorkExperienceDetails;
