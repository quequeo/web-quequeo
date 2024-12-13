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
        setError(false);  // Reset error state if successful
      })
      .catch((error) => {
        console.error('Error getting projects:', error);
        setError(true);  // Set error state if request fails
      });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: 2,
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: 4 }}>
        Projects
      </Typography>
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
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              background: '#fff',
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
