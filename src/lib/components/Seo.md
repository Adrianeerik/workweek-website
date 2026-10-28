# Seo

Sets the page `<title>`, meta description, canonical URL, Open Graph/Twitter tags, and the page's JSON-LD structured data.

## Props
| Prop | Type | Default |
|---|---|---|
| `title` | `string` | — |
| `description` | `string` | "Creating powerful, beautiful websites since 2022." |
| `type` | `string` | `'WebPage'` (schema.org type: `CollectionPage`, `ContactPage`, …) |
| `name` | `string` | Short breadcrumb label ("Pricing"). Defaults to `title`. |
| `schema` | `object[]` | Extra JSON-LD nodes for this page (Offers, FAQPage, ItemList…) |

## Usage
```svelte
<Seo title="Pricing & Plans | Workweek Web Design" description="Website plans from ₱1,999/month…" />
```
Canonical and OG URLs are built from `siteUrl` in `site.js` (https://workweek.dev). The OG image is `/images/og.webp`.

Write each page's full title (under ~60 characters, ending in "| Workweek…") and a 120–160 character description. The same title and description go to Open Graph and Twitter.

## Structured data (JSON-LD)
Every page gets one `<script type="application/ld+json">` with an `@graph` built from `src/lib/schema.js`: **Organization** (Workweek: logo, email, contact point), **WebSite**, the page's **WebPage** (or `type`), and a **BreadcrumbList**. Pages add their own nodes through `schema`:

| Page | Extra nodes |
|---|---|
| `/pricing` | **Service** with one monthly **Offer** per plan (from `amount` in `pricing.js`), **FAQPage** (from `faqs`) |
| `/work` | **ItemList** of the portfolio sites (from `work.js`) |
| `/contact` | Page type `ContactPage` |

All of it is generated from the same data the page shows, so it stays in sync. Check a deployed page with Google's Rich Results Test (search.google.com/test/rich-results) or validator.schema.org.

Deliberately left out: **Review/AggregateRating** (the homepage testimonials are placeholders, and marking up made-up reviews breaks Google's guidelines) and **LocalBusiness/address** (no public business address yet). Add them in `schema.js` once they're real.
