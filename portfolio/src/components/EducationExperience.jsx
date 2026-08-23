import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const EducationExperience = () => {
  const experiences = [
    {
      company: "Edunet Foundation",
      role: "AI & ML Intern",
      period: "Jan 2026 – Feb 2026",
      type: "Internship",
      points: [
        "Architected and deployed predictive machine learning pipelines utilizing Python, Scikit-learn, Pandas, and NumPy.",
        "Engineered robust data preprocessing and feature selection pipelines, achieving enhanced model accuracy and inference speed.",
        "Conducted cross-validation and hyperparameter tuning to ensure generalization and reliability on production-grade datasets.",
      ],
      tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "ML Pipelines"],
    },
    {
      company: "Edunet Foundation",
      role: "AI & Cloud Intern",
      period: "Jul 2025 – Aug 2025",
      type: "Internship",
      points: [
        "Engineered AI-driven cloud native applications deployed on IBM Cloud infrastructure with serverless microservices.",
        "Integrated cognitive AI APIs for real-time natural language and computer vision processing tasks.",
        "Implemented secure API endpoints and optimized latency for low-overhead client communication.",
      ],
      tags: ["IBM Cloud", "Cognitive APIs", "Serverless", "Cloud Architecture", "REST APIs"],
    },
  ];

  const education = [
    {
      institution: "NSHM Knowledge Campus",
      degree: "B.Tech in Computer Science & Engineering",
      period: "Aug 2023 – Jun 2027",
      status: "Currently Pursuing",
      points: [
        "Rigorous academic curriculum with deep emphasis on Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Database Management Systems (DBMS).",
        "Engaged in hands-on practical labs and project building involving Computer Networks, Operating Systems, and Applied AI.",
      ],
      tags: ["DSA", "DBMS", "Computer Networks", "OOP", "Operating Systems", "Artificial Intelligence"],
    },
  ];

  return (
    <section id="experience" className="edu-exp">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Journey & Milestones</span>
        </div>
        <h2 className="section-title">
          Experience & <span>Education</span>
        </h2>
        <p className="section-subtitle">
          My academic foundation and professional <span>internship milestones</span> in Artificial Intelligence & Cloud computing.
        </p>
      </div>

      <div className="edu-exp-grid">
        <div className="timeline-column">
          <div className="timeline-column-header">
            <div className="timeline-column-icon">
              <FaBriefcase />
            </div>
            <h3 className="timeline-column-title">Work Experience</h3>
          </div>

          <div className="timeline-list">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-node">
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <h4 className="timeline-institution">{exp.company}</h4>
                    <span className="timeline-badge">{exp.period}</span>
                  </div>
                  <div className="timeline-role">{exp.role}</div>
                  <ul className="timeline-desc-list">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="timeline-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="timeline-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-column" id="education">
          <div className="timeline-column-header">
            <div className="timeline-column-icon">
              <FaGraduationCap />
            </div>
            <h3 className="timeline-column-title">Academic Background</h3>
          </div>

          <div className="timeline-list">
            {education.map((edu, index) => (
              <div key={index} className="timeline-node">
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <h4 className="timeline-institution">{edu.institution}</h4>
                    <span className="timeline-badge">{edu.period}</span>
                  </div>
                  <div className="timeline-role">{edu.degree}</div>
                  <ul className="timeline-desc-list">
                    {edu.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="timeline-tags">
                    {edu.tags.map((tag) => (
                      <span key={tag} className="timeline-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
