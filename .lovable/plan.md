

## Plan: Add Interactive Product Flows to Future Product Concepts

Each of the six future product concept cards will get an interactive wireframe flow, reusing the same visual pattern from `InteractiveWireframes.tsx` (phone frame, step-by-step screens, back/next navigation, dot indicators, annotation sidebar).

### What changes

**`src/components/FuturisticPrototypes.tsx`**

1. Add `screens` data to each prototype (4 screens per concept showing the core user flow), e.g.:
   - **Credit Scoring**: Welcome > Link Accounts > Credit Score > Loan Offers
   - **Inventory Forecasting**: Dashboard > Stock Alert > Demand Forecast > Auto-Reorder
   - **Social Revenue**: Connect Channels > Performance View > Strategy Card > Revenue Report
   - **Trade Compliance**: Select Route > Tariff Check > Document Generator > Submission Status
   - **Subscription Commerce**: Browse Plans > Customize Delivery > Payment Setup > Active Subscription
   - **Influencer Bridge**: Brand Catalog > Creator Storefront > Sale Attribution > Payout Summary

2. Add interactive state management (active screen per card, or expand a card to show its flow).

3. **Approach**: When a user clicks "Explore Flow" on a concept card, a wireframe viewer opens inline below the card (or as an expandable section) with the same phone-frame UI, screen navigation, and annotation panel used in `InteractiveWireframes.tsx`.

### UI behavior

- Each card gets an "Explore Flow" button at the bottom
- Clicking it expands an inline wireframe viewer below that card with:
  - Left: phone frame with mono-spaced screen elements, back/next/dot nav
  - Right: numbered annotation steps (clickable)
- Clicking again or a "Close" button collapses it
- Only one flow can be open at a time

### No other sections or content will be modified.

