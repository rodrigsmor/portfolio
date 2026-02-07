'use client';

import {
  PencilRulerIcon,
  CalendarBlankIcon,
  CalendarCheckIcon,
  CrosshairIcon,
  SpinnerIcon,
  SquaresFourIcon,
  IconContext,
  CodeIcon,
  ImagesSquareIcon,
  LinkSimpleIcon,
  ArrowUpRightIcon
} from '@phosphor-icons/react';
import Image from 'next/image';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useProject } from '@/hooks/useProject';
import { useTranslate } from '@/hooks/useTranslate';
import { Button } from '@/components/buttons/button';
import styles from './project-overview-section.module.css';
import { TechnologyCard } from '@/components/cards/technology-card';
import { Platform, ProjectCategory, ProjectLink } from '@/types/project';
import { ProjectMediaLink } from '@/components/textual/project-media-link';
import { ProjectSectionTitle } from '@/components/textual/project-section-title';

const formatScopeLabel = (scopes: ProjectCategory[]): string => {
  const scopeLabels: { [key in ProjectCategory]: string } = {
    [ProjectCategory.FULLSTACK]: 'Full Stack',
    [ProjectCategory.BACKEND]: 'Back-end',
    [ProjectCategory.DATABASE]: 'Database',
    [ProjectCategory.FRONTEND]: 'Front-end',
    [ProjectCategory.MOBILE]: 'Mobile',
    [ProjectCategory.UI_UX]: 'UI/UX Design'
  }

  return scopes.map((scope) => {
    return scopeLabels[scope];
  }).join(', ')
}

type ProjectDetail = {
  label: string;
  value: string;
  Icon: ReactNode;
};

type ProjectOverviewSectionProps = ComponentPropsWithoutRef<'section'>;

export function ProjectOverviewSection(props: ProjectOverviewSectionProps) {
  const { t, locale } = useTranslate();
  const { project, getDescription, openMediaPreview } = useProject();

  const formatProjectDate = (lang: string, date?: string): string => {
    if (!date) return t(`ProjectPage.Date.not_finished`);

    const formatted = new Intl.DateTimeFormat(lang, {
      month: 'long',
      year: 'numeric',
    })
      .format(new Date(date))
      .replace(/ (de|of) /i, ', ');
    
    return t(`ProjectPage.Date.around`).replaceAll('{date}', formatted);
  };

  const startedAtDate = formatProjectDate(locale, project.createdAt)
  const finishedAtDate = formatProjectDate(locale, project.finishedAt)

  const projectDetails: ProjectDetail[] = [
    {
      label: t('ProjectPage.purposeLabel'),
      value: t(`ProjectPage.Purpose.${project.nature}`),
      Icon: <CrosshairIcon />
    },
    {
      label: t('ProjectPage.statusLabel'),
      value: t(`ProjectPage.Status.${project.status}`),
      Icon: <SpinnerIcon />
    },
    {
      label: t('ProjectPage.scopeLabel'),
      value: formatScopeLabel(project.categories),
      Icon: <PencilRulerIcon />
    },
    {
      label: t('ProjectPage.startedAtLabel'),
      value: startedAtDate,
      Icon: <CalendarBlankIcon />
    },
    {
      label: t('ProjectPage.finishedAtLabel'),
      value: finishedAtDate,
      Icon: <CalendarCheckIcon />
    },
  ];

  const links: ProjectLink[] = project.links.filter((project) => project.platform !== Platform.WEB);
  const webLink: ProjectLink | undefined = project.links.filter((project) => project.platform === Platform.WEB)?.at(0);

  const projectMedias = project.media;
  const slicedMedias = project.media.slice(0, 3);

  return (
    <section {...props} id="ProjectOverview_Section" aria-labelledby="ProjectOverview_Title" aria-describedby="ProjectShortDescription" className={styles.overviewSectionContainer}>
      <div className={styles.detailsGroup}>
        <ProjectSectionTitle id="ProjectOverview_Title" title={t('ProjectPage.Sections.overview')} Icon={SquaresFourIcon} size="h3" />
        <p id="ProjectShortDescription" className={styles.shortDescription}>
          {getDescription('shortDescription')}
        </p>
        <div className={styles.overviewDetails}>
          {projectDetails.map(({ label, value, Icon }) => {
            return (
              <span key={label}>
                <strong>
                  <IconContext.Provider
                    value={{
                      size: 20,
                      weight: 'bold'
                    }}
                  >
                    {Icon}
                  </IconContext.Provider>
                  {label}:
                </strong>
                {value}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.detailsGroup}>
        <ProjectSectionTitle title={t('ProjectPage.Sections.technologies')} Icon={CodeIcon} weight='bold' />
        <ul className={styles.technologiesList}>
          {project.technologies.map((skill) => (<TechnologyCard key={skill.name} isSummary skill={skill} />))}
        </ul>
      </div>
      <div className={styles.detailsGroup}>
        <ProjectSectionTitle title={t('ProjectPage.Sections.medias')} Icon={ImagesSquareIcon} weight='fill' />
        <ul className={styles.mediaGroup}>
          {slicedMedias.slice(0, 3).map((media, index) => {
            return (
              <li key={index} onClick={() => openMediaPreview(index)}>
                <Image
                  alt={media?.alt} 
                  src={media.type === 'video' ? media.poster : media.url}
                  width={240}
                  height={240}
                  quality={70}
                  loading="lazy"
                  unoptimized
                  placeholder="empty"
                />
                {(index === 2 && projectMedias.length > 3) ? (
                  <span className="last-media">
                    +{projectMedias.length - 3} {t('ProjectPage.Sections.medias')}
                  </span>
                ) : <></>}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.detailsGroup}>
        <ProjectSectionTitle title={t('ProjectPage.Sections.links')} Icon={LinkSimpleIcon} weight='bold' />
        <ul className={styles.linksGroup}>
          {links.map((link) => <ProjectMediaLink key={link.url} link={link} />)}
        </ul>
      </div>
      {webLink && (
        <>
          <span className="gradientDivider"></span>
          <Button component="a" href={webLink.url} theme="outline">
            {t('ProjectPage.linkButtonLabel')}
            <ArrowUpRightIcon size={24} aria-hidden weight="bold" />
          </Button>
        </>
      )}
      <span className="outlineBackground" aria-hidden></span>
    </section>
  )
}