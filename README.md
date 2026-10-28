# workweek.dev

The Workweek marketing site: SvelteKit 3 / Svelte 5, prerendered, hosted on Cloudflare.

## Develop
```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → .svelte-kit/cloudflare
npm run preview   # serve the production build
```

## Where things live
| Path | What |
|---|---|
| `src/app.css` | Design tokens (incl. light/dark theme colours), element styles (h1–h3, p), scroll-reveal animations |
| `src/lib/site.js` | Email, Calendly link, site URL, nav links |
| `src/lib/data/pricing.js` | Plans and FAQ content |
| `src/lib/data/work.js` | Portfolio sites shown on `/work` |
| `src/lib/components/` | Every component, with a `.md` doc next to it |
| `src/lib/schema.js` | JSON-LD structured data (Organization, WebSite, pages); see `Seo.md` |
| `src/lib/reveal.js` | Scroll-reveal observer |
| `src/routes/` | Pages: `/`, `/work`, `/pricing`, `/contact` |
| `static/images/` | All site images |
| `src/routes/sitemap.xml/` | Sitemap, built from `nav` in `site.js` |
| `src/routes/llms.txt/` | `/llms.txt` summary for AI assistants, built from the pricing and work data |
| `_redirects` | Old `.html` URLs → new URLs |
| `docs/PROCESS.md` | How the Webflow site was migrated, and how to deploy |

## Common edits
- **Change light/dark colours:** the `light-dark(light, dark)` tokens at the top of `src/app.css` (`--bg`, `--surface`, `--text`, …). In components, use these tokens instead of hard-coded colours.
- **Change contact email or Calendly link:** `src/lib/site.js`
- **Change prices, features or FAQs:** `src/lib/data/pricing.js`
- **Add or edit a portfolio site:** `src/lib/data/work.js` (screenshots go in `static/images/work/`)
- **Change homepage testimonials:** `src/lib/data/testimonials.js` (currently placeholders)
- **Change a page's Google title/description:** the `<Seo>` tag at the top of that page's `+page.svelte`
- **Change home page copy:** the matching section component in `src/lib/components/` (Hero, Services, About, Benefits, Process, Mission, PlansCta)
