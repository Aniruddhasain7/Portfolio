import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, </h1>
        <h1>
          I'm <span>Aniruddha</span>{" "}
        </h1>
        <br></br>
        <h2>AI Enthusiast | Web Developer | Student</h2>
      </div>
      <div className="hero-image">
        <img src="/assets/profile.png" alt="Profile Picture" />
      </div>
    </section>
  );
};

export default Hero;
