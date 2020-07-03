import React from "react";
import MeHeader from "./MeHeader";
// import Particles from "react-particles-js";

const Header = () => {
  const images = [
    {
      character: "/assets/images/parallax/ryze-min.png",
      background: "/assets/images/parallax/background.jpg",
    },
    {
      character: "/assets/images/parallax/wick-min.png",
      background: "/assets/images/parallax/background.jpg",
    },
    // {
    //   character: "/assets/images/parallax/deadpool.png",
    //   background: "/assets/images/parallax/background.jpg",
    // },
    {
      character: "/assets/images/parallax/spider-min.png",
      background: "/assets/images/parallax/background.jpg",
    },
  ];

  const item = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      {/* <Particles
        style={{
          position: "absolute",
          maxWidth: "100%",
          overflow: "hidden",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          maxHeight: 620,
          zIndex: 9,
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
      /> */}

      <header>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: "url(" + item.background + ")",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="hero-image"
        ></div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "140%",
            backgroundImage: "url(" + item.character + ")",
            top: "-50%",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 10,
          }}
          className="parallax-el"
        ></div>
        <div
          style={{
            position: "absolute",
            background: "url(/assets/images/parallax/texto.png)",
            backgroundPosition: "50% 40%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 11,
          }}
          className="text"
        ></div>
        <div className="whitespace"></div>
      </header>
      <MeHeader />
    </>
  );
};

export default Header;
