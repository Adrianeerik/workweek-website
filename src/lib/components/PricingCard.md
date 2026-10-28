# PricingCard

One plan: price, savings line, "best for" line, a "Choose this plan" button and the feature list. The button runs `onselect` (the pricing page uses it to preselect the plan in the inquiry form) and jumps to `href`.

## Props
| Prop | Type |
|---|---|
| `price` | `string` |
| `save` | `string` |
| `bestFor` | `string` |
| `features` | `string[]` |
| `href` | `string` (e.g. `#inquire`) |
| `onselect` | `() => void` (optional) |

## Editing
To change plans, edit `src/lib/data/pricing.js`, not this file.

## What it replaces
`.card.pricing`, `.h3.pricing`, `.save-text`, `.paragraph.alt.plans`, `.button.full`, and a `divider` + `paragraph` pair for every feature. That's now a `<ul>` with `border-top` on each item.
