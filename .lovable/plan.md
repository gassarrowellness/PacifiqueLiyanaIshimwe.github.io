

## Plan: Fix Timeline with Correct Data

Cross-referencing your resume PDF and LinkedIn screenshots, here are the corrections needed in `src/components/Timeline.tsx`:

### Issues Found

| # | Current | Correct |
|---|---------|---------|
| 1 | Viamo: "March 2023 – April 2025" | **March 2023 – February 2025** |
| 2 | ENGIE: single entry "Oct 2020 – Nov 2022, Product & Marketing Manager" | **Split into 2 roles per LinkedIn**: Senior Product Analyst (Mar 2022 – May 2022) and Product & Strategy Specialist (Oct 2020 – Mar 2022) |
| 3 | "Business Analyst, Brightlife / FINCA, 2018–2019" | **Remove entirely** — not on resume or LinkedIn |

### Updated Milestones Array (6 entries → 7 entries)

1. **Gassarro** — July 2025 – Present, Founder & Operations Lead (unchanged)
2. **Opareta** — Apr 2025 – Jul 2025, Senior Product Manager (unchanged, confirmed on LinkedIn)
3. **Viamo** — March 2023 – February 2025, Platform Manager (fix end date)
4. **Brightlife by FINCA** — May 2022 – November 2022, Product & Marketing Manager (unchanged)
5. **ENGIE Energy Access** — Mar 2022 – May 2022, Senior Product Analyst (NEW — from LinkedIn)
6. **ENGIE Energy Access** — Oct 2020 – Mar 2022, Product & Strategy Specialist (NEW — from LinkedIn, replaces old combined entry)
7. Remove the "Business Analyst" entry entirely

### File Changed

| File | Change |
|------|--------|
| `src/components/Timeline.tsx` | Update `milestones` array: fix Viamo date, split ENGIE into 2 roles with correct titles/dates, remove Business Analyst |

