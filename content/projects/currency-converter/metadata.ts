import { CSSSkill, CypressSkill, DockerSkill, HTMLSkill, JestSkill, NextJSSkill, NodeJSSkill, StorybookSkill, SwaggerSkill, TypescriptSkill } from '@/utils/consts/project-skills';
import { currencyConverter } from './summary';
import { Project, Platform, ProjectCategory, ProjectNature } from '@/types/project';

export const fullCurrencyConverter: Project = {
  ...currencyConverter,
  readingTime: 10,
  nature: ProjectNature.PERSONAL,
  status: 'ongoing',
  technologies: [
    CypressSkill,
    SwaggerSkill,
    NextJSSkill,
    NodeJSSkill,
    StorybookSkill,
    HTMLSkill,
    CSSSkill,
    TypescriptSkill,
    JestSkill,
    DockerSkill
  ],
  shortDescription: {
    "en-US": 'A modern currency converter supporting 160+ currencies with multilingual support (English and Portuguese). Built with Next.js on the frontend and NestJS on the backend, fully typed with TypeScript, integrated with the ExchangeRate API, and containerized using Docker.',
    "es-419": 'Un conversor de divisas moderno con soporte para más de 160 monedas y multilingüe (inglés y portugués). Desarrollado con Next.js en el frontend y NestJS en el backend, totalmente tipado con TypeScript, integrado con la ExchangeRate API y contenedorizado con Docker.',
    "pt-BR": 'Um conversor de moedas moderno com suporte a mais de 160 moedas e multi-idioma (inglês e português). Desenvolvido com Next.js no frontend e NestJS no backend, totalmente tipado com TypeScript, integrado à ExchangeRate API e conteinerizado com Docker.'
  },
  fullDescription: {
    "en-US": `
      This project is a full stack currency converter application designed to provide fast and reliable currency conversions across 160+ supported currencies, with multilingual support in English and Portuguese.
      \n\n
      The application was developed entirely in TypeScript, using Next.js for the frontend and NestJS for the backend, following modern architectural and scalability best practices. It integrates with the ExchangeRate API to retrieve real-time exchange rates and ensures consistent environment management through Docker containerization.
      \n\n
      A strong focus was placed on code quality, documentation, and testing, including:
      \n
      - API documentation with Swagger;\n
      - Component documentation with Storybook;\n
      - Unit tests with Jest;\n
      - End-to-end tests with Cypress
      \n\n
      This project demonstrates proficiency in building well-documented, testable, and production-ready applications, combining clean architecture, strong typing, and modern DevOps practices.
    `,
    "pt-BR": `
      Este projeto é uma aplicação full stack de conversão de moedas, projetada para fornecer conversões rápidas e confiáveis em mais de 160 moedas, com suporte multilíngue em inglês e português.
      \n\n
      A aplicação foi desenvolvida inteiramente em TypeScript, utilizando Next.js para o frontend e NestJS para o backend, seguindo as melhores práticas modernas de arquitetura e escalabilidade. Integra-se com a ExchangeRate API para obter taxas de câmbio em tempo real e garante um gerenciamento de ambiente consistente através da conteinerização com Docker.
      \n\n
      Foi dado um forte foco à qualidade do código, documentação e testes, incluindo:
      \n
      - Documentação da API com Swagger;\n
      - Documentação de componentes com Storybook;\n
      - Testes unitários com Jest;\n
      - Testes de ponta a ponta (E2E) com Cypress.
      \n\n
      Este projeto demonstra proficiência na construção de aplicações bem documentadas, testáveis e prontas para produção, combinando arquitetura limpa, tipagem forte e práticas modernas de DevOps.
    `,
    "es-419": `
      Este proyecto es una aplicación full stack de conversión de divisas diseñada para ofrecer conversiones rápidas y confiables en más de 160 monedas, con soporte multilingüe en inglés y portugués.
      \n\n
      La aplicación fue desarrollada íntegramente en TypeScript, utilizando Next.js para el frontend y NestJS para el backend, siguiendo las mejores prácticas modernas de arquitectura y escalabilidad. Se integra con la ExchangeRate API para obtener tipos de cambio en tiempo real y garantiza una gestión de entorno consistente mediante la contenedorización con Docker.
      \n\n
      Se puso un gran énfasis en la calidad del código, la documentación y las pruebas, incluyendo:
      \n
      - Documentación de API con Swagger;\n
      - Documentación de componentes con Storybook;\n
      - Pruebas unitarias con Jest;\n
      - Pruebas de extremo a extremo (E2E) con Cypress.
      \n\n
      Este proyecto demuestra competencia en la creación de aplicaciones bien documentadas, probables y listas para producción, combinando arquitectura limpia, tipado fuerte y prácticas modernas de DevOps.
    `
  },
  categories: [
    ProjectCategory.FRONTEND,
    ProjectCategory.UI_UX
  ],
  links: [
    {
      label: 'Github',
      platform: Platform.GITHUB,
      url: 'https://github.com/rodrigsmor/currency-converter'
    },
    {
      label: 'Figma Design',
      platform: Platform.FIGMA,
      url: 'https://www.figma.com/file/2qdeWssnXH9s4TqY1M7kM4/Currency-Converter?type=design&node-id=0%3A1&mode=design&t=t7QExgWVf1qgCNK6-1'
    },
    {
      label: 'Behance link',
      platform: Platform.BEHANCE,
      url: 'https://www.behance.net/gallery/182514075/Currency-Converter-Practical-Project'
    }
  ],
  media: [
    {
      type: 'image',
      alt: currencyConverter.coverImage.alt,
      url: currencyConverter.coverImage.url,
    },
    {
      type: 'image',
      alt: 'Currency Converter Home Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768940429/Currency_Converter_qmfjs1.png'
    },
    {
      type: 'image',
      alt: 'Currency Converter Home Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768940429/Currency_Converter_qmfjs1.png'
    },
    {
      type: 'image',
      alt: 'Currency Converter Search Page',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768940454/Search_Page_e0lxjl.png'
    },
    {
      type: 'image',
      alt: 'Currency Converter - Mobile',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768940424/Currency_Converter-mobile_pgaqjh.png'
    },
    {
      type: 'image',
      alt: 'Currency Converter Home Page - Mobile',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768940422/Home_page_aauda2.png'
    },
    {
      type: 'image',
      alt: 'Currency Converter Exchange Rage - Mobile',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768940422/Exchange_Rates_dn2ayj.png'
    },
  ],
  featured: true,
  createdAt: '2023-09-10T00:00:00.000Z',
  finishedAt: '',
  size: 'short'
};
