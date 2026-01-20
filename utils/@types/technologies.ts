import { PathToDot } from '../hooks/useTranslate';
import { Dictionary } from '../functions/dictionaries';

export enum SkillLevel {
  BASIC = 'basic',    
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

export type Skill = {
  name: string;
  iconSrc: string; 
  level?: SkillLevel;
  yearsOfExperience: number;
};

export type GroupedSkills = {
  name: string;
  title: PathToDot<Dictionary>;
  skills: Skill[];
}