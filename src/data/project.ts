import type { Project } from "../types/project";
import schoolWebsiteImg from '../assets/project1.png';
import mealSearchImg from "../assets/MealSearchImg.jpg";
import myPortfolioImg from "../assets/myPortfolioImg.jpg";
import todoList from "../assets/project2.jpg";

// Edit this list to add or update cards. Each object renders one ProjectCard.
export const projects: Project[] = [
  {
    id: 1,
    title: "An Academic Platform for School Management",
    description: "A comprehensive web platform for school recognition and global connectivity.",
    technologies: ["React", "TypeScript", "Bootstrap", "Node.js"],
    githubLink: "https://github.com/talentedusain/school-website",
    liveLink: "https://al-hikmah-daarul-salam-islamic-scho.vercel.app/",
    image: schoolWebsiteImg,
    features: ["Student registration", "Grade management", "Attendance tracking", "Admin dashboard"],
    category: "frontend"
  },
  {
    id: 2,
    title: "A Simple Todolist System",
    description: "A task management app with scheduling, tracking, and team collaboration features.",
    technologies: ["Html", "JavaScript", "CSS", ],
    githubLink: "https://github.com/The-Talented-ones",
    liveLink: "https://todo-list-project-teal-chi.vercel.app/",
    image: todoList,
    features: ["Task scheduling", "Activity tracking", "Team collaboration", "Notifications"],
    category: "frontend"
  },
  {
    id: 3,
    title: "A MealSearch App",
    description: "A meal search application that allows users to discover recipes, create meal plans, and track nutritional information.",
    technologies: ["React", "TypeScript", "Bootstrap", "Node.js"],
    githubLink: "https://github.com/The-Talented-ones",
    liveLink: "https://meal-search-app-nine.vercel.app/",
    image: mealSearchImg,
    features: ["Recipe discovery", "Meal planning", "Nutritional tracking", "Responsive design"],
    category: "frontend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A polished personal showcase with animated sections and project highlights.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/The-Talented-ones",
    liveLink: "https://my-portfolio-one-pi-85.vercel.app/",
    image: myPortfolioImg,
    features: ["Animated sections", "Project highlights", "Responsive design", "Contact form"],
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