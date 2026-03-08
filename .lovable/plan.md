

## Problem Analysis

The screenshot shows "privateemail.com refused to connect" — this happens because the site runs inside a **preview iframe**. When a `mailto:` link is clicked inside an iframe without a `target` attribute, the browser tries to navigate the iframe itself to the `mailto:` URL, which gets interpreted as an HTTP request to the email provider's domain instead of triggering the OS email protocol handler.

This affects **all** `mailto:` links across the site — Gmail, private email, any provider. The same issue would occur for any `mailto:` link without a proper target.

## Fix

Add `target="_top"` to all `mailto:` anchor tags so they break out of the iframe and trigger the browser's native protocol handler. For the form handler that uses `window.location.href`, switch to `window.open(url, '_top')`.

### Files to change:

1. **`src/components/Hero.tsx`** (line 61): Add `target="_top"` to the Contact button's `<a href={CONTACT.mailtoLink}>`

2. **`src/components/Contact.tsx`** (line 19): Change `window.location.href = mailto` to `window.open(mailto, '_top')`. Also line 45: add `target="_top"` to the static email link.

3. **`src/components/Footer.tsx`** (line 15): Add `target="_top"` to the mail icon link.

4. **`src/pages/Contact.tsx`**: Add `target="_top"` to all `mailto:` links.

