import { ProjectSlug, ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/MyNotes.png';

export const myNotes: ProjectSummary = {
  id: 'my_notes',
  slug: ProjectSlug.MYNOTES,
  title: 'MyNotes - Notes App',
  technologies: [
    'React.js',
    'Java',
    'Vite',
    'Styled Components',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  coverImage: {
    url: Cover.src,
    alt: '',
  },
}