import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import EducationExperience from "./components/EducationExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="ambient-bg">
        <div
          className="ambient-spotlight"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
        <div className="ambient-blob-1"></div>
        <div className="ambient-blob-2"></div>
        <div className="cyber-grid"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
