export enum ProjectCategory {
  BACKEND = 'BACKEND',
  MOBILE = 'MOBILE',
  FRONTEND = 'FRONTEND',
  FULLSTACK = 'FULLSTACK',
  UI_UX = 'UI_UX',
  DATABASE = 'DATABASE'
}

export enum Platform {
  WEB = 'WEB',
  FIGMA = 'FIGMA',
  GITHUB = 'GITHUB',
  BEHANCE = 'BEHANCE',
  PLAYSTORE = 'PLAYSTORE',
  APPLESTORE = 'APPLESTORE'
}

export enum ProjectNature {
  ACADEMIC = 'Academic',       // Faculdade, cursos, bootcamps
  PERSONAL = 'Personal',       // Laboratório, estudos, "pôr em prática"
  COMMERCIAL = 'Commercial',   // Aplicações reais, Freelas, Projetos Open Source ativos
}

export type MediaContent =
  | { type: 'video'; url: string; poster?: string }
  | { type: 'image'; url: string; alt: string }
  | { type: 'embed'; url: string; provider: 'youtube' | 'vimeo' | 'codepen' };

export type ProjectLink = {
  url: string;
  platform: Platform;
  label?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  content?: string;
  readingTime?: number;
  nature: ProjectNature;
  origin?: string;
  status: 'In Production' | 'Archived' | 'Ongoing';
  shortDescription: string;
  fullDescription: string;
  categories: ProjectCategory[];
  technologies: string[];
  coverImage: {
    url: string;
    alt: string;
  };
  links: ProjectLink[];
  media: MediaContent[];
  featured: boolean;
  createdAt: string;
  finishedAt: string;
}

export type ProjectSummary = Pick<Project, 'id' | 'title' | 'slug' | 'coverImage' | 'technologies'>;