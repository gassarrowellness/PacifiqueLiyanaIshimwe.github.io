

## Portfolio Refinement Plan

### Important Note
This project runs on **Vite + React** (not Next.js, which Lovable doesn't support). All work will continue with the existing Vite/React/Tailwind/shadcn/Framer Motion stack.

### 1. Color System Update
Update `src/index.css` CSS variables to match the specified palette:
- Background: `#FFFFFF` (white)
- Primary: `#2F6BFF` (metallic blue)
- Secondary/Accent: `#E6EEF7` (soft metallic highlight)
- Text: `#1F2937` (dark neutral)
- Remove dark mode overrides or keep them subtle
- Soften shadows, remove heavy glow effects

### 2. Navigation Restructure
Update `src/components/Navigation.tsx` with new nav items:
- Home, About, Product Work, Prototypes, Strategy, Experiments, Timeline, Contact
- Map to section IDs: `#about`, `#product-work`, `#prototypes`, `#strategy`, `#experiments`, `#timeline`, `#contact`
- Keep sticky header, mobile responsive hamburger menu

### 3. New Components to Create

**`src/components/ProductDesignWalkthrough.tsx`**
Interactive 7-step workflow diagram (Problem Definition → User Research → Opportunity Mapping → Solution Ideation → Wireframing → Prototype Simulation → Validation). Rendered as a horizontal stepper with expandable cards for each stage. Uses existing content voice — describes frameworks, not fictional projects.

**`src/components/InteractiveWireframes.tsx`**
Low-fidelity, grayscale wireframe viewer with 4 flows: mobile onboarding, USSD navigation, AI assistant interaction, analytics dashboard. Each is a step-by-step clickable walkthrough with annotations. Built as tab-based UI with simple div-based wireframe mockups.

**`src/components/ProductStrategy.tsx`**
Interactive lifecycle stages: Idea → Validation → Pilot → Iteration → Scale. Each stage expands to show strategy thinking. Replaces or supplements ProductThinking section.

**`src/components/GTMStrategy.tsx`**
Interactive GTM framework with 7 expandable sections: Business Clarity, Audience Understanding, Competitive Mapping, Strategic Positioning, Revenue Systems, Growth Engineering, Content Planning. Each section has expandable cards with framework descriptions.

**`src/components/ExperimentsBoard.tsx`**
Visual experimentation board pulling from existing case study data (Viamo AI pilot, USSD agent pilot, agent network pilot, etc.). Each card shows: Hypothesis, Test, Result, Learning. Displayed as a dashboard grid of expandable cards.

**`src/components/Timeline.tsx`**
Career timeline component using real milestones from the resume: Viamo (2022-present), MTN (2021-2022), Brightlife/ENGIE (2019-2021), etc. Vertical animated timeline with milestone cards.

### 4. Section Reorganization
Update `src/pages/Index.tsx` to reorder sections:
1. Hero (refined)
2. About (keep existing)
3. Product Design Walkthrough (new)
4. Product Work / Case Studies (existing, re-ID'd to `#product-work`)
5. Interactive Wireframes (new)
6. Prototypes (existing)
7. AI Demos (existing)
8. Product Strategy + GTM (new, under `#strategy`)
9. Experiments Board (new, `#experiments`)
10. Product Dashboards (existing)
11. Timeline (new)
12. Skills & Tools (existing)
13. Contact (existing)
14. Footer

### 5. Existing Component Refinements
- **Hero**: Lighten background, refine to pure white with subtle blue accents
- **CaseStudies**: Change section ID to `product-work`
- **All sections**: Update `bg-muted/30` backgrounds to use lighter, whiter tones consistent with new palette
- **Glass cards**: Soften to match `#E6EEF7` highlight tone

### 6. Files Modified
- `src/index.css` — color variables
- `src/components/Navigation.tsx` — new nav links
- `src/pages/Index.tsx` — new section order + imports
- `src/components/Hero.tsx` — lighter styling
- `src/components/CaseStudies.tsx` — section ID change

### 7. Files Created
- `src/components/ProductDesignWalkthrough.tsx`
- `src/components/InteractiveWireframes.tsx`
- `src/components/ProductStrategy.tsx`
- `src/components/GTMStrategy.tsx`
- `src/components/ExperimentsBoard.tsx`
- `src/components/Timeline.tsx`

### Scope
~12 files total. All new sections use frameworks and workflows — no fictional projects or metrics are fabricated. Existing content preserved verbatim.

