import { peruTravell } from './summary';
import { Platform, Project, ProjectCategory, ProjectNature } from '@/types/project';

import {
  CSSSkill,
  HTMLSkill,
  JavaScriptSkill,
} from '@/consts/project-skills';

export const fullTastyhub: Project = {
  ...peruTravell,
  technologies: [
    HTMLSkill,
    CSSSkill,
    JavaScriptSkill
  ],
  readingTime: 10,
  nature: ProjectNature.ACADEMIC,
  status: 'in_production',
  shortDescription: {
    "en-US": 'Peru Travel is an informative website dedicated to promoting tourism in Peru, showcasing cultural, historical aspects, and curiosities about the country. The project was developed using HTML, CSS, and JavaScript as part of my computer science education, focusing on web development fundamentals.',
    "pt-BR": 'Peru Travel é um site informativo voltado à divulgação do turismo no Peru, apresentando aspectos culturais, históricos e curiosidades sobre o país. O projeto foi desenvolvido com HTML, CSS e JavaScript, como parte da minha formação em informática, com foco em fundamentos do desenvolvimento web.',
    "es-419": 'Peru Travel es un sitio informativo dedicado a la difusión del turismo en Perú, presentando aspectos culturales, históricos y curiosidades sobre el país. El proyecto fue desarrollado con HTML, CSS y JavaScript como parte de mi formación en informática, con un enfoque en los fundamentos del desarrollo web.'
  },
  fullDescription: {
    "en-US": `
      Peru Travel is an academic project developed to apply fundamental web development concepts in practice. The application was built using pure (vanilla) HTML, CSS, and JavaScript, without frameworks, strengthening the understanding of the web's core.
      \n\n
      The website's theme is the promotion of tourism in Peru, gathering information about the country's culture, history, and curiosities, while encouraging contact with different cultural realities in Latin America.
      \n\n
      During development, several concepts were explored, such as:
      \n
      - Semantic structuring with HTML;\n
      - Styling and responsiveness with CSS;\n
      - Interactivity and DOM manipulation with JavaScript.
      \n\n
      The project played an important role in strengthening my technical foundation, especially in understanding best practices for code organization, styling, and front-end logic, serving as a solid initial step in my journey as a developer.
    `,
    "pt-BR": `
      Peru Travel é um projeto desenvolvido no contexto acadêmico com o objetivo de aplicar, na prática, os conceitos fundamentais do desenvolvimento web. A aplicação foi construída utilizando HTML, CSS e JavaScript puro (vanilla), sem o uso de frameworks, reforçando a compreensão da base da web.
      \n\n
      O site tem como temática o incentivo ao turismo no Peru, reunindo informações sobre a cultura, história e curiosidades do país, além de promover o contato com diferentes realidades culturais da América Latina.
      \n\n
      Durante o desenvolvimento, foram explorados conceitos como:
      \n
      - Estruturação semântica com HTML;\n
      - Estilização e responsividade com CSS;\n
      - Interatividade e manipulação do DOM com JavaScript.
      \n\n
      O projeto teve papel importante no fortalecimento da base técnica, especialmente no entendimento de boas práticas de organização de código, estilização e lógica de front-end, servindo como um passo inicial sólido na minha trajetória como desenvolvedor.
    `,
    "es-419": `
      Peru Travel es un proyecto desarrollado en el contexto académico con el objetivo de aplicar, en la práctica, los conceptos fundamentales del desarrollo web. La aplicación fue construida utilizando HTML, CSS y JavaScript puro (vanilla), sin el uso de frameworks, reforzando la comprensión de la base de la web.
      \n\n
      El sitio tiene como temática el incentivo al turismo en Perú, reuniendo información sobre la cultura, historia y curiosidades del país, además de promover el contacto con diferentes realidades culturales de América Latina.
      \n\n
      Durante el desarrollo, se exploraron conceptos como:
      \n
      - Estructuración semántica con HTML;\n
      - Estilización y responsividad con CSS;\n
      - Interactividad y manipulación del DOM con JavaScript.
      \n\n
      El proyecto tuvo un papel importante en el fortalecimiento de mi base técnica, especialmente en el entendimiento de las buenas prácticas de organización de código, estilización y lógica de front-end, sirviendo como un paso inicial sólido en mi trayectoria como desarrollador.
    `
  },
  categories: [
    ProjectCategory.FRONTEND,
  ],
  links: [
    {
      platform: Platform.WEB,
      url: 'https://peru-travell.netlify.app/',
      label: 'WEB'
    },
    {
      platform: Platform.GITHUB,
      url: 'https://github.com/rodrigsmor/Travell-guide',
      label: 'Github'
    }
  ],
  media: [
    {
      type: 'image',
      alt: 'Peru Travell Cover',
      url: peruTravell.coverImage.url,
    },
    {
      type: 'image',
      alt: 'Peru Travell Home Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768938039/PeruTravellHome_1_ocuvfh.png',
    },
    {
      type: 'image',
      alt: 'Peru Travell Tourism',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768938035/TourismPeru_qbtpja.png',
    },
    {
      type: 'image',
      alt: 'Peru Travell History',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768938039/PeruTravellHistory_Culture_1_kwx7wj.png',
    },
    {
      type: 'image',
      alt: 'Peru Curiosities',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768937674/PeruCuriosities_ge5s2o.png',
    },
  ],
  featured: false,
  createdAt: '2021-11-11T00:00:00.000Z',
  finishedAt: '2021-11-11T00:00:00.000Z',
  size: 'short'
};
