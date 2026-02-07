import { Project, ProjectSlug, ProjectSummary } from "@/types/project";
import { diaTask } from "@/content/projects/dia-task/summary";
import { tastyhub } from "@/content/projects/tastyhub/summary";
import { currencyConverter } from "@/content/projects/currency-converter/summary";
import { peruTravell } from "@/content/projects/peru-travell/summary";
import { marketlify } from "@/content/projects/marketlify/summary";
import { calculator } from "@/content/projects/calculator/summary";
import { myNotes } from "@/content/projects/my-notes/summary";
import { aionTimer } from "@/content/projects/aion-timer/summary";
import { fullTastyhub } from "@/content/projects/tastyhub/metadata";
import { fullCurrencyConverter } from "@/content/projects/currency-converter/metadata";
import { fullPeruTravel } from "@/content/projects/peru-travell/metadata";
import { fullCalculator } from "@/content/projects/calculator/metadata";
import { fullAionTimer } from "@/content/projects/aion-timer/metadata";
import { fullDiaTask } from "@/content/projects/dia-task/metadata";
import { fullMarketlify } from "@/content/projects/marketlify/metadata";
import { fullMyNotes } from "@/content/projects/my-notes/metadata";

export const projects: ProjectSummary[] = [
  currencyConverter,
  tastyhub,
  calculator,
  peruTravell,
  marketlify,
  aionTimer,
  myNotes,
  diaTask,
  // Iris Mobile
  // Ruma - Kanban App
];

type ProjectData = {
  [key in ProjectSlug]: Project;
}

export const projectsData: ProjectData = {
  'aion-timer': fullAionTimer,
  'calculator': fullCalculator,
  'currency-converter': fullCurrencyConverter,
  'diatask': fullDiaTask,
  'peru-travell': fullPeruTravel,
  marketlify: fullMarketlify,
  mynotes: fullMyNotes,
  tastyhub: fullTastyhub
}