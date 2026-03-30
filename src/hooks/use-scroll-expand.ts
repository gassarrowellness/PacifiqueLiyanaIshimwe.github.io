import { useRef, useCallback } from "react";

/**
 * Hook that auto-expands the first item of a collapsible list
 * when the section scrolls into view. Returns a callback ref
 * to attach to the section container.
 */
export function useScrollExpand(
  currentIndex: number | null,
  setIndex: (i: number | null) => void
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAutoExpanded = useRef(false);
  const currentIndexRef = useRef(currentIndex);
  const setIndexRef = useRef(setIndex);

  // Keep refs in sync without recreating observer
  currentIndexRef.current = currentIndex;
  setIndexRef.current = setIndex;

  const callbackRef = useCallback((el: HTMLDivElement | null) => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !hasAutoExpanded.current &&
          currentIndexRef.current === null
        ) {
          hasAutoExpanded.current = true;
          setIndexRef.current(0);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    observerRef.current = observer;
  }, []);

  return callbackRef;
}
