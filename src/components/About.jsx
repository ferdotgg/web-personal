import React from "react";

const About = () => {
  return (
    <section className="about-me">
      <div className="about-me-title">
        <h1>¿Quién soy?</h1>
      </div>
      <div style={{ color: "black" }} className="about-me-info">
        <p>
          Soy <span className="about-bold">Fernando</span>, un desarollador de
          software que vive en <span className="about-bold">Costa Rica</span>,
          actualmente estoy estudiando ingeniería en sistemas en la{" "}
          <a
            href="https://www.una.ac.cr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UNA
          </a>{" "}
          y me estoy formando profesionalmente en el ámbito de programación en{" "}
          <a
            href="https://platzi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Platzi
          </a>
          .
        </p>
        <p>
          Tengo 23 años, manejo tecnologías tanto de{" "}
          <span className="about-bold">frontend</span> como de{" "}
          <span className="about-bold">backend</span>, para poder desarrollar
          proyectos de calidad.
        </p>
        <p>
          Me encantan los <span className="about-bold">videojuegos</span>, de
          ahí nace mi pasión por los <span className="about-bold">esports</span>{" "}
          y esto me lleva a ser el co-fundador de una{" "}
          <a
            href="https://torneos.gg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            startup
          </a>
          , la cual brinda servicios para aquellos jugadores como yo.
        </p>
        <p>
          Siempre trato de transmitir mis pasiones por medio de lo que hago, en
          este caso es por medio de el{" "}
          <span className="about-bold">desarrollo web</span> y el{" "}
          <span className="about-bold">diseño.</span>
        </p>
      </div>
    </section>
  );
};

export default About;
