import { ProjectSummary } from '@/types/project';
import styles from './project-card.module.css';
import Image from 'next/image';
import { Button } from '@/components/buttons/button';
import { ArrowUpRight } from 'phosphor-react';

interface ProjectCardProps {
  project: ProjectSummary;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const id = `${project.title}_title`;

  return (
    <article className={styles.projectCardContainer} aria-labelledby={id}>
      <figure className={styles.coverBackground}>
        <Image
          src={project.coverImage.url}
          alt={project.coverImage.alt}
          height={480}
          width={680}
          quality={80}
          loading="lazy"
        />
      </figure>
      <header className={styles.projectHeader}>
        <h3 id={id}>{project.title}</h3>
        <ul aria-label="stack" className={styles.technologiesGroup}>
          {project.technologies.slice(0, 3).map((tech) => (
            <li key={tech} className={styles.technologyBadge}>
              {tech}
            </li>
          ))}
        </ul>
      </header>
      <Button type="button" theme="outline">
        View Full Project
        <ArrowUpRight size={24} aria-hidden weight="bold" />
      </Button>
    </article>
  );
}