import { LanguageCode } from "@/types/lang";
import { ProjectSlug } from "@/types/project";
import { projectsData } from "../consts/projects";

export async function getProjectBySlug(slug: ProjectSlug, lang: LanguageCode) {
  const project = projectsData?.[lang]?.[slug];

  if (!project) {
    return null;
  }

  return project;
}