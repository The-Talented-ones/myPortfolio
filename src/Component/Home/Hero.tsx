import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

import { FiCheckCircle } from "react-icons/fi";

import type { Stat } from "../../types/home";

import "./Hero.css";

interface HeroProps {
  stats: Stat[];
}

const techStack = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
];

export default function Hero({ stats }: HeroProps) {
  return (
    <section id="home" className="hero">

      {/* Background */}

      <div className="hero-grid-bg"></div>

      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container">

        <div className="hero-wrapper">

          {/* LEFT */}

          <div className="hero-content">

            <span className="hero-badge">

              <span className="hero-status"></span>

              Available for Work

            </span>

            <h1 className="hero-title">

              Frontend Engineer

              <span>

                {" "}
                & Software Developer

              </span>

            </h1>

            <p className="hero-description">

              I build fast, scalable and modern web
              applications with React, TypeScript and Python,
              helping startups and businesses create digital
              products that users genuinely enjoy.

            </p>

            <div className="hero-actions">

              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects

                <FaArrowRight />
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                <FaDownload />

                Resume
              </a>

            </div>

            {/* Tech */}

            <div className="hero-tech">

              {techStack.map((tech) => (

                <div
                  className="tech-chip"
                  key={tech.name}
                >
                  {tech.icon}

                  <span>{tech.name}</span>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-panel">

            <div className="terminal-card">

              <div className="terminal-header">

                <div className="terminal-dots">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <p>developer-terminal</p>

              </div>

              <div className="terminal-body">

                <p>

                  <span className="prompt">$</span>

                  npm run talentedusain

                </p>

                <div className="terminal-output">

                  <div>

                    <FiCheckCircle />

                    React Developer

                  </div>

                  <div>

                    <FiCheckCircle />

                    TypeScript

                  </div>

                  <div>

                    <FiCheckCircle />

                    REST APIs

                  </div>

                  <div>

                    <FiCheckCircle />

                    Responsive UI

                  </div>

                  <div>

                    <FiCheckCircle />

                    Performance Optimization

                  </div>

                </div>

                <div className="terminal-status">

                  <span className="status-dot"></span>

                  Available for Freelance

                </div>

              </div>

            </div>

            <div className="hero-socials">

              <a
                href="https://github.com/talentedusain"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/oloyede-ameer-306569276"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="hero-stats">

          {stats.map((stat, index) => (

            <div
              className="stat-card"
              key={index}
            >
              <div className="stat-icon">

                {stat.icon}

              </div>

              <h2>{stat.value}</h2>

              <p>{stat.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}