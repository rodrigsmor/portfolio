import { hasProjectSlug } from "@/utils/functions/dictionaries";
import { ProjectProvider } from "@/hooks/useProject";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { LanguageCode } from "@/types/lang";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string, project: string }>
};

export default async function ProjectLayout({ children, params }: LayoutProps) {
  const { project, lang } = (await params);

  if (!hasProjectSlug(project)) notFound();

  return (
    <ProjectProvider slug={project} locale={lang as LanguageCode}>
      {children}
    </ProjectProvider>
  )
}