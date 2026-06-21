import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target
      )
      .then(() => {
        alert("Message sent successfully ✅");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed ❌");
      });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact-line"></div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-card">
            <h3>Let's Connect</h3>
            <p>Let’s connect and build something great together.</p>
          </div>
          <div className="contact-card contact-info">
            <div className="icon-box">
              <FaEnvelope style={{ fontSize: "1.2rem" }} />
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:aniruddhasain315@gmail.com">
                aniruddhasain315@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-card contact-info">
            <div className="icon-box">
              <FaMapMarkerAlt style={{ fontSize: "1.2rem" }} />
            </div>
            <div>
              <h4>Location</h4>
              <p className="location">Durgapur, West Bengal</p>
            </div>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/Aniruddhasain7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aniruddha-sain-706220280"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/SainAniruddha"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Your Name" name="user_name" required />
            <label>Email</label>
            <input type="email" placeholder="Your Email" name="user_email" required />
            <label>Subject</label>
            <input type="text" placeholder="Your Subject" name="user_subject" />
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              name="user_message"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Send Message{" "}
              <FaPaperPlane style={{ marginLeft: "10px", fontSize: "0.9rem" }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
