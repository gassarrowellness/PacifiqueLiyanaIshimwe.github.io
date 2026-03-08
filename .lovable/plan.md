

## Plan: Make Smartphone Screens Look Like a Real Calling App

### Problem
1. **Title is too high** — the `screenTitle` sits right after the status bar with only `pt-4` padding, leaving it jammed against the top. On a real phone, there's more breathing room (Dynamic Island / notch area takes up space).
2. **No app hero section** — real calling/voice apps (like Phone, WhatsApp call, etc.) have a colored header area with an icon, caller info, and call status. The current SmartphoneFrame just shows a plain text title. The InteractiveWireframes is a voice calling app, so it should look like an active call screen.

### Changes

#### `src/components/SmartphoneFrame.tsx`

1. **Replace the punch-hole camera with a Dynamic Island** — change the small `w-3 h-3` circle to a pill shape `w-20 h-[22px] rounded-full bg-black` centered at the top. This pushes content down naturally.

2. **Move the status bar into the Dynamic Island area** — adjust `pt` from `3` to `2`, and add more top margin so content clears the island. The time and signal icons should sit beside the island, not above it.

3. **Add an app header/hero prop** — add an optional `headerColor` prop (defaults to `primary`). Render a colored banner area between the status bar and the title, with a gradient background, showing the `screenTitle` in white text and a subtle icon. This mimics the iOS Phone app green bar or WhatsApp call green header.

4. **Push the title down** — increase `pt` on the title area from `pt-4` to `pt-2` (title now sits inside the hero banner, so it doesn't need extra padding).

5. **Adjust content `min-h`** — reduce from `440px` to `380px` since the hero banner takes some vertical space.

#### `src/components/InteractiveWireframes.tsx`

6. **Pass a green calling-app header style** — since this is a voice/calling assistant, the SmartphoneFrame should render with a green call-style hero (like the iOS Phone app during an active call). Pass `headerColor="green"` or similar to SmartphoneFrame.

7. **Add call duration indicator** — inside the `dialin`, `record`, `processing`, and `response` steps, the hero should show "Calling..." or "00:12" to simulate an active call, reinforcing the voice-call metaphor.

#### `src/components/FuturisticPrototypes.tsx`

8. **No call header for fintech prototypes** — these are regular app screens, so they use the default app-style header (blue/primary colored banner with the screen title). No call-specific UI.

### Summary of SmartphoneFrame Header Structure (new)

```text
┌─────────────────────┐
│  9:41  [==Island==] ▶│  ← status bar with Dynamic Island
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ← colored app hero banner
│  ▓  Screen Title   ▓│     with title, subtitle, icon
│  ▓  Calling...     ▓│
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│                     │
│    [content area]   │  ← smaller min-h since hero takes space
│                     │
│  ───── home bar ────│
└─────────────────────┘
```

### Files Changed
- `src/components/SmartphoneFrame.tsx` — Dynamic Island, app hero banner, new props
- `src/components/InteractiveWireframes.tsx` — pass call-style header props
- `src/components/FuturisticPrototypes.tsx` — uses default app-style header (minimal change)

