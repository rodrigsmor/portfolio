import { ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/Calculadora.png';

export const calculator: ProjectSummary = {
  id: 'calculator',
  slug: 'calculator',
  title: 'Calculator',
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