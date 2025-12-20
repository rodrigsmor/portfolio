import { useTranslate } from '@/utils/hooks/useTranslate';
import styles from './career-timeline.module.css';
import { SubsectionTitle } from '@/components/textual/subsection-title';
import { professionalExperiences } from '@/utils/consts/professional';
import { format } from 'date-fns';
import { ptBR, es, enUS } from 'date-fns/locale';

export function CareerTimeline() {
  const { t, locale: lang } = useTranslate();

  const locales = { 'en-US': enUS, 'pt-BR': ptBR, 'es-419': es };

  return (
    <section aria-labelledby="ProfessionalExperiences" className={styles.careerTimelineContainer}>
      <SubsectionTitle id="ProfessionalExperiences" title={t('ProfessionalJourney.sectionTitle')} />
      <ul className={styles.experiencesWrapper}>
        {professionalExperiences.map((position, index) => {
          const startDate = format(new Date(`${position.startDate}-02`), 'MMM yyyy', {
            locale: locales[lang]
          });

          const endDate = format(new Date(`${position.endDate}-02`), 'MMM yyyy', {
            locale: locales[lang]
          });

          return (
            <li key={position.position} className={styles.experienceItem}>
              <article className={styles.experienceContent}>
                <span aria-hidden="true" className={styles.timelineColumn}>
                  <span className="dot"></span>
                  <span className="line"></span>
                </span>

                <header className={styles.experienceHeader}>
                  <h5>{t(position.position)}</h5>
                  <p className={styles.companyName}>
                    <span className="sr-only">{t('Accessibility.companyPrefix')}</span>
                    {typeof position.company === 'number' ? t('ProfessionalJourney.Experiences.various') : position.company}
                  </p>
                </header>

                <div className={styles.dateContainer}>
                  <span className="sr-only">{t('Accessibility.durationPrefix')}</span>
                  <time dateTime={position.startDate}>{startDate}</time>
                  <span aria-hidden="true"> — </span>
                  <time dateTime={position.endDate}>{endDate}</time>
                </div>

                {/* Descrição */}
                <div className={styles.description}>
                  <p>{t(position.description)}</p>
                </div>

                <footer className={styles.technologiesSection}>
                  <h6 id={`tech-label-${index}`}>
                    {t('ProfessionalJourney.Experiences.technologiesLabel')}:
                  </h6>
                  <p>{position.technologies}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}