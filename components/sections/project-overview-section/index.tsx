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
import { ReactNode } from 'react';
import { Skill } from '@/types/technologies';
import { MediaContent, Platform, ProjectLink } from '@/types/project';
import { useTranslate } from '@/hooks/useTranslate';
import { Button } from '@/components/buttons/button';
import styles from './project-overview-section.module.css';
import { TechnologyCard } from '@/components/cards/technology-card';
import { ProjectMediaLink } from '@/components/textual/project-media-link';
import { ProjectSectionTitle } from '@/components/textual/project-section-title';

import ReactJSLogo from '@/assets/logos/ReactJS.svg';
import JestLogo from '@/assets/logos/Jest.svg';
import HTMLLogo from '@/assets/logos/html5.svg';
import CSSLogo from '@/assets/logos/CSS3.svg';
import FigmaLogo from '@/assets/logos/Figma.svg';
import NodeJSLogo from '@/assets/logos/NodeJS.svg';
import JavaLogo from '@/assets/logos/Java.svg';
import SpringLogo from '@/assets/logos/Spring.svg';
import AngularLogo from '@/assets/logos/Angularjs.svg';
import NextJSLogo from '@/assets/logos/Next.js.svg';

type ProjectDetail = {
  label: string;
  value: string;
  Icon: ReactNode;
};

export function ProjectOverviewSection() {
  const { t, locale } = useTranslate();

  const formatProjectDate = (date: Date, lang: string) => {
    const formatted = new Intl.DateTimeFormat(lang, {
      month: 'long',
      year: 'numeric',
    }).format(date);

    return formatted.replace(/ (de|of) /i, ', ');
  };

  const dateValue = formatProjectDate(new Date('2022-12-01'), locale);
  
  const startedAtDate = t(`ProjectPage.Date.around`).replaceAll('{date}', dateValue)

  const projectDetails: ProjectDetail[] = [
    {
      label: t('ProjectPage.purposeLabel'),
      value: t(`ProjectPage.Purpose.academic`),
      Icon: <CrosshairIcon />
    },
    {
      label: t('ProjectPage.statusLabel'),
      value: t(`ProjectPage.Status.ongoing`),
      Icon: <SpinnerIcon />
    },
    {
      label: t('ProjectPage.scopeLabel'),
      value: 'Back-end, Front-end, UI Design',
      Icon: <PencilRulerIcon />
    },
    {
      label: t('ProjectPage.startedAtLabel'),
      value: startedAtDate,
      Icon: <CalendarBlankIcon />
    },
    {
      label: t('ProjectPage.finishedAtLabel'),
      value: t(`ProjectPage.Date.not_finished`),
      Icon: <CalendarCheckIcon />
    },
  ];

  const skills: Skill[] = [
    {
      iconSrc: JavaLogo,
      name: 'Java',
      yearsOfExperience: 0
    },
    {
      iconSrc: AngularLogo,
      name: 'Angular',
      yearsOfExperience: 0
    },
    {
      iconSrc: SpringLogo,
      name: 'Spring',
      yearsOfExperience: 0
    },
    {
      iconSrc: NextJSLogo,
      name: 'Next.js',
      yearsOfExperience: 0
    },
    {
      iconSrc: NodeJSLogo,
      name: 'Node.js',
      yearsOfExperience: 0
    },
    {
      iconSrc: FigmaLogo,
      name: 'Figma',
      yearsOfExperience: 0
    },
    {
      iconSrc: HTMLLogo,
      name: 'HTML',
      yearsOfExperience: 0
    },
    {
      iconSrc: CSSLogo,
      name: 'CSS',
      yearsOfExperience: 0
    },
    {
      iconSrc: JestLogo,
      name: 'Jest',
      yearsOfExperience: 0
    },
    {
      iconSrc: ReactJSLogo,
      name: 'React.js',
      yearsOfExperience: 0
    },
  ]

  const medias: MediaContent[] = [
    {
      type: 'image',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768929047/AionTimer-Dashboard_pjiztu.png',
      alt: ''
    },
    {
      type: 'image',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768929047/Timer_-__Playing_cv6nqz.png',
      alt: ''
    },
    {
      type: 'image',
      url: 'https://res.cloudinary.com/dbrvgleaj/image/upload/v1768929402/AionMobile_j312r4.png',
      alt: ''
    },
  ];

  const links: ProjectLink[] = [
    {
      platform: Platform.APPLESTORE,
      url: '',
      label: 'Apple Store'
    },
    {
      platform: Platform.BEHANCE,
      url: '',
      label: 'Behance'
    },
    {
      platform: Platform.FIGMA,
      url: '',
      label: 'Figma'
    },
    {
      platform: Platform.GITHUB,
      url: '',
      label: ''
    },
    {
      platform: Platform.PLAYSTORE,
      url: '',
      label: 'Apple Store'
    },
  ]

  return (
    <section aria-labelledby="ProjectOverview" aria-describedby="ProjectShortDescription" className={styles.overviewSectionContainer}>
      <div className={styles.detailsGroup}>
        <ProjectSectionTitle id="ProjectOverview" title={t('ProjectPage.Sections.overview')} Icon={SquaresFourIcon} size="h3" />
        <p id="ProjectShortDescription" className={styles.shortDescription}>
          Suspendisse aliquet nisi sodales consequat magna ante condimentum. Euismod quam justo lectus commodo augue arcu dignissim. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Nec metus bibendum egestas iaculis massa nisl malesuada.
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
          {skills.map((skill) => (<TechnologyCard key={skill.name} isSummary skill={skill} />))}
        </ul>
      </div>
      <div className={styles.detailsGroup}>
        <ProjectSectionTitle title={t('ProjectPage.Sections.medias')} Icon={ImagesSquareIcon} weight='fill' />
        <ul className={styles.mediaGroup}>
          {medias.slice(0, 3).map((media, index) => {
            return (
              <li key={index}>
                <Image
                  alt={media?.alt} 
                  src={media.type === 'video' ? media.poster : media.url}
                  // fill
                  width={240}
                  height={240}
                  quality={70}
                  loading="lazy"
                  placeholder="empty"
                />
                {(medias.length > 3 && index === 2) && (
                  <span className="last-media">
                    +{medias.length - 3} {t('ProjectPage.Sections.medias')}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.detailsGroup}>
        <ProjectSectionTitle title={t('ProjectPage.Sections.links')} Icon={LinkSimpleIcon} weight='bold' />
        <ul className={styles.linksGroup}>
          {links.map((link) => <ProjectMediaLink key={link.platform} link={link} />)}
        </ul>
      </div>
      <span className="gradientDivider"></span>
      <Button component="a" href={`/`} theme="outline">
        {t('ProjectPage.linkButtonLabel')}
        <ArrowUpRightIcon size={24} aria-hidden weight="bold" />
      </Button>
      <span className="outlineBackground" aria-hidden></span>
    </section>
  )
}