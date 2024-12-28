import React, { useContext } from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import API_URL from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectDetails.css";
import { AuthContext } from './AuthContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetailsOld = ({ project, onDelete }) => {
  const { user } = useContext(AuthContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the project: ${project.title}?`)) {
      axios
        .delete(`${API_URL}/me/projects/${project.id}`)
        .then(() => {
          onDelete(project.id);
        })
        .catch((error) => {
          console.error("Error deleting project:", error);
        });
    }
  };

  const handleEdit = () => {
    navigate(`/edit-project/${project.id}`);
  };

  return (
    <div className="project-details">
      <div className="project-header">
        <div className="header-left">
          <img src={project.logo_url} alt={`${project.title} logo`} className="project-logo" />
          <h2>{project.title}</h2>
        </div>
        {user && (
          <div className="header-right">
            <IconButton onClick={handleEdit} aria-label="edit" color="secondary" className="edit-button">
              <EditIcon fontSize="large" style={{ color: '#333' }} />
            </IconButton>
            <IconButton onClick={handleDelete} aria-label="delete" color="secondary" className="delete-button">
              <DeleteSweepOutlinedIcon fontSize="large" style={{ color: '#333' }} />
            </IconButton>
          </div>
        )}
      </div>

      <div className="project-description">
        <p>{project.description}</p>
      </div>

      {project.images && project.images.length > 0 && (
        <Slider {...settings} className="project-slider">
          {project.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Project ${project.title} - ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProjectDetailsOld;
