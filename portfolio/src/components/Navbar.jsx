import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
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
              className="btn-primary"
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
      />

      <div
        id="mobile-drawer"
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
      >
        <div className="mobile-drawer-header">
          <div className="logo-text">
            Aniruddha<span>.</span>
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

        <div style={{ marginTop: "auto", paddingTop: "20px" }}>
          <a
            href="#contact"
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={closeMenu}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
