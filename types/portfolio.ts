import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { IconType } from "react-icons";

export type AppPath =
  | "/"
  | "/skills"
  | "/experience"
  | "/education"
  | "/projects"
  | "/contact";

export type NavLinkId =
  | "home"
  | "skills"
  | "experience"
  | "education"
  | "projects"
  | "contact";

export interface NavLinkItem {
  id: NavLinkId;
  icon: IconType;
  text: string;
  path: AppPath;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  tasks: string[];
  technologies?: string[];
}

export interface ProjectItem {
  title: string;
  date: string;
  description: string;
  tech: IconDefinition[];
  demo: string;
  code: string;
}

export interface SkillItem {
  name: string;
  icon: IconDefinition;
}

export interface SkillCategory {
  title: string;
  icon: IconDefinition;
  items: SkillItem[];
}

export interface SkillsCollection {
  backend: SkillCategory;
  frontend: SkillCategory;
  tools: SkillCategory;
  languages?: SkillCategory;
  other?: SkillCategory;
}