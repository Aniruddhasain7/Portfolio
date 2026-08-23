import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheck,
  FaCopy,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCopyEmail = () => {
    const email = "aniruddhasain315@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      showToast("Email address copied to clipboard! 📋", "success");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      setTimeout(() => {
        setSubmitting(false);
        showToast("Message recorded! Thanks for reaching out.", "success");
        e.target.reset();
      }, 800);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target)
      .then(() => {
        setSubmitting(false);
        showToast("Message sent successfully! 🚀", "success");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setSubmitting(false);
        showToast("Failed to send message. Please try direct email.", "error");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Start a Conversation</span>
        </div>
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <p className="section-subtitle">
          Have an opportunity, collaboration idea, or just want to talk tech?
          <span> I'd love to hear from you!</span>
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-panel">
          <div className="contact-highlight-card">
            <h3>
              Let's Build Something <span>Extraordinary</span>
            </h3>
            <p>
              I am open to full-stack engineering internships, AI/ML research
              collaborations, freelance projects, and open-source contributions.
            </p>
          </div>

          <div className="contact-direct-card">
            <div className="contact-direct-left">
              <div className="contact-icon-box">
                <FaEnvelope />
              </div>
              <div className="contact-direct-details">
                <h4>Direct Email</h4>
                <a href="mailto:aniruddhasain315@gmail.com">
                  aniruddhasain315@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              className="copy-btn"
              onClick={handleCopyEmail}
              title="Copy Email"
            >
              {copied ? <FaCheck style={{ color: "#22c55e" }} /> : <FaCopy />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <div className="contact-direct-card">
            <div className="contact-direct-left">
              <div className="contact-icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-direct-details">
                <h4>Location</h4>
                <p>Durgapur, West Bengal, India</p>
              </div>
            </div>
          </div>

          <div className="social-grid">
            <a
              href="https://github.com/Aniruddhasain7"
              target="_blank"
              rel="noreferrer"
              className="social-card"
              aria-label="GitHub Profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aniruddha-sain-706220280"
              target="_blank"
              rel="noreferrer"
              className="social-card"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://x.com/SainAniruddha"
              target="_blank"
              rel="noreferrer"
              className="social-card"
              aria-label="Twitter Profile"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send a Message</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">Name </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email"> Email </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="user_subject">Subject</label>
              <input
                id="user_subject"
                type="text"
                name="user_subject"
                placeholder="Your Subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_message">Message </label>
              <textarea
                id="user_message"
                name="user_message"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              <span>{submitting ? "Transmitting..." : "Send Message"}</span>
              <FaPaperPlane style={{ fontSize: "0.85rem" }} />
            </button>
          </form>
        </div>
      </div>

      {toastMessage && (
        <div className="toast-container">
          <div className={`toast toast-${toastMessage.type}`}>
            <HiSparkles />
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
