

## Plan: Fix Content Placement Inside Phone Screen for Realism

### Problem
All screen content (`StepVisual`) is pushed to the **top** of the phone screen (`justify-start` on line 57). On a real phone:
- The **keypad** should be at the **bottom** of the screen
- The **mic/recording** button should be **vertically centered**
- **Processing** spinner should be **centered**
- **Text prompts** and **menu options** should flow naturally with spacing

Currently every step looks crammed at the top, which breaks the illusion of a real device.

### Changes

**`src/components/SmartphoneFrame.tsx`** — Line 57: Change `justify-start` to `justify-center` so content is vertically centered by default. Each `StepVisual` can then override its own internal layout.

**`src/components/InteractiveWireframes.tsx`** — Restructure each `StepVisual` case for realistic placement:

1. **`dialin`**: Keep the call icon and welcome message at center (works with `justify-center`). Add `mt-auto` on the menu list to push it toward the bottom, simulating an incoming call screen.

2. **`menu`**: Flip the layout — put the confirmation message at the **top**, and push the **keypad grid to the bottom** with `mt-auto`, like a real phone dialer where the numpad sits at the bottom of the screen.

3. **`record`**: Already centered content — works naturally with `justify-center`. No change needed.

4. **`processing`**: Already centered content — works naturally. No change needed.

5. **`response`**: Speaker icon and waveform centered, menu options pushed to bottom with `mt-auto` — like a real media playback screen.

6. **`loop`**: Options list pushed toward the bottom with `mt-auto`, error message at the very bottom — mimicking a real options/action sheet layout.

Each `StepVisual` wrapper div gets changed from `flex flex-col items-center gap-N` to include `h-full` so it can fill the available space and use `mt-auto`/`justify-between` to position elements realistically within the screen.

### Files Changed
- `src/components/SmartphoneFrame.tsx` (1 line)
- `src/components/InteractiveWireframes.tsx` (layout tweaks in each case)

