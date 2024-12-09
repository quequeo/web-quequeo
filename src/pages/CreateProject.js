import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography, Avatar } from '@mui/material';
import API_URL from '../utils/api';

const CreateProject = () => {
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
    } catch (error) {
      console.error('Hubo un error al crear el proyecto:', error);
      alert('Hubo un error al crear el proyecto');
    }
  };
  
  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Crear Nuevo Proyecto
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">Logo del Proyecto</Typography>
          <input
            type="file"
            accept="image/*"
            {...register('logo', { required: 'El logo es obligatorio' })}
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

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Título del Proyecto"
            variant="outlined"
            fullWidth
            {...register('title', { required: 'El título es obligatorio' })}
          />
          {errors.title && <Typography color="error">{errors.title.message}</Typography>}
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Descripción del Proyecto"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            {...register('description', { required: 'La descripción es obligatoria' })}
          />
          {errors.description && <Typography color="error">{errors.description.message}</Typography>}
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">Imágenes del Proyecto</Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            {...register('images', { required: 'Debe seleccionar al menos una imagen' })}
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

        <Button type="submit" variant="contained" color="primary">
          Crear Proyecto
        </Button>
      </form>
    </Box>
  );
};

export default CreateProject;
