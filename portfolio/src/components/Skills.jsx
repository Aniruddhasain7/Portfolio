import React from "react";
import { FaLaptopCode, FaCode, FaServer, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills">
      <h2>
        <FaLaptopCode style={{ marginRight: "15px" }} />
        Technical Skills
      </h2>
      <div className="skills-container">
        <div className="skill-box">
          <h3>
            <FaCode style={{ marginRight: "10px", color: "#ff0000" }} /> Frontend
          </h3>
          <div className="skills-grid">
            <div>
              <img src="/assets/skill-logos/html.svg" alt="HTML" />
              <p>HTML</p>
            </div>
            <div>
              <img src="/assets/skill-logos/css.svg" alt="CSS" />
              <p>CSS</p>
            </div>
            <div>
              <img src="/assets/skill-logos/js.svg" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div>
              <img src="/assets/skill-logos/react.svg" alt="React" />
              <p>React</p>
            </div>
            <div>
              <img src="/assets/skill-logos/Tailwind CSS.svg" alt="Tailwind CSS" />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <FaServer style={{ marginRight: "10px", color: "#ff0000" }} /> Backend
          </h3>
          <div className="skills-grid">
            <div>
              <img src="/assets/skill-logos/nodejs.svg" alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div>
              <img src="/assets/skill-logos/express.svg" alt="Express" />
              <p>Express</p>
            </div>
            <div>
              <img src="/assets/skill-logos/flask.svg" alt="Flask" />
              <p>Flask</p>
            </div>
            <div>
              <img src="/assets/skill-logos/mysql.svg" alt="MySQL" />
              <p>MySQL</p>
            </div>
            <div>
              <img src="/assets/skill-logos/mongodb.svg" alt="MongoDB" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <FaTools style={{ marginRight: "10px", color: "#ff0000" }} /> Tools & Platforms
          </h3>
          <div className="skills-grid">
            <div>
              <img src="/assets/skill-logos/git.svg" alt="Git" />
              <p>Git</p>
            </div>
            <div>
              <img src="/assets/skill-logos/github.svg" alt="GitHub" />
              <p>GitHub</p>
            </div>
            <div>
              <img src="/assets/skill-logos/vscode.svg" alt="VS Code" />
              <p>VS Code</p>
            </div>
            <div>
              <img src="/assets/skill-logos/googlecolab-original.svg" alt="Google Colab" />
              <p>Google Colab</p>
            </div>
            <div>
              <img src="/assets/skill-logos/Streamlit.svg" alt="Streamlit" />
              <p>Streamlit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
