'use client';

import { useTranslate } from '@/hooks/useTranslate';
import styles from './my-services.module.css';
import { SectionTitle } from '@/components/layout/section-title';
import { services } from '@/consts/services';
import { ServiceCard } from '@/components/cards/service-card';
import { memo } from 'react';

function MyServicesSectionContent() {
  const { t } = useTranslate();
  
  return (
    <section id="services" aria-labelledby="services" className={styles.myServicesContainer}>
      <p role="doc-subtitle" className={styles.ctaText}>
        {t('Services.ctaQuestion')}
        <strong>{t('Services.ctaSubtitle')}</strong>
      </p>
      <span aria-hidden className={styles.scrollLine}></span>
      <header className={styles.sectionHeader}>
        <SectionTitle title="Services.title" sectionKey="services" />
        <p>{t('Services.sectionDescription')}</p>
      </header>
      <div className={styles.servicesGroup}>
        {services.map((service) => {
          return (
            <ServiceCard key={service.type} type={service.type} icon={service.icon}  />
          );
        })}
      </div>
      <TopEllipse />
      <TopLeftEllipse />
      <CarouselEllipse />
    </section>
  );
}

const CarouselEllipse = () => {
  return (
    <svg className="blurEllipses" aria-hidden width="205" height="256" viewBox="0 0 205 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="102.247" cy="127.764" rx="129.5" ry="99.979" transform="rotate(-75.0139 102.247 127.764)" fill="#6805E0" />
    </svg>
  );
}

const TopLeftEllipse = () => {
  return (
    <svg className="blurEllipses" aria-hidden width="585" height="327" viewBox="0 0 585 327" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="292.5" cy="163.5" rx="292.5" ry="163.5" fill="#6805E0" />
    </svg>
  );
}

const TopEllipse = () => {
  return (
    <svg className="blurEllipses" aria-hidden width="221" height="226" viewBox="0 0 221 226" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="110.5" cy="113" rx="110.5" ry="113" fill="#6805E0" />
    </svg>
  );
}

export const MyServices = memo(MyServicesSectionContent);
