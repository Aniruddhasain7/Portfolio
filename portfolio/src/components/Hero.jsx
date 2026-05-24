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
        <h2>AI Enthusiast | Web Developer | Student</h2>
        <div className="hero-btns">
          <a href="#projects" className="btn">
            <FaEye style={{ marginRight: "8px" }} /> View My Work
          </a>
          <a href="/assets/Aniruddha Sain_CV.pdf" className="btn" target="_blank" rel="noreferrer">
            <FaDownload style={{ marginRight: "8px" }} /> Download CV
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/profile-pic_1.png" alt="Profile Picture" />
      </div>
    </section>
  );
};

export default Hero;
