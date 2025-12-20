import { Home } from "@/sections/home";
import styles from "./portfolio.module.css";
import { AboutMe } from "@/sections/about-me";
import { Projects } from "@/sections/projects";
import { Header } from "@/components/layout/header";
import { MyServices } from "@/sections/my-services";
import { CarouselDivider } from "@/components/layout/carousel-divider";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className={styles.mainPageLayout}>
        <Home />
        <CarouselDivider/>
        <AboutMe />
        <MyServices />
        <Projects />
      </main>
    </>
  );
}
