import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/about.png" alt="About Me" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a Computer Science and Engineering undergraduate with a
            strong passion for Artificial Intelligence, Machine Learning, and
            Web Development. I enjoy building real-world, scalable
            applications that solve practical problems.
          </p>
          <p>
            With a solid foundation in programming and data-driven
            technologies, I continuously strive to enhance my technical
            expertise and problem-solving abilities. I am driven by curiosity,
            innovation, and the desire to create impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
