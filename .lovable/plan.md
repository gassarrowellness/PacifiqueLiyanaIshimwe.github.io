

## Plan: Overhaul Interactive Product Flows Section

### What Changes

Replace the current multi-flow wireframe stepper (4 tabs: Mobile Onboarding, USSD Navigation, USSD Voice Assistant, Analytics Dashboard) with a single, focused **USSD Voice Assistant** showcase. The section becomes a visual walkthrough of the voice interaction flow described in the user's detailed spec, with custom visual states per step (including a "Voice Interaction Prototype" mic button UI like the uploaded image for the recording step).

### New Section Design

Remove the tab-based flow switcher entirely. Replace with a **6-step visual journey** displayed as a single interactive walkthrough. Each step gets a custom visual rendering inside the phone frame instead of monospace text:

1. **Dial-in & Welcome** — Phone icon + dial animation, speech bubble with menu options
2. **Menu Navigation** — Keypad visual showing "3" pressed, confirmation text
3. **Record Question** — Large microphone circle button (matching uploaded image: blue mic icon in a circle with "Tap to speak"), pulsing recording indicator
4. **Processing** — Spinner/loading animation with "Processing your request..." text, ~3 sec visual
5. **Voice Response** — Speaker icon with waveform visualization, AI answer text
6. **Loop or Exit** — Simple menu with "Ask another / Main menu / Hang up" options

### Implementation

**File: `src/components/InteractiveWireframes.tsx`** — Full rewrite:
- Remove the `flows` array and tab system
- Define a single `steps` array with 6 entries, each having: `title`, `annotation`, `description` (from user's spec), and a `visualType` identifier
- Remove `activeFlow` state, keep only `activeScreen`
- Left side: render custom visual per step inside `SmartphoneFrame` (use a `StepVisual` component with switch/case for each step type)
- Right side: keep the annotation panel (numbered step buttons) but add the longer description text from the user's spec
- Section header updated: "USSD Voice Assistant" with subtitle referencing accessibility and no-internet-needed

**Step visuals (rendered inside SmartphoneFrame):**
- Step 3 (Record): centered large circle (border-primary, bg-primary/10) with Mic icon inside, "Tap to speak" label below — matching the uploaded image
- Step 4 (Processing): animated spinner with countdown text
- Step 5 (Voice Response): Volume2 icon with stylized waveform bars, response text below
- Steps 1, 2, 6: clean text-based UI with icons (Phone, Hash/keypad, ArrowRight)

**Key Design Considerations section** added below the interactive area as a simple 4-column grid: Accessibility, Latency, Error Handling, Language Support — each with icon + short description from the user's spec.

**Files removed from imports but NOT deleted:**
- `UssdPhoneFrame` import removed (no longer used in this component)
- Keep `SmartphoneFrame` for the phone display

### Files Changed

| File | Change |
|------|--------|
| `src/components/InteractiveWireframes.tsx` | Full rewrite — single USSD Voice flow with custom step visuals |

No new files needed. `SmartphoneFrame` reused as-is for the phone display. `UssdPhoneFrame` no longer imported here.

