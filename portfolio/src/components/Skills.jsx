import React from "react";
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaTools,
  FaBrain,
} from "react-icons/fa";

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
            <FaCode style={{ marginRight: "10px", color: "#ff0000" }} />{" "}
            Frontend
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
              <img
                src="/assets/skill-logos/Tailwind CSS.svg"
                alt="Tailwind CSS"
              />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <FaServer style={{ marginRight: "10px", color: "#ff0000" }} />{" "}
            Backend
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
              <img src="/assets/skill-logos/postgresql.svg" alt="PostgreSQL" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src="/assets/skill-logos/mongodb.svg" alt="MongoDB" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <FaBrain style={{ marginRight: "10px", color: "#ff0000" }} /> AI &
            ML
          </h3>
          <div className="skills-grid">
            <div>
              <img
                src="/assets/skill-logos/scikitlearn.svg"
                alt="Scikit-learn"
              />
              <p>Scikit-learn</p>
            </div>
            <div>
              <img src="/assets/skill-logos/pandas.svg" alt="Pandas" />
              <p>Pandas</p>
            </div>
            <div>
              <img src="/assets/skill-logos/numpy.svg" alt="NumPy" />
              <p>NumPy</p>
            </div>
            <div>
              <img
                src="/assets/skill-logos/huggingface.svg"
                alt="Hugging Face"
              />
              <p>Hugging Face</p>
            </div>
            <div>
              <img
                src="/assets/skill-logos/Langchain.svg"
                alt="LangChain"
              />
              <p>LangChain</p>
            </div>
            <div>
              <img src="/assets/skill-logos/gemini.svg" alt="Gemini" />
              <p>Gemini</p>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h3>
            <FaTools style={{ marginRight: "10px", color: "#ff0000" }} /> Tools
            & Deployment
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
              <img src="/assets/skill-logos/docker.svg" alt="Docker" />
              <p>Docker</p>
            </div>
            <div>
              <img src="/assets/skill-logos/postman.svg" alt="Postman" />
              <p>Postman</p>
            </div>
            <div>
              <img src="/assets/skill-logos/vercel.svg" alt="Vercel" />
              <p>Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
