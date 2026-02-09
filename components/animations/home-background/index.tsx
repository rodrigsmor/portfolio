import { useEffect, useMemo, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import styles from './home-background.module.css';

export function HomeBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    autoPlay: true,
    fpsLimit: 60,
    detectRetina: false, 
    fullScreen: { enable: false, zIndex: 0 },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    interactivity: {
      detectsOn: "parent",
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 60, smooth: 10 }
        },
        resize: { enable: true, delay: 0.5 }
      },
      modes: {
        grab: { distance: 400, links: { opacity: 1 } },
        push: { quantity: 4 }
      }
    },
    particles: {
      number: {
        value: 100,
        density: { enable: true, width: 1920, height: 1080 }
      },
      color: { value: "#F0ECF8" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 1, sync: false }
      },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: true, speed: 5, sync: false }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#F0ECF8",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" }
      }
    }
  }), []);

  const particlesLoaded = useCallback(async (container?: Container) => {
  }, []);

  if (!init) return null;

  return (
    <div aria-hidden className={styles.homeBackgroundContainer}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}