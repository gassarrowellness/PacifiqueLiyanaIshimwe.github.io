

## Updated Plan: Fact-Check, Fix Links, and Centralize Contact Data

### Issues Found

**1. Wrong LinkedIn URL (4 files)**
Current: `https://www.linkedin.com/in/pacifique-ishimwe`
Correct: `https://www.linkedin.com/in/pacifique-liyana-ishimwe-998764124/details/experience/`
Files: Hero.tsx, Footer.tsx, Contact.tsx (component), Contact.tsx (page)

**2. Missing "Liyana" in page title/meta (index.html)**
Lines 6 and 13: `"Pacifique Ishimwe"` → `"Pacifique Liyana Ishimwe"`

**3. Contact info hardcoded across 5+ files**
Create `src/data/contact.ts` with centralized `CONTACT` constant. All files import from it.

**4. `mailto:` links need improvement**
Current `mailto:` links are bare (`mailto:plishimwe@gmail.com`) with no subject or body pre-filled. On many mobile browsers and webmail-only users, bare mailto can feel broken or open an empty compose window with no context.

**Fix:** Change all mailto links to include a pre-filled subject line for a seamless experience:
```
mailto:plishimwe@gmail.com?subject=Hello%20Pacifique%20-%20Let's%20Connect
```
This ensures that when the user's mail client (Gmail, Outlook, Apple Mail) opens, the compose window has context already set, making it feel intentional and seamless rather than blank.

The centralized `CONTACT` object will include a `mailtoLink` field with the full URI so all files use one consistent link:
```ts
export const CONTACT = {
  // ...other fields
  email: "plishimwe@gmail.com",
  mailtoLink: "mailto:plishimwe@gmail.com?subject=Hello%20Pacifique%20-%20Let's%20Connect",
};
```

**Files to update (6 mailto occurrences across 4 files):**
- `src/components/Hero.tsx` — 1 occurrence
- `src/components/Footer.tsx` — 1 occurrence
- `src/components/Contact.tsx` — 1 occurrence
- `src/pages/Contact.tsx` — 2 occurrences

All will import `CONTACT.mailtoLink` instead of hardcoding the mailto string.

### No UI/UX changes
All fixes are data corrections and code quality. Visual output remains identical.

