import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography, Avatar } from "@mui/material";
import API_URL from "../utils/api";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const [logoPreview, setLogoPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
  
    try {
      setUploading(true);
  
      formData.append("project[title]", data.title);
      formData.append("project[description]", data.description);

      if (data.logo[0]) {
        formData.append("project[logo]", data.logo[0]);
      }
  
      await axios.post(`${API_URL}/me/projects`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
 
      navigate("/projects");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Error creating project");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 3,
        maxWidth: 600,
        margin: "auto",
        mt: 6,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ color: "primary.main", textAlign: "center" }}>
        Crear Nuevo Proyecto
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", width: "100%", gap: "16px" }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>Project Logo</Typography>
          <input
            type="file"
            accept="image/*"
            {...register("logo", { required: "Logo is required" })}
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

        <TextField
          label="Project Title"
          variant="outlined"
          fullWidth
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
          helperText={errors.title && errors.title.message}
        />

        <TextField
          label="Project Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          {...register("description", { required: "Description is required" })}
          error={!!errors.description}
          helperText={errors.description && errors.description.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={uploading}
        >
          {uploading ? "Subiendo..." : "Crear Proyecto"}
        </Button>
      </form>
    </Box>
  );
};

export default CreateProject;