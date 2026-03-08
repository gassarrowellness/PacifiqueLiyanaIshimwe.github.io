

## Plan: Split into Two Focused, Single-Product Case Studies

### What is a case study?
A case study examines **one specific product or initiative** in depth: the problem it solved, who it served, what was tried, what was built, and what measurable impact it had. It is NOT a role summary or a list of everything done at a company.

### The Problem
The current 4th entry merges Brightlife (Uganda) and ENGIE (Zambia) — two different companies, countries, and products — into one generic block. The user wants each to focus on **one product only**.

### Resume Facts

**Brightlife** — The product is the **bundled clean cookstove + smartphone package** distributed via a youth agent network in Uganda.

**ENGIE** — The product is the **PayGo solar + satellite TV bundle** for off-grid households in Zambia.

### Changes in `src/components/CaseStudies.tsx`

Replace the single 4th case study (lines 72-90) with two objects:

**Case Study 4: Cookstove & Smartphone Bundles (Brightlife)**

- **title**: "Cookstove & Smartphone Bundles"
- **tagline**: "Brightlife by Finca: Clean cooking meets connectivity for 5,000+ households in Uganda"
- **tags**: `["Clean Cooking", "Bundled Product", "Last-Mile", "Uganda"]`
- **problem**: "Low-income households in Uganda cooked on charcoal and open fires, causing health and environmental harm, while lacking affordable access to digital connectivity."
- **userInsights**: "Households saw value in getting a smartphone alongside a cookstove — clean cooking alone wasn't a strong enough purchase motivator, but bundling it with connectivity was."
- **hypothesis**: "Bundling clean cookstoves with smartphones and selling through a youth agent network would make both products more attractive and reach households traditional retail couldn't."
- **strategy**: "Designed a bundled product line pairing clean cookstoves with smartphones. Built a youth agent distribution program to reach last-mile communities across Uganda."
- **experimentation**: "Tested different bundle configurations and agent incentive models across regions to optimize adoption rates and agent retention."
- **execution**: "Mobilized 70+ youth agents, aligned engineering, sales, and external partners, and managed end-to-end go-to-market execution."
- **results**: `["3 bundled products reached 5,000+ households", "$250K+ revenue generated", "70+ youth agents mobilized", "40% increase in partner engagement", "40% boost in digital product engagement"]`

**Case Study 5: PayGo Solar + TV Bundles (ENGIE)**

- **title**: "PayGo Solar + Satellite TV Bundles"
- **tagline**: "ENGIE Energy Access: Affordable solar-powered entertainment for off-grid Zambia"
- **tags**: `["Solar", "PayGo", "Bundled Product", "Zambia"]`
- **problem**: "Off-grid households in Zambia wanted entertainment and information access but couldn't afford upfront costs for solar systems or satellite TV separately."
- **userInsights**: "Customers valued entertainment as much as lighting — a solar panel alone wasn't compelling enough, but pairing it with satellite TV created strong demand."
- **hypothesis**: "A PayGo solar + satellite TV bundle with flexible payments would drive adoption by solving two needs — energy and entertainment — in a single affordable package."
- **strategy**: "Launched a bundled solar home system with integrated satellite TV, sold on a PayGo financing model to make it affordable for off-grid households."
- **experimentation**: "Piloted the solar + TV bundle across Zambian markets to validate demand, pricing sensitivity, and payment completion rates."
- **execution**: "Led product launch end-to-end including pricing strategy, CRM workflow migration, and UX training library for the Zambian team."
- **results**: `["Expanded product reach across Zambia's off-grid market", "Achieved 100% adoption of new CRM and training tools", "Reduced operational costs through budget tracking", "Validated demand for bundled solar + entertainment products"]`

