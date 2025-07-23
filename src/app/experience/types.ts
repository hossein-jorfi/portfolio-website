export interface Project {
  name: string;
  description: string;
}

export interface ExperienceItemProps {
  company: string;
  position: string;
  date: { start: string; end: string };
  description: string;
  projects: Project[];
}
