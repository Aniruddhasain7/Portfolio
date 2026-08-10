import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const EducationExperience = () => {
  return (
    <section className="edu-exp">
      <div className="edu-exp-container">
        <div id="education" className="edu-left">
          <h2>
            <FaGraduationCap style={{ marginRight: "12px" }} /> Education
          </h2>
          <div className="card">
            <h3>NSHM Knowledge Campus</h3>
            <div className="role">
              <h4>B.Tech in Computer Science & Engineering</h4>
              <div className="course-duration">Aug 2023 – Jun 2027</div>
              <ul className="exp-list">
                <li>
                  Currently pursuing B.Tech in Computer Science & Engineering with a strong focus on Data Structures & Algorithms (DSA), Database Management Systems (DBMS), and Computer Networks (CN).
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="experience" className="exp-right">
          <h2>
            <FaBriefcase style={{ marginRight: "12px" }} /> Experience
          </h2>
          <div className="experience-timeline">
            <div className="experience-card">
              <div className="timeline-dot"></div>
              <h3 className="company">Edunet Foundation</h3>
              <div className="role-content">
                <h4>AI & Cloud Intern</h4>
                <p className="duration">Jul 2025 – Aug 2025</p>
                <ul className="exp-list">
                  <li>
                    Designed and developed AI-driven cloud applications on IBM
                    Cloud, implementing serverless architectures and integrating
                    advanced cognitive APIs for secure, real-time data
                    processing.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div className="timeline-dot"></div>
              <h3 className="company">Edunet Foundation</h3>
              <div className="role-content">
                <h4>AI & ML Intern</h4>
                <p className="duration">Jan 2026 – Feb 2026</p>
                <ul className="exp-list">
                  <li>
                    Built, optimized, and deployed predictive machine learning
                    pipelines using Python, Pandas, NumPy, and Scikit-learn,
                    achieving high precision in data preprocessing, feature
                    engineering, and model evaluation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
