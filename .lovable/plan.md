

## Plan: Split Site into Home + Work Pages

### Page 1: Home (`/`)
Hero, About, Process (ProductDesignWalkthrough), Timeline, SkillsTools, Contact, Footer

### Page 2: Work (`/work`)
CaseStudies, InteractiveWireframes, ProductStrategy, GTMStrategy, ExperimentsBoard, ProductDashboards, FuturisticPrototypes, AIDemos, Contact, Footer (with Navigation and a hero/header section)

### Changes

**`src/pages/Index.tsx`**
- Remove: CaseStudies, InteractiveWireframes, ProductStrategy, GTMStrategy, ExperimentsBoard, ProductDashboards, FuturisticPrototypes, AIDemos
- Keep: Navigation, Hero, About, ProductDesignWalkthrough, Timeline, SkillsTools, Contact, Footer

**`src/pages/Work.tsx`** (rewrite existing file)
- Add Navigation + a small header section
- Include: CaseStudies, InteractiveWireframes, ProductStrategy, GTMStrategy, ExperimentsBoard, ProductDashboards, FuturisticPrototypes, AIDemos, Contact, Footer

**`src/App.tsx`**
- Add route: `/work` pointing to the Work page

**`src/components/Navigation.tsx`**
- Update nav links: keep About, Process, Timeline, Contact for home page
- Add a "Work" link pointing to `/work`
- Update anchor links to use react-router `Link` for cross-page navigation

**`src/components/Hero.tsx`**
- Update "View Product Work" button to link to `/work` instead of `#product-work`

### Files Changed
- `src/pages/Index.tsx`
- `src/pages/Work.tsx`
- `src/App.tsx`
- `src/components/Navigation.tsx`
- `src/components/Hero.tsx`

