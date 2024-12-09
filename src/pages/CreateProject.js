import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import API_URL from '../utils/api';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
  const navigate = useNavigate();
  const [logoPreview, setLogoPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleImagesChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map(file => URL.createObjectURL(file));
    setImagePreviews(fileArray);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('project[title]', data.title);
    formData.append('project[description]', data.description);

    if (data.logo[0]) formData.append('project[logo]', data.logo[0]);

    const imagesArray = Array.from(data.images);
    imagesArray.forEach(image => formData.append('project[images][]', image));

    try {
      await axios.post(`${API_URL}/me/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Proyecto creado con éxito');
      navigate('/projects');
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Error creando el proyecto');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: 3,
        maxWidth: 600,
        margin: 'auto',
        mt: 6,
        backgroundColor: '#fff',
        borderRadius: 2,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" sx={{ color: 'primary.main', textAlign: 'center' }}>
        Crear Nuevo Proyecto
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}
      >
        {/* Logo */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>Project Logo</Typography>
          <input
            type="file"
            accept="image/*"
            {...register('logo', { required: 'Logo is required' })}
            onChange={handleLogoChange}
          />
          {logoPreview && (
            <Avatar
              src={logoPreview}
              alt="Logo Preview"
              sx={{ width: 100, height: 100, marginTop: 2 }}
            />
          )}
          {errors.logo && <Typography color="error">{errors.logo.message}</Typography>}
        </Box>

        {/* Title */}
        <TextField
          label="Project Title"
          variant="outlined"
          fullWidth
          {...register('title', { required: 'Title is required' })}
          error={!!errors.title}
          helperText={errors.title && errors.title.message}
        />

        {/* Description */}
        <TextField
          label="Project Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description && errors.description.message}
        />

        {/* Images */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>Imágenes del Proyecto</Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            {...register('images', { required: 'Select at least one image' })}
            onChange={handleImagesChange}
          />
          <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
            {imagePreviews.map((preview, index) => (
              <Avatar
                key={index}
                src={preview}
                alt={`Image Preview ${index}`}
                sx={{ width: 60, height: 60 }}
              />
            ))}
          </Box>
          {errors.images && <Typography color="error">{errors.images.message}</Typography>}
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 'bold',
            '&:hover': { boxShadow: '0 0 15px rgba(0, 255, 0, 0.4)' },
          }}
        >
          Crear Proyecto
        </Button>
      </form>
    </Box>
  );
};

export default CreateProject;
