import React from "react";
import { FaLaptopCode, FaCode, FaServer, FaMicrochip } from "react-icons/fa6";

const Skills = () => {
  const skillCategories = [
    {
      category: "frontend",
      title: "Frontend Engineering",
      icon: <FaCode />,
      description:
        "Building responsive, highly interactive, and accessible web experiences.",
      skills: [
        { name: "React", logo: "/assets/skill-logos/react.svg" },
        { name: "JavaScript", logo: "/assets/skill-logos/js.svg" },
        { name: "HTML5", logo: "/assets/skill-logos/html.svg" },
        { name: "CSS3", logo: "/assets/skill-logos/css.svg" },
        { name: "Tailwind CSS", logo: "/assets/skill-logos/Tailwind CSS.svg" },
      ],
    },
    {
      category: "backend",
      title: "Backend & Cloud",
      icon: <FaServer />,
      description:
        "Architecting scalable microservices, robust REST APIs, and database systems.",
      skills: [
        { name: "Node.js", logo: "/assets/skill-logos/nodejs.svg" },
        { name: "Express.js", logo: "/assets/skill-logos/express.svg" },
        { name: "Flask", logo: "/assets/skill-logos/flask.svg" },
        { name: "PostgreSQL", logo: "/assets/skill-logos/postgresql.svg" },
        { name: "MongoDB", logo: "/assets/skill-logos/mongodb.svg" },
      ],
    },
    {
      category: "aiml",
      title: "AI & ML ",
      icon: <FaMicrochip />,
      description:
        "Designing predictive machine learning pipelines, LLM agents, and cognitive systems.",
      skills: [
        { name: "Scikit-Learn", logo: "/assets/skill-logos/scikitlearn.svg" },
        { name: "Pandas", logo: "/assets/skill-logos/pandas.svg" },
        { name: "NumPy", logo: "/assets/skill-logos/numpy.svg" },
        { name: "Hugging Face", logo: "/assets/skill-logos/huggingface.svg" },
        { name: "LangChain", logo: "/assets/skill-logos/Langchain.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Technical Toolkit</span>
        </div>
        <h2 className="section-title">
          Skills & <span>Expertise</span>
        </h2>
        <p className="section-subtitle">
          A comprehensive suite of{" "}
          <span>technologies, libraries, and frameworks</span> I leverage to
          build robust software.
        </p>
      </div>

      <div className="skills-wrapper">
        <div className="skill-categories">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-cat-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{category.icon}</div>
                <div>
                  <h3 className="skill-cat-title">{category.title}</h3>
                  <p className="skill-cat-subtitle">{category.description}</p>
                </div>
              </div>

              <div className="skill-items-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-logo-wrap">
                      <img src={skill.logo} alt={skill.name} loading="lazy" />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
