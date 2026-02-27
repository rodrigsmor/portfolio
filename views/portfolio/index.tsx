'use client';

import { Home } from "@/sections/home";
import { AboutMe } from "@/sections/about-me";
import { Projects } from "@/sections/projects";
import { Contact } from "@/sections/contact";
import { Header } from "@/components/layout/header";
import { MyServices } from "@/sections/my-services";
import { CarouselDivider } from "@/components/layout/carousel-divider";

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
