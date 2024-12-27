import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography, Avatar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import API_URL from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let projectId = id;
  const [logoPreview, setLogoPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    axios
      .get(`${API_URL}/me/projects/${projectId}`)
      .then((response) => {
        const project = response.data;
  
        setValue("title", project.title);
        setValue("description", project.description);
        setLogoPreview(project.logo_url);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        alert("Error loading project data");
      });
  }, [projectId, setValue]);

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

      if (data.logo && data.logo[0]) {
        formData.append("project[logo]", data.logo[0]);
      }

      await axios.put(`${API_URL}/me/projects/${projectId}`, formData, { 
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      navigate("/projects");
    } catch (error) {
      console.error("Error editing project:", error);
      alert("Error editing project");
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
        position: 'relative'
      }}
    >
      <IconButton 
        onClick={() => navigate(-1)}
        sx={{
          position: 'absolute',
          top: 24,
          right: 16,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        }}
      >
        <Close sx={{ color: 'black' }} />
      </IconButton>

      <Typography variant="h4" sx={{ color: "primary.main", textAlign: "center" }}>
        Edit Project
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
            {...register("logo")}
            onChange={handleLogoChange}
          />
          {logoPreview && (
            <Avatar
              src={logoPreview}
              alt="Logo Preview"
              sx={{ width: 100, height: 100, marginTop: 2 }}
            />
          )}
        </Box>

        <TextField
          variant="outlined"
          fullWidth
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
          helperText={errors.title && errors.title.message}
        />

        <TextField
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
          {uploading ? "Uploading..." : "Update Project"}
        </Button>
      </form>
    </Box>
  );
};

export default EditProject;
