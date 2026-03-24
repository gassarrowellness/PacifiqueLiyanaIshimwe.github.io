

## Plan: Add Testimonials Carousel + Fix Work Tab Highlight

### 1. Create testimonials data and carousel in About section

**New file: `src/data/testimonials.ts`**
- Array of 5 testimonial objects from the screenshot:
  - Raymond Delali Y. | Managing Director
  - Anna-Laura S. | Director of Sales Operations
  - Tehila C. | Recruitment and Operations partner
  - Bulengela N. | Digital Product Manager
  - Michaela B. | Manager Operation
- Each with: quote, name, title, date ("Mar 2026")

**Edit: `src/components/About.tsx`**
- Import `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` from the existing carousel UI component
- Import testimonials data
- Add a testimonials carousel section between the heading ("Building Products That Matter") and the grid content
- Each slide: quote text, name, title, date, "Verified" badge
- Use Embla's autoplay-like loop option for UX
- Mobile-friendly: single card per slide, touch-swipeable (Embla handles this natively)

### 2. Fix Work tab permanent highlight in Navigation

**Edit: `src/components/Navigation.tsx`** (line 51)
- Currently route links always get `text-primary` styling regardless of whether they're active
- Change to: apply `text-primary` only when `location.pathname === link.href`, otherwise use the same muted style as non-route links
- Same fix for mobile menu (line 93)

### Files changed
- `src/data/testimonials.ts` (new)
- `src/components/About.tsx`
- `src/components/Navigation.tsx`

