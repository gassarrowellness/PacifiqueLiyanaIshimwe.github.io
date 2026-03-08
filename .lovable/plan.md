

## Plan: Add Rich Detail Popups to Action Tags Across All Sections

### Problem
The action tags/buttons (e.g. "Problem framing", "User need validation", "Stakeholder interviews") in **ProductStrategy**, **GTMStrategy**, and similar sections are static `<span>` elements with no interactivity. The user wants clicking any of these tags to reveal more context and a visual illustration of what that activity entails.

### Approach
Turn each action tag into a clickable button that opens an **inline expandable detail card** (below the tags row) with:
- **Title** of the action
- **Description** — 2-3 sentences explaining the activity, methodology, and expected outcome
- **Visual element** — a simple illustrative diagram or icon composition (built with CSS/Tailwind + Lucide icons, no images needed) showing the concept visually

### Sections Affected

1. **ProductStrategy.tsx** — 5 stages × 4 actions = 20 action details
2. **GTMStrategy.tsx** — 7 sections × 4 items = 28 action details

### Data Structure Change
Each action string becomes an object:
```ts
{
  label: "Problem framing",
  detail: "Define the core user problem through structured frameworks...",
  visual: "framework" // key to render a specific mini-illustration
}
```

### UI Behavior
- Clicking an action tag highlights it and expands a detail card below the tags row (AnimatePresence)
- The detail card shows: icon + title on left, description text, and a small CSS-based visual diagram on right
- Clicking the same tag again collapses it
- Only one action detail is open at a time per section

### Visual Illustrations
Small CSS/Tailwind-based mini-diagrams for each category:
- **Framework diagrams**: Labeled boxes connected with arrows (e.g., Problem → Hypothesis → Test)
- **Process flows**: Step indicators with labels
- **Matrix/grid visuals**: 2×2 grids with quadrant labels
- **Funnel diagrams**: Tapered stacked bars
- **Chart mockups**: Simple bar/line representations

These will be built as a `MiniDiagram` component with ~8 variants, mapped to actions by a `visual` key.

### Changes

**New file: `src/components/MiniDiagram.tsx`**
- Renders small CSS-based visual diagrams based on a type key
- Variants: `framework`, `funnel`, `matrix`, `process`, `chart`, `cycle`, `mapping`, `comparison`

**`src/components/ProductStrategy.tsx`**
- Convert `actions: string[]` to `actions: { label, detail, visual }[]` with rich content for all 20 actions across 5 stages
- Add `activeAction` state
- Render tags as buttons; show expanded detail card with description + MiniDiagram below tags when clicked

**`src/components/GTMStrategy.tsx`**
- Same pattern: convert `items: string[]` to objects with label/detail/visual
- Add `activeItem` state per expanded section
- Show detail card below the items row when an item is clicked

### Result
Every action tag across both strategy sections becomes interactive, revealing contextual explanation and a visual illustration — making the portfolio more engaging and informative.

