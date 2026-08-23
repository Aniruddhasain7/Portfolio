import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "about",
        "skills",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll on mobile when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}>
        <nav>
          <a href="#" className="nav-brand" onClick={closeMenu}>
            <div className="logo-text">
              Aniruddha<span> Sain</span>
            </div>
          </a>

          <ul className="nav-links-desktop">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.label}>
                  <a href={link.href} className={isActive ? "active" : ""}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <a
              href="#contact"
              className="btn-primary nav-talk-btn"
              style={{ padding: "8px 18px", fontSize: "0.85rem" }}
            >
              <HiSparkles /> Let's Talk
            </a>

            <button
              id="hamburger-btn"
              className="hamburger-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <div
        id="mobile-drawer"
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <div className="logo-text">
            Aniruddha<span> Sain</span>
          </div>
          <button
            id="close-drawer-btn"
            className="close-drawer-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={isActive ? "active" : ""}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <FaCode style={{ opacity: 0.4, fontSize: "0.85rem" }} />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-socials">
            <a
              href="https://github.com/Aniruddhasain7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="drawer-social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aniruddha-sain-706220280"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="drawer-social-link"
            >
              <FaLinkedin />
            </a>
          </div>

          <a
            href="#contact"
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={closeMenu}
          >
            <HiSparkles /> Get In Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
