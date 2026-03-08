export function openMailto(url: string) {
  try {
    window.top!.location.href = url;
  } catch {
    window.location.href = url;
  }
}
