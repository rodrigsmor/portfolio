import { ProjectSlug, ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/PeruTravell.png';

export const peruTravell: ProjectSummary = {
  id: 'peru_travell',
  slug: ProjectSlug.PERU_TRAVELL,
  title: 'Peru Travell - Tourism to Peru',
  technologies: [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  coverImage: {
    url: Cover.src,
    alt: '',
  },
}