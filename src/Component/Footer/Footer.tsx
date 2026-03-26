// Footer.tsx
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaCode } from 'react-icons/fa';
import profileImg from '../../assets/profile.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <div className="brand-container">
                            {/* Modern Logo */}
                            <div className="logo-wrapper">
                                <img src={profileImg} className="footer-logo-img" alt="Profile" />
                                <div className="logo-text">
                                    <span className="logo-main">TALENTEDUSAIN</span>
                                    <span className="logo-sub">WEB DEVELOPER</span>
                                </div>
                            </div>

                            <p className="brand-description">
                                The trusted platform for campus services and skill exchange. 
                                Connecting students with reliable providers.
                            </p>

                            {/* Social Links */}
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.linkedin.com/in/oloyede-ameer-306569276/" className="social-link" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="#" className="social-link" aria-label="Email">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-col">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#services">About us </a></li>
                            <li><a href="#how-it-works">Skills</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                  

                    {/* Contact Info */}
                    <div className="footer-contact-col">
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>talentedUsain2k1@gmail.com</span>
                            </li>
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>+234 806 146 5119</span>
                            </li>
                            <li className="address-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <p>Osun State University,Urp</p>
                                    <p>University Main Campus</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="copyright">
                        <FaCode className="copyright-icon" />
                        <p>© {new Date().getFullYear()} TALENTEDUSAIN_DEV. All rights reserved. Designed by a web developer.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;