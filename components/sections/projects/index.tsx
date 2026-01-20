'use client';

import { memo } from 'react';
import styles from './projects.module.css';
import { projects } from '@/utils/consts/projects';
import { useTranslate } from '@/hooks/useTranslate';
import { ProjectCard } from '@/components/cards/project-card';
import { SectionTitle } from '@/components/layout/section-title';
import { Button } from '@/components/buttons/button';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

function ProjectsSectionContent() {
  const { t } = useTranslate();

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
            >
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
      <Button type="button" theme="outline">
        {t('Projects.viewAllProjects')}
        <ArrowUpRightIcon size={24} aria-hidden weight="bold" />
      </Button>
      <span aria-hidden className="sectionTransition"></span>
      <span aria-hidden className="sectionTransition bottom"></span>
    </section>
  );
}

export const Projects = memo(ProjectsSectionContent);