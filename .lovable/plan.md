

## Plan: Rebuild auto-expand on scroll

### Root cause
The current `useScrollExpand` hook has a timing bug: the `useEffect([], [])` runs on mount before the callback ref has set the element, so `elementRef.current` is always `null` and the `IntersectionObserver` never attaches. The feature literally does nothing.

### Solution: Rewrite the hook
Delete the broken `useEffect` approach. Move observer creation directly into the callback ref — this guarantees the observer attaches the moment the DOM element exists.

### File changes

**`src/hooks/use-scroll-expand.ts`** — Full rewrite:
- Remove `useEffect` entirely
- In the `useCallback` ref: disconnect any previous observer, then create and attach a new `IntersectionObserver` directly on the element
- Keep the same `hasAutoExpanded` guard (only fires once per section)
- Keep `currentIndexRef` / `setIndexRef` pattern to avoid stale closures

```ts
const callbackRef = useCallback((el: HTMLDivElement | null) => {
  if (observerRef.current) observerRef.current.disconnect();
  if (!el) return;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAutoExpanded.current && currentIndexRef.current === null) {
      hasAutoExpanded.current = true;
      setIndexRef.current(0);
    }
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
  observer.observe(el);
  observerRef.current = observer;
}, []);
```

**No changes needed** in any of the 5 consumer components — they already wire the hook correctly via `scrollCallbackRef`. The fix is entirely in the hook.

### Components affected (auto-fixed by hook change)
- CaseStudies
- ProductStrategy
- GTMStrategy
- ExperimentsBoard
- FuturisticPrototypes

### QA/QC
- Scroll through entire Work page; each section's first accordion item should expand when the section enters the viewport
- Manually collapsing and opening other items should still work normally
- Mobile: same behavior on touch scroll
- No visual or layout changes

