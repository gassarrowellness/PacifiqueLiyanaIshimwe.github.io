

## Plan: Make SmartphoneFrame Realistic

### Current Issues
1. **Navigation (Back/Next + dots) is inside the phone screen** (lines 61-88) — should be outside, below the device, like `UssdPhoneFrame` already does correctly
2. **Content area too short** — `min-h-[440px]` should be `min-h-[500px]` to fill freed space and hit ~1:2.1 ratio

### Changes — `src/components/SmartphoneFrame.tsx`

**Line 24**: Change outer wrapper from `flex justify-center` to `flex flex-col items-center gap-4`

**Lines 56-59**: Increase content min-height from `440px` to `500px`

**Lines 61-88**: Remove the entire internal navigation block (Back/Next buttons + pagination dots) from inside the phone screen

**Lines 90-93**: Keep home indicator as-is (stays inside the phone — realistic)

**After the phone bezel closing `</div>` (after line 96)**: Add external navigation block — Back/Next buttons + pagination dots — identical structure to `UssdPhoneFrame` lines 80-107. Same champagne styling.

### Result
- Phone screen: status bar → title → content → home indicator (clean, no controls)
- Navigation controls sit below the device frame externally
- Taller content area fills the realistic proportions
- Matches `UssdPhoneFrame` pattern exactly

### Files Changed
- `src/components/SmartphoneFrame.tsx` only

