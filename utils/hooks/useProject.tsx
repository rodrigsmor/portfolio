'use client';

import { projectsData } from '../consts/projects';
import { Project, ProjectSlug } from '../@types/project';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { LanguageCode } from '../@types/lang';

interface ProjectContextType {
  project: Project;
  showMediaPreview: boolean;
  mediaPreviewId: number | null,
  closeMediaPreview: () => void;
  openMediaPreview: (id: number) => void;
  getDescription: (key: 'shortDescription' | 'fullDescription') => string;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

type ProjectProviderProps = {
  slug: ProjectSlug;
  locale: LanguageCode;
  children: ReactNode;
};

export function ProjectProvider({ locale, children, slug }: ProjectProviderProps) {
  const [mediaPreviewId, setMediaPreviewId] = useState<number | null>(null);

  const project = useMemo(() => {
    return projectsData[slug] ?? projectsData.tastyhub;
  }, [slug]);

  const getDescription = (key: 'shortDescription' | 'fullDescription'): string => {
    return project[key]?.[locale] ?? '';
  }

  const openMediaPreview = (id: number) => {
    setMediaPreviewId(id);
  }

  const closeMediaPreview = () => setMediaPreviewId(null);

  return (
    <ProjectContext.Provider
      value={{
        project,
        getDescription,
        mediaPreviewId,
        openMediaPreview,
        closeMediaPreview,
        showMediaPreview: mediaPreviewId !== null
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProject deve ser usado dentro de um ProjectProvider');
  return context;
}