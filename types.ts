
export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  image: string;
  category: 'software' | 'embedded';
  liveUrl?: string;
  githubUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  certificateUrl?: string;
}
