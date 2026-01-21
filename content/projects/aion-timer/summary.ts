import { ProjectSlug, ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/AionTimer.png';

export const aionTimer: ProjectSummary = {
  id: 'aion_timer',
  slug: ProjectSlug.AION_TIMER,
  title: 'Aion Timer - Focus & Flow Tracker',
  technologies: [
    'Figma',
    'UI/UX Design',
    'Design',
  ],
  coverImage: {
    url: Cover.src,
    alt: ''
  },
};