export interface ProofItem {
  type: 'live' | 'screenshot' | 'award' | 'doc' | 'article';
  label: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  org: string;
  label: 'Personal Project' | 'Organization' | 'Competition' | 'International' | 'Faculty-Funded';
  tagline: string;
  date: string;
  coverEmoji: string;
  coverColor: string;
  problem: string;
  solution: string;
  process: string;
  result: string;
  tools: string[];
  images: string[];
  proof: ProofItem[];
}
