import type { ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: "frontend" | "backend" | "fullstack";
}

export interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Stat {
  icon: ReactNode;
  value: string;
  label: string;
}