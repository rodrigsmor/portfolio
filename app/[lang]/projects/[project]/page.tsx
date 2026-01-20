export const dynamic = 'force-dynamic'

import { Metadata } from 'next';
import { LanguageCode } from '@/types/lang';
import { getDictionary } from '@/functions/dictionaries';
import { ProjectSlug } from '@/types/project';
import { langCodes } from '@/consts/languages';
import { Project } from '@/views/project';

export type LangPageProps = {
  params: Promise<{ lang: string, project: string }>;
};

export async function generateStaticParams() {
  const slugs = Object.values(ProjectSlug);

  const paths = langCodes.flatMap((lang) =>
    slugs.map((slug) => ({
      lang: lang,
      project: slug,
    }))
  );

  return paths;
}

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;

  const dict = await getDictionary(lang as LanguageCode);

  return {
    title: dict.Metadata.title,
    description: dict.Metadata.description,
    openGraph: {
      title: dict.Metadata.title,
      description: dict.Metadata.description,
      locale: lang,
    },
  };
}

export default async function Page() {
  return (
    <Project />
  );
}