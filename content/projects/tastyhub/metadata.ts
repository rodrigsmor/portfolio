import { tastyhub } from './summary';
import { Platform, Project, ProjectCategory, ProjectNature } from '@/types/project';

import {
  CSSSkill,
  CypressSkill,
  DockerSkill,
  FigmaSkill,
  FirebaseSkill,
  HTMLSkill,
  JavaSkill,
  JestSkill,
  JUnitSkill,
  JWTSkill,
  MockitoSkill,
  NextJSSkill,
  PostgreSQLSkill,
  ReactJSSkill,
  SpringSecuritySkill,
  SpringSkill,
  StorybookSkill,
  SwaggerSkill,
  TypescriptSkill
} from '@/consts/project-skills';

export const fullTastyhub: Project = {
  ...tastyhub,
  technologies: [
    JavaSkill,
    FigmaSkill,
    SpringSkill,
    SpringSecuritySkill,
    JUnitSkill,
    CypressSkill,
    NextJSSkill,
    ReactJSSkill,
    HTMLSkill,
    CSSSkill,
    JestSkill,
    StorybookSkill,
    DockerSkill,
    TypescriptSkill,
    JWTSkill,
    MockitoSkill,
    PostgreSQLSkill,
    FirebaseSkill,
    SwaggerSkill
  ],
  readingTime: 10,
  nature: ProjectNature.PERSONAL,
  status: 'archived',
  shortDescription: {
    "en-US": "Tastyhub is a social recipe-sharing platform created to connect chefs, cooks, and food enthusiasts. Users can publish recipes, rate them, interact with the community, and build connections, turning every meal into a more collaborative and tasty experience.",
    "pt-BR": 'Tastyhub é uma plataforma social de compartilhamento de receitas criada para conectar chefs, cozinheiros e entusiastas da gastronomia. Nela, usuários podem publicar receitas, avaliá-las, interagir com a comunidade e criar conexões, transformando cada refeição em uma experiência mais colaborativa e saborosa.',
    "es-419": 'Tastyhub es una plataforma social para compartir recetas creada para conectar a chefs, cocineros y entusiastas de la gastronomía. En ella, los usuarios pueden publicar recetas, calificarlas, interactuar con la comunidad y crear conexiones, transformando cada comida en una experiencia más colaborativa y sabrosa.'
  },
  fullDescription: {
    "en-US": `Tastyhub is a Full Stack project that simulates a complete recipe-sharing platform, developed with a focus on software engineering best practices and user experience.
      
      The application was built using modern technologies and advanced concepts, such as well-defined software architecture, unit and integration testing, containerization with Docker, and authentication/authorization via JWT. The project also explores complex data modeling and advanced queries in relational databases, ensuring scalability and information consistency.
      
      Key features include:

      - Recipe creation, editing, and rating;
      - Organization of recipes into personalized collections;
      - Comments on recipes and articles;
      - Update feed with social network interactions;
      - User connection system.
      
      Beyond the technical aspects, Tastyhub was designed with special attention to UI/UX, applying advanced usability and design principles to offer an intuitive, accessible, and pleasant experience. The project represents a balance between technical quality, robust architecture, and user-centered design, serving as an ideal environment for consolidating and expanding professional software development knowledge.`,
    "pt-BR": `Tastyhub é um projeto Full Stack que simula uma plataforma completa de compartilhamento de receitas, desenvolvido com foco em boas práticas de engenharia de software e experiência do usuário.

      A aplicação foi construída utilizando tecnologias modernas e conceitos avançados, como arquitetura de software bem definida, testes unitários e de integração, containerização com Docker e autenticação e autorização via JWT. O projeto também explora modelagem de dados complexa e consultas avançadas em bancos de dados relacionais, garantindo escalabilidade e consistência das informações.

      Entre as principais funcionalidades estão:

      - Criação, edição e avaliação de receitas;
      - Organização de receitas em coleções personalizadas;
      - Comentários em receitas e artigos;
      - Feed de atualizações com interações da rede de contatos;
      - Sistema de conexões entre usuários.

      Além do aspecto técnico, o Tastyhub foi projetado com atenção especial a UI/UX, aplicando princípios avançados de usabilidade e design para oferecer uma experiência intuitiva, acessível e agradável. O projeto representa um equilíbrio entre qualidade técnica, arquitetura robusta e design centrado no usuário, sendo um ambiente ideal para consolidar e expandir conhecimentos em desenvolvimento de software profissional.`,
    "es-419": `Tastyhub es un proyecto Full Stack que simula una plataforma completa para compartir recetas, desarrollado con un enfoque en las mejores prácticas de ingeniería de software y la experiencia del usuario.
      
      La aplicación se construyó utilizando tecnologías modernas y conceptos avanzados, como una arquitectura de software bien definida, pruebas unitarias y de integración, contenedorización con Docker y autenticación/autorización vía JWT. El proyecto también explora el modelado de datos complejos y consultas avanzadas en bases de datos relacionales, garantizando la escalabilidad y consistência de la información.
      
      Entre las funcionalidades principales se encuentran:
      - Creación, edición y calificación de recetas;
      - Organización de recetas en colecciones personalizadas;
      - Comentarios en recetas y artículos;
      - Feed de actualizaciones con interacciones de la red de contactos;
      - Sistema de conexiones entre usuarios.
      
      Además del aspecto técnico, Tastyhub fue diseñado con especial atención a UI/UX, aplicando principios avanzados de usabilidad y diseño para ofrecer una experiencia intuitiva, accesible y agradable. El proyecto representa un equilibrio entre la calidad técnica, una arquitectura robusta y un diseño centrado en el usuario, siendo un entorno ideal para consolidar y expandir conocimientos en desarrollo de software profesional.`
  },
  categories: [
    ProjectCategory.FULLSTACK,
    ProjectCategory.UI_UX
  ],
  links: [
    {
      platform: Platform.GITHUB,
      label: 'Back-end Github',
      url: 'https://github.com/rodrigsmor/tastyhub-api',
    },
    {
      platform: Platform.GITHUB,
      label: 'Front-end Github',
      url: 'https://github.com/rodrigsmor/tastyhub-ui',
    },
    {
      platform: Platform.FIGMA,
      label: 'Figma',
      url: 'https://www.figma.com/design/12JOdObcrtsUgsH1MAjLKY/TastyHub---UI--Recipes-Web-App-?node-id=1040-29134&t=5e34PALyYhP9dABM-1'
    }
  ],
  media: [
    {
      type: 'image',
      alt: 'Tastyhub Recipe Cover',
      url: tastyhub.coverImage.url,
    },
    {
      type: 'image',
      alt: 'Tastyhub Recipe page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768932903/TastyHubRecipe_hry5qn.png',
    },
    {
      type: 'image',
      alt: 'Tastyhub home page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768932899/TastyHubHome_x0qf7i.png',
    },
    {
      type: 'image',
      alt: 'Tastyhub Recipe mobile',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768932899/Recipe_z2k86s.png',
    }
  ],
  featured: true,
  createdAt: '2023-09-10T00:00:00.000Z',
  finishedAt: '',
  size: 'medium'
};
