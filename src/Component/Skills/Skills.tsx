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

import type { SkillCategory } from "../../types/home";

const fallbackSkills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Frontend Development", level: 95, icon: <FaLaptopCode /> },
      { name: "React Ecosystem", level: 90, icon: <FaCode /> },
      { name: "TypeScript", level: 88, icon: <FaCode /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Backend Development", level: 72, icon: <FaDatabase /> },
      { name: "UI / UX", level: 80, icon: <FaPaintBrush /> },
    ],
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

type SkillsProps = {
  skillCategories: SkillCategory[];
};

const Skills = ({ skillCategories }: SkillsProps) => {
  const categories = skillCategories && skillCategories.length ? skillCategories : fallbackSkills;

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

            {categories.flatMap((category) =>
              category.skills.map((skill) => (
                <div className="skill-item" key={`${category.category}-${skill.name}`}>
                  <div className="skill-title">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>

                      <span>{skill.name}</span>
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
              ))
            )}
          </div>

          {/* RIGHT */}

          <div className="tech-stack-card">
            <h3>Technology Stack</h3>

            {categories.map((category) => (
              <div key={category.category} className="tech-group">
                <h4>{category.category}</h4>

                <div className="tech-badges">
                  {category.skills.map((skill) => (
                    <span key={`${category.category}-${skill.name}`}>{skill.name}</span>
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
