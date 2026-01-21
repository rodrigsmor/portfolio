import { ProjectSlug, ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/CurrencyConverter.png';

export const currencyConverter: ProjectSummary = {
  id: 'currency_converter',
  slug: ProjectSlug.CURRENCY_CONVERTER,
  title: 'Currency Converter',
  technologies: [
    'Next.js',
    'Nest.js',
    'Docker',
  ],
  coverImage: {
    url: Cover.src,
    alt: 'Currency Converter Cover'
  },
};