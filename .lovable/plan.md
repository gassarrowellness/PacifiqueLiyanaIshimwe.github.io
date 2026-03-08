

## Plan: Upgrade Smartphone Prototype Hero Sections

### Problem
The default app hero header inside the phone is a plain colored rectangle with just the screen title — no icon, no app branding, no visual depth. It looks like a placeholder, not a real app.

### Solution
Make the default hero section look like an actual mobile app header with: app icon, brand name, screen title as secondary text, and visual richness (gradient, subtle pattern).

### Changes

#### `src/components/SmartphoneFrame.tsx`
- Add optional `headerIcon` prop (React element) to render an app icon in the hero
- Redesign the default (`non-call`) hero section:
  - Add a circular icon container (like the call header already has)
  - Show `screenTitle` as the primary heading, `headerSubtitle` below
  - Richer gradient with a subtle decorative element (small circles or dots pattern in the background for depth)
  - Slightly taller padding (`py-4` instead of `py-3`) so it feels substantial

#### `src/components/FuturisticPrototypes.tsx`
- Pass each prototype's `icon` component to SmartphoneFrame as `headerIcon`
- Pass the prototype's short app name (extracted from the first screen element, e.g. "GigCredit", "StockSmart") as `headerSubtitle`
- Pass the current screen title as `screenTitle`

### Result
Each prototype phone screen gets a branded hero header with its own icon and app identity — matching the polish of the call-style header that InteractiveWireframes already uses.

### Files Changed
- `src/components/SmartphoneFrame.tsx` — new `headerIcon` prop, redesigned default hero
- `src/components/FuturisticPrototypes.tsx` — pass icon and app name props

