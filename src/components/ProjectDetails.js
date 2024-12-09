import React from "react";
import Slider from "react-slick";

// Asegúrate de importar los estilos de slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = ({ project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project-details">
      <div className="project-header">
        {/* Logo */}
        <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />
        <h2>{project.title}</h2>
      </div>
      <p>{project.description}</p>

      {/* Carrusel de imágenes */}
      {project.images && project.images.length > 0 && (
        <Slider {...settings}>
          {project.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Proyecto ${project.title} - Imagen ${index + 1}`} className="project-image" />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProjectDetails;
