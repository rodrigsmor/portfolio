'use client';

import { memo } from "react";
import dynamic from "next/dynamic";
import styles from "./about-me.module.css";
import { useTranslate } from "@/hooks/useTranslate";
import { SectionTitle } from "@/components/layout/section-title";

const CareerOverview = dynamic(() => import('../career-overview').then(mod => mod.CareerOverview), {
  ssr: false,
  loading: () => <div className="h-20" />
});

const CareerTimeline = dynamic(() => import('../career-timeline').then(mod => mod.CareerTimeline), {
  ssr: false,
  loading: () => <div className="h-20" />
});

const Skills = dynamic(() => import('../skills').then(mod => mod.Skills), {
  ssr: false,
  loading: () => <div className="h-20" />
});

function AboutMeSectionContent() {
  const { t } = useTranslate();

  return (
    <section id="about_me" className={styles.aboutMeContainer} aria-labelledby="about_me_title">
      <p role="doc-subtitle" className={styles.aboutMeGreetings}>
        <span aria-hidden></span>
        {t('AboutMe.Greetings')}
        <span aria-hidden></span>
      </p>
      <span aria-hidden className={styles.scrollLine}></span>
      <SectionTitle title="AboutMe.SectionTitle" sectionKey="about_me_title" />
      <CareerOverview />
      <CareerTimeline />
      <Skills />
      <span aria-hidden className="sectionTransition bottom"></span>
    </section>
  );
}

export const AboutMe = memo(AboutMeSectionContent);