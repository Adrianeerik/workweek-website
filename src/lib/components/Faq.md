# Faq

An accordion list. Uses native `<details>/<summary>`, so it needs no JavaScript. Collapsed by default, like the original.

## Props
| Prop | Type | Notes |
|---|---|---|
| `items` | `{ question, answer }[]` | `answer` is trusted HTML (links, `<br />`). |

## Animation
Chromium browsers get the original 700ms height animation via `::details-content` + `interpolate-size`. Other browsers toggle instantly. Hover dims to 0.6 opacity; press scales to 0.99.

## What it replaces
`.accordion`, `.paragraph.alt.faq`, `.paragraph.alt.spaced`, and interactions a-21/a-22.
