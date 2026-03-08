

## Plan: Remove All Em Dashes and En Dashes

The thorough search confirms only **2 files** contain special dashes. No other files across the entire codebase have them, including inside collapsible/expandable content in GTMStrategy, ProductStrategy, CaseStudies, and FuturisticPrototypes.

### Changes

**`src/components/ExperimentsBoard.tsx`** (line 9)
- Replace `— the world's first offline Gen-AI assistant via voice —` with `, the world's first offline Gen-AI assistant via voice,`

**`src/components/Timeline.tsx`** (lines 6, 13, 20, 27, 34, 41)
- Replace all 6 en dashes (`–`) in period strings with hyphens (`-`), e.g. `"July 2025 – Present"` becomes `"July 2025 - Present"`

### Files Changed
- `src/components/ExperimentsBoard.tsx` (1 line)
- `src/components/Timeline.tsx` (6 lines)

