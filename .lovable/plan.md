

## Plan: Fix mailto links to open email provider

The issue is that `mailto:` links have `target="_blank"` which can prevent the browser from properly delegating to the default email handler (like Gmail). For `mailto:` links, removing `target="_blank"` allows the browser to use its registered protocol handler correctly.

### Changes

**Files to update:** `src/components/Contact.tsx`, `src/components/Hero.tsx`, `src/components/Footer.tsx`, `src/pages/Contact.tsx`

For all `mailto:` links in these files:
- Remove `target="_blank"` and `rel="noopener noreferrer"` attributes
- Keep the `href={CONTACT.mailtoLink}` as-is
- In `src/components/Contact.tsx` form handler, change `window.open(mailto, "_blank")` to `window.location.href = mailto`

This lets the browser's native protocol handler route the `mailto:` to whatever email client the user has configured (Gmail, Outlook, native app, etc.).

