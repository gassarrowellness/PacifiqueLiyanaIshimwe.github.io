

## Plan: Add Print/PDF Export to Work Page

**Approach**: Add a "Download PDF" button and print-optimized styles. The browser's native Print → Save as PDF gives the cleanest, most reliable output.

### Key challenges to solve
- Case study accordions are collapsed by default — all content must be visible when printing
- Navigation, footer, contact section, and interactive elements should be hidden in print
- Framer motion animations shouldn't interfere with print layout
- Dark mode backgrounds need to be print-friendly

### Changes

**1. `src/index.css`** — Add `@media print` styles:
- Hide nav, footer, contact section, interactive controls (buttons, toggles)
- Force all sections visible, remove animations
- Clean typography, white background, proper page breaks
- Force case study expanded content to display

**2. `src/pages/Work.tsx`** — Add a "Download PDF" button in the hero:
- Calls `window.print()` on click
- Hidden in print via `print:hidden` class

**3. `src/components/CaseStudies.tsx`** — Add print-specific logic:
- Use a CSS class (`print:block`) to force all accordion content visible regardless of `openIndex` state
- Render all expanded content in the DOM but hide with CSS when not selected; show all in print

This gives a clean, paginated PDF with all case studies expanded, no interactive chrome, and proper formatting.

