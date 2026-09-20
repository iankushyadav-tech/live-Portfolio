export interface SkillItem {
  name: string;
  category: 'Programming' | 'Data Analytics' | 'Data Visualization' | 'Web Technologies';
  level: number; // percentage (realistic for 2nd year student, e.g. 75-88%)
  experienceLevel: 'Proficient' | 'Intermediate' | 'Developing';
  icon: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  highlights: string[];
  impact: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  deliverables: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  period: string;
  status: 'Completed Foundation' | 'In Progress' | 'Active Practice';
  category: string;
  summary: string;
  skillsAcquired: string[];
}
