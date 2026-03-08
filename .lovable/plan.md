

## Plan: Reorder Navigation Links

Update `src/components/Navigation.tsx` to change the link order on the home page to: **About, Work, Process, Timeline, Contact**.

### Changes

**`src/components/Navigation.tsx`**
- Reorder `homeLinks` array and insert a "Work" link (pointing to `/work`) within the sequence
- Remove the separate standalone Work/Home toggle link and integrate it into the main link list
- Final order: About (`#about`), Work (`/work` via Link), Process (`#design-walkthrough`), Timeline (`#timeline`), Contact (`#contact`)

### Files Changed
- `src/components/Navigation.tsx`

