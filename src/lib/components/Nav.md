# Nav

The fixed hamburger in the top-left, the full-screen menu overlay, and the light/dark toggle in the top-right.

## Props
None. Links come from `nav` in `src/lib/site.js`.

## Behaviour (matches the Webflow interactions)
- **Hamburger → X:** the outer lines slide together (500ms, ease-out-quart), then rotate ±45° (350ms delay). The middle line hides. Closing reverses the sequence. Pure CSS transitions on `translate`/`rotate`.
- **Overlay:** fades in over 400ms and closes instantly. Uses Svelte's `fade` transition.
- **Link hover:** each link holds two stacked copies of its label. On hover both slide up, revealing the second (800ms in / 1000ms out).
- **Light/dark toggle (top-right):** shows a moon in light mode and a sun in dark mode. Clicking sets `data-theme` on `<html>` and saves it in `localStorage` (`theme`). `app.html` restores it before paint, so there is no flash. With no saved choice, the theme follows the OS and updates live if the OS setting changes. Colours come from the `light-dark()` tokens in `app.css`.
- Closes on route change and on Escape. `aria-expanded` and `aria-current` are set.

## What it replaces
`.nav-menu`, `.menu`, `.menu-line`, `.nav`, `.nav-link-wrapper`, `.nav-link`, and interactions a-23…a-35 in `webflow.js`.
