import { Project, ProjectSummary } from "@/types/project";

export function summarizeProject(project: Project): ProjectSummary {
  const { id, title, slug, coverImage, technologies } = project;
  return { id, title, slug, coverImage, technologies };
}