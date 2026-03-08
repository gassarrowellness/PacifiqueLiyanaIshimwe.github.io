

## Simpler logical fix for mailto

The current code tries `window.top.location.href` then falls back to `window.location.href` — both navigate the page itself. The logical fix is to just use `window.open()` which delegates to the OS without navigating any frame.

### Change: `src/lib/openMailto.ts`

Replace the entire implementation with:

```ts
export function openMailto(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
```

That's it. `window.open` with a `mailto:` URL tells the browser to hand off to the OS mail handler in a new context — no iframe navigation, no "refused to connect", works in preview and published.

One file, one line of real logic.

