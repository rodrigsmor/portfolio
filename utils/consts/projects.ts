import { ProjectSummary } from "@/types/project";
import { diaTask } from "@/content/projects/dia-task/summary";
import { tastyhub } from "@/content/projects/tastyhub/summary";
import { aionTimer } from "@/content/projects/aion-timer/summary";
import { currencyConverter } from "@/content/projects/currency-converter/summary";
import { peruTravell } from "@/content/projects/peru-travell/summary";
import { marketlify } from "@/content/projects/marketlify/summary";
import { calculator } from "@/content/projects/calculator/summary";
import { myNotes } from "@/content/projects/my-notes/summary";

export const projects: ProjectSummary[] = [
  currencyConverter,
  aionTimer,
  calculator,
  diaTask,
  tastyhub,
  marketlify,
  myNotes,
  peruTravell,
  // Iris Mobile
  // Ruma - Kanban App
];