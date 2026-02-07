'use client';

import { projectsData } from '../consts/projects';
import { Project, ProjectSlug } from '../@types/project';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useRef, useState } from 'react';
import { LanguageCode } from '../@types/lang';

interface ProjectContextType {
  project: Project;
  initialId: number;
  showMediaPreview: boolean;
  mediaPreviewId: number | null,
  closeMediaPreview: () => void;
  openMediaPreview: (id: number) => void;
  setMediaPreviewId: Dispatch<SetStateAction<number | null>>;
  getDescription: (key: 'shortDescription' | 'fullDescription') => string;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

type ProjectProviderProps = {
  slug: ProjectSlug;
  locale: LanguageCode;
  children: ReactNode;
};

export function ProjectProvider({ locale, children, slug }: ProjectProviderProps) {
  const initialPreviewId = useRef<number | null>(null);
  const [mediaPreviewId, setMediaPreviewId] = useState<number | null>(null);

  const project = useMemo(() => {
    return projectsData[slug] ?? projectsData.tastyhub;
  }, [slug]);

  const getDescription = (key: 'shortDescription' | 'fullDescription'): string => {
    return project[key]?.[locale] ?? '';
  }

  const openMediaPreview = (id: number) => {
    setMediaPreviewId(id);
    initialPreviewId.current = id;
  }

  const closeMediaPreview = () => {
    setMediaPreviewId(null);
    initialPreviewId.current = null;
  };

  return (
    <ProjectContext.Provider
      value={{
        project,
        getDescription,
        mediaPreviewId,
        openMediaPreview,
        closeMediaPreview,
        setMediaPreviewId,
        initialId: initialPreviewId.current ?? 0,
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