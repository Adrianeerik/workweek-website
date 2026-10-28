// /sitemap.xml, generated at build time from the nav links in site.js.
// A new page shows up here once it's added to `nav`.
import { nav, siteUrl } from '#lib/site.js';

export const prerender = true;

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10); // build date
	const urls = nav
		.map(({ href }) => `\t<url>\n\t\t<loc>${siteUrl}${href === '/' ? '/' : href}</loc>\n\t\t<lastmod>${lastmod}</lastmod>\n\t</url>`)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
