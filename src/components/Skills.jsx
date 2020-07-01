import React from "react";

const Skills = () => {
  const devSkills = [
    {
      techologie: "HTML",
      skill: "AVANZADO",
    },
    {
      techologie: "CSS",
      skill: "AVANZADO",
    },
    {
      techologie: "JAVASCRIPT",
      skill: "INTERMEDIO",
    },
    {
      techologie: "NODEJS",
      skill: "BÁSICO",
    },
    {
      techologie: "REACTJS",
      skill: "INTERMEDIO",
    },
    {
      techologie: "LARAVEL",
      skill: "INTERMEDIO",
    },
    {
      techologie: "ASP .NET",
      skill: "BÁSICO",
    },
    {
      techologie: "ENTITY FRAMEWORK",
      skill: "INTERMEDIO",
    },
    {
      techologie: "BOOTSTRAP",
      skill: "AVANZADO",
    },
    {
      techologie: "SQL SERVER",
      skill: "INTERMEDIO",
    },
    {
      techologie: "MYSQL",
      skill: "INTERMEDIO",
    },
    {
      techologie: "MONGODB",
      skill: "BÁSICO",
    },
    {
      techologie: "GIT",
      skill: "INTERMEDIO",
    },
    {
      techologie: "MS AZURE DEVOPS",
      skill: "INTERMEDIO",
    },
    {
      techologie: "GRAPHQL",
      skill: "BÁSICO",
    },
  ];

  const designerSkills = [
    {
      techologie: "PHOTOSHOP",
      skill: "INTERMEDIO",
    },
    {
      techologie: "ADOBE PREMIERE",
      skill: "INTERMEDIO",
    },
  ];

  const softSkills = [
    {
      skill: "COMUNICACIÓN ESCRITA",
    },
    {
      skill: "TRABAJO EN EQUIPO",
    },
    {
      skill: "LIDERAZGO",
    },
    {
      skill: "PENSAMIENTO CRÍTICO",
    },
    {
      skill: "CREATIVIDAD",
    },
  ];

  return (
      <section className="skills-section">
        <div className="container">
          <h1 className="section-skills-title">Habilidades</h1>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <p className="skills-title animatable moveUp">
                <i className="fa fa-cog"></i>Desarrollador
              </p>
              {devSkills.map((dev) => (
                <div
                  key={dev.techologie}
                  className="skill-container animatable moveUp"
                >
                  <div className="skill-container-title skill-gold">
                    {dev.techologie}
                  </div>
                  <div className="skill-container-tech skill-dev">
                    {dev.skill}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-sm-12 col-md-4">
              <p className="skills-title animatable moveUp">
                <i className="fa fa-paint-brush"></i>Diseñador
              </p>
              {designerSkills.map((designer) => (
                <div key={designer.techologie} className="skill-container animatable moveUp">
                  <div className="skill-container-title skill-purple">
                    {designer.techologie}
                  </div>
                  <div className="skill-container-tech skill-designer">
                    {designer.skill}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-sm-12 col-md-4">
              <p className="skills-title animatable moveUp">
                <i className="fa fa-bolt"></i>Blandas
              </p>

              <div className="skill-container animatable moveUp">
                <div className="skill-container-title skill-red">INGLÉS</div>
                <div className="skill-container-tech skill-other">
                  INTERMEDIO
                </div>
              </div>

              {softSkills.map((soft) => (
                <div key={soft.skill} className="skill-container animatable moveUp">
                  <div className="skill-container-title skill-red">
                    {soft.skill}
                  </div>
                  <div className="skill-container-tech skill-other-nothing"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Skills;
