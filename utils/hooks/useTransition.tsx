import { useState, useEffect } from 'react';

export const useTransition = (initialState: boolean, duration: number = 300) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [shouldRender, setShouldRender] = useState(initialState);
  const [isTransitioning, setIsTransitioning] = useState(initialState);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let frameId: number;

    const toggleRender = () => {
      if (isOpen) {
        setShouldRender(true);

        frameId = requestAnimationFrame(() => {
          frameId = requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      } else {
        setIsTransitioning(false);

        timeoutId = setTimeout(() => {
          setShouldRender(false);
        }, duration);
      }
    };

    toggleRender();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isOpen, duration]);

  return [shouldRender, setIsOpen, isTransitioning] as const;
};