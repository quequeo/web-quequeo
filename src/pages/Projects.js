import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import ProjectDetails from '../components/ProjectDetails';
import API_URL from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/me/projects`)
      .then((response) => {
        setProjects(response.data);
        setError(false);
      })
      .catch((error) => {
        console.error('Error getting projects:', error);
        setError(true);
      });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: 6,
      }}
    >
      {error ? (
        <Typography variant="h6" color="error">Error loading projects.</Typography>
      ) : (
        projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '12px 12px 10px 12px',
              borderRadius: '8px',
              background: '#c5c2c2'
            }}
          >
            <ProjectDetails 
              project={project}
              onDelete={(id) => setProjects((prev) => prev.filter((p) => p.id !== id))}
            />
          </motion.div>
        ))
      )}
    </Box>
  );
};

export default Projects;
