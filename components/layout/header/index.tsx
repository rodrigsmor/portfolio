'use client';

import styles from './header.module.css'
import { ListIcon } from '@phosphor-icons/react';
import { Logo } from '@/components/textual/logo';
import { IconButton } from '@/components/buttons/icon-button';
import { OutlineSelect } from '../../forms/outline-select/index';
import { navbarSections } from '@/consts/sections';
import { NavbarTab } from '@/components/textual/navbar-tab';
import { useScroll } from '@/hooks/useScrollNavigation';
import { MobileSidebar } from '../mobile-sidebar';

import { useTransition } from '@/hooks/useTransition';
import { useTranslate } from '@/hooks/useTranslate';

interface HeaderProps {
  showFullHeader?: boolean;
}

export function Header({ showFullHeader = true }: HeaderProps) {
  const { t } = useTranslate();
  const { activeSection, isSticky } = useScroll();

  const [shouldRenderSidebar, toggleSidebarVisibility, isTransitioning] = useTransition(false, 300);

  const onClose = () => toggleSidebarVisibility(false);

  return (
    <>
      <header className={`${styles.header} ${isSticky ? 'scrolled' : ''}`}>
        <Logo />
        <IconButton
          onClick={() => toggleSidebarVisibility(true)}
          aria-label={t('Accessibility.openMenu')}
          aria-controls="MobileSideBar"
          aria-expanded={shouldRenderSidebar}
          aria-haspopup="true"
        >
          <ListIcon size={24} weight="bold" aria-hidden />
        </IconButton>
        {showFullHeader && (
          <nav className={`navbar ${styles.navbar}`}>
            <ul>
              {navbarSections.map((item) => (
                <li key={item.value}>
                  <NavbarTab
                    isCurrent={activeSection === item.value}
                    label={item.label}
                    value={item.value}
                  />
                </li>
              ))}
            </ul>
          </nav>
        )}
        <OutlineSelect />
      </header>
      {shouldRenderSidebar && (
        <MobileSidebar
          isOpen={isTransitioning}
          onClose={onClose}
        />
      )}
    </>
  );
}