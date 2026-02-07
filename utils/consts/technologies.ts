import { GroupedSkills, Skill, SkillLevel } from '../@types/technologies';

import JavaLogo from '@/assets/logos/Java.svg';
import RubyLogo from '@/assets/logos/Ruby.svg';
import CSharpLogo from '@/assets/logos/CSharp.svg';
import PythonLogo from '@/assets/logos/Python.svg';
import JavaScriptLogo from '@/assets/logos/JavaScript.svg';
import TypeScriptLogo from '@/assets/logos/TypeScript.svg';

import NodeJSLogo from '@/assets/logos/NodeJS.svg';
import ExpressLogo from '@/assets/logos/Express.svg';
import DotNetLogo from '@/assets/logos/DotNetCore.svg';
import NestJSLogo from '@/assets/logos/NestJS.svg';
import RubyOnRailsLogo from '@/assets/logos/Rails.svg';
import SpringLogo from '@/assets/logos/Spring.svg';
import FastAPILogo from '@/assets/logos/FastAPI.svg';
import PrismaLogo from '@/assets/logos/Prisma.svg';
import AdonisJSLogo from '@/assets/logos/Adonisjs.svg';

import ReactJSLogo from '@/assets/logos/ReactJS.svg';
import NextJSLogo from '@/assets/logos/Next.js.svg';
import ViteJSLogo from '@/assets/logos/Vitejs.svg';
import AngularLogo from '@/assets/logos/Angularjs.svg';
import StoryBookLogo from '@/assets/logos/StoryBook.svg';
import ReduxLogo from '@/assets/logos/Redux.svg';

import MySQLLogo from '@/assets/logos/MySQL.svg';
import FirebaseLogo from '@/assets/logos/Firebase.svg';
import PostgreSQLLogo from '@/assets/logos/PostgreSQL.svg';
import MongoDBLogo from '@/assets/logos/MongoDB.svg';
import RedisLogo from '@/assets/logos/Redis.svg';

import KubernetesLogo from '@/assets/logos/Kubernetes.svg';
import DockerLogo from '@/assets/logos/Docker.svg';
import GoogleCloudLogo from '@/assets/logos/GoogleCloud.svg';

import JestLogo from '@/assets/logos/Jest.svg';
import CypressLogo from '@/assets/logos/Cypress.svg';
import JUnitLogo from '@/assets/logos/JUnit.svg';

import SassLogo from '@/assets/logos/SASS.svg';
import FigmaLogo from '@/assets/logos/Figma.svg';
import TailwindCSSLogo from '@/assets/logos/TailwindCSS.svg';
import MaterialUILogo from '@/assets/logos/MaterialUI.svg';
import HTMLLogo from '@/assets/logos/html5.svg';
import CSSLogo from '@/assets/logos/CSS3.svg';

import RabbitMQLogo from '@/assets/logos/RabbitMQ.svg';
import KafkaLogo from '@/assets/logos/ApacheKafka.svg';

import ReactNativeLogo from '@/assets/logos/ReactNative.svg';

import SwaggerLogo from '@/assets/logos/Swagger.svg';

import GitLogo from '@/assets/logos/Git.svg';

const programmingLanguages: Skill[] = [
  {
    name: 'JavaScript',
    iconSrc: JavaScriptLogo,
    level: SkillLevel.EXPERT,
    yearsOfExperience: 5.2,
  },
  {
    name: 'TypeScript',
    iconSrc: TypeScriptLogo,
    level: SkillLevel.ADVANCED,
    yearsOfExperience: 4.2,
  },
  {
    name: 'C#',
    iconSrc: CSharpLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1.2,
  },
  {
    name: 'Java',
    iconSrc: JavaLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'Ruby',
    iconSrc: RubyLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 2.5,
  },
  {
    name: 'Python',
    iconSrc: PythonLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 2.5,
  },
];

const backEndTechnologies: Skill[] = [
  {
    name: 'Node.js',
    iconSrc: NodeJSLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 4.2,
  },
  {
    name: 'Express',
    iconSrc: ExpressLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: '.NET',
    iconSrc: DotNetLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
  {
    name: 'NestJS',
    iconSrc: NestJSLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'Rails',
    iconSrc: RubyOnRailsLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'Spring',
    iconSrc: SpringLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'FastAPI',
    iconSrc: FastAPILogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 2.2,
  },
  {
    name: 'Prisma',
    iconSrc: PrismaLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'AdonisJS',
    iconSrc: AdonisJSLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
]

const frontEndTechnologies: Skill[] = [
  {
    name: 'React.js',
    iconSrc: ReactJSLogo,
    level: SkillLevel.ADVANCED,
    yearsOfExperience: 5.2,
  },
  {
    name: 'Next.js',
    iconSrc: NextJSLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'ViteJS',
    iconSrc: ViteJSLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1.2,
  },
  {
    name: 'Angular',
    iconSrc: AngularLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
  {
    name: 'StoryBook',
    iconSrc: StoryBookLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
  {
    name: 'Redux',
    iconSrc: ReduxLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 2.2,
  },
];

const databases: Skill[] = [
  {
    name: 'MySQL',
    iconSrc: MySQLLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'PostgreSQL',
    iconSrc: PostgreSQLLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 4.2,
  },
  {
    name: 'Firebase',
    iconSrc: FirebaseLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1.2,
  },
  {
    name: 'MongoDB',
    iconSrc: MongoDBLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 2.2,
  },
  {
    name: 'Redis',
    iconSrc: RedisLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
];

const devops: Skill[] = [
  {
    name: 'Kubernetes',
    iconSrc: KubernetesLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
  {
    name: 'Docker',
    iconSrc: DockerLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'Google Cloud',
    iconSrc: GoogleCloudLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
];

const testing: Skill[] = [
  {
    name: 'Jest',
    iconSrc: JestLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 2.2,
  },
  {
    name: 'Cypress',
    iconSrc: CypressLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1.2,
  },
  {
    name: 'JUnit',
    iconSrc: JUnitLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
];

const styling: Skill[] = [
  {
    name: 'SASS / SCSS',
    iconSrc: SassLogo,
    level: SkillLevel.EXPERT,
    yearsOfExperience: 5.2,
  },
  {
    name: 'Figma',
    iconSrc: FigmaLogo,
    level: SkillLevel.ADVANCED,
    yearsOfExperience: 4.2,
  },
  {
    name: 'TailwindCSS',
    iconSrc: TailwindCSSLogo,
    level: SkillLevel.EXPERT,
    yearsOfExperience: 3.5,
  },
  {
    name: 'MaterialUI',
    iconSrc: MaterialUILogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 2.2,
  },
  {
    name: 'HTML',
    iconSrc: HTMLLogo,
    level: SkillLevel.EXPERT,
    yearsOfExperience: 5.2,
  },
  {
    name: 'CSS',
    iconSrc: CSSLogo,
    level: SkillLevel.EXPERT,
    yearsOfExperience: 5.2,
  },
];

const messaging: Skill[] = [
  {
    name: 'Apache Kafka',
    iconSrc: KafkaLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
  {
    name: 'RabbitMQ',
    iconSrc: RabbitMQLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1,
  },
];

const mobile: Skill[] = [
  {
    name: 'React Native',
    iconSrc: ReactNativeLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 1.5,
  },
];

const documentation: Skill[] = [
  {
    name: 'Swagger',
    iconSrc: SwaggerLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.5,
  },
];

const codeVersioning: Skill[] = [
  {
    name: 'Git',
    iconSrc: GitLogo,
    level: SkillLevel.ADVANCED,
    yearsOfExperience: 5.5,
  },
];

export const groupedSkills: GroupedSkills[] = [
  {
    name: 'programming',
    title: 'AboutMe.Skills.Technologies.Sections.ProgrammingLanguages',
    skills: programmingLanguages,
  },
  {
    name: 'backend',
    title: 'AboutMe.Skills.Technologies.Sections.BackEnd',
    skills: backEndTechnologies
  },
  {
    name: 'frontend',
    title: 'AboutMe.Skills.Technologies.Sections.FrontEnd',
    skills: frontEndTechnologies
  },
  {
    name: 'database',
    title: 'AboutMe.Skills.Technologies.Sections.Databases',
    skills: databases
  },
  {
    name: 'devops',
    title: 'AboutMe.Skills.Technologies.Sections.Devops&Cloud',
    skills: devops
  },
  {
    name: 'testing',
    title: 'AboutMe.Skills.Technologies.Sections.Testing&QA',
    skills: testing
  },
  {
    name: 'styling',
    title: 'AboutMe.Skills.Technologies.Sections.DesignSystems',
    skills: styling
  },
  {
    name: 'messaging',
    title: 'AboutMe.Skills.Technologies.Sections.Messaging',
    skills: messaging
  },
  {
    name: 'mobile',
    title: 'AboutMe.Skills.Technologies.Sections.Mobile',
    skills: mobile
  },
  {
    name: 'documentation',
    title: 'AboutMe.Skills.Technologies.Sections.Documentation',
    skills: documentation
  },
  {
    name: 'versioning',
    title: 'AboutMe.Skills.Technologies.Sections.CodeVersioning',
    skills: codeVersioning
  },
]