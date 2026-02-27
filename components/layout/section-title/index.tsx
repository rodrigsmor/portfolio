import { SectionsKey } from '@/types/sections';
import styles from './section-title.module.css';
import { Dictionary } from '@/functions/dictionaries';
import { PathToDot, useTranslate } from '@/hooks/useTranslate';

interface SectionTitleProps {
  title: PathToDot<Dictionary>;
  sectionKey: `${SectionsKey}_title`;
}

export function SectionTitle({ title, sectionKey }: SectionTitleProps) {
  const { t } = useTranslate();
  const content = t(title);

  return (
    <header className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle} id={sectionKey} data-text={content}>
        {content}
      </h2>
      <span className={styles.bottomLine} aria-hidden></span>
    </header>
  );
}