import Cover from '@/public/covers/TastyHub.png';
import { ProjectSlug, ProjectSummary } from '@/types/project';

export const tastyhub: ProjectSummary = {
  id: 'tastyhub',
  slug: ProjectSlug.TASTYHUB,
  title: 'Tastyhub — Recipes Web Platform',
  technologies: ['Java', 'Spring Boot', 'Next.js'],
  coverImage: {
    url: Cover.src,
    alt: '',
  },
}