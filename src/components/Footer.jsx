import React from "react";
import Particles from "react-particles-js";

const Footer = () => {
  return (
    <>
      <Particles
        style={{
          position: "absolute",
          maxWidth: "100%",
          overflow: "hidden",
          backgroundImage: 'url(/assets/images/particlesbg.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundAttachment: 'fixed',
          maxHeight: 300,
        }}
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 3000,
              },
            },
            color: {
              value: "#0048ff",
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "/assets/images/spark.png",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.9,
              random: true,
              anim: {
                enable: false,
                speed: 5000,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 20,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 7.8914764163227265,
              direction: "top",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "bubble",
              },
              onclick: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="particles-section">
        <div style={{
            position: 'absolute',
            width: '100%',
            height: 300,
            
            overflow: 'hidden',
            textAlign: 'center',
        }}>
          <div className="social">
            <div className="social-icons">
              <a href="https://github.com/ScriptKash" target="_blank">
                <img
                  className="lazyload"
                  data-src="/assets/images/iconos/github.png"
                  alt=""
                />
              </a>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/scriptkash/" target="_blank">
                <img
                  className="lazyload"
                  data-src="/assets/images/iconos/linkedin.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
