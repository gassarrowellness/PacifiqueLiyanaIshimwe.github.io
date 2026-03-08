

## Plan: Transform Wireframes into Realistic Smartphone Visual Prototypes

Replace the current mono-spaced text wireframes with styled, realistic smartphone UI mockups in both `InteractiveWireframes.tsx` and `FuturisticPrototypes.tsx`. No content changes -- same data, same flows, same navigation logic.

### What changes

**Visual upgrade for the phone frame (both files)**

Instead of the current flat card with three dots and monospace text, render a realistic smartphone shell:
- Rounded device bezel (`rounded-[2.5rem]`) with inner screen area
- Status bar with time, signal, battery icons
- Notch/dynamic island at top center
- Home indicator bar at bottom
- Slight shadow/gradient on the bezel to give depth

**Screen content rendering upgrade**

Replace the plain `font-mono` text dump with styled UI elements. Each element string will be parsed and rendered as realistic components:
- Lines starting with `[` and ending with `]` render as styled buttons (rounded, colored)
- Lines with `☐` or `☑` render as checkbox rows with proper styling
- Lines with `┌`, `│`, `└` render as styled card containers
- Lines with `████` render as actual progress bars
- Lines with emoji prefixes render with proper icon + label layout
- Lines with `○` or `●` render as radio buttons
- Empty lines remain as spacers
- Everything else renders as styled text labels

This parsing approach means **zero content data changes** -- same `elements` arrays, just smarter rendering.

### Files modified

1. **`src/components/InteractiveWireframes.tsx`** -- Replace phone frame markup and element rendering with smartphone shell + smart element renderer
2. **`src/components/FuturisticPrototypes.tsx`** -- Same phone frame and element renderer upgrade in the inline wireframe viewer

### Shared approach

Extract a reusable `SmartphoneFrame` component and an `ElementRenderer` component, either inline or as a small shared file, to avoid duplication between both components.

### Technical details

- **SmartphoneFrame**: A wrapper div styled as a phone (dark bezel, rounded corners, status bar with clock/signal/battery, notch, home bar). Accepts children for screen content and footer nav.
- **ElementRenderer**: Takes an element string, pattern-matches it, and returns the appropriate styled JSX (button, checkbox, card, progress bar, radio, or text).
- Navigation (back/next/dots) moves inside the phone frame at the bottom, above the home bar.
- Annotation panel on the right side stays unchanged.

