import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "2348061465119"; 

    const rawMessage = `Hello, I saw your portfolio. Here are my details:\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(rawMessage);

    // ✅ FIXED: Added the missing / and \$ symbols here
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };


  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "thetalentedusain2k1@gmail.com",
      href: "mailto:thetalentedusain2k1@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Osogbo, Nigeria",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/The-Talented-ones",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oloyede-ameer-306569276/",
    },
    {
      icon: SiX,
      label: "X",
      href: "https://x.com/TheTalented_dev",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow contact-glow-left" />
      <div className="contact-glow contact-glow-right" />

      <div className="container">
        <div className="contact-header">
          <span className="section-badge">LET'S CONNECT</span>
          <h2>
            Have a Project in Mind?
            <span> Let's Build It.</span>
          </h2>
          <p>
            I'm always open to discussing new projects, creative ideas, collaborations, and opportunities to build something meaningful.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT — CONTACT INFORMATION */}
          <div className="contact-info-card">
            <div className="contact-card-heading">
              <span className="contact-icon-main">
                <FaPaperPlane />
              </span>
              <div>
                <span className="small-label">GET IN TOUCH</span>
                <h3>Let's start a conversation</h3>
              </div>
            </div>

            <p className="contact-description">
              Whether you have a project idea, need technical assistance, or simply want to connect, feel free to reach out.
            </p>

            <div className="contact-details">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="contact-detail" key={item.label}>
                    <div className="contact-detail-icon">
                      <Icon />
                    </div>
                    <div>
                      <span>{item.label}</span>
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="availability">
              <span className="availability-dot" />
              <div>
                <strong>Available for opportunities</strong>
                <span>Freelance · Collaboration · Internship</span>
              </div>
            </div>

            <div className="contact-social">
              <span>Find me online</span>
              <div className="social-links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="contact-form-card">
            <div className="form-heading">
              <span className="small-label">SEND A MESSAGE</span>
              <h3>Tell me about your project</h3>
              <p>Fill out the form and I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Let's work together"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me a little about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
