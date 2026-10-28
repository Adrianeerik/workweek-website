# Benefits

"Why do you need a new website?": a checklist on the left (70%) and an image on the right (30%).

## Editing
Edit the `items` array. The `delays` array sets each item's slide-down delay (100/300/600/800ms).

## Notes
- The checkmark is a CSS `::before` background, so there's no extra `<img>` per item.
- Each item slides down inside an `overflow: hidden` row. This is why `reveal.js` watches the parent element rather than the item itself.
- ≤991px: one column, and the image becomes a 15vh strip.

## What it replaces
`.section.grid`, `.stack-grid`, `.content-vcenter.stack`, `.container.stack`, `.h3.stack`, `.icon`, `.anim-slidedown-*`.
