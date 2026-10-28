# Footer

The site footer, rendered once in `src/routes/+layout.svelte`. It's `ContactSplit` ("Ready for a makeover?") followed by `BrandBar`.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `cta` | `boolean` | `true` | `false` hides the form band. |

## How a page turns it off
Return `{ footerCta: false }` from the page's `+page.js`. The layout reads `page.data.footerCta`. The contact page does this because it already has its own form.
