import { ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/DiaTask.png';

export const diaTask: ProjectSummary = {
  id: 'dia_task',
  slug: 'dia-task',
  title: 'DiaTask - Organizador de tarefas e projetos',
  technologies: [
    'Figma',
    'UI/UX Design',
    'Software Development',
    'Next.js',
    'Nest.js',
    'Docker',
  ],
  coverImage: {
    url: Cover.src,
    alt: ''
  },
};