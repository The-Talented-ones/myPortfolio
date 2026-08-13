import "./About.css";
import profileImg from "../../assets/profile.jpg";

import {
  FaReact,
  FaBootstrap,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

const technologies = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <SiPython />,
    name: "Python",
  },
  {
    icon: <SiHtml5 />,
    name: "HTML5",
  },
  {
    icon: <SiCss3 />,
    name: "CSS3",
  },
  {
    icon: <SiGit />,
    name: "Git",
  },
];

const beliefs = [
  "Clean Architecture",
  "Performance First",
  "Responsive Design",
  "Scalable Code",
  "Accessibility",
  "Great User Experience",
];

const timeline = [
  {
    year: "2023",
    title: "Started Software Engineering",
    description:
      "Began my journey in Software Engineering, learning programming fundamentals and problem-solving.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Focused on HTML, CSS, JavaScript and responsive web development.",
  },
  {
    year: "2025",
    title: "React Ecosystem",
    description:
      "Worked extensively with React, TypeScript, Bootstrap and modern frontend architecture.",
  },
  {
    year: "2026",
    title: "Building Production Applications",
    description:
      "Developing scalable applications, personal projects and expanding into full-stack development.",
  },
];

const achievements = [
  {
    value: "20+",
    label: "Projects Completed",
    icon: <FaCode />,
  },
  {
    value: "2+",
    label: "Years Learning",
    icon: <FaLaptopCode />,
  },
  {
    value: "100%",
    label: "Responsive Design",
    icon: <FaReact />,
  },
  {
    value: "Open",
    label: "Available for Work",
    icon: <FaBriefcase />,
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* ================= HEADER ================= */}

        <div className="section-heading">
          <span className="section-badge">ABOUT ME</span>

          <h2>
            Building Digital Experiences
            <span> That Matter.</span>
          </h2>

          <p>
            Passionate about transforming ideas into fast, scalable and modern
            web applications.
          </p>
        </div>

        {/* ================= GRID ================= */}

        <div className="about-grid">
          {/* =====================================
                PROFILE CARD
          ===================================== */}

          <aside className="profile-card">
            <div className="profile-image">
              <div className="profile-ring">
                <img src={profileImg} alt="TalentedUsain" />
              </div>
            </div>

            <h3>TalentedUsain</h3>

            <p className="profile-role">Frontend Engineer</p>

            <div className="profile-info">
              <div>
                <FaMapMarkerAlt />

                <span>Nigeria</span>
              </div>

              <div>
                <FaGraduationCap />

                <span>Software Engineering</span>
              </div>

              <div>
                <FaBriefcase />

                <span>Available for Work</span>
              </div>
            </div>

            <div className="profile-socials">
              <a
                href="https://github.com/talentedusain"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </aside>

          {/* =====================================
                ABOUT CONTENT
          ===================================== */}

          <div className="about-content">
            <span className="mini-title">WHO I AM</span>

            <h3>
              Software Engineer focused on building products people enjoy using.
            </h3>

            <p>
              I'm a Software Engineering student and Frontend Developer
              passionate about building beautiful digital products. I enjoy
              solving real-world problems through clean, maintainable and
              scalable software solutions.
            </p>

            <p>
              My goal is to create applications that are not only visually
              appealing but also optimized for performance, accessibility and
              long-term maintainability.
            </p>

            {/* Beliefs */}

            <div className="belief-grid">
              {beliefs.map((item) => (
                <div className="belief-card" key={item}>
                  <FaCode />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="about-btn">
              Let's Work Together
              <FaArrowRight />
            </a>
          </div>

          {/* =====================================
                 TECH STACK
          ===================================== */}

          <div className="tech-card">
            <div className="card-title">
              <FaLaptopCode />

              <h4>Tech Stack</h4>
            </div>

            <div className="tech-grid">
              {technologies.map((tech) => (
                <div className="tech-item" key={tech.name}>
                  <div className="tech-icon">{tech.icon}</div>

                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================
      DEVELOPER JOURNEY
===================================== */}

        <div className="timeline-section">
          <div className="timeline-header">
            <span>MY JOURNEY</span>

            <h3>Developer Timeline</h3>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-dot">{item.year}</div>

                <div className="timeline-content">
                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
        ACHIEVEMENTS
===================================== */}

        <div className="achievement-section">
          <div className="achievement-header">
            <span>ACHIEVEMENTS</span>

            <h3>Numbers That Reflect My Journey</h3>
          </div>

          <div className="achievement-grid">
            {achievements.map((item, index) => (
              <div className="achievement-card" key={index}>
                <div className="achievement-icon">{item.icon}</div>

                <h2>{item.value}</h2>

                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
