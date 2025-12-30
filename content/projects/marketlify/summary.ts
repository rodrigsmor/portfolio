import { ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/Marketlify.png';

export const marketlify: ProjectSummary = {
  id: 'marketlify',
  slug: 'marketlify',
  title: 'Marketlify - Marketplace Landing Page',
  technologies: [
    'React.js',
    'JavaScript',
    'Styled Components',
    'HTML',
    'CSS',
  ],
  coverImage: {
    url: Cover.src,
    alt: '',
  },
}