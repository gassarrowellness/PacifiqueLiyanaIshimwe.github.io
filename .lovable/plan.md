

## Plan: Add Expandable Context to Detail Boxes in ProductDesignWalkthrough

The detail boxes (e.g., "Information architecture", "User flow diagrams") in each step are currently static labels. This plan makes them clickable to reveal richer context and a small illustrative visual, without changing the existing UI/UX layout.

### Data Changes

Transform the `details` array in each step from `string[]` to an array of objects:

```ts
interface DetailItem {
  label: string;
  context: string;       // 2-3 sentence explanation
  illustration: string;  // type key for a mini illustration
}
```

All 7 steps × 4 details = 28 detail items get context + illustration type.

### Component Changes (`src/components/ProductDesignWalkthrough.tsx`)

1. **Add state**: `activeDetail: string | null` to track which detail box is expanded.
2. **Make detail boxes clickable**: Add `cursor-pointer` and onClick to toggle `activeDetail`.
3. **Add expanded panel below the grid**: When a detail is selected, show an `AnimatePresence` panel below the grid with:
   - The detail's `context` text (2-3 sentences of real, substantive explanation)
   - A small inline SVG/diagram illustration (reuse `MiniDiagram` component patterns or simple inline visuals)
4. **Visual indicator on active box**: Highlight the selected box with `border-primary/30 bg-primary/5` styling.
5. **Reset activeDetail** when `activeStep` changes.

### Content Examples

| Step | Detail | Context |
|------|--------|---------|
| Problem Definition | Stakeholder interviews | Structured conversations with key decision-makers and users to understand business constraints, success metrics, and organizational priorities that shape the problem space. |
| Wireframing | Information architecture | Organizing and structuring content so users can find what they need intuitively. Includes site maps, taxonomy design, and content grouping exercises. |
| Wireframing | Lo-fi wireframes | Rough sketches of screen layouts focusing on content hierarchy and user flow rather than visual polish. Used to quickly iterate on structure before committing to high-fidelity designs. |

All 28 items will have similarly substantive, factual descriptions.

### Files Changed

| File | Change |
|------|--------|
| `src/components/ProductDesignWalkthrough.tsx` | Update data structure, add click interaction, add expanded detail panel with context + illustration |

