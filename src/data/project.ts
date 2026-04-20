import type { Project } from "../types/project";
import schoolWebsiteImg from '../assets/project1.png';
import todoList from "../assets/project2.jpg";

// Edit this list to add or update cards. Each object renders one ProjectCard.
export const projects: Project[] = [
  {
    id: 1,
    title: "An Academic Platform for School Management",
    description: "A comprehensive web platform for school recognition and global connectivity.",
    technologies: ["React", "TypeScript", "Bootstrap", "Node.js"],
    githubLink: "https://github.com/talentedusain/school-website",
    liveLink: "https://alhikmahdaarussalaam.com.ng/",
    image: schoolWebsiteImg,
    features: ["Student registration", "Grade management", "Attendance tracking", "Admin dashboard"],
    category: "frontend"
  },
  {
    id: 2,
    title: "Todolist System",
    description: "A task management app with scheduling, tracking, and team collaboration features.",
    technologies: ["Html", "JavaScript", "CSS", ],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    image: todoList,
    features: ["Task scheduling", "Activity tracking", "Team collaboration", "Notifications"],
    category: "frontend"
  },
  {
    id: 3,
    title: "A Movie App",
    description: "A platform to discover movies, view details, and create watchlists with a sleek UI.",
    technologies: ["React", "TypeScript", "Bootstrap", "Node.js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    image: "",
    features: ["Movie discovery", "Watchlist management", "User reviews", "Responsive design"],
    category: "frontend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A polished personal showcase with animated sections and project highlights.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    image: "",
    features: ["Responsive design", "Dark mode", "Contact form", "SEO-friendly"],
    category: "frontend"
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "Generate beautiful images from prompts using AI-powered models.",
    technologies: ["Next.js", "OpenAI", "TypeScript", "Chakra UI"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    image: "",
    features: ["Prompt builder", "Image gallery", "Download support", "Style presets"],
    category: "backend"
  },
];