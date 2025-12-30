import { currencyConverter } from './summary';
import { Project, Platform, ProjectCategory, ProjectNature } from '@/types/project';

export const fullCurrencyConverter: Project = {
  ...currencyConverter,
  content: '',
  readingTime: 10,
  nature: ProjectNature.PERSONAL,
  status: 'Ongoing',
  shortDescription: 'A currency converter featuring 100+ supported currencies, multilingual support in English and Portuguese. Built using Next.js for the frontend and styled with Styled Components, complemented by a Nest.js backend. It integrates with the ExchangeRate api and is containerized with Docker.',
  fullDescription: 'This is a simple currency converter application that supports over 160 currencies. You can easily perform currency conversions based on your preferences and access exchange rates for various other options. The core of the application was built in TypeScript, with a backend in Nest.js and a frontend in Next.js, also implementing Docker for container management and environment manipulation.',
  categories: [
    ProjectCategory.FRONTEND,
    ProjectCategory.UI_UX
  ],
  links: [
    {
      label: 'Github',
      platform: Platform.GITHUB,
      url: 'https://github.com/rodrigsmor/currency-converter'
    },
    {
      label: 'Figma Design',
      platform: Platform.FIGMA,
      url: 'https://www.figma.com/file/2qdeWssnXH9s4TqY1M7kM4/Currency-Converter?type=design&node-id=0%3A1&mode=design&t=t7QExgWVf1qgCNK6-1'
    },
    {
      label: 'Behance link',
      platform: Platform.BEHANCE,
      url: 'https://www.behance.net/gallery/182514075/Currency-Converter-Practical-Project'
    }
  ],
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
};
