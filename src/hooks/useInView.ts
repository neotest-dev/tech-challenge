import { useCallback, useEffect, useState, type RefCallback } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>(options: UseInViewOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options;
  const [element, setElement] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  });
  const ref: RefCallback<T> = useCallback((node) => setElement(node), []);

  useEffect(() => {
    if (!element || !('IntersectionObserver' in window)) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) setIsInView(true);
    };
    mediaQuery.addEventListener('change', handleMotionPreference);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleMotionPreference);
    };
  }, [element, threshold, rootMargin, once]);

  return { ref, isInView };
}
