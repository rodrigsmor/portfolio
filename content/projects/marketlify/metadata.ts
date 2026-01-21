import { marketlify } from './summary';
import { Platform, Project, ProjectCategory, ProjectNature } from '@/types/project';

import {
  CSSSkill,
  HTMLSkill,
  JavaScriptSkill,
  ReactJSSkill,
  StyledComponentsSkill,
} from '@/consts/project-skills';

export const fullMarketlify: Project = {
  ...marketlify,
  technologies: [
    ReactJSSkill,
    JavaScriptSkill,
    StyledComponentsSkill,
    CSSSkill,
    HTMLSkill,
  ],
  readingTime: 5,
  nature: ProjectNature.ACADEMIC,
  status: 'finished',
  shortDescription: {
    "en-US": 'Marketlify is a landing page developed as part of the Hiring Coders Bootcamp (2021), simulating a Black Friday campaign for a fictional marketplace. The project was built with React.js, JavaScript, and Styled Components, applying solid HTML and CSS fundamentals.',
    "pt-BR": 'Marketlify é uma landing page desenvolvida como parte do Bootcamp Hiring Coders (2021), que simula a divulgação de uma campanha de Black Friday para um marketplace fictício. O projeto foi construído com React.js, JavaScript e Styled Components, aplicando fundamentos sólidos de HTML e CSS.',
    "es-419": 'Marketlify es una landing page desarrollada como parte del Bootcamp Hiring Coders (2021), que simula la difusión de una campaña de Black Friday para un mercado virtual ficticio. El proyecto fue construido con React.js, JavaScript y Styled Components, aplicando fundamentos sólidos de HTML y CSS.'
  },
  fullDescription: {
    "en-US": `Marketlify is a landing page created to practically apply the knowledge acquired during the Hiring Coders Bootcamp in 2021. The project proposes to simulate the promotion of an annual Black Friday campaign for a fictional marketplace, exploring essential front-end development concepts.

      The application was developed with React.js, JavaScript, and Styled Components, using HTML and CSS fundamentals to build a consistent and responsive interface. During development, concepts such as state management, componentization, and time control were implemented, resulting in a functional and dynamic countdown.

      Despite being conceived for educational purposes, the project features a modern, responsive interface with subtle animations, reinforcing a commitment to user experience and styling best practices within the React ecosystem.`,
    "pt-BR": `Marketlify é uma landing page criada para aplicar, na prática, os conhecimentos adquiridos durante o Bootcamp Hiring Coders, do qual participei em 2021. O projeto tem como proposta simular a divulgação de uma campanha anual de Black Friday para um marketplace fictício, explorando conceitos essenciais do desenvolvimento front-end.

      A aplicação foi desenvolvida com React.js, JavaScript e Styled Components, utilizando fundamentos de HTML e CSS para construir uma interface consistente e responsiva. Durante o desenvolvimento, foram trabalhados conceitos como manipulação de estado, componentização e controle de tempo, resultando em um countdown funcional e dinâmico.

      Apesar de ter sido concebido com fins educacionais, o projeto apresenta uma interface moderna, responsiva e com animações sutis, reforçando a preocupação com experiência do usuário e boas práticas de estilização no ecossistema React.`,
    "es-419": `Marketlify es una landing page creada para aplicar, en la práctica, los conocimientos adquiridos durante el Bootcamp Hiring Coders, en el cual participé en 2021. El proyecto propone simular la difusión de una campaña anual de Black Friday para un mercado virtual (marketplace) ficticio, explorando conceptos esenciales del desarrollo front-end.

      La aplicación fue desarrollada con React.js, JavaScript y Styled Components, utilizando fundamentos de HTML y CSS para construir una interfaz consistente y adaptativa (responsive). Durante el desarrollo, se trabajaron conceptos como la gestión de estados, la creación de componentes y el control del tiempo, resultando en un contador regresivo (countdown) funcional y dinámico.

      A pesar de haber sido concebido con fines educativos, el proyecto presenta una interfaz moderna, receptiva y con animaciones sutiles, reforzando la preocupación por la experiencia del usuario y las buenas prácticas de diseño dentro del ecosistema de React.`,
  },
  categories: [
    ProjectCategory.FRONTEND,
  ],
  links: [
    {
      platform: Platform.GITHUB,
      label: 'Github',
      url: 'https://github.com/rodrigsmor/Landing-Page',
    },
    {
      platform: Platform.WEB,
      label: 'WEB',
      url: 'https://marketlify.netlify.app/'
    }
  ],
  media: [
    {
      type: 'image',
      alt: 'marketlify Cover',
      url: marketlify.coverImage.url,
    },
    {
      type: 'image',
      alt: 'Marketlify Mobile',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769006572/MarketlifyMobile_uu79tw.png',
    },
    {
      type: 'image',
      alt: 'Marketlify Web',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769006571/MarketlifyPage_p17axr.png'
    }
  ],
  featured: false,
  createdAt: '2021-07-12T00:00:00.000Z',
  finishedAt: '2021-07-20T00:00:00.000Z',
  size: 'short'
};
