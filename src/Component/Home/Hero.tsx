import { FaArrowRight, FaDownload } from "react-icons/fa";
import type { Stat } from "../../types/home";
import "./Hero.css"
interface HeroProps {
  stats: Stat[];
}

const Hero: React.FC<HeroProps> = ({ stats }) => {
  return (
    <section className="hero-section py-5">
      <div className="container text-center">
        <h1 className="hero-title fw-bold mb-3">
          Hello, I'm <br />
          <span className="hero-highlight">TALENTEDUSAIN_DEV</span>
        </h1>

        <p className="hero-subtitle mb-4">
          I build modern web applications with React, TypeScript & Python.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <a href="#projects" className="btn hero-btn-primary btn-lg px-4">
            View Projects <FaArrowRight />
          </a>

          <a
            href="/resume.pdf"
            className="btn hero-btn-outline btn-lg px-4"
            download
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="row mt-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 mb-3">
              <div className="stat-card p-3">
                <div className="stat-icon mb-2">{stat.icon}</div>
                <h5 className="fw-bold">{stat.value}</h5>
                <small>{stat.label}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;