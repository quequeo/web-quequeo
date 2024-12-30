import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedText = ({ children, variant, sx, delay, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Typography variant={variant} sx={sx} {...props}>
        {children}
      </Typography>
    </motion.div>
  );
};

export default AnimatedText;
