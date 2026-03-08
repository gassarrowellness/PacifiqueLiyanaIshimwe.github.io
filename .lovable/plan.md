

## Plan: Rich Warm Brown Palette

Shift the primary accent from indigo-violet (HSL 250) to a **rich espresso/chocolate brown** (HSL ~30, moderate saturation). This creates a luxurious, architectural, distinctive feel.

### Color System (`src/index.css`)

**Light mode:**
- `--primary`: `30 55% 35%` (rich espresso brown)
- `--primary-foreground`: `0 0% 100%` (white)
- `--accent-foreground`: `30 55% 35%` (match primary)
- `--ring`: `30 55% 35%`
- `--glow`: `30 55% 35%`
- `--gradient-accent`: brown to warm sienna (`30 55% 35%` → `18 50% 42%`)
- `--shadow-glow`: brown-tinted
- Sidebar primary/ring: match new primary
- Neutrals (secondary, muted, border) stay warm cream as-is

**Dark mode:**
- `--background`: `25 20% 8%` (warm dark brown-black)
- `--card`: `25 18% 12%`
- `--primary`: `30 55% 55%` (lighter espresso for dark bg)
- `--primary-foreground`: `25 20% 5%`
- `--secondary/muted/accent`: shift hue from 250 to ~25 (warm brown)
- `--border/input`: `25 15% 18%`
- `--ring`: `30 55% 55%`
- Surface/sidebar tokens: follow same brown-dark shift
- Gradients/shadows: brown-tinted

### Hero (`src/components/Hero.tsx`)
- Hero already uses `stone-400/600` and `amber-50` tones, which complement brown perfectly. No changes needed.

### Files Changed
- `src/index.css` (CSS variables only)

