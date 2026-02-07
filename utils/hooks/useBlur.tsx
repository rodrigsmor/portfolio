import { useCallback, useEffect, useRef } from 'react';

export function useBlur<T extends HTMLElement>(
  onClose: () => void,
  safetyList: string[] = []
) {
  const ref = useRef<T>(null);

  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      const target = event.target as Node;

      if (!element || !target) return;

      if (!document.contains(target)) return;

      if (element.contains(target)) return;

      const isSafe = safetyList.some((selector) => {
        if (!selector) return false;

        const s = selector.startsWith('.') || selector.startsWith('#')
          ? selector
          : `.${selector}, #${selector}`;

        return (target as Element).closest?.(s);
      });

      if (isSafe) return;

      onClose();
    },
    [onClose, safetyList]
  );

  useEffect(() => {
    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);

  return ref;
}