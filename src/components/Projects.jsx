import React from "react";

const Projects = () => {
  const myProjects = [
    {
      name: "ASADA-SOP",
      description:
        "Sistema de administración y agilización de procesos para una ASADA",
      image: "./assets/images/proyectos/asada.jpg",
      url: "http://asadasop.tech/",
      technologies: [
        {
          name: "Laravel",
          badge: "primary",
        },
        {
          name: "MySQL",
          badge: "success",
        },
        {
          name: "Bootstrap",
          badge: "dark",
        },
      ],
    },
    {
      name: "TORNEOS.GG",
      description:
        "Multiplataforma de torneos para videojuegos eSports en linea",
      image: "./assets/images/proyectos/tgg.jpg",
      url: "https://torneos.gg/",
      technologies: [
        {
          name: "ReactJS",
          badge: "primary",
        },
        {
          name: "MongoDB",
          badge: "success",
        },
        {
          name: "Material-UI",
          badge: "dark",
        },
      ],
    },
    {
      name: "PANGEA LIVING",
      description: "Plataforma para reservar habitaciones en residenciales",
      image: "./assets/images/proyectos/pangea.jpg",
      url: "https://pangealivingmde.com/",
      technologies: [
        {
          name: "ReactJS",
          badge: "primary",
        },
        {
          name: "MongoDB",
          badge: "success",
        },
        {
          name: "Ant Design",
          badge: "dark",
        },
      ],
    },
  ];
  return (
    <section className="projects">
      <div className="container">
        <h1 className="section-skills-title">Proyectos</h1>
        <div className="row align-items-center">
          {myProjects.map((project) => (
            <div key={project.name} className="col-md-4 animatable fadeInDown">
              <a
                style={{ textDecoration: "none" }}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mb-3">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="card-text">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          style={{ marginRight: 4 }}
                          className={"badge rounded-pill bg-" + tech.badge}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
