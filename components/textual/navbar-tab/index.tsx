import { SectionsKey } from '@/utils/@types/sections';

import styles from './navbar.module.css';
import { PathToDot, useTranslate } from '@/utils/hooks/useTranslate';
import { Dictionary } from '@/utils/functions/dictionaries';

interface NavbarTabProps {
  value: SectionsKey;
  label: string;
  isCurrent: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

export function NavbarTab({ isCurrent, label, value, isMobile, onClick }: NavbarTabProps) {
  const { t } = useTranslate();

  return (
    <a
      href={`#${value}`}
      aria-current={isCurrent ? 'page' : 'false'}
      className={`${styles.navbarTab} ${isMobile ? 'mobileView' : ''}`}
      {...(onClick ? { onClick } : {})}
    >
      {t(label as PathToDot<Dictionary>)}
    </a>
  );
}