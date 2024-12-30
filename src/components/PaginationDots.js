import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PaginationDots({ currentIndex, paths }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 4,
        marginTop: '2px',
        marginBottom: '8px',
        paddingBottom: '0.5rem',
      }}
    >
      {paths.map((path, index) => (
        <Box
          key={index}
          onClick={() => navigate(path)}
          sx={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            marginX: 1,
            backgroundColor:
              index === currentIndex
                ? isDarkMode
                  ? theme.palette.success.main
                  : 'green'
                : isDarkMode
                ? 'white'
                : 'black',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        />
      ))}
    </Box>
  );
}

export default PaginationDots;
