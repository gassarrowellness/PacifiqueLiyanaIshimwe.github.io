

## Plan: USSD-Style Phone Frame for Interactive Product Flows

The current USSD Navigation flow uses the same modern smartphone frame as all other flows. The reference image shows a classic USSD interface: plain text menu on a simple white screen with a numeric keypad below. The plan is to create a dedicated USSD phone frame and use it specifically for the USSD flow.

### Changes

**`src/components/UssdPhoneFrame.tsx`** (new file)

A classic feature/basic phone frame component styled after the reference:
- Dark phone bezel with rounded corners (classic phone shape, not modern smartphone)
- Earpiece/speaker slit at top
- Plain white screen area with simple black text (no status bar, no notch)
- Content rendered as plain monospace text lines (like a real USSD session)
- A text input field at the bottom of the screen with a cursor
- Numeric keypad below the screen (1-9, 0, with -, /, :, etc. keys)
- Physical home button at the bottom
- Navigation dots and back/next controls placed outside the phone (below it)

**`src/components/InteractiveWireframes.tsx`**

- Import `UssdPhoneFrame`
- Add a `type` field to the flow interface (`"smartphone" | "ussd"`)
- Tag the USSD flow with `type: "ussd"`
- Conditionally render `UssdPhoneFrame` when `currentFlow.type === "ussd"`, otherwise render `SmartphoneFrame`
- USSD screen elements render as plain text lines (no button/checkbox parsing), matching the simple numbered-menu look

### No content data changes. Same screen titles, annotations, and element strings.

