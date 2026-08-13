import "./Skills.css";

import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaDraftingCompass,
  FaBug,
  FaRocket,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend Development",
    level: 95,
    icon: <FaLaptopCode />,
  },
  {
    title: "React Ecosystem",
    level: 90,
    icon: <FaCode />,
  },
  {
    title: "TypeScript",
    level: 88,
    icon: <FaCode />,
  },
  {
    title: "Backend Development",
    level: 72,
    icon: <FaDatabase />,
  },
  {
    title: "UI / UX",
    level: 80,
    icon: <FaPaintBrush />,
  },
];

const techStack = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    items: ["React", "Bootstrap", "Next.js", "Vite"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
  {
    title: "Currently Learning",
    items: ["Node.js", "Express", "MongoDB", "Docker"],
  },
];

const workflow = [
  {
    icon: <FaSearch />,
    title: "Research",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design",
  },
  {
    icon: <FaCode />,
    title: "Develop",
  },
  {
    icon: <FaBug />,
    title: "Test",
  },
  {
    icon: <FaRocket />,
    title: "Deploy",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-glow left"></div>
      <div className="skills-glow right"></div>

      <div className="container">
        {/* ================= HEADER ================= */}

        <div className="skills-header">
          <span className="section-badge">TECHNICAL EXPERTISE</span>

          <h2>
            Building Software With
            <span> Modern Technologies</span>
          </h2>

          <p>
            My toolkit combines strong engineering fundamentals with modern
            frameworks, enabling me to build scalable, maintainable and
            user-focused digital products.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="skills-wrapper">
          {/* LEFT */}

          <div className="skills-progress-card">
            <h3>Professional Skills</h3>

            {skills.map((skill) => (
              <div className="skill-item" key={skill.title}>
                <div className="skill-title">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>

                    <span>{skill.title}</span>
                  </div>

                  <span className="skill-percent">{skill.level}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}

          <div className="tech-stack-card">
            <h3>Technology Stack</h3>

            {techStack.map((group) => (
              <div key={group.title} className="tech-group">
                <h4>{group.title}</h4>

                <div className="tech-badges">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= WORKFLOW ================= */}

        <div className="workflow-section">
          <h3>Development Workflow</h3>

          <div className="workflow">
            {workflow.map((step, index) => (
              <div className="workflow-item" key={step.title}>
                <div className="workflow-icon">{step.icon}</div>

                <h5>{step.title}</h5>

                {index < workflow.length - 1 && (
                  <div className="workflow-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        {/* ================= FOOTER CTA ================= */}

        <div className="skills-footer">
          <div className="skills-footer-card">
            <span className="footer-badge">LET'S BUILD TOGETHER</span>

            <h2>
              Turning Ideas Into
              <span> Powerful Digital Products</span>
            </h2>

            <p>
              Whether you need a responsive website, a modern web application,
              or a reliable software solution, I'm ready to help transform your
              ideas into reality.
            </p>

            <div className="footer-buttons">
              <a href="#contact" className="primary-btn">
                Let's Talk
                <FaArrowRight />
              </a>

              <a href="#projects" className="secondary-btn">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
