

## Plan: Realistic Phone Frames and App-Quality Screen Content

### Problem
The smartphone flows render content as flat text labels with minimal styling — they look like wireframes, not real apps. The USSD phone frame needs to stay simple/classic. The smartphone frame needs thinner bezels and a more modern device look.

### Changes

**`src/components/SmartphoneFrame.tsx`** — Major visual upgrade

1. **Phone frame redesign**: Thinner bezels matching modern phones (iPhone-style). Proper Dynamic Island pill shape. Realistic status bar with bold time. Thinner home indicator. Subtle device shadow and edge highlights.

2. **ElementRenderer overhaul** — Parse the same text data but render polished, app-grade UI:
   - `[Button Text]` → Full-width rounded buttons with gradient/shadow, proper padding
   - `☐`/`☑` → Toggle switches or styled checkboxes with labels in a card row
   - `┌`/`│`/`└` card blocks → Elevated card components with rounded corners, shadow, proper padding
   - `████` progress bars → Colored gradient bars with percentage labels
   - Stat boxes (`│ 142 │`) → Large metric cards with subtle backgrounds
   - Emoji-prefixed lines → Icon + label rows with proper spacing in card containers
   - Plain text → Styled section headers or body text with proper typography hierarchy
   - Lines with `↑`/`↗` → Metric rows with colored trend indicators (green for up, red for down)

**`src/components/UssdPhoneFrame.tsx`** — Minor refinements

- Keep the classic phone aesthetic (keypad, earpiece, plain white screen)
- Ensure screen text stays raw monospace with no styled UI parsing
- Slightly adjust bezel proportions to feel more like a real Nokia/feature phone

**`src/components/InteractiveWireframes.tsx`** — No structural changes, just benefits from improved frames

**`src/components/FuturisticPrototypes.tsx`** — No structural changes, just benefits from improved SmartphoneFrame

### No content data changes. Same element string arrays, same flow structure, same navigation logic.

