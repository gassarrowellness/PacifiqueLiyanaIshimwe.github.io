

## Plan: Remove form & mailto, keep email as copyable text

### Changes

**1. `src/components/Contact.tsx` (homepage section)**
- Remove the form (right column), `useState`, `Input`, `useToast`, `Send`, `openMailto` imports
- Replace the mailto email button with a static email display + copy-to-clipboard button (using `navigator.clipboard.writeText`)
- Show a toast "Email copied!" on click
- Keep: phone, LinkedIn, location
- Single column layout

**2. `src/components/Footer.tsx`**
- Remove Mail icon button and `openMailto` import
- Keep LinkedIn and scroll-to-top

**3. `src/pages/Contact.tsx`**
- Remove `openMailto` import and mailto buttons
- Replace EMAIL section with copyable email display (same copy-to-clipboard pattern)
- Remove "Email" under CONNECT section

**4. `src/components/Hero.tsx`**
- Remove the Contact/Mail button, `Mail` and `openMailto` imports
- Keep: View Product Work and LinkedIn buttons

**5. `src/lib/openMailto.ts`**
- Delete file (no longer referenced)

### Copy UX
Each email display will be a button showing the email address with a small copy icon. On click: copies to clipboard and shows toast confirmation. Simple, one-click copy.

