

## Plan: Normalize Section Spacing for Cohesive Flow

Every section currently uses `py-24 md:py-32` (96px/128px padding top AND bottom), which doubles up at section boundaries creating ~256px gaps. The fix: reduce to `py-16 md:py-20` across all sections, and use `pt-` only on the first section after Hero.

### Changes

**13 component files** — update the section padding class from `py-24 md:py-32` to `py-16 md:py-20`:

| File | Current | New |
|------|---------|-----|
| `About.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `ProductDesignWalkthrough.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `CaseStudies.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `InteractiveWireframes.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `ProductStrategy.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `GTMStrategy.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `ExperimentsBoard.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `ProductDashboards.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `FuturisticPrototypes.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `AIDemos.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `Timeline.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `SkillsTools.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |
| `Contact.tsx` | `py-24 md:py-32` | `py-16 md:py-20` |

Also reduce inner `mb-16` heading margins to `mb-10` where they add excessive whitespace within sections (e.g., ProductDashboards, ExperimentsBoard, and similar sections with large `mb-16` gaps between the title and content).

This cuts inter-section spacing by ~40%, creating a tighter, more cohesive scroll experience.

