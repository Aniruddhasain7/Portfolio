import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Connect", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <h1 className="logo">
          Aniruddha<span> Sain</span>
        </h1>
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          id="hamburger-btn"
          className="hamburger-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </nav>

      <div
        className={`mobile-overlay${menuOpen ? " active" : ""}`}
        onClick={closeMenu}
      />

      <div id="mobile-drawer" className={`mobile-drawer${menuOpen ? " open" : ""}`}>
        <button
          id="close-drawer-btn"
          className="close-drawer-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

