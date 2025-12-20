'use client';

import { useParams, useRouter } from 'next/navigation';
import styles from './outline-select.module.css';
import { ComponentPropsWithoutRef } from 'react';
import { languages } from '@/consts/languages';
import { LanguageCode, LanguageData } from '@/types/lang';
import { CaretDown } from 'phosphor-react';
import { useTranslate } from '@/hooks/useTranslate';

type HTMLSelectProps = ComponentPropsWithoutRef<'select'>;

type OutlineSelectProps = HTMLSelectProps;

export function OutlineSelect({ }: OutlineSelectProps) {
  const router = useRouter();
  const { t } = useTranslate();
  const params = useParams<{ lang: LanguageCode | undefined }>();

  const langSlug = params?.lang ?? 'en-US';
  const { label, value } = languages[langSlug];
  const langKeys: LanguageData[] = Object.values(languages);

  return (
    <div className={`outline-select ${styles.outlineSelect}`}>
      <select
        name="language"
        value={value}
        aria-label={t('Accessibility.languageSelector')}
        onChange={(event) => {
          router.push(`/${event.target.value}`);
        }}
      >
        {langKeys.map((lang) => (
          <option
            key={lang.value}
            value={lang.value}
          >
            {lang.label}
          </option>
        ))}
      </select>
      <p>
        <span className="sr-only">
          {t('Accessibility.currentLanguage')}
        </span>
        {label}
      </p>
      <CaretDown size={20} weight="bold" />
    </div>
  );
}