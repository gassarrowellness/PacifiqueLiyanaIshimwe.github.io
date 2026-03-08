

## Plan: Add Mobile Hamburger Menu Navigation

Currently all 7 nav links are shown inline even on mobile, causing cramped text and wrapping. The fix: hide nav links on mobile behind a hamburger menu using the existing Sheet component.

### Changes

**File: `src/components/Navigation.tsx`**

1. Import `Menu` icon from lucide-react, `Sheet`/`SheetContent`/`SheetTrigger`/`SheetTitle` from `@/components/ui/sheet`, and `Button`
2. Add `menuOpen` state for controlling the sheet
3. Hide the inline nav links on mobile (`hidden md:flex`)
4. Add a hamburger `Menu` button visible only on mobile (`md:hidden`)
5. Wrap it in a `Sheet` that slides in from the right with all nav links stacked vertically, plus the Resume button and ThemeToggle
6. Close the sheet when a link is clicked

### Result
- **Desktop**: No change — horizontal nav links remain
- **Mobile**: Clean hamburger icon → slide-out menu with full-size tap targets

