'use client';

import styles from "./about-me.module.css";
import { useTranslate } from "@/utils/hooks/useTranslate";
import { SectionTitle } from "@/components/layout/section-title";

import { Skills } from "../skills";
import { CareerOverview } from "../career-overview";
import { CareerTimeline } from "../career-timeline";
import { memo } from "react";

function AboutMeSectionContent() {
  const { t } = useTranslate();

  return (
    <section id="about_me" className={styles.aboutMeContainer} aria-labelledby="about_me">
      <p role="doc-subtitle" className={styles.aboutMeGreetings}>
        <span aria-hidden></span>
        {t('AboutMe.Greetings')}
        <span aria-hidden></span>
      </p>
      <span aria-hidden className={styles.scrollLine}></span>
      <SectionTitle title="AboutMe.SectionTitle" sectionKey="about_me" />
      <CareerOverview />
      <CareerTimeline />
      <Skills />

      <span aria-hidden className="sectionTransition bottom"></span>
    </section>
  );
}

export const AboutMe = memo(AboutMeSectionContent);