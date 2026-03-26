import { useEffect, useState } from "react";
import { FaCode, FaGithub, FaCheckCircle, FaStar } from "react-icons/fa";
import { FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiMongodb } from "react-icons/si";

import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

import Hero from "../../Component/Home/Hero";
import About from "../../Component/Home/About";
import Projects from "../../Component/Home/Projects";
import Skills from "../../Component/Home/Skills";

import type { SkillCategory, Stat } from "../../types/home";
import type { Project } from "../../types/project";

import schoolWebsiteImg from '../../assets/project1.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Contact from "../../Component/Home/Contact";
import Testimonial from "../../Component/Home/Testimonial";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "School Management System",
      description: "A comprehensive web platform for school administration, student management, and academic tracking.",
      category: "fullstack" as const,
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      githubLink: "https://github.com/talentedusain/school-website",
      liveLink: "https://school-website.vercel.app",
      image: schoolWebsiteImg,
      features: ["Student registration", "Grade management", "Attendance tracking", "Admin dashboard"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management app with real-time updates",
      category: "fullstack" as const,
      technologies: ["React", "TypeScript", "Node.js"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      image: "",
      features: ["Real-time updates", "Task assignment", "Notifications"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Weather app with forecast and data visualization",
      category: "frontend" as const,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      image: "",
      features: ["Weather forecast", "Historical data", "Charts"],
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 70, icon: <FaReact /> },
        { name: "TypeScript", level: 75, icon: <SiTypescript /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript /> },
        { name: "Next.js", level: 40, icon: <SiNextdotjs /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 50, icon: <FaCode /> },
        { name: "Python", level: 60, icon: <FaPython /> },
        { name: "MongoDB", level:30, icon: <SiMongodb /> },
      ],
    },
  ];

  const stats: Stat[] = [
    { icon: <FaCode />, value: "20+", label: "Projects Completed" },
    { icon: <FaGithub />, value: "50+", label: "GitHub Repositories" },
    { icon: <FaCheckCircle />, value: "100%", label: "Client Satisfaction" },
    { icon: <FaStar />, value: "4.9", label: "Average Rating" },
  ];

  return (
    <div className={`homepage ${isVisible ? "fade-in" : ""}`}>
      <Navbar />
      <Hero stats={stats} />
      <About />
      <Projects projects={projects} />
      <Skills skillCategories={skillCategories} />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;