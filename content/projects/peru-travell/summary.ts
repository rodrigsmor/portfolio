import { ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/PeruTravell.png';

export const peruTravell: ProjectSummary = {
  id: 'peru_travell',
  slug: 'peru-travell',
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