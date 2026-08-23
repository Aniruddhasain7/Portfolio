import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const Hero = () => {
  const roles = [
    "AI & Machine Learning Enthusiast",
    "Full-Stack Web Developer",
    "B.Tech CSE Undergraduate",
    "Problem Solver & Tech Innovator",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 45 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <HiSparkles style={{ color: "var(--primary-red)" }} />
          <span>Innovating with Code & Intelligence</span>
        </div>

        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="hero-name">Aniruddha Sain</span>
        </h1>

        <div className="hero-typewriter">
          <span className="typewriter-text">{displayText}</span>
          <span className="typewriter-cursor"></span>
        </div>

        <p className="hero-description">
          Computer Science Engineering student passionate about engineering scalable 
          <strong> AI-powered applications</strong>, <strong>machine learning pipelines</strong>, 
          and seamless <strong>modern web experiences</strong> that solve real-world problems.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            <span>Explore Projects</span>
            <FaArrowRight style={{ fontSize: "0.85rem" }} />
          </a>

          <a href="#contact" className="btn-secondary">
            <span>Let's Connect</span>
          </a>

          <a
            href="https://github.com/Aniruddhasain7"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: "13px 16px" }}
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <FaGithub style={{ fontSize: "1.15rem" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/aniruddha-sain-706220280"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: "13px 16px" }}
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <FaLinkedin style={{ fontSize: "1.15rem" }} />
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">
              4<span>+</span>
            </div>
            <div className="stat-label">Production Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              2<span>+</span>
            </div>
            <div className="stat-label">AI & Cloud Internships</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              15<span>+</span>
            </div>
            <div className="stat-label">Core Technologies</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img
            src="/assets/profile.png"
            alt="Aniruddha Sain"
            className="hero-profile-img"
          />

          <div className="floating-chip chip-1">
            <FaMicrochip className="chip-icon" />
            <span>AI & Deep Learning</span>
          </div>

          <div className="floating-chip chip-2">
            <FaCode className="chip-icon" />
            <span>Full-Stack Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
