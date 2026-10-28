# WorkCard

One portfolio entry on `/work`: a screenshot in a browser frame (links to the live site), an industry · location line, the name, a one-line summary, the site's strong points as a check list, and a "Visit" link.

## Props
| Prop | Type | Notes |
|---|---|---|
| `slug` | `string` | Screenshot file name in `static/images/work/` (`{slug}.webp` and `{slug}-720.webp`) |
| `name` | `string` | |
| `url` | `string` | Live site. The frame shows its domain without `www.` |
| `industry` | `string` | |
| `location` | `string` | |
| `summary` | `string` | One sentence about the business |
| `points` | `string[]` | Strong points of the website, three works best |

## Editing
To add or change a site, edit `src/lib/data/work.js`, not this file.

## Screenshots
Take them at 1440×900 (top of the homepage, cookie banner dismissed) and save as WebP, plus a 720×450 copy named `{slug}-720.webp`. The screenshot uses the site's `shrink` scroll reveal.
