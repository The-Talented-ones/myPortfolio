import { useEffect, useState } from "react";
import {
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

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;
        const bottom = top + element.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveNav(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==============================
        BRAND COLORS
  ============================== */

  const brand = {
    primary: "#1976F3",
    secondary: "#1257E5",
    accent: "#4DA3FF",
    navy: "#071B4D",

    background: "#FFFFFF",
    text: "#102A43",

    navBg: "rgba(255, 255, 255, 0.92)",

    shadow:
      "0 8px 25px rgba(7, 27, 77, 0.08)",
  };

  /* ==============================
        NAVIGATION
  ============================== */

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

  /* ==============================
        SOCIAL LINKS
  ============================== */

  const socialLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/The-Talented-ones",
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
      className="navbar navbar-expand-lg fixed-top px-lg-5 px-3"
      style={{
        transition: "all 0.35s ease",

        backdropFilter: "blur(14px)",

        background: brand.navBg,

        boxShadow: scrolled
          ? brand.shadow
          : "none",

        borderBottom: scrolled
          ? `1px solid ${brand.primary}15`
          : "none",

        paddingTop: scrolled
          ? "0.7rem"
          : "1rem",

        paddingBottom: scrolled
          ? "0.7rem"
          : "1rem",
      }}
    >
      {/* =================================
            LOGO
      ================================= */}

      <a
        href="#home"
        className="navbar-brand d-flex align-items-center text-decoration-none"
      >
        <img
          src={logo}
          alt="TalentedUsain Logo"
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
              color: brand.navy,
              lineHeight: 1.2,
            }}
          >
            TALENTEDUSAIN_DEV
          </div>

          <small
            style={{
              color: brand.primary,
              fontWeight: 500,
            }}
          >
            Frontend Developer
          </small>
        </div>
      </a>

      {/* =================================
            MOBILE TOGGLE
      ================================= */}

      <button
        className="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* =================================
            NAVBAR CONTENT
      ================================= */}

      <div
        className="collapse navbar-collapse"
        id="navbarMenu"
      >
        {/* =================================
              NAV LINKS
        ================================= */}

        <ul className="navbar-nav mx-auto gap-lg-2 mt-3 mt-lg-0">
          {navItems.map((item) => {
            const isActive =
              activeNav === item.id;

            return (
              <li
                key={item.id}
                className="nav-item"
              >
                <a
                  href={item.href}
                  className="nav-link px-3 py-2 rounded-pill d-flex align-items-center gap-2"
                  onClick={() =>
                    setActiveNav(item.id)
                  }
                  style={{
                    fontWeight: 500,

                    transition:
                      "all 0.3s ease",

                    color: isActive
                      ? "#FFFFFF"
                      : brand.text,

                    background: isActive
                      ? `linear-gradient(
                          135deg,
                          ${brand.primary},
                          ${brand.secondary}
                        )`
                      : "transparent",

                    boxShadow: isActive
                      ? `0 5px 15px ${brand.primary}25`
                      : "none",
                  }}
                >
                  {item.icon}

                  <span>
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* =================================
              RIGHT SIDE
        ================================= */}

        <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">

          {/* =================================
                SOCIAL LINKS
          ================================= */}

          <div className="d-flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: 40,
                  height: 40,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: "50%",

                  textDecoration: "none",

                  color: brand.navy,

                  background: "#F5F9FF",

                  border: `1px solid ${brand.primary}20`,

                  transition:
                    "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    brand.primary;

                  e.currentTarget.style.color =
                    "#FFFFFF";

                  e.currentTarget.style.transform =
                    "translateY(-3px)";

                  e.currentTarget.style.boxShadow =
                    `0 8px 18px ${brand.primary}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "#F5F9FF";

                  e.currentTarget.style.color =
                    brand.navy;

                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.boxShadow =
                    "none";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* =================================
                RESUME BUTTON
          ================================= */}

          <a
            href="/resume.pdf"
            download
            className="btn"
            style={{
              padding: "10px 18px",

              borderRadius: "50px",

              color: "#FFFFFF",

              fontWeight: 600,

              background:
                `linear-gradient(
                  135deg,
                  ${brand.primary},
                  ${brand.secondary}
                )`,

              border: "none",

              display: "flex",
              alignItems: "center",
              gap: 8,

              boxShadow:
                `0 7px 18px ${brand.primary}20`,

              transition:
                "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-2px)";

              e.currentTarget.style.boxShadow =
                `0 10px 25px ${brand.primary}35`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";

              e.currentTarget.style.boxShadow =
                `0 7px 18px ${brand.primary}20`;
            }}
          >
            <FiFileText />

            Resume
          </a>

        </div>
      </div>
    </nav>
  );
}