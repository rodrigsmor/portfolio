import { diaTask } from './summary';
import { Platform, Project, ProjectCategory, ProjectNature } from '@/types/project';

import {
  CSSSkill,
  FigmaSkill,
  HTMLSkill,
  JavaScriptSkill,
  JavaSkill,
  JWTSkill,
  MySQLSkill,
  ReactJSSkill,
  SassSkill,
  SpringSecuritySkill,
  SpringSkill,
  TypescriptSkill,
  ViteJSSkill,
} from '@/consts/project-skills';

export const fullDiaTask: Project = {
  ...diaTask,
  technologies: [
    FigmaSkill,
    JavaSkill,
    SpringSkill,
    MySQLSkill,
    SpringSecuritySkill,
    TypescriptSkill,
    JavaScriptSkill,
    JWTSkill,
    HTMLSkill,
    SassSkill,
    CSSSkill,
    ReactJSSkill,
    ViteJSSkill,
  ],
  readingTime: 10,
  nature: ProjectNature.PERSONAL,
  status: 'archived',
  shortDescription: {
    "en-US": 'DiaTask is a team management and productivity application designed for small and medium-sized teams, bringing together features such as an events calendar, task creation and assignment, Kanban organization, and deadline/goal setting. The project was conceived with a focus on a simple, intuitive, and dynamic interface to facilitate project management.',
    "pt-BR": 'DiaTask é uma aplicação de gestão de equipes e produtividade voltada para pequenos e médios times, reunindo recursos como calendário de eventos, criação e atribuição de tarefas, organização em Kanban e definição de prazos e metas. O projeto foi concebido com foco em uma interface simples, intuitiva e dinâmica para facilitar o gerenciamento de projetos.',
    "es-419": 'DiaTask es una aplicación de gestión de equipos y productividad dirigida a pequeños y medianos equipos, que reúne funciones como calendario de eventos, creación y asignación de tareas, organización en Kanban y definición de plazos y metas. El proyecto fue concebido con un enfoque en una interfaz sencilla, intuitiva y dinámica para facilitar la gestión de proyectos.'
  },
  fullDescription: {
    "en-US": `DiaTask is a project developed as a practical lab to apply and deepen my knowledge in software development and UI/UX design through a challenging application involving complex data structures and multiple interaction flows.

    The application's core objective is to support team management and productivity, offering tools that help users plan, track, and achieve goals for the projects they are working on. Users can create events, view deadlines, goals, and tasks directly on the calendar, as well as create and assign tasks to different team members, organizing them into categories according to the project's needs.

    DiaTask provides multiple task visualization modes, such as Kanban, list, and table, allowing users to choose the organization that best fits their workflow. The project also includes a simple and objective dashboard that offers visual reinforcement of task progress, highlights pending items, and contributes to weekly organization.

    Finally, the application features an intuitive and attractive design, applying UI/UX best practices to ensure an accessible, fluid, and efficient experience, aligning functionality and usability in an environment focused on collaboration and productivity.`,
    "pt-BR": `DiaTask é um projeto desenvolvido como um laboratório prático para aplicar e aprofundar meus conhecimentos em desenvolvimento de software e UI/UX design, por meio de uma aplicação desafiadora que envolve estruturas de dados complexas e múltiplos fluxos de interação.

    A aplicação tem como objetivo central apoiar a gestão de equipes e a produtividade, oferecendo ferramentas que auxiliam usuários a planejar, acompanhar e alcançar as metas dos projetos em que atuam. É possível criar eventos, visualizar prazos, metas e tarefas diretamente no calendário, além de criar e atribuir tarefas a diferentes integrantes da equipe, organizando-as em categorias conforme a necessidade do projeto.

    O DiaTask disponibiliza múltiplas formas de visualização das tarefas, como Kanban, lista e tabela, permitindo que o usuário escolha a organização que melhor se adapta ao seu fluxo de trabalho. O projeto também inclui um dashboard simples e objetivo, que oferece um reforço visual do progresso das tarefas, destaca pendências e contribui para a organização semanal.

    Por fim, a aplicação conta com um design intuitivo e atrativo, aplicando boas práticas de UI/UX para garantir uma experiência acessível, fluida e eficiente, alinhando funcionalidade e usabilidade em um ambiente voltado à colaboração e produtividade.`,
    "es-419": `DiaTask es un proyecto desarrollado como un laboratorio práctico para aplicar y profundizar mis conocimientos en desarrollo de software y diseño UI/UX, a través de una aplicación desafiante que involucra estructuras de datos complejas y múltiples flujos de interacción.

    El objetivo central de la aplicación es apoyar la gestión de equipos y la productividad, ofreciendo herramientas que ayudan a los usuarios a planificar, monitorear y alcanzar las metas de los proyectos en los que participan. Es posible crear eventos, visualizar plazos, metas y tareas directamente en el calendario, además de crear y asignar tareas a diferentes integrantes del equipo, organizándolas en categorías según la necesidad del proyecto.

    DiaTask ofrece múltiples formas de visualización de tareas, como Kanban, lista y tabla, permitiendo que el usuario elija la organización que mejor se adapte a su flujo de trabajo. El proyecto también incluye un tablero (dashboard) simple y objetivo que ofrece un refuerzo visual del progreso de las tareas, destaca pendientes y contribuye a la organización semanal.

    Finalmente, la aplicación cuenta con un diseño intuitivo y atractivo, aplicando buenas prácticas de UI/UX para garantizar una experiencia accesible, fluida y eficiente, alineando funcionalidad y usabilidad en un entorno orientado a la colaboración y productividad.`
  },
  categories: [
    ProjectCategory.UI_UX,
    ProjectCategory.FULLSTACK,
  ],
  links: [
    {
      platform: Platform.FIGMA,
      label: 'Figma Project',
      url: 'https://www.figma.com/design/C1730pYoQSzrLpA8seXSeh/DiaTask---Task-Management?m=auto&t=JLC7D11BINCzj1Pg-6'
    },
    {
      platform: Platform.GITHUB,
      label: 'Back-end Github',
      url: 'https://github.com/rodrigsmor/diatask-api',
    },
    {
      platform: Platform.GITHUB,
      label: 'Front-end Github',
      url: 'https://github.com/rodrigsmor/diatask-ui',
    },
  ],
  media: [
    {
      type: 'image',
      alt: 'diaTask Cover',
      url: diaTask.coverImage.url,
    },
    {
      type: 'image',
      alt: 'Overview Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003962/DiaTask_Overview_Web_z18hvr.png',
    },
    {
      type: 'image',
      alt: 'Kanban Tasks View',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003962/Project_Tasks_axsalo.png'
    },
    {
      type: 'image',
      alt: 'Calendar Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003962/Calendar_t1xicr.png'
    },
    {
      type: 'image',
      alt: 'Mobile Signin & Signup Flow',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003963/SignupMobile_etuvvz.png'
    },
    {
      type: 'image',
      alt: 'Mobile Overview',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003963/DiaTask_Overview_ivsqnq.png'
    },
    {
      type: 'image',
      alt: 'My Tasks Card View',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003963/My_Tasks_-__Card_View_xxzuri.png'
    },
    {
      type: 'image',
      alt: 'My Tasks List View',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003985/My_Tasks_-__List_View_i6blpt.png'
    },
    {
      type: 'image',
      alt: 'My Tasks Table View',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769003985/My_Tasks_-__Table_View_adud8z.png'
    }
  ],
  featured: true,
  createdAt: '2022-10-08T00:00:00.000Z',
  finishedAt: '',
  size: 'medium'
};
