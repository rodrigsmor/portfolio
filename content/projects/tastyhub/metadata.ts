import { tastyhub } from './summary';
import { Project, ProjectCategory, ProjectNature } from '@/types/project';

export const fullTastyhub: Project = {
  ...tastyhub,
  content: '',
  readingTime: 10,
  nature: ProjectNature.PERSONAL,
  status: 'ongoing',
  shortDescription: '',
  fullDescription: '',
  categories: [
    ProjectCategory.FULLSTACK,
    ProjectCategory.BACKEND,
    ProjectCategory.FRONTEND,
    ProjectCategory.UI_UX
  ],
  links: [],
  media: [
    {
      type: 'image',
      alt: '',
      url: '',
    }
  ],
  featured: true,
  createdAt: '2023-09-10T00:00:00.000Z',
  finishedAt: '',
  size: 'long'
};
