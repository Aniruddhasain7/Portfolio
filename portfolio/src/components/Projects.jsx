import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      id: "agriai",
      title: "AgriAI – Smart Farming Assistant",
      categoryBadge: "Smart Agriculture & AI",
      image: "/assets/projects/agriai.png",
      description:
        "An end-to-end intelligent agricultural web platform empowering farmers with computer vision crop disease detection, Scikit-learn harvest yield prediction, live commodity market prices, and multilingual advisory.",
      techStack: ["React 18", "Flask", "PyTorch", "Scikit-Learn", "PostgreSQL", "i18next"],
      githubUrl: "https://github.com/Aniruddhasain7/Agri-ai",
      liveUrl: "https://agri-ai-5.vercel.app/",
    },
    {
      id: "nexa",
      title: "Nexa – AI Creation & Chat Platform",
      categoryBadge: "Generative AI Platform",
      image: "/assets/projects/nexa.png",
      description:
        "A full-stack generative AI suite enabling users to chat with conversational AI, generate images from natural language prompts, and showcase discoveries in an interactive public gallery.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Gemini AI", "JWT"],
      githubUrl: "https://github.com/Aniruddhasain7/Nexa",
      liveUrl: "https://nexa-7.vercel.app/",
    },
    {
      id: "docuask",
      title: "DocuAsk – Document Intelligence RAG",
      categoryBadge: "NLP & RAG System",
      image: "/assets/projects/docuask.png",
      description:
        "Retrieval-Augmented Generation (RAG) platform allowing users to upload complex PDF documents and converse in natural language for ultra-fast, citation-backed answers and executive summaries.",
      techStack: ["Python", "Streamlit", "LangChain", "Groq AI", "FAISS", "HuggingFace"],
      githubUrl: "https://github.com/Aniruddhasain7/DocuAsk",
      liveUrl: "https://docuask.streamlit.app/",
    },
    {
      id: "fitbuddy",
      title: "FitBuddy – AI Health & Fitness Hub",
      categoryBadge: "HealthTech & AI",
      image: "/assets/projects/fitbuddy.png",
      description:
        "Personalized fitness companion utilizing Google Gemini AI to analyze diet metrics, generate adaptive workout schedules, track macro nutrients, and deliver customized wellness recommendations.",
      techStack: ["React 19", "Vite", "Google Gemini AI", "Vanilla CSS", "Axios"],
      githubUrl: "https://github.com/Aniruddhasain7/FitBuddy",
      liveUrl: "https://fitbuddy-ac.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Engineered Solutions</span>
        </div>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          A showcase of <span>production-grade applications</span> built to solve concrete challenges across AI, Cloud, and Web.
        </p>
      </div>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <span className="project-category-badge">{project.categoryBadge}</span>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay"></div>
            </div>

            <div className="project-body">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-primary"
                >
                  <FaExternalLinkAlt style={{ fontSize: "0.8rem" }} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-secondary"
                >
                  <FaGithub style={{ fontSize: "1rem" }} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
