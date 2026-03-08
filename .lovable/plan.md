

## Plan: Make Stage Cards Clearly Clickable

The current stage cards show an icon, title, and a small "→" arrow but lack clear interactive affordance. Users don't realize they can click to expand.

### Changes to `src/components/ProductStrategy.tsx`

**Update each stage card (lines 104-125):**
- Replace the lonely "→" with a persistent "Click to explore" text + chevron icon that animates on hover
- Add `cursor-pointer` and a subtle hover scale/lift effect (`hover:shadow-lg hover:-translate-y-1`)
- When active, change the CTA text to "Click to collapse" with rotated chevron
- Add a small `text-primary text-xs font-medium` label below the title: "Tap to explore →"
- Add `group` class to the button so child elements can use `group-hover:` transitions

Specifically:
- Remove the current arrow div (lines 120-124)
- Replace with: `<p className="text-xs text-primary/60 group-hover:text-primary mt-2 transition-colors flex items-center gap-1">Explore <ChevronDown className="h-3 w-3 transition-transform" rotated when active /></p>`
- Add `group` to the button className
- Import `ChevronDown` from lucide-react

