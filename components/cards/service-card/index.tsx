import Image from 'next/image';
import { useCallback } from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react';
import styles from './service-card.module.css';
import { ServicesType } from '@/types/services';
import { useTranslate } from '@/hooks/useTranslate';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface ServiceCardProps {
  type: ServicesType;
  icon: string;
}

const SVGElement = () => {
  return (
    <svg className="blurEffect" width="303" height="262" viewBox="0 0 303 262" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200.04 158.302C200.04 215.573 178.56 262 152.063 262C125.566 262 96.4493 215.573 96.4493 158.302C96.4493 101.031 124.753 0 151.25 0C177.747 0 200.04 101.031 200.04 158.302Z" fill="#6805E0" />
      <path d="M302.5 188.359C302.5 210.77 234.783 228.937 151.25 228.937C67.7169 228.937 0 210.77 0 188.359C0 165.949 68.5301 139.266 152.063 139.266C235.596 139.266 302.5 165.949 302.5 188.359Z" fill="#6805E0" />
    </svg>
  );
}

export function ServiceCard({ icon, type }: ServiceCardProps) {
  const { t } = useTranslate();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleRequestQuote = () => {
    router.push(pathname + '?' + createQueryString('quote', type) + '#contact');
  };

  return (
    <article
      className={styles.serviceCard}
      aria-labelledby={`service-title-${type}`}
    >
      <Image aria-hidden src={icon} alt="" height={38} width={38} />

      <div className={styles.serviceContent}>
        <h3 id={`service-title-${type}`} className={styles.serviceTitle}>
          {t(`Services.items.${type}.title`)}
        </h3>

        <p className={styles.serviceDescription}>
          {t(`Services.items.${type}.description`)}
        </p>

        <button
          onClick={handleRequestQuote}
          className={styles.ctaButton}
        >
          {t('Services.requestQuoteLabel')}
          <ArrowRightIcon size={18} />
        </button>
      </div>
      <span aria-hidden className="outlineBackground"></span>
      <SVGElement />
    </article>
  );
}