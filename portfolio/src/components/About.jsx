import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaLightbulb, FaCompass, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>About Me</span>
        </div>
        <h2 className="section-title">
          Who I <span>Am</span>
        </h2>
        <p className="section-subtitle">
          A quick look into my background, interests, and what I enjoy building.
        </p>
      </div>

      <div className="about-bento">
        <div className="glass-card bento-bio">
          <div className="bio-text">
            <h3>
              Hi, I'm <span>Aniruddha Sain</span>
            </h3>
            <p>
              I am a <strong>Computer Science & Engineering</strong> student at 
              <strong> NSHM Knowledge Campus</strong> (2023–2027) based in Durgapur, West Bengal.
            </p>
            <p>
              I enjoy building practical software that solves real problems. Whether it is 
              creating intelligent AI-driven applications or developing clean, responsive 
              web experiences, I love turning ideas into working digital products.
            </p>
            <p>
              I focus on writing clean, readable code and constantly learning new things to improve 
              as a developer.
            </p>
          </div>

          <div className="bio-badges">
            <div className="bio-badge">
              <FaGraduationCap />
              <span>B.Tech in CSE (2023 – 2027)</span>
            </div>
            <div className="bio-badge">
              <FaMapMarkerAlt />
              <span>Durgapur, India</span>
            </div>
            <div className="bio-badge">
              <FaCode />
              <span>Web & AI Developer</span>
            </div>
            <div className="bio-badge">
              <FaRocket />
              <span>Open to Opportunities</span>
            </div>
          </div>
        </div>

        <div className="glass-card bento-card">
          <div className="bento-icon-wrapper">
            <FaLightbulb />
          </div>
          <h4>What I Care About</h4>
          <p>
            Writing clean, maintainable code, keeping things simple, and building software that people actually enjoy using.
          </p>
          <a href="#experience" className="highlight-link">
            My Journey →
          </a>
        </div>

        <div className="glass-card bento-card">
          <div className="bento-icon-wrapper">
            <FaCompass />
          </div>
          <h4>Continuous Learning</h4>
          <p>
            Always curious about new technologies, experimenting with personal projects, and growing with every challenge.
          </p>
          <a href="#projects" className="highlight-link">
            View Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
