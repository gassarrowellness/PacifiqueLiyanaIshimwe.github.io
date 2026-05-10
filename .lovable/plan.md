## Add Gassarro case study with tech stack

Add one entry to the `caseStudies` array in `src/components/CaseStudies.tsx`, matching the existing shape, positioned after the Mobile Money Agent Support Platform entry.

### Proposed content

- **Title:** Gassarro, Founder & Product Lead
- **Tagline:** Founded a service-business lab to design websites and custom CRMs for SMBs

- **Tags:** Founder, Web, Custom CRM, Service Businesses, Zambia, React, TypeScript, Supabase, Tailwind

- **Problem:** Small service businesses (salons, clinics, studios) in emerging markets are stuck between paper, WhatsApp, and rigid global SaaS that does not match how they actually run. They lack credible websites and tailored operational tools, and most off-the-shelf CRMs are too generic, too expensive, or too complex for their teams.

- **User Insights:** Owners need a credible online presence and a simple operational backbone, not feature-heavy software. Staff need lightweight, mobile-first workflows for booking, verification, and client notes. Clients want frictionless online booking without back-and-forth messaging.

- **Hypothesis:** Running a real service business as a live lab would surface authentic workflow needs that generic SaaS misses, and would let me design websites and custom CRMs that genuinely fit how SMBs operate, then productize those patterns for other service businesses.

- **Strategy:** Founded Gassarro and launched Gassarrowellness, a Lusaka hair and nail salon, as the live testing ground. Designed and shipped a branded booking website (services, gift cards, careers) plus a custom CRM covering authenticated staff access, appointment management, worker booking verification, and client surveys. Used the salon's day-to-day operations as continuous discovery for what service-business CRMs actually need.

- **Experimentation:** Iterated booking flows, staff verification steps, and CRM layouts against real client and staff behaviour. Tested where automation helped, where it got in the way, and which workflows generalize across service categories versus which are salon-specific.

- **Execution:** Led the venture end-to-end: company founding, product strategy, UX, build, deployment on a custom domain, staff onboarding, and ongoing iteration. Built on React, TypeScript, Vite, and Tailwind on the frontend, with Supabase (Postgres, auth, RLS) on the backend, plus React Query, React Hook Form, and Zod for data and form handling.

- **Results:**
  - Founded Gassarro and launched Gassarrowellness as a live product lab
  - Shipped a public booking website at gassarrowellness.com
  - Built a custom CRM with auth, appointment management, worker verification, and client surveys
  - Validated reusable patterns for SMB websites and bespoke CRMs in service categories
  - Demonstrates ability to take a service-business product from zero to live, end-to-end

### Technical notes

- Single edit to `src/components/CaseStudies.tsx`, inserting one object into the `caseStudies` array.
- Tag list intentionally includes a few stack tags (React, TypeScript, Supabase, Tailwind) for scannability; the Execution paragraph carries the full stack detail.
- No new components, assets, routes, or styling changes. Existing accordion, animations, tag pills, and print/PDF view pick it up automatically.
- Punctuation follows project rules (no em or en dashes).