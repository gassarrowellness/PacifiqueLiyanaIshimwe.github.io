

## Plan: Fix Navigation Button Mappings

### Issue
The nav links "Process" and "Portfolio" point to the wrong sections:
- **"Process"** → `#product-work` (CaseStudies) — should point to ProductDesignWalkthrough (`#design-walkthrough`)
- **"Portfolio"** → `#prototypes` (FuturisticPrototypes) — should point to CaseStudies (`#product-work`)

### Fix in `src/components/Navigation.tsx`

Update the `navLinks` array:

| Label | Current href | Correct href | Target Section |
|-------|-------------|-------------|----------------|
| Process | `#product-work` | `#design-walkthrough` | ProductDesignWalkthrough |
| Portfolio | `#prototypes` | `#product-work` | CaseStudies |

All other nav links map correctly:
- About → `#about` ✓
- Strategy → `#strategy` ✓
- Experiments → `#experiments` ✓
- Timeline → `#timeline` ✓
- Contact → `#contact` ✓

Hero "View Product Work" button → `#product-work` ✓ (correctly points to CaseStudies)

