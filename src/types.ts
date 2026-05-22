export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  icon: string; // lucide icon name
  category: 'frontend' | 'backend' | 'tools' | 'other';
  color: string; // tailwind color class e.g. 'from-purple-500 to-indigo-500'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string; // Image URL/placeholder
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  stats?: string; // e.g. "98.8% Satisfaction" or "+45% Conversion"
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  icon: string; // lucide icon name
  type: 'experience' | 'education';
}

export interface ClientLogo {
  name: string;
  iconSvg: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
}
