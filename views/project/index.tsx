'use client';

import Image from 'next/image';
import styles from './project.module.css';

import { Header } from "@/components/layout/header";

import ProjectCover from "@/public/covers/AionTimer.png";
import { ProjectOverviewSection } from '@/components/sections/project-overview-section';
import { useTranslate } from '@/hooks/useTranslate';

export function Project() {
  const { t } = useTranslate();

  return (
    <>
      <Header showFullHeader={false} />
      <div
        className={styles.projectCover}
      >
        <Image
          src={ProjectCover}
          alt="cover"
          fill
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, auto"
          priority={true}
        />
        <span aria-hidden className="sectionTransition bottom"></span>
      </div>
      <main className={styles.projectContainer}>
        <header className={styles.projectMainDetails}>
          <h1>Project - UI/UX Project - UI/UX Project - UI/UX Project - UI/UX Project - UI/UX</h1>
          <div>
            <p>{t('ProjectPage.readingTime').replaceAll('{time}', '2')}</p>
            <span></span>
            <p>{t('ProjectPage.Size.medium')}</p>
          </div>
          <p className={styles.projectFullDescription}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tempor pulvinar vivamus fringilla lacus nec metus. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Purus est efficitur laoreet mauris pharetra vestibulum fusce. Ligula congue sollicitudin erat viverra ac tincidunt nam. Cras eleifend turpis fames primis vulputate ornare sagittis. Cubilia curae hac habitasse platea dictumst lorem ipsum. Tempus leo eu aenean sed diam urna tempor. Taciti sociosqu ad litora torquent per conubia nostra. Maximus eget fermentum odio phasellus non purus est. Finibus facilisis dapibus etiam interdum tortor ligula congue. Nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend. Senectus netus suscipit auctor curabitur facilisi cubilia curae.
          </p>
        </header>
        <ProjectOverviewSection />

        <section className={styles.caseStudy}>

        </section>
      </main>
    </>
  )
}