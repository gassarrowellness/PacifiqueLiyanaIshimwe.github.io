

## Plan: Champagne/Gold Phone Frames Matching Reference

The reference shows a modern phone with a warm champagne/gold metallic bezel, small camera punch-hole (not a Dynamic Island), and clean Android-style status bar. Here are the exact changes.

### `src/components/SmartphoneFrame.tsx`

**Bezel (line 30):** Replace `bg-foreground/95 dark:bg-foreground/15` with a champagne metallic gradient:
`bg-gradient-to-b from-[#d4c5a9] via-[#c9b896] to-[#bfae8a] dark:from-[#8a7d65] dark:via-[#7a6e58] dark:to-[#6b604d]`
Add `ring-1 ring-[#bfae8a]/30` for a subtle metallic edge highlight.

**Side buttons (lines 32-35):** Change from `bg-foreground/60` to `bg-[#b5a57e]` (matching champagne tone), dark mode `bg-[#6b604d]`.

**Status bar (lines 40-51):** Remove the Dynamic Island entirely. Replace with:
- A small centered camera punch-hole: `w-3 h-3 rounded-full bg-black/80` positioned absolute top-center
- Keep time left, icons right, but style icons slightly smaller

**Navigation buttons inside phone (lines 64-90):** 
- Back/Next text: `text-[#b5a57e] hover:text-[#8a7d65] disabled:opacity-20`
- Active dot: `bg-[#c9b896] w-4` instead of `bg-primary`
- Inactive dots: `bg-[#d4c5a9]/40 w-1.5` instead of `bg-border`

**Home indicator (line 94):** Change to `bg-[#c9b896]/30`

**Outer shadow (line 27):** Tint warm: `bg-[#c9b896]/20 blur-xl`

### `src/components/UssdPhoneFrame.tsx`

**Bezel (line 27):** Replace dark color with same champagne gradient:
`bg-gradient-to-b from-[#d4c5a9] via-[#c9b896] to-[#bfae8a] dark:from-[#8a7d65] dark:via-[#7a6e58] dark:to-[#6b604d]`

**Earpiece (line 30):** `bg-[#b5a57e]/50 dark:bg-[#6b604d]/50`

**Keypad buttons (line 59):** `bg-[#b5a57e]/30 dark:bg-[#6b604d]/30` with `text-[#5a5040] dark:text-[#a89870]`

**SEND/END buttons (lines 69-75):** `bg-[#b5a57e]/40 dark:bg-[#6b604d]/30` with text `text-[#5a5040] dark:text-[#a89870]`

**D-pad center circle (line 72):** `bg-[#b5a57e]/50 border-[#a89870]/40`

**Navigation controls outside phone (lines 82-106):**
- Back/Next: `text-[#b5a57e] hover:text-[#8a7d65] disabled:opacity-20`
- Active dot: `bg-[#c9b896] w-4`
- Inactive dots: `bg-[#d4c5a9]/40 w-1.5`

### Files Changed
- `src/components/SmartphoneFrame.tsx`
- `src/components/UssdPhoneFrame.tsx`

