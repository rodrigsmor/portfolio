'use client';

import dynamic from "next/dynamic";

import { Home } from "@/sections/home";
import { Header } from "@/components/layout/header";
import { CarouselDivider } from "@/components/layout/carousel-divider";

const AboutMe = dynamic(() => import('@/sections/about-me').then(mod => mod.AboutMe), {
  ssr: false,
  loading: () => <div className="h-20" />
});

const Contact = dynamic(() => import('@/sections/contact').then(mod => mod.Contact), {
  ssr: false,
  loading: () => <div className="h-20" />
});

const Projects = dynamic(() => import('@/sections/projects').then(mod => mod.Projects), {
  ssr: false,
  loading: () => <div className="h-20" />
});

const MyServices = dynamic(() => import('@/sections/my-services').then(mod => mod.MyServices), {
  ssr: false,
  loading: () => <div className="h-20" />
});

export default function Portfolio() {
  return (
    <>
      <Header />
      <main style={{ width: '100dvw', maxWidth: '100dvw' }}>
        <Home />
        <CarouselDivider/>
        <AboutMe />
        <MyServices />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
