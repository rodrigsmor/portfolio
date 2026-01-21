import { aionTimer } from './summary';
import { Platform, Project, ProjectCategory, ProjectNature } from '@/types/project';

import {
  FigmaSkill,
} from '@/consts/project-skills';

export const fullAionTimer: Project = {
  ...aionTimer,
  technologies: [
    FigmaSkill,
  ],
  readingTime: 5,
  nature: ProjectNature.PERSONAL,
  status: 'ongoing',
  shortDescription: {
    "en-US": 'AionTimer is a time and focus management application designed to help users optimize their routines and increase productivity. With a modern and intuitive interface, the tool allows setting goals, segmenting focus periods, and gaining insights through a dashboard that provides an overview of the daily routine.',
    "pt-BR": 'AionTimer é uma aplicação de gestão e monitoramento de tempo e foco, criada para ajudar usuários a otimizar suas rotinas e aumentar a produtividade. Com uma interface moderna e intuitiva, a ferramenta permite definir metas, segmentar períodos de foco e obter insights por meio de um dashboard que oferece uma visão geral da rotina diária.',
    "es-419": 'AionTimer es una aplicación de gestión y monitoreo del tiempo y enfoque, creada para ayudar a los usuarios a optimizar sus rutinas y aumentar la productividad. Con una interfaz moderna e intuitiva, la herramienta permite establecer metas, segmentar periodos de enfoque y obtener información a través de un tablero que ofrece una visión general de la rutina diaria.'
  },
  fullDescription: {
    "en-US": `AionTimer is a personal project developed with the goal of improving time management and daily routine organization. The application was conceived using solid UI/UX design principles, including the definition of user profiles and the creation of features that help users maintain focus and productivity throughout the day.

      The project offers different types of time trackers, including a stopwatch, countdown, and timer, as well as a digital clock with global time zone support. Complementing the core features, AionTimer allows setting focus goals, creating alarms, and tracking recent activities, providing a clear and efficient view of time usage. Additionally, the application features a selection of ambient music to create a comfortable and relaxing focus environment.

      The application also boasts a modern and attractive design, with customization options for language and themes — light, sepia, and dark — reinforcing a commitment to accessibility and user experience. AionTimer was developed as a complex and asynchronous application, aimed at expanding my knowledge in software architecture and interface design, balancing usability, performance, and scalability.`,
    "pt-BR": `AionTimer é um projeto pessoal desenvolvido com o objetivo de aprimorar a gestão do tempo e a organização da rotina diária. A aplicação foi concebida a partir de princípios sólidos de UI/UX design, com a definição de perfis de uso e a idealização de funcionalidades que auxiliam o usuário a manter o foco e a produtividade ao longo do dia.

      O projeto oferece diferentes tipos de contadores de tempo, incluindo cronômetro, contagem regressiva, temporizador, além de um relógio digital com suporte a fusos horários globais. Complementando os recursos principais, o AionTimer permite estabelecer metas de foco, criar alarmes e acompanhar atividades recentes, proporcionando uma visão clara e eficiente do uso do tempo. Ademais, a aplicação conta com uma seleção de músicas ambientes de forma a criar um ambiente de foco confortável e relaxante.

      A aplicação conta ainda com um design moderno e atrativo, com opções de personalização de idioma e tema — light, sepia e dark — reforçando a preocupação com acessibilidade e experiência do usuário. O AionTimer foi desenvolvido como uma aplicação complexa e assíncrona, com o propósito de expandir meus conhecimentos em arquitetura de software e design de interfaces, equilibrando usabilidade, performance e escalabilidade.`,
    "es-419": `AionTimer es un proyecto personal desarrollado con el objetivo de mejorar la gestión del tiempo y la organización de la rutina diaria. La aplicación fue concebida a partir de principios sólidos de diseño UI/UX, con la definición de perfiles de uso y la idealización de funcionalidades que ayudan al usuario a mantener el enfoque y la productividad a lo largo del día.

      El proyecto ofrece diferentes tipos de contadores de tiempo, incluyendo cronómetro, cuenta regresiva, temporizador, además de un reloj digital con soporte para zonas horarias globales. Complementando las funciones principales, AionTimer permite establecer metas de enfoque, crear alarmas y realizar un seguimiento de las actividades recientes, proporcionando una visión clara y eficiente del uso del tiempo. Además, la aplicación cuenta con una selección de música ambiental para crear un entorno de enfoque cómodo y relajante.

      La aplicación también cuenta con un diseño moderno y atractivo, con opciones de personalización de idioma y tema — claro, sepia y oscuro — reforzando la preocupación por la accesibilidad y la experiencia del usuario. AionTimer fue desarrollado como una aplicación compleja y asíncrona, con el propósito de expandir mis conocimientos en arquitectura de software y diseño de interfaces, equilibrando usabilidad, rendimiento y escalabilidad.`
  },
  categories: [
    ProjectCategory.UI_UX,
  ],
  links: [
    {
      platform: Platform.FIGMA,
      label: 'Figma',
      url: 'https://www.figma.com/design/2JeUHKiQ051agdlAHPdc5S/Aion-Timer---Temporizador?m=auto&t=JLC7D11BINCzj1Pg-6'
    }
  ],
  media: [
    {
      type: 'image',
      alt: 'AionTimer Cover',
      url: aionTimer.coverImage.url,
    },
    {
      type: 'image',
      alt: 'Mobile Timer Demonstration',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768929402/AionMobile_j312r4.png',
    },
    {
      type: 'image',
      alt: 'Aion Dashboard',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768929047/AionTimer-Dashboard_pjiztu.png'
    },
    {
      type: 'image',
      alt: 'Timer Playing',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768929047/Timer_-__Playing_cv6nqz.png'
    },
    {
      type: 'image',
      alt: 'AionTimer Logo',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769001313/AionTimerLogo_qm30zn.png'
    }
  ],
  featured: true,
  createdAt: '2025-11-10T00:00:00.000Z',
  finishedAt: '',
  size: 'medium'
};
