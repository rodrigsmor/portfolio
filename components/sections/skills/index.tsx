import styles from './skills.module.css';
import { PathToDot, useTranslate } from '@/utils/hooks/useTranslate';
import { SubsectionTitle } from '@/components/textual/subsection-title';
import { Dictionary } from '@/utils/functions/dictionaries';
import { LanguageCard } from '@/components/cards/language-card';
import { groupedSkills } from '@/consts/technologies';
import { TechnologySection } from '../technology';

type Language = {
  percentage: number;
  name: PathToDot<Dictionary>;
  level: PathToDot<Dictionary>;
  title: 'english' | 'spanish' | 'portuguese';
}

export function Skills() {
  const { t } = useTranslate();

  const languages: Language[] = [
    {
      title: 'portuguese',
      percentage: 100,
      name: 'AboutMe.Skills.Languages.pt-BR.name',
      level: 'AboutMe.Skills.Languages.pt-BR.level',
    },
    {
      title: 'english',
      percentage: 70,
      name: 'AboutMe.Skills.Languages.en-US.name',
      level: 'AboutMe.Skills.Languages.en-US.level',
    },
    {
      title: 'spanish',
      percentage: 15,
      name: 'AboutMe.Skills.Languages.es-419.name',
      level: 'AboutMe.Skills.Languages.es-419.level',
    },
  ];

  return (
    <section aria-labelledby="AboutMe_Skills" className={styles.skillsContainer}>
      <SubsectionTitle id="AboutMe_Skills" title={t('AboutMe.Skills.title')} />
      <div className={styles.contentWrapper} aria-describedby="skills-overview-text">
        <section id="skills-overview-text" className={styles.abilitiesOverview}>
          <p>{t('AboutMe.Skills.content')}</p>
          <section aria-labelledby="languages-title" className={styles.languagesSection}>
            <h5 id="languages-title" className="languages-title">
              {t('AboutMe.Skills.Languages.title')}
            </h5>
            <ul className={styles.listOfLanguages}>
              {languages.map((language) => {
                return (
                  <LanguageCard
                    key={language.title}
                    name={t(language.name)}
                    level={t(language.level)}
                    percentage={language.percentage}
                  />
                );
              })}
            </ul>
          </section>
        </section>
        <section aria-label={t('Accessibility.techStack')} className={styles.listOfSkills}>
          {groupedSkills.map((skill) => (
            <TechnologySection
              id={skill.name}
              key={skill.name}
              title={t(skill.title)}
              skills={skill.skills}
            />
          ))}
        </section>
      </div>
    </section>
  );
}