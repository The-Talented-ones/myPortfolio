import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { SiX } from "react-icons/si"
import "./Footer.css";

const Footer = () => {
  const navigation = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const socials = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/talentedusain",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oloyede-ameer-306569276/",
    },
    {
          icon: SiX,
          label: "X",
          href: "https://x.com/TheTalented_dev",
        },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">

      {/* =========================================
          TOP ACCENT LINE
      ========================================= */}

      <div className="footer-accent-line" />

      <div className="container">

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className="footer-main">

          {/* =======================================
              BRAND
          ======================================= */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              TALENTEDUSAIN
              <span>_DEV</span>
            </a>

            <p className="footer-description">
              Building modern digital experiences
              that combine clean design, solid
              engineering, and real-world value.
            </p>

            {/* Social Links */}

            <div className="footer-socials">

              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer-social-link"
                  >
                    <Icon />
                  </a>
                );
              })}

            </div>

          </div>

          {/* =======================================
              NAVIGATION
          ======================================= */}

          <div className="footer-navigation">

            <span className="footer-heading">
              Navigation
            </span>

            <nav>
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="footer-nav-link"
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>

          {/* =======================================
              CTA
          ======================================= */}

          <div className="footer-cta">

            <span className="footer-heading">
              Have a project?
            </span>

            <p>
              Let's turn your idea into
              something meaningful.
            </p>

            <a
              href="#contact"
              className="footer-cta-link"
            >
              Let's work together
              <span>→</span>
            </a>

          </div>

        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <div className="footer-copyright">
            © {new Date().getFullYear()} TalentedUsain.
            All rights reserved.
          </div>

          <div className="footer-built">

            Built with
            <FaHeart className="footer-heart" />
            React & TypeScript

          </div>

          {/* Back To Top */}

          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;