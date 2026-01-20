import styles from './technology.module.css';
import { Skill } from '@/utils/@types/technologies';
import { TechnologyCard } from '@/components/cards/technology-card';

interface TechnologySectionProps {
  id: string;
  title: string;
  skills: Skill[];
}

export function TechnologySection({ id, title, skills }: TechnologySectionProps) {
  const titleId = `TechnologySection_${id}`;

  return (
    <section
      aria-labelledby={titleId}
      className={styles.technologySectionContainer}
    >
      <h4 id={titleId} className={styles.technologySectionTitle}>{title}</h4>
      <ul className={styles.technologiesList}>
        {skills.map((skill) => <TechnologyCard key={skill.name} skill={skill} />)}
      </ul>
    </section>
  );
}