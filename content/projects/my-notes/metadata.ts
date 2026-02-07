import { myNotes } from './summary';
import { Platform, Project, ProjectCategory, ProjectNature } from '@/types/project';

import {
  CSSSkill,
  DockerSkill,
  FirebaseSkill,
  HTMLSkill,
  JavaScriptSkill,
  JavaSkill,
  JUnitSkill,
  JWTSkill,
  KafkaSkill,
  MockitoSkill,
  MySQLSkill,
  SpringSecuritySkill,
  SpringSkill,
  StyledComponentsSkill,
  SwaggerSkill,
  WebSocketsSkill,
} from '@/consts/project-skills';

export const fullMyNotes: Project = {
  ...myNotes,
  technologies: [
    JavaSkill,
    SpringSkill,
    SpringSecuritySkill,
    JavaScriptSkill,
    HTMLSkill,
    CSSSkill,
    FirebaseSkill,
    JWTSkill,
    MySQLSkill,
    JUnitSkill,
    MockitoSkill,
    DockerSkill,
    KafkaSkill,
    SwaggerSkill,
    WebSocketsSkill,
    StyledComponentsSkill,
  ],
  readingTime: 5,
  nature: ProjectNature.PERSONAL,
  status: 'archived',
  shortDescription: {
    "en-US": 'MyNotes is a web note-taking application that allows you to customize and organize notes in a practical and intuitive way. The application aims to simplify content creation and organization, offering a familiar experience integrated into the user’s routine.',
    "pt-BR": 'MyNotes é uma aplicação web de gerenciamento de anotações que permite personalizar e organizar notas de forma prática e intuitiva. A proposta da aplicação é simplificar a criação e organização de conteúdos, oferecendo uma experiência familiar e integrada à rotina do usuário.',
    "es-419": 'MyNotes es una aplicación web de gestión de notas que permite personalizar y organizar apuntes de forma práctica e intuitiva. La propuesta de la aplicación es simplificar la creación y organización de contenidos, ofreciendo una experiencia familiar e integrada a la rutina del usuario.'
  },
  fullDescription: {
    "en-US": `MyNotes is a web application developed as a practical laboratory to apply and deepen my software development skills. Through a note management platform, the project explores concepts such as messaging, asynchronous events, authentication, and authorization, in addition to containerization practices with Docker.
    
    The application allows creating and organizing notes, tasks, reminders, and checklists, providing features that help users keep their information structured and accessible in their daily lives. The project was designed with a focus on scalability and organization, serving as an experimental environment for modern architectures and asynchronous flows, while prioritizing a simple and efficient user experience.`,
    "pt-BR": `MyNotes é uma aplicação web desenvolvida como um laboratório prático para aplicar e aprofundar minhas habilidades em desenvolvimento de software. Por meio de uma plataforma de gerenciamento de anotações, o projeto explora conceitos como mensageria, eventos assíncronos, autenticação e autorização, além de práticas de containerização com Docker.

      A aplicação permite criar e organizar anotações, tarefas, lembretes e checklists, oferecendo recursos que auxiliam o usuário a manter suas informações estruturadas e acessíveis no dia a dia. O projeto foi concebido com foco em escalabilidade e organização, servindo como um ambiente de experimentação para arquiteturas modernas e fluxos assíncronos, ao mesmo tempo em que prioriza uma experiência de uso simples e eficiente.`,
    "es-419": `MyNotes es una aplicación web desarrollada como un laboratorio práctico para aplicar y profundizar mis habilidades en desarrollo de software. A través de una plataforma de gestión de notas, el proyecto explora conceptos como mensajería, eventos asíncronos, autenticación y autorización, además de prácticas de contenedorización con Docker.
    
    La aplicación permite crear y organizar notas, tareas, recordatorios y listas de verificación, ofreciendo recursos que ayudan al usuario a mantener su información estructurada y accesible en el día a día. El proyecto fue concebido con un enfoque en la escalabilidad y organización, sirviendo como un entorno de experimentación para arquitecturas modernas y flujos asíncronos, al mismo tiempo que prioriza una experiencia de uso simple y eficiente.`
  },
  categories: [
    ProjectCategory.UI_UX,
    ProjectCategory.FULLSTACK,
  ],
  links: [
    {
      platform: Platform.FIGMA,
      label: 'Figma',
      url: 'https://www.figma.com/design/u07N5prgZtrIpfRGmO1PEX/MyNotes?m=auto&t=KbnaTO2tyqoMp1Du-6'
    },
    {
      platform: Platform.GITHUB,
      label: 'Back-end Github',
      url: 'https://github.com/rodrigsmor/mynotes-api',
    },
    {
      platform: Platform.GITHUB,
      label: 'Front-end Github',
      url: 'https://github.com/rodrigsmor/mynotes-ui',
    },
    {
      platform: Platform.WEB,
      label: 'WEB',
      url: 'https://rm-mynotes.netlify.app/app/notes'
    }
  ],
  media: [
    {
      type: 'image',
      alt: 'myNotes Cover',
      url: myNotes.coverImage.url,
    },
    {
      type: 'image',
      alt: 'MyNotes Home Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769010095/Screen_Shot_2026-01-21_at_12.37.57_xz41qs.png',
    },
    {
      type: 'image',
      alt: 'Langin Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769010325/MyNoteLandingPage_qbotih.png',
    },
    {
      type: 'image',
      alt: 'MyNotes Mobile',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1769010091/MyNotesMobile_fcncws.png',
    },
    {
      type: 'image',
      alt: 'MyNotes Logo',
      url: 'https://camo.githubusercontent.com/9b540b2e3b10aed6af96305b17181154ac0a02af8c0d4d05a01da031de5e3c0f/68747470733a2f2f692e6962622e636f2f744c42435956672f566563746f722d312e706e67'
    }
  ],
  featured: false,
  createdAt: '2023-07-03T00:00:00.000Z',
  finishedAt: '',
  size: 'medium'
};
