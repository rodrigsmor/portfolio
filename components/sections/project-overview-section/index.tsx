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
import { ProjectMediaLink } from '@/components/textual/project-media-link';

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
      url: 'https://imgs.search.brave.com/2e_2p7_zUvq3-AGxs8OJA0xvGkX1fw_eecnVqcvvtJ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZnVybml0dXJl/LWFwcC11aS1raXQt/cmVzcG9uc2l2ZS1t/b2JpbGUtYXBwLXdl/YnNpdGUtd2l0aC1t/dWx0aXBsZS1zY3Jl/ZW5zLWFzLWxvZy1j/cmVhdGUtYWNjb3Vu/dC1wcm9maWxlLW9y/ZGVyLXBheW1lbnRf/MTMwMi0yMTc0Ni5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA',
      alt: ''
    },
    {
      type: 'image',
      url: 'https://imgs.search.brave.com/3KdFZ0OyZTFhQ2-rdOsmZhRuy9iQ3WjcHPj_5N0Nuow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MTc3NzAyMDgvZmls/ZS9vcmlnaW5hbC04/MWYxMDVlMjYxMDk2/ZTIyY2RjOGQyYmMy/MGJhODE3NC5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy',
      alt: ''
    },
    {
      type: 'image',
      url: 'https://imgs.search.brave.com/UHmZKF4VsO6p8fIMqBlBmPuXPZJ80XHCwAtqVW7HP00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z3JhZGllbnQtY29s/b3JlZC11aS11eC1i/YWNrZ3JvdW5kXzUy/NjgzLTcwMDA1Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA',
      alt: ''
    },
    {
      type: 'image',
      url: 'https://imgs.search.brave.com/HdllkFaN8u-5vmt_9bWwmiSdAeS1XiL8dLsQ3RegV6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/dWktdXgtY291cnNl/LWFkLXRlbXBsYXRl/XzY3OTk5Ny0zLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA',
      alt: ''
    },
    {
      type: 'image',
      url: 'https://imgs.search.brave.com/HdllkFaN8u-5vmt_9bWwmiSdAeS1XiL8dLsQ3RegV6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/dWktdXgtY291cnNl/LWFkLXRlbXBsYXRl/XzY3OTk5Ny0zLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA',
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
                  fill
                  quality={70}
                  loading="lazy"
                  placeholder="empty"
                />
                {index === 2 && (
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