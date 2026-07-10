export interface Project {
  id: string;
  title: string;
  description: string;
  category: "AI" | "Backend" | "Automation";
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export interface TechItem {
  name: string;
  level: string; // "Expert" | "Advanced" | "Intermediate"
  category: "languages" | "ai" | "frameworks" | "databases" | "infra";
  details: string;
}
