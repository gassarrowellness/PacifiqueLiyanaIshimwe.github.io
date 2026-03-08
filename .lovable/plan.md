

## Plan: Make Contact Form Send Real Emails via Mailto

Rather than deleting the section (which provides good UX), convert the form submission to open the user's email client with the form data pre-filled, sending to `plishimwe@gmail.com`. This requires no backend.

### Changes

**File: `src/components/Contact.tsx`**

Update `handleSubmit` to construct a `mailto:` link with the form's name, email, and message as URL parameters, then open it via `window.open()`. The toast will confirm the action. The form fields map to:
- `subject`: "Portfolio Contact from {name}"
- `body`: includes the sender's email and message

This matches the reference image style (the form already looks similar). No backend or third-party service needed.

