// src/types/index.ts

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "Frontend" | "Backend" | "DevOps" | "AI/ML" | "Design";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string | null;
}

export interface Project {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  tags: string[];
  category: string;
  technologies: string[];
  github: string;
  demo: string;
  caseStudy: string | null;
  featured: boolean;
  large: boolean;
  year: number;
  metrics: Record<string, string | number | null | undefined>;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  logo: string | null;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string | null;
  initials: string;
  rating: number;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  cover: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export type SkillCategory = "All" | "Frontend" | "Backend" | "DevOps" | "AI/ML" | "Design";
export type ProjectCategory = "All" | "SaaS" | "Analytics" | "OSS" | "E-commerce" | "AI";
