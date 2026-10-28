# Hero

The home masthead: headline and "Get Started" button on the left, two stacked images on the right, and the floating testimonial card.

## Props
None. The copy lives in the component.

## Layout
- Desktop: a 67/33 grid at 80vh. The copy spans both rows. Each image fills half the right column.
- ≤991px: one column. The copy is 50vh, each image is 20vh, and the testimonial drops into normal flow.

## Animations
The images "shrink in" (scale 1.25 → 1 plus fade) at 400ms and 1000ms. The testimonial slides in from the left at 1000ms. See `src/lib/reveal.js`.

## What it replaces
`.section.masthead`, `.masthead-grid`, `.content-vcenter`, `.container.width-100`, `.crop-wrapper`, `.masthead-img`, `.card.absolute`, `.h3.masthead`, and the `w-node-*` grid IDs.
