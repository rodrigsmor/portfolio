import 'server-only'
import { LanguageCode } from '../@types/lang'

import enUS from '@/i18n/en-US.json'
import { ProjectSlug } from '../@types/project'
import { projectsData } from '../consts/projects'

export type Dictionary = typeof enUS

const dictionaries = {
  'en-US': () => import('@/i18n/en-US.json').then((module) => module.default as Dictionary),
  'pt-BR': () => import('@/i18n/pt-BR.json').then((module) => module.default as Dictionary),
  'es-419': () => import('@/i18n/es-419.json').then((module) => module.default as Dictionary),
}

export const hasLocale = (locale: string): locale is LanguageCode =>
  locale in dictionaries

export const hasProjectSlug = (projectSlug: string): projectSlug is ProjectSlug =>
  projectSlug in projectsData

export const getDictionary = async (locale: LanguageCode): Promise<Dictionary> => dictionaries[locale]()