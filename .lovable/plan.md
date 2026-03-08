

## Fix mailto: links across the site

Create a helper function and switch all `mailto:` links from `<a href>` to `onClick` handlers using `window.top.location.href`.

### Changes

1. **`src/data/contact.ts`** — Encode apostrophe in mailtoLink (`Let's` → `Let%27s`)

2. **`src/lib/openMailto.ts`** (new) — Helper:
```ts
export function openMailto(url: string) {
  try { window.top!.location.href = url; }
  catch { window.location.href = url; }
}
```

3. **`src/components/Hero.tsx`** — Contact button: replace `<a href>` with `<button onClick={() => openMailto(...)}>` inside `<Button asChild>`

4. **`src/components/Contact.tsx`** — Static email link + form submit: use `openMailto()`

5. **`src/components/Footer.tsx`** — Mail icon link: use `openMailto()`

6. **`src/pages/Contact.tsx`** — Both mailto links: use `openMailto()`

