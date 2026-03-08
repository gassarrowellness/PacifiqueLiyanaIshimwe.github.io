

## Plan: Merged Hero — Aurora Background + Nav Links in Fixed Overlay Only

Two changes combined into one edit:

### 1. Remove duplicate nav links from Hero (`src/components/Hero.tsx`)
- Delete the `navLinks` array (lines 5-13) and the horizontal nav `motion.div` block (lines 28-43)
- The Navigation component already renders these links in the fixed overlay bar — no duplication needed
- Reduce `pt-28` to `pt-24` since the in-hero nav is removed

### 2. Aurora grey/white background (`src/components/Hero.tsx`)
Replace the current faint gradient layers with a dramatic aurora effect:
- **Base**: `bg-gray-900` dark base to give contrast for the light streaks
- **Aurora orbs**: 3-4 large blurred white/grey gradient shapes (`from-white/15`, `from-gray-400/20`) positioned asymmetrically, creating visible luminous bands
- **Central glow**: Bright white radial glow behind the text area
- **Text**: Switch to `text-white` for heading, `text-gray-300` for subtitle, `text-gray-400` for body
- **Metrics bar**: Frosted glass — `bg-white/5 backdrop-blur-xl border-white/10`
- **Buttons**: Primary keeps gradient, outline buttons get `border-white/20 text-white` styling
- **Availability badge**: `border-white/20 bg-white/5 text-white`

### No changes to `Navigation.tsx` — it already has the links in the correct overlay position.

