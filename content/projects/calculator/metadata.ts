import { calculator } from './summary';
import { Platform, Project, ProjectCategory, ProjectNature } from '@/types/project';

import {
  CSSSkill,
  HTMLSkill,
  JavaScriptSkill,
} from '@/consts/project-skills';

export const fullCalculator: Project = {
  ...calculator,
  technologies: [
    JavaScriptSkill,
    HTMLSkill,
    CSSSkill,
  ],
  readingTime: 2,
  nature: ProjectNature.ACADEMIC,
  status: 'finished',
  shortDescription: {
    "en-US": 'A functional calculator built with JavaScript, HTML, and CSS, designed as a hands-on project to practice JavaScript fundamentals and DOM manipulation while performing basic arithmetic operations.',
    "pt-BR": 'Uma calculadora funcional construída com JavaScript, HTML e CSS, desenvolvida como um projeto prático para exercitar fundamentos de JavaScript e manipulação de DOM através de operações aritméticas básicas.',
    "es-419": 'Una calculadora funcional construida con JavaScript, HTML y CSS, diseñada como un proyecto práctico para practicar los fundamentos de JavaScript y la manipulación del DOM mediante operaciones aritméticas básicas.'
  },
  fullDescription: {
    "en-US": `This calculator was developed as part of my studies in JavaScript and HTML DOM manipulation, focusing on building interactive interfaces using core web technologies. The application is fully functional and supports basic arithmetic operations such as addition, subtraction, multiplication, and division, as well as controls for deleting individual inputs and clearing the entire output. In addition to the functional aspects, the project features a modern and responsive design, highlighting my ability to create clean layouts and handle styling using vanilla CSS.`,
    "pt-BR": `Esta calculadora foi desenvolvida como parte dos meus estudos em JavaScript e manipulação de DOM no HTML, focando na construção de interfaces interativas utilizando tecnologias web fundamentais. A aplicação é totalmente funcional e suporta operações aritméticas básicas, como adição, subtração, multiplicação e divisão, além de controles para apagar entradas individuais e limpar todo o visor. Além dos aspectos funcionais, o projeto apresenta um design moderno e responsivo, destacando minha habilidade em criar layouts limpos e gerenciar estilos utilizando CSS puro (vanilla).`,
    "es-419": `Esta calculadora fue desarrollada como parte de mis estudios en JavaScript y manipulación del DOM en HTML, enfocándose en la construcción de interfaces interactivas utilizando tecnologías web fundamentales. La aplicación es completamente funcional y admite operaciones aritméticas básicas como suma, resta, multiplicación y división, así como controles para eliminar entradas individuales y limpiar toda la pantalla. Además de los aspectos funcionales, el proyecto presenta un diseño moderno y receptivo, destacando mi capacidad para crear diseños limpios y gestionar estilos utilizando CSS puro (vanilla).`
  },
  categories: [
    ProjectCategory.FRONTEND,
  ],
  links: [
    {
      platform: Platform.GITHUB,
      label: 'Front-end Github',
      url: 'https://github.com/rodrigsmor/Calculadora',
    },
    {
      platform: Platform.WEB,
      label: 'WEB',
      url: 'https://calculadora-git-main-rodrigomoreiradasilva.vercel.app/calculadora.html'
    }
  ],
  media: [
    {
      type: 'image',
      alt: 'Calculator Appearance',
      url: 'https://github.com/rodrigsmor/Calculadora/raw/main/assets/screenshots/Screenshot2.png',
    },
    {
      type: 'image',
      alt: 'Calculator Gif demonstration',
      url: 'https://github.com/rodrigsmor/Calculadora/blob/main/assets/images/Demonstra%C3%A7%C3%A3o_Calculadora.gif?raw=truef'
    }
  ],
  featured: true,
  createdAt: '2021-05-08T00:00:00.000Z',
  finishedAt: '2021-07-11T00:00:00.000Z',
  size: 'short'
};
