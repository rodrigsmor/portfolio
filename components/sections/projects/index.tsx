'use client';

import { SectionTitle } from '@/components/layout/section-title';
import styles from './projects.module.css';
import { useTranslate } from '@/hooks/useTranslate';
import { memo } from 'react';

function ProjectsSectionContent() {
  const { t } = useTranslate();

  return (
    <section id="projects" className={styles.projectsContainer}>
      <span aria-hidden className="sectionTransition"></span>
      <header className={styles.sectionHeader}>
        <SectionTitle title="Projects.title" sectionKey="projects" />
        <p>{t('Projects.sectionDescription')}</p>
      </header>
      <span aria-hidden className="sectionTransition bottom"></span>
    </section>
  );
}

export const Projects = memo(ProjectsSectionContent);