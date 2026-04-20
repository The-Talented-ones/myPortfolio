import { useEffect, useState } from "react";
import { FaCode, FaGithub, FaCheckCircle, FaStar } from "react-icons/fa";
import { FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiMongodb } from "react-icons/si";

import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

import Hero from "../../Component/Home/Hero";
import About from "../../Component/About/About";
import Projects from "../../Component/Projects/Projects";
import Skills from "../../Component/Skills/Skills";

import type { SkillCategory, Stat } from "../../types/home";
import { projects } from "../../data/project";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Contact from "../../Component/Contact/Contact";
import Testimonial from "../../Component/Testimonial/Testimonial";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


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