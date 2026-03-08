

## Plan: Aurora Silver Hero + Factual Timeline Corrections

### 1. Hero Background — Silver Metallic Aurora (`src/components/Hero.tsx`)

**Replace dark gradient with silver metallic:**
- Section: `bg-gray-900` → `bg-slate-400`
- Base gradient: `from-gray-900 via-gray-800 to-gray-900` → `from-slate-600 via-gray-200 to-slate-400`
- Aurora orbs: update to `from-white/40`, `from-slate-100/50`, `from-gray-500/30`
- Status badge: `border-white/20 bg-white/5 text-white` → `border-gray-400/30 bg-white/20 text-gray-900`
- Pulse dot: `bg-white` → `bg-gray-700`
- H1: `text-white` → `text-gray-900`
- Subtitle: `text-gray-300` → `text-gray-600`
- Description: `text-gray-400` → `text-gray-500`
- Metrics bar: `bg-white/5 border-white/10` → `bg-white/30 border-white/50`
- Metric labels: `text-gray-400` → `text-gray-600`
- Scroll arrow: `text-white/30 hover:text-white/60` → `text-gray-400 hover:text-gray-600`

### 2. Timeline Data Corrections (`src/components/Timeline.tsx`)

Based on the LinkedIn screenshot, add the Opareta role and fix Viamo dates. Updated milestones:

| # | Period | Role | Company |
|---|--------|------|---------|
| 1 | July 2025 – Present | Founder & Operations Lead | Gassarro |
| 2 | Apr 2025 – Jul 2025 | Senior Product Manager | Opareta *(NEW)* |
| 3 | Mar 2023 – Apr 2025 | Platform Manager | Viamo *(date fix: was "Feb 2025")* |
| 4 | May 2022 – Nov 2022 | Product & Marketing Manager | Brightlife by FINCA |
| 5 | Oct 2020 – Nov 2022 | Product & Marketing Manager | ENGIE Energy Access |
| 6 | 2018 – 2019 | Business Analyst | Brightlife / FINCA International |

**New Opareta entry description:** "Led product management for a mobile app supporting analog mobile money agent networks with transaction tracking and operational digitization. Designed features for transaction recording, improved data capture accuracy, and built internal tools for field issue logging."

**Highlights:** ["Mobile money agents", "Field ops digitization", "Multi-market rollout"]

### Files Changed
| File | Change |
|------|--------|
| `src/components/Hero.tsx` | Silver metallic aurora background + text color updates |
| `src/components/Timeline.tsx` | Add Opareta role, fix Viamo end date |

