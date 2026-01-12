export const dynamic = 'force-dynamic'

import { Metadata } from "next";
import Portfolio from "@/views/portfolio"
import { LanguageCode } from "@/types/lang";
import { getDictionary } from "../../utils/functions/dictionaries";

export type LangPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LangPageProps): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = process.env.BASE_URL;

  const dict = await getDictionary(lang as LanguageCode);

  return {
    title: dict.Metadata.title,
    description: dict.Metadata.description,
    openGraph: {
      title: dict.Metadata.title,
      description: dict.Metadata.description,
      locale: lang,
    },
    alternates: {
      canonical: `${baseUrl}/${baseUrl}`,
      languages: {
        'en-US': `${baseUrl}/en-US`,
        'pt-BR': `${baseUrl}/pt-BR`,
        'es-419': `${baseUrl}/es-419`,
        'x-default': `${baseUrl}/en-US`,
      },
    },
  };
}

export default async function Page() {
  return (
    <Portfolio />
  );
}