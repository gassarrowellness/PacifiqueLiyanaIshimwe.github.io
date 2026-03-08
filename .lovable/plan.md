

## Fix: Gmail opens blank tab on mailto

**Problem**: `window.open(url, "_blank", "noopener,noreferrer")` opens a new blank tab. Gmail's protocol handler intercepts the `mailto:` and redirects to compose, but the original blank tab remains open showing `about:blank`.

**Root cause**: `window.open` creates a new tab first, then the browser's mailto handler takes over — but the empty tab stays behind.

**Fix**: Use a temporary hidden `<a>` element with a programmatic `.click()`. This triggers the browser's native mailto handling without creating an extra tab. Works for both Gmail protocol handlers and native mail clients.

### Change: `src/lib/openMailto.ts`

Replace with:

```ts
export function openMailto(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
```

This simulates a native anchor click — the browser delegates to whatever mailto handler is registered (Gmail, Outlook, native app) without leaving a blank tab. One file, no other changes needed.

