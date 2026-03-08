

## Plan: Deep Botanical Green + Dark Slate Palette

Based on the reference image — rich, deep tropical greens ranging from near-black forest to vivid sage. This is darker and more saturated than the previous sage proposal.

### Extracted palette from reference (approx HSL):
- Darkest: `150 40% 8%` (near-black green)
- Dark forest: `150 35% 15%`
- Mid green: `150 45% 25%`
- Rich green: `145 50% 30%`
- Bright sage: `100 35% 45%`

### Changes in `src/index.css`

**Light mode (:root):**
- `--primary`: `145 50% 30%` (rich botanical green)
- `--primary-foreground`: `0 0% 100%`
- `--accent-foreground`: `145 50% 30%`
- `--ring`: `145 50% 30%`
- `--glow`: `145 50% 30%`
- `--gradient-accent`: `145 50% 30%` → `150 45% 22%` (rich to deep forest)
- `--shadow-glow`: green-tinted `hsl(145 50% 30% / 0.12)`
- Sidebar primary/ring: match new primary
- All slate neutrals remain unchanged

**Dark mode (.dark):**
- `--primary`: `145 45% 45%` (brighter green for contrast on dark)
- `--primary-foreground`: `150 40% 6%`
- `--ring`: `145 45% 45%`
- Gradients/shadows: green-tinted
- Sidebar primary/ring: match

### Changes in `src/components/Hero.tsx`
- Aurora orbs: replace `orange-100` with `emerald-100` / `green-100` tints
- Central glow: `from-green-50/30` instead of `orange-50/30`
- Keep slate base tones (they complement the deep green well)

### Files Changed
- `src/index.css`
- `src/components/Hero.tsx`

