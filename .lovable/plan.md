

## Plan: Fix Hero Buttons & Review Over-Engineering

### Problem
The LinkedIn and Contact buttons in the Hero section use `variant="outline"` with custom white styling classes. The `outline` variant applies `bg-background` (white), which overrides the custom `text-white` and `border-white/20` classes, making the buttons appear as blank white pills with invisible text on the dark hero background.

### Fix 1: Hero Buttons — Make All Match "View Product Work"

Change the LinkedIn and Contact buttons from `variant="outline"` to `variant="default"` (primary style), removing the custom white override classes. All three buttons will use the same blue primary style.

**File: `src/components/Hero.tsx` (lines 53-64)**
- LinkedIn button: remove `variant="outline"`, remove custom border/text classes, use default variant
- Contact button: same treatment

### Fix 2: Over-Engineering Audit Results

Reviewed the full site for UX-impacting over-engineering:

- **Footer name rendering** (line 10): `CONTACT.shortName.replace(".", "")` + split logic is fragile string manipulation. Simplify to just render `"P"` and `"Ishimwe"` directly from the constant, or hardcode the display format in `CONTACT`.
- **All other sections** (Navigation, About, ProductDesignWalkthrough, CaseStudies, Contact, ProductStrategy, GTMStrategy, ExperimentsBoard): No over-engineering issues found that impact UX. Interactive elements (stepper, accordions, action tag popups) are appropriately complex for their purpose.

### Changes Summary

| File | Change |
|------|--------|
| `src/components/Hero.tsx` | Change LinkedIn + Contact buttons to default variant, remove custom outline classes |
| `src/components/Footer.tsx` | Simplify name rendering logic |

No UI layout or visual design changes beyond making the buttons consistently styled.

