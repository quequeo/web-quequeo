import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function NavigationArrow({ direction, path, disabled = false, sx = {} }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled && path) {
      navigate(path);
    }
  };

  return (
    <IconButton
      sx={{
        position: 'absolute',
        [direction === 'left' ? 'left' : 'right']: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        ...sx,
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {direction === 'left' ? <ArrowBack fontSize="large" /> : <ArrowForward fontSize="large" />}
    </IconButton>
  );
}

export default NavigationArrow;
