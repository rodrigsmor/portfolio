import { GroupedSkills, Skill, SkillLevel } from '../@types/technologies';

import JavaLogo from '@/assets/logos/Java.svg';
import RubyLogo from '@/assets/logos/Ruby.svg';
import CSharpLogo from '@/assets/logos/CSharp.svg';
import PythonLogo from '@/assets/logos/Python.svg';
import JavaScriptLogo from '@/assets/logos/JavaScript.svg';
import TypeScriptLogo from '@/assets/logos/TypeScript.svg';

const programmingLanguages: Skill[] = [
  {
    name: 'JavaScript',
    iconSrc: JavaScriptLogo,
    level: SkillLevel.EXPERT,
    yearsOfExperience: 5.2,
  },
  {
    name: 'TypeScript',
    iconSrc: TypeScriptLogo,
    level: SkillLevel.ADVANCED,
    yearsOfExperience: 4.2,
  },
  {
    name: 'C#',
    iconSrc: CSharpLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 1.2,
  },
  {
    name: 'Java',
    iconSrc: JavaLogo,
    level: SkillLevel.INTERMEDIATE,
    yearsOfExperience: 3.2,
  },
  {
    name: 'Ruby',
    iconSrc: RubyLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 2.5,
  },
  {
    name: 'Python',
    iconSrc: PythonLogo,
    level: SkillLevel.BASIC,
    yearsOfExperience: 2.5,
  },
];

export const groupedSkills: GroupedSkills[] = [
  {
    name: 'programming',
    title: 'AboutMe.Skills.Technologies.Sections.ProgrammingLanguages',
    skills: programmingLanguages,
  }
]