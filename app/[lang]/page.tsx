import { Metadata } from "next";
import Portfolio from "@/views/portfolio"
import { getDictionary } from "../../utils/functions/dictionaries";
import { LanguageCode } from "@/utils/@types/lang";

export type LangPageProps = {
  params: Promise<{ lang: string }>;
};

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
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-US': '/en-US',
        'pt-BR': '/pt-BR',
        'es-419': '/es-419',
      },
    },
  };
}

export default async function Page() {
  return (
    <Portfolio />
  );
}