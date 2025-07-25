import { ReactNode } from "react";

export interface Project {
  name: string;
  description: string;
  responsibilities?: string[];
  learnings?: string[];
  image?: string;
  icon?: ReactNode;
}

export interface ExperienceItemProps {
  company: string;
  position: string;
  date: { start: string; end: string };
  description: string;
  projects: Project[];
}
