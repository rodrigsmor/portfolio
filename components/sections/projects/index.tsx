'use client';

import { SectionTitle } from '@/components/layout/section-title';
import styles from './projects.module.css';
import { useTranslate } from '@/hooks/useTranslate';
import { memo } from 'react';

function generateRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function ProjectsSectionContent() {
  const { t } = useTranslate();

  const projects = Array.from({ length: 34 }, (_, index) => {
    return ({
      id: index + 1,
      title: `Projeto ${index + 1}`,
      color: `#${generateRandomColor()}`,
      description: `Descrição curta do projeto número ${index + 1}`,
    })
  });

  return (
    <section id="projects" className={styles.projectsContainer} aria-labelledby="projects_title">
      <header className={styles.sectionHeader}>
        <SectionTitle title="Projects.title" sectionKey="projects_title" />
        <p>{t('Projects.sectionDescription')}</p>
      </header>
      <ul className={styles.projectsGroup}>
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className={styles.projectItem}
              style={{ background: project.color }}
            >
              {project.title}
            </li>
          );
        })}
      </ul>
      <span aria-hidden className="sectionTransition"></span>
      <span aria-hidden className="sectionTransition bottom"></span>
    </section>
  );
}

export const Projects = memo(ProjectsSectionContent);