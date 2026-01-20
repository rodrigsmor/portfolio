'use client';

import styles from './project-section-title.module.css';
import { Icon, IconContext, IconWeight } from '@phosphor-icons/react';

interface ProjectSubsectionTitleProps {
  id?: string;
  title: string;
  Icon: Icon;
  weight?: IconWeight;
  size?: 'h3' | 'h5';
}

export function ProjectSectionTitle({ id, Icon, title, weight = 'fill', size = 'h5' }: ProjectSubsectionTitleProps) {
  return (
    <h2 id={id} className={`${styles.projectSectionTitle} ${size}`}>
      <IconContext.Provider
        value={{
          size: 24,
          weight
        }}
      >
        <Icon />
      </IconContext.Provider>
      {title}
    </h2>
  );
}