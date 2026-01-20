import Image from 'next/image';
import { Skill } from '@/types/technologies';
import styles from './technology-card.module.css';
import { useTranslate } from '@/hooks/useTranslate';

interface TechnologyCardProps {
  skill: Skill;
  isSummary?: boolean;
}

export function TechnologyCard({ skill, isSummary = false }: TechnologyCardProps) {
  const { t } = useTranslate();

  const formattedExperience = Number.isInteger(skill.yearsOfExperience)
    ? `${skill.yearsOfExperience}y`
    : `+${Math.floor(skill.yearsOfExperience)}y`;

  const skillLevel = skill?.level ? t(`AboutMe.Skills.Technologies.TechProficiencyLevels.${skill.level}`) : '';

  return (
    <li
      key={skill.name}
      aria-labelledby={`tech-name-${skill.name}`}
      className={`${styles.technologyCard} ${isSummary ? 'minimized' : ''}`}
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

      {!isSummary && (
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
      )}

      <span aria-hidden="true" className="outlineBackground"></span>
    </li>
  );
}