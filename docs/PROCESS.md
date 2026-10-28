# Migrating workweek.dev from Webflow to SvelteKit

## Starting point
The Webflow account and the original export were lost, so the live site was the only source. We downloaded:
- `/`, `/pricing.html`, `/contact.html` (HTML)
- `/styles.css` (~80 KB, about 2,500 lines, mostly Webflow boilerplate)
- `webflow.js` (~665 KB). We decoded the IX2 interaction config inside it to get the exact animation timings, delays and easings.
- All images, from Webflow's CDN, into `static/images/` with readable names.
- The Cloudflare-obfuscated email links, decoded to `info.workweek@gmail.com` and `krischanb.workweek@gmail.com`.

## Approach (80/20)
1. **Tokens first.** The handful of real design decisions (colours, Work Sans, the 8rem / 9vw gutter, the quart/quint easings) went into CSS custom properties in `src/app.css`.
2. **Style elements, not classes.** On the Webflow site every `h2` carried `.h2`, every `p` carried `.paragraph`, and so on. Those styles now apply directly to `h1`–`h3` and `p` in `app.css`. Anything section-specific goes in that component's scoped `<style>`. There are almost no class names to keep track of.
3. **One component per repeated idea.** Layout primitives (`Section`, `Button`), site chrome (`Nav`, `Footer`, `BrandBar`, `ContactSplit`, `ContactForm`, `Seo`), page sections, and list items (`ServiceCard`, `ProcessStep`, `PricingCard`, `Faq`). Repeated content lives in arrays: inside the section component, or in `src/lib/data/pricing.js` for things likely to change.
4. **Interactions rewritten in CSS.** Webflow IX2, jQuery and `webflow.js` are replaced by:
   - `src/lib/reveal.js` (≈20 lines): an IntersectionObserver that adds `data-shown`. The animations themselves are 15 lines of CSS keyed on `data-reveal="shrink|fade|left|down"` and `--delay`.
   - CSS transitions for the hamburger, nav hover and buttons, plus Svelte `fade` for the overlay.
   - Native `<details>` for the FAQ accordion.
   - One scroll handler in `Marquee`.
5. **Visual diffing.** The live site and the rebuild were screenshotted side by side with headless Edge at 1440, 800 and 390px. Spacing was corrected against measured element positions, not guesses.

## Results
| | Webflow | SvelteKit |
|---|---|---|
| CSS | ~80 KB, ~440 rules, 100+ utility classes | 16 KB total (4 KB gzipped), split per page, scoped |
| JS | jQuery 89 KB + webflow.js 665 KB + font loader | 120 KB for all three pages combined (45 KB gzipped), loaded per route |
| Fonts | Google Fonts via JS loader | Self-hosted variable Work Sans (one woff2 per subset) |
| Pages | Static HTML | Prerendered static HTML on Cloudflare |

## Deliberate differences from the original
- Copyright year updates automatically (was hard-coded "2023").
- URLs are `/pricing` and `/contact`. The old `.html` URLs 301-redirect via `_redirects`.
- Inline links inside paragraphs stay inline. Webflow made every `<a>` `display:block`.
- The contact form opens the visitor's email app (mailto) until a backend is added. See `src/lib/components/ContactForm.md`.
- Mission/hero images stay inside their rows on very small screens. The original grid sometimes overlapped them.
- `prefers-reduced-motion` disables scroll reveals.

## Adding a page (e.g. the blog later)
1. Create `src/routes/blog/+page.svelte`.
2. Put `<Seo title="…" />` at the top and build the page from `Section` and the existing components.
3. Add it to `nav` in `src/lib/site.js`.
4. For Markdown posts, add `mdsvex` and a `src/routes/blog/[slug]/` route. That's a separate piece of work.

## Deploying (Cloudflare + GitHub)
- `npm run build` writes to `.svelte-kit/cloudflare` (config in `wrangler.jsonc`).
- In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, pick the GitHub repo, set the build command to `npm run build`, and the deploy command to `npx wrangler deploy`.
- Every push to `main` then deploys automatically.
