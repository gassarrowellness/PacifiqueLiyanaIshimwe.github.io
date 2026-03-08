

## Plan: Remove All Em Dashes Across the Website

Found 143 em dash (`—`) occurrences across 9 files. Each will be replaced with an appropriate alternative (hyphen with spaces, comma, colon, or period depending on context).

### Files to Edit

| File | Matches | Replacement approach |
|------|---------|---------------------|
| `src/components/GTMStrategy.tsx` | 15 | Replace `—` with ` - ` or restructure sentence |
| `src/components/ExperimentsBoard.tsx` | ~2 | Replace with ` - ` |
| `src/components/AIDemos.tsx` | ~1 | Replace with ` - ` |
| `src/components/ProductThinking.tsx` | ~1 | Replace with ` - ` |
| `src/components/SmartphoneFrame.tsx` | ~5 | Replace in comments and code strings |
| `src/components/ProductDashboards.tsx` | ~1 | Replace with ` - ` |
| `src/components/InteractiveWireframes.tsx` | ~5 | Replace with ` - ` |
| `src/components/ProductDesignWalkthrough.tsx` | ~5 | Replace with ` - ` |
| `src/data/blogPosts.ts` | ~10+ | Replace with ` - ` or rephrase |

### Approach
- Content text: replace `—` with ` - ` (spaced hyphen)
- Code comments: replace `—` with ` - `
- Arrows `→` are not em dashes and will be left unchanged
- No UI/UX changes, only text content updates

