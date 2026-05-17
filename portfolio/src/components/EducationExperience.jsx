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
                <li>Actively involved in academic and technical projects.</li>
                <li>Focused on developing strong problem-solving skills.</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="experience" className="exp-right">
          <h2>
            <FaBriefcase style={{ marginRight: "12px" }} /> Experience
          </h2>
          <div className="experience-card">
            <h3 className="company">Edunet Foundation</h3>
            <div className="role">
              <h4>AI & Cloud Intern</h4>
              <p className="duration">Jul 2025 – Aug 2025</p>
              <ul className="exp-list">
                <li>
                  Worked on AI-driven solutions and cloud-based applications
                  using IBM Cloud.
                </li>
                <li>
                  Gained hands-on experience in cloud services, model
                  deployment, and project workflows.
                </li>
              </ul>
            </div>
            <div className="role">
              <h4>AI & ML Intern</h4>
              <p className="duration">Jan 2026 – Feb 2026</p>
              <ul className="exp-list">
                <li>Built and trained machine learning models using Python.</li>
                <li>Performed data preprocessing and feature engineering.</li>
                <li>Worked with Pandas, NumPy, and Scikit-learn.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
