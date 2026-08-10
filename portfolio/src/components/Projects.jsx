import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectsGridRef = useRef(null);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A collection of <span>projects</span> built to solve{" "}
        <span>problems</span> and create meaningful <span>experiences</span>
      </p>
      <div className="projects-wrapper">
        <div className="projects-grid" ref={projectsGridRef}>
          <div className="project-card">
            <img
              src="/assets/projects/agriai.png"
              alt="AgriAI"
            />
            <div className="project-content">
              <h3>AgriAI</h3>
              <p>
                An end-to-end smart farming web application empowering farmers with computer vision disease detection, 
                machine learning harvest yield prediction, 
                live market prices, and multilingual AI advisories.
              </p>
              <div className="tech-stack">
                <span>React 18</span>
                <span>Flask</span>
                <span>PyTorch</span>
                <span>Scikit-Learn</span>
                <span>PostgreSQL</span>
                <span>i18next</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Aniruddhasain7/Agri-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://agri-ai-5.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/projects/nexa.png" alt="Nexa" />
            <div className="project-content">
              <h3>Nexa</h3>
              <p>
                A full-stack AI platform to chat with AI, generate images from
                prompts, and explore a public gallery of AI-created content.
                Features user authentication, multi-turn conversations via
                Gemini AI, and a responsive community dashboard.
              </p>
              <div className="tech-stack">
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Google Gemini AI</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Aniruddhasain7/Nexa"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://nexa-7.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/projects/docuask.png" alt="DocuAsk" />
            <div className="project-content">
              <h3>DocuAsk</h3>
              <p>
                An AI-powered platform where users can upload PDFs and chat with
                their documents in natural language. Powered by LangChain and
                Groq AI with RAG for fast, context-aware answers and effortless
                document summarization.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>Streamlit</span>
                <span>LangChain</span>
                <span>Groq AI</span>
                <span>FAISS</span>
                <span>HuggingFace</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Aniruddhasain7/DocuAsk"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://docuask.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/projects/fitbuddy.png" alt="FitBuddy" />
            <div className="project-content">
              <h3>FitBuddy</h3>
              <p>
                An AI-powered fitness tracking platform leveraging Google Gemini
                AI for personalized health insights, workout logging, daily
                macro tracking, and voice-assisted coaching.
              </p>
              <div className="tech-stack">
                <span>React 19</span>
                <span>Vite</span>
                <span>Google Gemini AI</span>
                <span>Vanilla CSS</span>
                <span>Axios</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Aniruddhasain7/FitBuddy"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://fitbuddy-ac.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
