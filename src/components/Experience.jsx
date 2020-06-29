import React from "react";

const Experience = () => {
  const experiences = [
    {
      time: "2019 - Actualidad",
      title: "Transformación digital en una ASADA",
      description: `El objetivo del proyecto es agilizar los procesos
      administrativos de la ASADA mediante el desarrollo de una
      plataforma web que facilite la gestión y organización en la
      asociación.
      Encargado tanto del frontend como del backend.`,
      image: "./assets/images/asadasop.png",
    },
    {
      time: "2018 - Actualidad",
      title: "Co-Founder & Chief Technology Officer @ Torneos.GG",
      description: `Como CTO de Torneos.GG me encargo del área de tecnología, esto
      quiere decir que debo estar pendiente a las nuevas tendencias
      para así aplicarlo a la empresa. Mi objetivo es ayudar a mi
      equipo de trabajo en todo lo que pueda y también estoy a cargo
      de la creación de nuevos torneos para la plataforma.
      También soy el encargado del frontend de la plataforma.`,
      image: "./assets/images/tgg.png",
    },
  ];
  return (
    <section className="experience-section">
      <div className="container">
        <h1 className="section-skills-title">Experiencias</h1>
        <div className="row align-items-center">
          {experiences.map((experience) => (
            <>
              <div className="col-md-8">
                <span className="timelime-date float-left">
                  {experience.time}
                </span>
                <ul className="timeline">
                  <li>
                    <span className="timelime-title">{experience.title}</span>
                    <p>{experience.description}</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 image-container">
                <img
                  className="timelime-image animatable bounceIn lazyload"
                  data-src={experience.image}
                  alt={experience.title}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
