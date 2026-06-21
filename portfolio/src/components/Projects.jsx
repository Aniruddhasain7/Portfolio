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
              src="/assets/projects/myra.png"
              alt="Myra AI Voice Assistant"
            />
            <div className="project-content">
              <h3>Myra — AI Voice Assistant</h3>
              <p>
                A voice-activated AI assistant that connects the Web Speech API
                with Gemini AI to process spoken commands and automate browser
                tasks — delivering real-time, hands-free web interactions.
              </p>
              <div className="tech-stack">
                <span>React 19</span>
                <span>Vite 8</span>
                <span>Google Gemini AI</span>
                <span>Web Speech API</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Aniruddhasain7/Myra-Voice-Assistant"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://myra-ai-va.vercel.app/"
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
            <img src="/assets/projects/exp.png" alt="Expense Tracker" />
            <div className="project-content">
              <h3>Expense Tracker</h3>
              <p>
                A full-stack MERN app to track income, categorize expenses,
                and visualize financial habits with interactive charts. Supports
                monthly budgets, transaction filters, and spending insights to
                help users manage finances with clarity.
              </p>
              <div className="tech-stack">
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Aniruddhasain7/Expense-Tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://expense-tracker-skxx.onrender.com"
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
            <img
              src="/assets/projects/crop.png"
              alt="AI Crop Recommendation System"
            />
            <div className="project-content">
              <h3>Crop Recommendation System</h3>
              <p>
                An ML-based system that recommends the most suitable crop based
                on soil nutrients and environmental conditions. Analyzes N, P, K,
                temperature, and humidity to empower farmers with data-driven
                decisions for maximizing yield.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>Streamlit</span>
                <span>Pandas</span>
                <span>Numpy</span>
                <span>Matplotlib</span>
                <span>Seaborn</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Aniruddhasain7/Crop-Recommendation-System"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://crop-recommendation-sy.streamlit.app/"
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
                An AI-powered platform where users can upload PDFs and chat
                with their documents in natural language. Powered by LangChain
                and Groq AI with RAG for fast, context-aware answers and
                effortless document summarization.
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
