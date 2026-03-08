

## Plan: Replace Kenya References and KES Currency with Zambia/Uganda Equivalents

All changes in `src/components/FuturisticPrototypes.tsx`.

### Changes

**1. Gig Workers prototype (lines 22, 24):**
- `"☑ M-Pesa linked"` → `"☑ MTN MoMo linked"`
- `"KES 15,000"` → `"ZMW 15,000"`

**2. Cross-Border Trade prototype (lines 63-64):**
- `"To:   [Kenya 🇰🇪]"` → `"To:   [Uganda 🇺🇬]"`
- `"VAT: 16%"` → `"VAT: 18%"` (Uganda's rate)

**3. Subscription Commerce prototype (lines 77, 79):**
- `"KES 850/week"` → `"ZMW 850/week"`
- `"☑ M-Pesa Auto-pay"` → `"☑ MTN MoMo Auto-pay"`
- `"Phone: +254 7XX XXX"` → `"Phone: +260 9XX XXX"` (Zambia code)
- `"Amount: KES 1,700"` → `"Amount: ZMW 1,700"`

