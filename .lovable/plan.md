

## Plan: Always-Visible Horizontal Nav Links in Navigation Bar

### Problem
The navigation links (About, Process, Portfolio, etc.) are currently hidden on screens smaller than `lg` (1024px) via `hidden lg:flex`. The user sees only a hamburger menu icon instead of the horizontal links.

### Changes — `src/components/Navigation.tsx`

1. **Show nav links on all screen sizes**: Change `hidden lg:flex` (line 33) to `flex` so links are always visible. Use smaller text and tighter gaps on mobile (`gap-3 md:gap-6 lg:gap-8`, `text-xs md:text-sm`). Allow wrapping with `flex-wrap`.

2. **Style links for hero overlay**: Since the hero has a dark `bg-gray-900` background, update the link colors to be visible when unscrolled: use `text-white/70 hover:text-white` when not scrolled, switching to `text-muted-foreground hover:text-foreground` when scrolled (pass `scrolled` state to link styling).

3. **Update logo text color**: Same treatment — `text-white` when unscrolled, `text-foreground` when scrolled.

4. **Remove hamburger menu**: Remove the mobile hamburger button and the mobile dropdown menu since links are always shown.

5. **Always show Resume button and ThemeToggle**: Change `hidden lg:flex` (line 41) to `flex` for the right-side controls. Possibly hide Resume label on very small screens or make it icon-only.

### Layout structure (unchanged hierarchy)
```
[P.Ishimwe]  [About Process Portfolio Strategy ...]  [ThemeToggle Resume]
```

All three sections remain in the same flex row, but now visible at all breakpoints.

