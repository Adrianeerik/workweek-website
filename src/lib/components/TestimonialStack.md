# TestimonialStack

A stack of `Testimonial` cards with previous / next arrows and an "n / total" counter. Three cards are visible: the top one, and two behind it that are offset, scaled down and faded.

- **Next (→):** the top card flies off to the right and goes to the back. The cards behind move up.
- **Previous (←):** the back card flies in from the right onto the top.

Clicks during an animation are ignored. Cards behind the top one are `inert` and `aria-hidden`, and the counter is an `aria-live` region. With `prefers-reduced-motion`, cards switch without animating.

## Props
| Prop | Type |
|---|---|
| `items` | `{ name, role, quote }[]` |

## Editing
To change the quotes, edit `src/lib/data/testimonials.js`, not this file. The current entries are placeholders.

## Notes
All cards share one grid cell, so the stack is as tall as the longest quote. It sits in the Hero copy column under the "Get Started" button. Hero clips horizontally, and at ≤991px so does the deck, so the flying card can't make the page scroll sideways.
