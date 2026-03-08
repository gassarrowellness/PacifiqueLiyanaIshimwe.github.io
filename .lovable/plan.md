

## Plan: Warm Up the Color Palette

The current palette is built on **cold blue hues** (HSL 216-222) across primary, secondary, muted, accent, borders, and gradients. This creates a sterile, corporate feel.

### Approach
Shift the base hue from cold blue (222) to a **warm indigo-violet** (~250) for primary, and introduce **warm neutral undertones** (slight amber/warm gray) into backgrounds, borders, and muted colors. Keep it clean and professional.

### Changes in `src/index.css`

**Light mode (:root):**
- `--primary`: 222 → `250 60% 55%` (warm indigo)
- `--secondary`: cold blue-gray → `30 20% 94%` (warm cream)
- `--muted`: → `30 15% 96%` (warm off-white)
- `--muted-foreground`: → `25 10% 45%` (warm gray)
- `--accent`: → `30 20% 94%` / foreground uses new primary
- `--border`: → `30 15% 90%` (warm border)
- `--input`: → `30 20% 94%`
- `--ring`: match new primary
- `--foreground`: → `20 20% 16%` (warm near-black)
- `--gradient-accent`: warm indigo to soft violet
- Sidebar tokens: follow same warm shift

**Dark mode (.dark):**
- `--background`: → `250 25% 8%` (warm dark)
- `--card`: → `250 20% 11%`
- `--primary`: → `250 70% 68%` (warm indigo light)
- `--secondary/muted/accent/border/input`: shift from 222 hue to ~250 with slight warmth
- Gradients and shadows: match new hue

**Hero section (`src/components/Hero.tsx`):**
- Change `bg-slate-400` / slate gradients to warm equivalents (`stone-400`, `from-stone-600 via-amber-50/stone-200 to-stone-400`)
- Aurora orbs: shift from white/slate to warm cream/amber tints
- Text colors: `text-gray-900` stays, `text-gray-600/500` → `text-stone-600/500`

### Summary
Two files changed: `src/index.css` (CSS variables) and `src/components/Hero.tsx` (hero background). The result is a warm, clean palette with indigo-violet accents and warm neutral surfaces.

