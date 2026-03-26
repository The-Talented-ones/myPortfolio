import { useEffect, useState } from "react";
import {
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiMail,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { useTheme } from "../../Context/ThemeContext";
import profileImg from "../../assets/profile.png";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";

  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Emerald Brand Theme ===== */
  const greenTheme = {
    light: {
      primary: "#10B981",
      secondary: "#059669",
      accent: "#059669",
      background: "#f8fafc",
      text: "#1e293b",
      navBg: "rgba(248, 250, 252, 0.92)",
    },
    dark: {
      primary: "#34D399",
      secondary: "#10B981",
      accent: "#A3E635",
      background: "#0a192f",
      text: "#ccd6f6",
      navBg: "rgba(10, 25, 47, 0.92)",
    },
  };

  const currentTheme = darkMode ? greenTheme.dark : greenTheme.light;

  const navItems = [
    {
      id: "home",
      label: "Home",
      href: "#home",
      icon: <FiHome className="me-2" />,
    },
    {
      id: "about",
      label: "About",
      href: "#about",
      icon: <FiUser className="me-2" />,
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      icon: <FiBriefcase className="me-2" />,
    },
    {
      id: "skills",
      label: "Skills",
      href: "#skills",
      icon: <FiCode className="me-2" />,
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      icon: <FiMail className="me-2" />,
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/talentedusain",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/oloyede-ameer-306569276/",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter />,
      href: "https://twitter.com/talentedusain",
      label: "Twitter",
    },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-lg-4 px-3 ${
        darkMode ? "navbar-dark" : "navbar-light"
      } ${scrolled ? "py-2 shadow-lg" : "py-3"}`}
      style={{
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        background: scrolled ? currentTheme.navBg : currentTheme.background,
        borderBottom: scrolled ? `1px solid ${currentTheme.primary}20` : "none",
      }}
    >
      {/* ===== Logo ===== */}
      <a
        className="navbar-brand d-flex align-items-center text-decoration-none"
        href="#home"
      >
        <img
          src={profileImg}
          className="rounded-3 me-2 position-relative"
          style={{
            width: "44px",
            height: "44px",
            background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.accent})`,
          }}
          alt="Profile"
        />

        <div className="d-flex flex-column">
          <span className="fw-bold" style={{ color: currentTheme.primary }}>
            TALENTEDUSAIN
          </span>
          <small style={{ color: currentTheme.secondary }}>Web Developer</small>
        </div>
      </a>

      {/* ===== Mobile Toggle ===== */}
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span
          className="navbar-toggler-icon"
          style={{
            filter: darkMode ? "invert(1)" : "none",
          }}
        />
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        {/* ===== Nav Items ===== */}
        <ul className="navbar-nav mx-auto gap-1">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className="nav-link d-flex align-items-center px-3 py-2 rounded-3"
                style={{
                  color:
                    activeNav === item.id
                      ? currentTheme.primary
                      : currentTheme.text,
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ===== Right Side ===== */}
        <div className="d-flex align-items-center gap-3">
          {/* Social Links */}
          <div className="d-flex gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: currentTheme.text,
                  fontSize: "18px",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="btn d-flex align-items-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
              color: "#fff",
              borderRadius: "8px",
              padding: "6px 14px",
            }}
          >
            <FiFileText />
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn p-2"
            style={{
              borderRadius: "8px",
              border: `1px solid ${currentTheme.primary}30`,
            }}
          >
            {darkMode ? (
              <FiSun style={{ color: currentTheme.accent }} />
            ) : (
              <FiMoon style={{ color: currentTheme.primary }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
