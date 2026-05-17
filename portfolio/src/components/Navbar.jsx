import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">
        Aniruddha<span> Sain</span>
      </h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Connect</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
