import React from "react";

const Certificates = () => {
  const myCertificates = [
    {
      name: "Curso de Programación Básica",
      image:
        "https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1050-programacion-basica/diploma/detalle/",
    },
    {
      name: "Curso de Buenas Prácticas y Entorno de Desarrollo",
      image:
        "https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png",
      url: "https://platzi.com/@ScriptKash/curso/1650-prework/diploma/detalle/",
    },
    {
      name: "Curso de Frontend Developer",
      image:
        "https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1640-frontend-developer/diploma/detalle/",
    },
    {
      name: "Fundamentos de JavaScript",
      image:
        "https://static.platzi.com/media/achievements/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1339-fundamentos-javascript/diploma/detalle/",
    },
    {
      name: "Master en JavaScript",
      image: "./assets/images/udemy.png",
      url: "https://www.udemy.com/certificate/UC-09DGRHLV/",
    },
    {
      name: "Curso Profesional de JavaScript",
      image:
        "https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1642-javascript-profesional/diploma/detalle/",
    },
    {
      name: "Curso Práctico de React JS",
      image:
        "https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1651-react-ejs/diploma/detalle/",
    },
    {
      name: "Curso Desarrollo Web Online",
      image:
        "https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1350-html5-css3/diploma/detalle/",
    },
    {
      name: "Fundamentos de Ingeniería de Software",
      image:
        "https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1098-ingenieria/diploma/detalle/",
    },
    {
      name: "Curso Básico de JavaScript",
      image:
        "https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1814-basico-javascript/diploma/detalle/",
    },
    {
      name: "Curso de PHP con Laravel",
      image:
        "https://static.platzi.com/media/achievements/badge-laravel-ed7723f2-1ec9-4e5b-b4b5-ba70548083a5.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1467-curso-php-laravel/diploma/detalle/",
    },
    {
      name: "Curso de Asincronismo con JavaScript",
      image:
        "https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1789-asincronismo-js/diploma/detalle/",
    },
    {
      name: "Curso de ECMAScript 6+",
      image:
        "https://static.platzi.com/media/achievements/badge-ecmascript-6-d48e7bb7-a7a4-416d-a3b4-e11f0b13a229.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1815-ecmascript-6/diploma/detalle/",
    },
    {
      name: "Curso de Engineering Management",
      image:
        "https://static.platzi.com/media/achievements/badge-eng-management-8aa3f5cb-e16d-4ef6-8ef0-ff244a6ab746.png",
      url:
        "https://platzi.com/@ScriptKash/curso/1732-eng-management/diploma/detalle/",
    },
  ];
  return (
    <section className="certificate-section">
      <div className="container">
        <h1 className="certificate-section-title">
          <span>
            <i className="fa fa-certificate"></i>Certificados
          </span>
        </h1>
        <div className="row">
          {myCertificates.map((certificate) => (
            <div key={certificate.name} className="col-md-4">
              <a
                className="certificate-section-url"
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="certificate-container animatable bounceIn">
                  <div className="certificate-container-image">
                    <img
                      src={certificate.image}
                      alt="Certificado"
                    />
                  </div>
                  <div className="certificate-container-text">
                    {certificate.name}
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

export default Certificates;
