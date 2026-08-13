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
import logo from "../../assets/logo.png";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const darkMode = theme === "dark";

  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "skills", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveNav(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =======================
        BRAND THEME
  ======================== */

  const brandTheme = {
    light: {
      primary: "#1976F3",
      secondary: "#1257E5",
      accent: "#4DA3FF",
      navy: "#071B4D",

      background: "#FFFFFF",
      surface: "#F8FAFC",

      text: "#102A43",

      navBg: "rgba(255,255,255,.92)",

      shadow: "0 8px 25px rgba(7,27,77,.08)",
    },

    dark: {
      primary: "#3B82F6",
      secondary: "#2563EB",
      accent: "#60A5FA",
      navy: "#EAF2FF",

      background: "#081225",
      surface: "#0F172A",

      text: "#F8FAFC",

      navBg: "rgba(8,18,37,.94)",

      shadow: "0 8px 25px rgba(0,0,0,.35)",
    },
  };

  const currentTheme = darkMode
    ? brandTheme.dark
    : brandTheme.light;

  const navItems = [
    {
      id: "home",
      label: "Home",
      href: "#home",
      icon: <FiHome />,
    },
    {
      id: "about",
      label: "About",
      href: "#about",
      icon: <FiUser />,
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      icon: <FiBriefcase />,
    },
    {
      id: "skills",
      label: "Skills",
      href: "#skills",
      icon: <FiCode />,
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      icon: <FiMail />,
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/talentedusain",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/oloyede-ameer-306569276/",
    },
    {
      icon: <FiTwitter />,
      href: "https://twitter.com/talentedusain",
    },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-lg-5 px-3 ${
        darkMode ? "navbar-dark" : "navbar-light"
      }`}
      style={{
        transition: ".35s ease",
        backdropFilter: "blur(14px)",
        background: scrolled
          ? currentTheme.navBg
          : "transparent",

        boxShadow: scrolled
          ? currentTheme.shadow
          : "none",

        borderBottom: scrolled
          ? `1px solid ${currentTheme.primary}15`
          : "none",

        paddingTop: scrolled ? ".7rem" : "1rem",
        paddingBottom: scrolled ? ".7rem" : "1rem",
      }}
    >
      {/* LOGO */}

      <a
        href="#home"
        className="navbar-brand d-flex align-items-center text-decoration-none"
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: 52,
            height: 52,
            objectFit: "contain",
          }}
        />

        <div className="ms-2">
          <div
            style={{
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: ".5px",
              color: currentTheme.navy,
            }}
          >
            TALENTEDUSAIN
          </div>

          <small
            style={{
              color: currentTheme.primary,
              fontWeight: 500,
            }}
          >
            Frontend Developer
          </small>
        </div>
      </a>

      {/* MOBILE */}

      <button
        className="navbar-toggler border-0 shadow-none"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span
          className="navbar-toggler-icon"
          style={{
            filter: darkMode ? "invert(1)" : "none",
          }}
        />
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarMenu"
      >
        {/* NAV LINKS */}

        <ul className="navbar-nav mx-auto gap-lg-2 mt-3 mt-lg-0">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="nav-item"
            >
              <a
                href={item.href}
                className="nav-link px-3 py-2 rounded-pill d-flex align-items-center gap-2"
                onClick={() => setActiveNav(item.id)}
                style={{
                  fontWeight: 500,

                  transition: ".3s",

                  color:
                    activeNav === item.id
                      ? "#fff"
                      : currentTheme.text,

                  background:
                    activeNav === item.id
                      ? `linear-gradient(135deg,
                        ${currentTheme.primary},
                        ${currentTheme.secondary})`
                      : "transparent",
                }}
              >
                {item.icon}

                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT */}

        <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
          {/* SOCIALS */}

          <div className="d-flex gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: "50%",

                  textDecoration: "none",

                  color: currentTheme.navy,

                  background: darkMode
                    ? "#112240"
                    : "#F5F9FF",

                  border: `1px solid ${currentTheme.primary}20`,

                  transition: ".3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    currentTheme.primary;

                  e.currentTarget.style.color = "#fff";

                  e.currentTarget.style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    darkMode
                      ? "#112240"
                      : "#F5F9FF";

                  e.currentTarget.style.color =
                    currentTheme.navy;

                  e.currentTarget.style.transform =
                    "translateY(0)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* RESUME */}

          <a
            href="/resume.pdf"
            download
            className="btn"
            style={{
              padding: "10px 18px",

              borderRadius: "50px",

              color: "#fff",

              fontWeight: 600,

              background: `linear-gradient(135deg,
              ${currentTheme.primary},
              ${currentTheme.navy})`,

              border: "none",

              display: "flex",
              alignItems: "center",
              gap: 8,

              transition: ".3s",
            }}
          >
            <FiFileText />

            Resume
          </a>

          {/* THEME */}

          <button
            onClick={toggleTheme}
            className="btn"
            style={{
              width: 42,
              height: 42,

              borderRadius: "50%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background: darkMode
                ? "#112240"
                : "#F5F9FF",

              border: `1px solid ${currentTheme.primary}20`,
            }}
          >
            {darkMode ? (
              <FiSun
                size={18}
                color={currentTheme.accent}
              />
            ) : (
              <FiMoon
                size={18}
                color={currentTheme.primary}
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}