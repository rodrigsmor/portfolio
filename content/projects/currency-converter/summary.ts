import { ProjectSummary } from '@/types/project';
import Cover from '@/public/covers/CurrencyConverter.png';

export const currencyConverter: ProjectSummary = {
  id: 'currency_converter',
  slug: 'currency-converter',
  title: 'Currency Converter',
  technologies: [
    'Next.js',
    'Nest.js',
    'Docker',
  ],
  coverImage: {
    url: Cover.src,
    alt: 'Interface do conversor de moedas'
  },
};