

## Plan: Replace Hero Metrics with Resume-Relevant Stats

Replace the current metrics bar in `src/components/Hero.tsx` (lines ~79-85) with resume-relevant stats matching the reference screenshot.

### Change

Current metrics:
- "2M+" / Users Served
- "90K" / AI Queries (Pilot)
- "75%+" / User Retention
- "5K+" / Households Reached

New metrics (3 items, matching reference):
- "6+ yrs" / Experience
- "3+" / Markets
- "10+" / Products

### File: `src/components/Hero.tsx`
- Update the metrics array to 3 items
- Change grid from `grid-cols-2 md:grid-cols-4` to `grid-cols-3`

