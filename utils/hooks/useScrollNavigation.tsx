'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SectionsKey } from '../@types/sections';

interface ScrollContextData {
  isSticky: boolean;
  activeSection: SectionsKey | null;
}

const ScrollContext = createContext<ScrollContextData>({} as ScrollContextData);

const SECTION_LIST: SectionsKey[] = ['home', 'about_me', 'services', 'projects', 'contact'];

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionsKey | null>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionsKey);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    SECTION_LIST.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isSticky, activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);