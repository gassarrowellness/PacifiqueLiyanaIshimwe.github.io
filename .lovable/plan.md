

## Plan: Copper + Slate Palette

Shift from dull brown to a **metallic copper** accent (HSL ~20, 65% sat) paired with **cool slate** neutrals. This creates a modern, refined contrast — warm accent against cool surfaces.

### Changes in `src/index.css`

**Light mode (:root):**
- `--primary`: `20 65% 52%` (copper)
- `--primary-foreground`: `0 0% 100%`
- `--foreground`: `215 20% 18%` (dark slate)
- `--card-foreground` / `--popover-foreground`: match foreground
- `--secondary`: `215 15% 94%` (cool light slate)
- `--secondary-foreground`: `215 20% 18%`
- `--muted`: `215 12% 96%` (cool off-white)
- `--muted-foreground`: `215 10% 45%`
- `--accent`: `215 15% 94%` / `--accent-foreground`: `20 65% 52%`
- `--border`: `215 12% 89%`, `--input`: `215 15% 94%`, `--ring`: `20 65% 52%`
- `--glow`: `20 65% 52%`
- `--gradient-accent`: copper to burnt sienna (`20 65% 52%` → `12 60% 45%`)
- `--shadow-glow`: copper-tinted
- Sidebar tokens: match new primary + slate neutrals

**Dark mode (.dark):**
- `--background`: `215 20% 9%` (dark cool slate)
- `--card`: `215 18% 13%`
- `--foreground`: `215 12% 90%`
- `--primary`: `20 70% 60%` (lighter copper for dark bg)
- `--primary-foreground`: `215 20% 6%`
- `--secondary`: `215 15% 16%`, `--muted`: `215 12% 14%`
- `--accent`: `215 15% 16%`
- `--border`: `215 12% 20%`, `--input`: `215 15% 16%`
- `--ring`: `20 70% 60%`
- Surface/sidebar: follow slate-dark shift
- Gradients/shadows: copper-tinted for dark

### Changes in `src/components/Hero.tsx`

- Replace `bg-stone-400` → `bg-slate-400`
- Gradient: `from-slate-600 via-slate-200 to-slate-400`
- Aurora orbs: shift from `amber-50/stone` to `orange-100/slate` tints for copper warmth against cool base
- Text: `text-stone-*` → `text-slate-*` where appropriate
- Metrics bar border: `border-slate-200/50`

### Files Changed
- `src/index.css` — full CSS variable update
- `src/components/Hero.tsx` — hero background tones

