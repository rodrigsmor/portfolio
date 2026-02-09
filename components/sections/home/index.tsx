'use client';

import { memo } from "react";
import styles from "./home.module.css";
import { Button } from "@/components/buttons/button";
import { ArrowUpRightIcon, RocketLaunchIcon } from "@phosphor-icons/react";
import { SocialLinks } from "@/components/layout/social-links";
import { useTranslate } from "@/hooks/useTranslate";
import { ScrollDownIndicator } from "@/components/textual/scroll-down-indicator";
import { HomeBackground } from "@/components/animations/home-background";

function HomeSectionContent() {
  const { t } = useTranslate();

  return (
    <section id="home" className={`${styles.home}`}>
      <header className={styles.homeContent}>
        <h1 className={styles.homeGreetings}>
          {t('Home.Title.greetings')}
          <strong className="uppercaseText">
            {t('Home.Title.role')}
            <span>{t('Home.Title.highlightRole')}</span>
          </strong>
          <span className={styles.secondaryRoleWrapper}>
            <span className="minorCoordinating">&amp; </span>
            <span className="secondaryRole">{t('Home.Title.secondaryRole')}</span>
          </span>
        </h1>
        <div className={styles.separatorLine}></div>
        <p className={styles.homeDescription}>
          {t('Home.Description')}
        </p>
      </header>
      <div className={styles.ctaGroup}>
        <Button
          type="button"
          theme="gradient"
          component="a"
          href="#contact"
        >
          <RocketLaunchIcon
            width={24}
            height={24}
            weight="bold"
          />
          {t('Home.PrimaryButton')}
        </Button>
        <Button
          type="button"
          component="a"
          theme="outline"
          href="#projects"
        >
          {t('Home.SecondaryButton')}
          <ArrowUpRightIcon
            width={24}
            height={24}
            weight="bold"
          />
        </Button>
      </div>
      <footer className={styles.footerSocialMedia}>
        <SocialLinks />
        <ScrollDownIndicator />
      </footer>
      <span className={styles.backgroundStyle} aria-hidden="true">
        <span className="particlesLayer"></span>
        <span className="blurLayer"></span>
      </span>
      <HomeBackground />
    </section>
  );
}

export const Home = memo(HomeSectionContent);