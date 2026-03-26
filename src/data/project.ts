import type { Project } from "../types/project";
import schoolWebsiteImg from '../assets/project1.png';
import todoList from "../assets/project2.jpg";

export const projects: Project[] = [
  {
    id: 1,
    title: "School Management System",
    description: "A comprehensive web platform for school administration, student management, and academic tracking.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubLink: "https://github.com/talentedusain/school-website",
    liveLink: "https://alhikmahdaarussalaam.com.ng/",
    image: schoolWebsiteImg,
    features: ["Student registration", "Grade management", "Attendance tracking", "Admin dashboard"],
    category: "fullstack"
  },
  {
    id: 2,
    title: "TodoList App",
    description: "A Online Educational Platform .",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubLink: "https://github.com/talentedusain/school-website",
    liveLink: "https://alhikmahdaarussalaam.com.ng/",
    image: todoList,
    features: ["Student registration", "Grade management", "Attendance tracking", "Admin dashboard"],
    category: "fullstack"
  }
];