import { ProjectSlug } from "@/types/project";
import { projectsData } from "../consts/projects";

export async function getProjectBySlug(slug: ProjectSlug) {
  const project = projectsData?.[slug];

  if (!project) {
    return null;
  }

  return project;
}