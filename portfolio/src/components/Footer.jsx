import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="logo-text">
              Aniruddha<span> Sain</span>
            </h3>
            <p>Computer Science Undergraduate & AI / Web Developer</p>
          </div>

          <ul className="footer-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Aniruddha Sain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
