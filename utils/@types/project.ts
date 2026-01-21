import { LanguageCode } from "./lang";
import { Skill } from "./technologies";

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
  ACADEMIC = 'academic',
  PERSONAL = 'personal',
  COMMERCIAL = 'commercial',
}

export enum ProjectSlug {
  AION_TIMER = 'aion-timer',
  CALCULATOR = 'calculator',
  DIATASK = 'diatask',
  TASTYHUB = 'tastyhub',
  MARKETLIFY = 'marketlify',
  MYNOTES = 'mynotes',
  PERU_TRAVELL = 'peru-travell',
  CURRENCY_CONVERTER = 'currency-converter',
}

export type MediaContent =
  | { type: 'video'; url: string; alt: string; poster: string }
  | { type: 'image'; url: string; alt: string }
  | { type: 'embed'; url: string; alt: string; provider: 'youtube' | 'vimeo' | 'codepen' };

export type ProjectLink = {
  url: string;
  platform: Platform;
  label?: string;
}

export type ProjectDescription = {
  [key in LanguageCode]: string;
}

export interface Project {
  id: string;
  slug: ProjectSlug;
  title: string;
  readingTime?: number;
  nature: ProjectNature;
  origin?: string;
  size: 'short' | 'long' | 'medium';
  status: 'in_production' | 'archived' | 'ongoing' | 'finished';
  shortDescription: ProjectDescription;
  fullDescription: ProjectDescription;
  categories: ProjectCategory[];
  technologies: Skill[];
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

export type ProjectSummary = Pick<Project, 'id' | 'title' | 'slug' | 'coverImage'> & {
  technologies: string[];
};