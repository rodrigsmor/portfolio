import { Project, ProjectSlug, ProjectSummary } from "@/types/project";
import { diaTask } from "@/content/projects/dia-task/summary";
import { tastyhub } from "@/content/projects/tastyhub/summary";
import { currencyConverter } from "@/content/projects/currency-converter/summary";
import { peruTravell } from "@/content/projects/peru-travell/summary";
import { marketlify } from "@/content/projects/marketlify/summary";
import { calculator } from "@/content/projects/calculator/summary";
import { myNotes } from "@/content/projects/my-notes/summary";
import { LanguageCode } from "@/types/lang";
import { aionTimer } from "@/content/projects/aion-timer/summary";
import { fullTastyhub } from "@/content/projects/tastyhub/metadata";

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

type ProjectData = {
  [key in LanguageCode]: {
    [key in ProjectSlug]: Project;
  }
}

export const projectsData: ProjectData = {
  'en-US': {
    'aion-timer': fullTastyhub,
    'calculator': fullTastyhub,
    'currency-converter': fullTastyhub,
    'diatask': fullTastyhub,
    'peru-travell': fullTastyhub,
    marketlify: fullTastyhub,
    mynotes: fullTastyhub,
    tastyhub: fullTastyhub
  },
  'es-419': {
    'aion-timer': fullTastyhub,
    'calculator': fullTastyhub,
    'currency-converter': fullTastyhub,
    'diatask': fullTastyhub,
    'peru-travell': fullTastyhub,
    marketlify: fullTastyhub,
    mynotes: fullTastyhub,
    tastyhub: fullTastyhub
  },
  'pt-BR': {
    'aion-timer': fullTastyhub,
    'calculator': fullTastyhub,
    'currency-converter': fullTastyhub,
    'diatask': fullTastyhub,
    'peru-travell': fullTastyhub,
    marketlify: fullTastyhub,
    mynotes: fullTastyhub,
    tastyhub: fullTastyhub
  }
}