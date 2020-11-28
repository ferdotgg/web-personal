import React from "react";

import Particles from "react-particles-js";

const ParticlesComponent = ({ zIndex }) => {
  return (
    <Particles
      style={{
        top: 0,
        left: 0,
        position: "absolute",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        maxHeight: "100%",
        zIndex: zIndex,
      }}
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: false,
              value_area: 900,
            },
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
              color: "#fff",
            },
            image: [
              {
                src: "/assets/images/spark.png",
                width: 100,
                height: 100,
              },
              {
                src: "/assets/images/react.png",
                width: 200,
                height: 174,
              },
            ],
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: false,
              speed: 8000,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 25,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 0,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 3.2,
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
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesComponent;
