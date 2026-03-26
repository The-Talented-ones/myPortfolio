import {
  FaReact,
  FaCode,
  FaMobile,
  FaRocket,
  FaUserGraduate,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import "./About.css";

const About = () => {
  const coreExpertise = [
    {
      icon: SiJavascript,
      name: "JavaScript",
      description: "Modern ES6+ Development",
      color: "#F7DF1E",
    },
    {
      icon: FaReact,
      name: "React",
      description: "Component-Based UI",
      color: "#61DAFB",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      description: "Type-Safe Code",
      color: "#3178C6",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      description: "Full-Stack React",
      color: "#000000",
    },
    {
      icon: SiHtml5,
      name: "HTML5",
      description: "Semantic Markup",
      color: "#E34F26",
    },
    {
      icon: SiCss3,
      name: "CSS3",
      description: "Modern Styling",
      color: "#1572B6",
    },
  ];

  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Maintainable & scalable architecture",
    },
    {
      icon: FaMobile,
      title: "Mobile-First",
      description: "Responsive across all devices",
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Optimized for speed & UX",
    },
    {
      icon: FaUserGraduate,
      title: "Continuous Learning",
      description: "Always exploring new tech",
    },
  ];

  return (
    <section id="about" className="py-5 bg-light dark:bg-gray-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gray-800 dark:text-white">
            About <span className="text-emerald dark:text-emerald-400">Me</span>
          </h2>
        </div>

        <div className="row g-4">
          {/* Left Column - About Content */}
          <div className="col-lg-6">
            <div className="about-content pe-lg-4">
              <h3 className="h4 fw-semibold mb-4 text-gray-800 dark:text-white">
                👋 Hi, I'm{" "}
                <span className="text-emerald dark:text-emerald-400">
                  TalentedUsain
                </span>
              </h3>

              <p className="lead text-secondary dark:text-gray-300 mb-4">
                Web Developer & Software Engineer focused on building fast,
                scalable, and user-centered digital products.
              </p>

              <div className="mb-4">
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  I don't just build websites or software—I design digital
                  experiences that help individuals, startups, and organizations
                  turn their ideas into functional, high-performing solutions.
                </p>

                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  With a strong foundation in web development and modern
                  frameworks, I transform complex concepts into intuitive,
                  responsive, and reliable applications.
                </p>

                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  I prioritize{" "}
                  <span className="fw-semibold text-emerald dark:text-emerald-400">
                    performance, usability, and maintainable code
                  </span>
                  , ensuring every project works seamlessly across devices and
                  scales with your needs.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="row g-3 mb-4">
                {highlights.map((item, index) => (
                  <div key={index} className="col-6">
                    <div className="d-flex align-items-start gap-2">
                      <div className="highlight-icon text-emerald dark:text-emerald-400 mt-1">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1 text-gray-800 dark:text-white">
                          {item.title}
                        </h6>
                        <small className="text-secondary dark:text-gray-400">
                          {item.description}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-4">
                <a
                  href="#contact"
                  className="btn btn-emerald px-4 py-2 rounded-pill bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white transition-colors"
                >
                  Let's Collaborate
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              {/* Core Expertise Card */}
              <div className="col-12">
                <div className="skill-card p-4 bg-white dark:bg-gray-800 rounded-4 shadow-sm dark:shadow-gray-900">
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <div className="skill-icon-bg bg-emerald-light dark:bg-emerald-900/30 p-2 rounded-3">
                      <FaCode
                        className="text-emerald dark:text-emerald-400"
                        size={24}
                      />
                    </div>
                    <h5 className="fw-semibold mb-0 text-gray-800 dark:text-white">
                      Core Expertise
                    </h5>
                  </div>

                  <div className="row g-3">
                    {coreExpertise.map((skill, index) => (
                      <div key={index} className="col-6 col-md-4">
                        <div className="skill-item p-3 rounded-3 text-center hover-effect bg-gray-50 dark:bg-gray-700/50 transition-all">
                          <skill.icon
                            size={32}
                            style={{ color: skill.color }}
                            className="mb-2"
                          />
                          <h6 className="fw-semibold mb-1 small text-gray-800 dark:text-white">
                            {skill.name}
                          </h6>
                          <small className="text-secondary dark:text-gray-400 d-block">
                            {skill.description}
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
