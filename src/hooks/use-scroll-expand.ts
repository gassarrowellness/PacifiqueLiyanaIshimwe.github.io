import { useEffect, useRef, useCallback } from "react";

/**
 * Hook that auto-expands the first item of a collapsible list
 * when the section scrolls into view. Uses IntersectionObserver
 * for dynamic detection — no hardcoding.
 */
export function useScrollExpand(
  currentIndex: number | null,
  setIndex: (i: number | null) => void
) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAutoExpanded = useRef(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAutoExpanded.current && currentIndex === null) {
        hasAutoExpanded.current = true;
        setIndex(0);
      }
    },
    [currentIndex, setIndex]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return sectionRef;
}
