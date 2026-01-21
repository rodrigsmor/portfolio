import { useTranslate } from '@/hooks/useTranslate';
import styles from './case-study-section.module.css';

import { ProjectSectionTitle } from '@/components/textual/project-section-title';
import { BooksIcon } from '@phosphor-icons/react';
import { ComponentPropsWithoutRef } from 'react';

type CaseStudySectionProps = ComponentPropsWithoutRef<'section'>;

export function CaseStudySection(props: CaseStudySectionProps) {
  const { t } = useTranslate();

  return (
    <section {...props} id="CaseStudy_Section" className={styles.caseStudyContainer}>
      <ProjectSectionTitle id="ProjectOverview_Title" title={t('ProjectPage.Sections.caseStudies')} Icon={BooksIcon} size="h3" />
    </section>
  )
}