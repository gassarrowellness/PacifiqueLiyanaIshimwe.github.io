# Hero Redesign + Site-wide Glassmorphism

## 1. Add portrait image
- Copy `user-uploads://New_Linkedin_Image.png` to `src/assets/pacifique-portrait.png`
- Import as ES6 module in `Hero.tsx`

## 2. Rebuild `src/components/Hero.tsx` to match reference
Two-column layout (stacks on mobile):

**Left column:**
- "Available for new opportunities" pill (glass style, emerald dot)
- H1: "Pacifique Liyana" (black/foreground) line break "Ishimwe" (emerald-600, italic to match reference)
- Emerald left-border quote block containing title: "Senior Product Manager | AI, Platforms, Digital Operations"
- Subtitle paragraph (existing copy)
- Two buttons:
  - "View Product Work" (solid dark/primary, arrow icon, glass shadow)
  - "LinkedIn" (glass: `bg-white/40 backdrop-blur-md border border-white/50`)

**Right column:**
- Rounded portrait (`rounded-3xl`, `aspect-[4/5]`), object-cover
- Subtle emerald accent line/curve on right edge (decorative SVG or border element seen in reference)
- Soft shadow + light glass frame

**Background:** keep existing aurora gradient but lighten to match reference (more white/slate-50, less slate-600). Light, airy feel.

**Metrics bar:** keep below, restyle as glass card matching reference (white/40 backdrop-blur, rounded-2xl, 3 metrics: 2M+, 6+ yrs, 10+, each with descriptor line under label as in reference)

Layout: `grid md:grid-cols-2 gap-12 items-center`, max-w-6xl. Text-left on desktop, centered on mobile.

## 3. Glassmorphism utility
Update `.glass` in `src/index.css` (already exists) and add a new `.glass-button` utility:
```css
.glass-button {
  @apply bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/15;
  box-shadow: 0 4px 20px -4px hsl(var(--foreground) / 0.08);
}
```

## 4. Apply glass treatment site-wide
Targeted, presentation-only updates (no logic changes):
- `Navigation.tsx`: nav bar uses `bg-background/60 backdrop-blur-xl border-b border-border/40`
- `Footer.tsx`: social icon circles use `glass-button`
- `Work.tsx` "Download PDF" outline button: add `glass-button` classes
- `CaseStudies.tsx`, `ProductStrategy.tsx`, `GTMStrategy.tsx`, `ExperimentsBoard.tsx`, `ProductDashboards.tsx`, `FuturisticPrototypes.tsx`, `AIDemos.tsx`, `Timeline.tsx`, `SkillsTools.tsx`, `About.tsx`, `Contact.tsx`: any existing `Card`/section wrappers that use solid `bg-card` swap to `glass` class where it improves visual consistency. Filter chips/tabs/badges get `glass-button`.
- `Contact.tsx` copy-email button: `glass-button`

Print CSS already neutralizes `.glass` — no print regression.

## What stays unchanged
- Routing, data, business logic, copy (except hero already-present text)
- Color tokens, typography (Arial), accessibility
- PDF export behavior
- GitHub Pages deployment config

## Technical notes
- All colors via semantic tokens / Tailwind opacity utilities, no hardcoded hex
- Portrait image goes in `src/assets` (bundled, optimized), imported as module
- Mobile-first: hero grid collapses to single column, portrait shown above text on small screens (or below — I'll match reference which shows side-by-side; on mobile stack with portrait first)
- Maintain WCAG AA: glass backgrounds keep sufficient contrast for text by layering over solid section bg
