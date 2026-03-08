

## Plan: Remove Company Names and Em Dashes from Case Studies

### Changes in `src/components/CaseStudies.tsx`

**Remove company names from taglines:**
- Line 22: `"Viamo: Serving 2M+..."` → `"Serving 2M+ users across health, agriculture & civic education"`
- Line 57: `"Opareta: Migrating..."` → `"Migrating agent workflows from WhatsApp to a dedicated platform"`
- Line 74: `"Brightlife by Finca: Clean cooking..."` → `"Clean cooking meets connectivity for 5,000+ households in Uganda"`
- Line 92: `"ENGIE Energy Access: Affordable..."` → `"Affordable solar-powered entertainment for off-grid Zambia"`

**Replace em dashes (—) with commas or reword:**
- Line 77: `"...cookstove — clean cooking alone..."` → `"...cookstove. Clean cooking alone..."`
- Line 95: `"...lighting — a solar panel..."` → `"...lighting. A solar panel..."`
- Line 96: `"...adoption by solving two needs — energy and entertainment — in..."` → `"...adoption by solving two needs (energy and entertainment) in..."`

Also check line 28 for `'Ask Viamo Anything'` — this is a product name, not a company name, so it stays.

