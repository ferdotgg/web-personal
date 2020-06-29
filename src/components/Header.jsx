import React from "react";
import MeHeader from "./MeHeader";

const Header = () => {
  return (
    <>
      <header>
        <div className="hero-image" data-rellax-speed="200"></div>
        <div className="rellax parallax-el" data-rellax-speed="-4.4"></div>
        <div className="rellax text" data-rellax-speed="-1.5"></div>
        <div className="whitespace"></div>
      </header>
      <MeHeader />
    </>
  );
};

export default Header;
