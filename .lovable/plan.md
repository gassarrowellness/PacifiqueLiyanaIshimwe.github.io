

## Plan: Fix mailto Links Opening Inside Iframe

### Problem
All `mailto:` links lack `target="_blank"`, so they try to navigate inside the preview iframe. The email provider (privateemail.com) refuses iframe embedding, causing the error shown.

### Fix
Add `target="_blank" rel="noopener noreferrer"` to every `<a href={CONTACT.mailtoLink}>` and `<a href={CONTACT.phoneLink}>` across all files:

1. **`src/components/Hero.tsx`** — line 60: add `target="_blank" rel="noopener noreferrer"` to the mailto anchor
2. **`src/components/Footer.tsx`** — line 15: same fix on the mail icon link
3. **`src/components/Contact.tsx`** — line 42: mailto link; line 46: phone link
4. **`src/pages/Contact.tsx`** — lines 23, 31, 51: mailto and phone links

### No UI/UX changes
Links will behave identically for end users on a real domain — this fix ensures they also work correctly in iframe-based previews.

