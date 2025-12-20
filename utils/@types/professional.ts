import { Dictionary } from "../functions/dictionaries";
import { PathToDot } from "../hooks/useTranslate";

export type ProfessionalExperience = {
  position: PathToDot<Dictionary>;
  company: string | number;
  description: PathToDot<Dictionary>;
  technologies: string;
  startDate: string;
  endDate: string;
}