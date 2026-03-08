

## Plan: Subtle Warm Green Background Tint

Replace the pure white (`0 0% 100%`) background with a very faint warm green tint to remove the clinical feel.

### Changes in `src/index.css`

**Light mode (:root):**
- `--background`: `145 20% 98%` (barely perceptible warm green-white)
- `--card`: `145 15% 99%` (slightly lighter for card elevation)
- `--muted`: `145 12% 95%` (green-tinted muted areas)
- `--secondary`: `145 10% 94%`
- `--input`: `145 10% 94%`
- `--sidebar-background`: `145 15% 97%`
- `--sidebar-accent`: `145 10% 95%`

**Dark mode:** No changes — dark slate already feels warm enough.

### Files Changed
- `src/index.css` only

