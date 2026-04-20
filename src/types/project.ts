export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  features?: string[];
  category: 'frontend' | 'backend' | 'fullstack';
}