import { X } from 'phosphor-react';
import { SocialLinks } from '../social-links';
import styles from './mobile-sidebar.module.css';
import { navbarSections } from '@/consts/sections';
import { NavbarTab } from '@/components/textual/navbar-tab';
import { useScroll } from '@/hooks/useScrollNavigation';
import { IconButton } from '@/components/buttons/icon-button';
import { Logo } from '@/components/textual/logo';
import { useBlur } from '@/hooks/useBlur';
import { OutlineSelect } from '@/components/forms/outline-select';
import { useTranslate } from '@/hooks/useTranslate';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const { t } = useTranslate()
  const { activeSection } = useScroll();
  const sidebarRef = useBlur(onClose);

  return (
    <>
      <div onClick={onClose} className={`${styles.backdropBlur} ${isOpen ? styles.show : ''} `} aria-hidden></div>
      <aside
        ref={sidebarRef}
        id="MobileSideBar"
        className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}
        aria-hidden={!isOpen}
        aria-modal="true"
        role="dialog"
        aria-labelledby="sidebar-title"
      >
        <header className={styles.sidebarHeader}>
          <h2 id="sidebar-title" className="sr-only">
            {t('Accessibility.sideBarTitle')}
          </h2>
          <Logo />
          <IconButton
            onClick={onClose}
            aria-label={t('Accessibility.closeMenu')}
          >
            <X size={24} aria-hidden="true" weight="bold" />
          </IconButton>
        </header>

        <nav className={styles.sidebarNav}>
          <ul role="list">
            {navbarSections.map((section) => (
              <li key={section.value}>
                <NavbarTab
                  isMobile
                  isCurrent={activeSection === section.value}
                  label={section.label}
                  value={section.value}
                  onClick={onClose}
                />
              </li>
            ))}
          </ul>
        </nav>

        <footer className={styles.sidebarFooter}>
          <OutlineSelect />
          <p className="sr-only">{t('Accessibility.socialMediaArea')}</p>
          <SocialLinks />
        </footer>
      </aside>
    </>
  );
}