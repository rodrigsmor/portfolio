import { ProjectSlug, ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/TastyHub.png';

export const tastyhub: ProjectSummary = {
  id: 'tastyhub',
  slug: ProjectSlug.TASTYHUB,
  title: 'Tastyhub — Recipes Web Platform',
  technologies: [
    'Next.js',
    'React.js',
    'Typescript',
    'Java',
    'HTML',
    'CSS',
    'Spring Security',
    'Spring Boot',
    'Docker'
  ],
  coverImage: {
    url: Cover.src,
    alt: '',
  },
}