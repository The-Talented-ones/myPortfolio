import "./Projects.css";
import { useState } from "react";

import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
} from "react-icons/fa";

import type { Project } from "../../types/project";
import movieAppImg from "../../assets/movie-app.jpg";

// import dashboardImg from "../../assets/Components/projects/dashboard.png";

const categories = ["All", "Frontend", "Full Stack", "React", "Python"];

const featuredProject = {
  title: "Movie Discovery Platform",
  description:
    "A Netflix-inspired movie discovery platform built with React, TypeScript and the TMDB API. Users can explore trending movies, browse by genres, search for titles and enjoy a clean, responsive interface.",

  image: movieAppImg,

  technologies: ["React", "TypeScript", "Bootstrap", "TMDB API", "Axios"],

  features: ["Authentication", "Responsive", "Dark Mode", "REST API"],

  github: "https://github.com/The-Talented-ones",

  live: "https://talux-net.vercel.app/",
};

type ProjectsProps = {
  projects?: Project[];
};

const Projects = ({ projects = [] }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="projects-section" id="projects">
      <div className="projects-glow left"></div>
      <div className="projects-glow right"></div>

      <div className="container">
        {/* ================= HEADER ================= */}

        <div className="projects-header">
          <span className="section-badge">FEATURED PROJECTS</span>

          <h2>
            Turning Ideas Into
            <span> Digital Experiences</span>
          </h2>

          <p>
            A collection of projects demonstrating my passion for building
            modern, scalable and user-focused web applications.
          </p>
        </div>

        {/* ================= FILTER ================= */}

        <div className="project-filter">
          {categories.map((item) => (
            <button
              key={item}
              className={`filter-btn ${activeFilter === item ? "active" : ""}`}
              onClick={() => setActiveFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {/* ================= FEATURED ================= */}

        <div className="featured-project">
          <div className="featured-image">
            <img src={featuredProject.image} alt={featuredProject.title} />

            <div className="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="featured-content">
            {/* Badge */}

            <div className="featured-tag">
              <FaStar />
              Featured Case Study
            </div>

            {/* Title */}

            <h3>{featuredProject.title}</h3>

            {/* Description */}

            <p className="featured-description">
              {featuredProject.description}
            </p>

            {/* Divider */}

            <div className="featured-divider"></div>

            {/* Quick Stats */}

            <div className="project-stats">
              <div className="stat-box">
                <h4>{featuredProject.features.length}</h4>

                <span>Features</span>
              </div>

              <div className="stat-box">
                <h4>{featuredProject.technologies.length}</h4>

                <span>Technologies</span>
              </div>

              <div className="stat-box">
                <h4>React</h4>

                <span>Stack</span>
              </div>

              <div className="stat-box">
                <h4>2026</h4>

                <span>Built</span>
              </div>
            </div>

            <div className="featured-divider"></div>

            {/* Tech */}

            <h5 className="content-title">Tech Stack</h5>

            <div className="tech-stack">
              {featuredProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="featured-divider"></div>

            {/* Highlights */}

            <h5 className="content-title">Project Highlights</h5>

            <div className="feature-list">
              {featuredProject.features.map((item) => (
                <div className="feature-item" key={item}>
                  ✓ {item}
                </div>
              ))}
            </div>

            {/* Footer */}

            <div className="featured-footer">
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noreferrer"
                className="live-btn"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* ================= OTHER PROJECTS ================= */}

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              {/* Browser Window */}

              <div className="project-browser">
                <span></span>

                <span></span>

                <span></span>
              </div>

              {/* Screenshot */}

              <div className="project-image">
                <img src={project.image || movieAppImg} alt={project.title} />

                <div className="project-overlay">
                  <a href={project.liveLink || "#"} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>

                  <a href={project.githubLink || "#"} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Content */}

              <div className="project-content">
                <h4>{project.title}</h4>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.liveLink || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        {/* ================= FOOTER ================= */}

        <div className="projects-footer">
          <div className="projects-footer-card">
            <div className="footer-content">
              <span className="footer-badge">MORE PROJECTS</span>

              <h3>Want to See More?</h3>

              <p>
                Explore more of my projects, experiments and open-source
                contributions on GitHub.
              </p>
            </div>

            <div className="footer-buttons">
              <a
                href="https://github.com/talentedusain"
                target="_blank"
                rel="noreferrer"
                className="github-footer-btn"
              >
                <FaGithub />
                Visit GitHub
              </a>

              <a href="#contact" className="contact-footer-btn">
                Let's Work Together
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
