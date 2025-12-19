import { Skill } from '@/utils/@types/technologies';
import styles from './technology.module.css';
import Image from 'next/image';
import { useTranslate } from '@/utils/hooks/useTranslate';

interface TechnologySectionProps {
  id: string;
  title: string;
  skills: Skill[];
}

export function TechnologySection({ id, title, skills }: TechnologySectionProps) {
  const { t } = useTranslate();

  const titleId = `TechnologySection_${id}`;
  return (
    <section
      aria-labelledby={titleId}
      className={styles.technologySectionContainer}
    >
      <h4 id={titleId} className={styles.technologySectionTitle}>{title}</h4>
      <ul className={styles.technologiesList}>
        {skills.map((skill) => {
          const formattedExperience = Number.isInteger(skill.yearsOfExperience)
            ? `${skill.yearsOfExperience}y`
            : `+${Math.floor(skill.yearsOfExperience)}y`;

          const skillLevel = t(`AboutMe.Skills.Technologies.TechProficiencyLevels.${skill.level}`);

          return (
            <li
              key={skill.name}
              className={styles.technologyCard}
              aria-labelledby={`tech-name-${skill.name}`}
            >
              <Image
                src={skill.iconSrc}
                alt=""
                aria-hidden="true"
                height={34}
                width={34}
              />

              <strong
                className={styles.technologyTitle}
                id={`tech-name-${skill.name}`}
              >
                {skill.name}
              </strong>

              <div
                role="group"
                className={styles.summary}
                aria-label={`${t('AboutMe.Skills.Technologies.detailsLabel')} ${skill.name}`}
              >
                <time className="summaryLabel" dateTime={`P${skill.yearsOfExperience}Y`}>
                  {formattedExperience}
                </time>

                <span aria-hidden="true" className="dot"></span>

                <span className="summaryLabel">
                  <span className="sr-only">{t('AboutMe.Skills.Technologies.skillLevelLabel')}</span>
                  {skillLevel}
                </span>
              </div>

              <span aria-hidden="true" className="outlineBackground"></span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}