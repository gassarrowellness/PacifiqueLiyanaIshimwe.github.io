

## Plan: Orange/Coral CTA for Contact Actions

Add a CSS custom property `--cta-action` for a warm coral color (HSL ~15 85% 55%) and apply it to all "reach out" buttons while keeping green for everything else.

### Changes

**`src/index.css`** — Add coral CTA token:
- Light: `--cta-action: 15 85% 55%` (warm coral)
- Dark: `--cta-action: 15 80% 60%` (slightly lighter for dark mode)

**`src/components/Hero.tsx`** — Style the "Contact" button with coral:
- Change from default primary to `bg-[hsl(var(--cta-action))] text-white hover:bg-[hsl(var(--cta-action)/.85)]`
- LinkedIn and "View Product Work" buttons stay green

**`src/components/Contact.tsx`** — Style "Send Message" button with coral:
- Same coral styling on the submit button

**`src/components/Footer.tsx`** — Style the mail icon circle with coral hover:
- `hover:bg-[hsl(var(--cta-action)/.15)]` on the mail link

### Files Changed
- `src/index.css`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

