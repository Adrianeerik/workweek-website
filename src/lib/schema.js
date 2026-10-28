// JSON-LD (schema.org) for search engines. Seo.svelte puts one @graph on every page:
// Organization + WebSite + this page's WebPage + breadcrumbs, plus any page-specific nodes it is given.
// Nodes link to each other by @id, so Google reads them as one connected description of the site.
//
// Keep this factual: no Review / AggregateRating until the testimonials are real (fake reviews break
// Google's guidelines), and no LocalBusiness / address until there is a public business address.
import { email, siteUrl } from '#lib/site.js';

export const ids = {
	organization: `${siteUrl}/#organization`,
	website: `${siteUrl}/#website`,
	page: (/** @type {string} */ url) => `${url}#webpage`,
	breadcrumbs: (/** @type {string} */ url) => `${url}#breadcrumbs`
};

export const organization = {
	'@type': 'Organization',
	'@id': ids.organization,
	name: 'Workweek',
	alternateName: 'The Workweek',
	url: `${siteUrl}/`,
	logo: { '@type': 'ImageObject', url: `${siteUrl}/images/apple-touch-icon.png`, width: 256, height: 256 },
	image: `${siteUrl}/images/og.webp`,
	description:
		'Workweek is a small team of designers and developers building fast, modern websites for small and growing businesses.',
	email,
	foundingDate: '2022',
	knowsAbout: ['Web design', 'Web development', 'UI/UX design', 'Wireframing and prototyping', 'E-commerce websites', 'SEO', 'Brand strategy and positioning'],
	contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email, url: `${siteUrl}/contact` }
};

export const website = {
	'@type': 'WebSite',
	'@id': ids.website,
	name: 'Workweek',
	url: `${siteUrl}/`,
	inLanguage: 'en',
	publisher: { '@id': ids.organization }
};

/**
 * The WebPage node for one page, plus its BreadcrumbList (Home › Page).
 * @param {{ url: string, title: string, description: string, type?: string, name?: string }} page
 */
export function webPage({ url, title, description, type = 'WebPage', name }) {
	const home = url === `${siteUrl}/`;
	return [
		{
			'@type': type,
			'@id': ids.page(url),
			url,
			name: title,
			description,
			inLanguage: 'en',
			isPartOf: { '@id': ids.website },
			about: { '@id': ids.organization },
			primaryImageOfPage: { '@type': 'ImageObject', url: `${siteUrl}/images/og.webp`, width: 1200, height: 630 },
			breadcrumb: { '@id': ids.breadcrumbs(url) }
		},
		{
			'@type': 'BreadcrumbList',
			'@id': ids.breadcrumbs(url),
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
				...(home ? [] : [{ '@type': 'ListItem', position: 2, name: name ?? title, item: url }])
			]
		}
	];
}

/** Strips the trusted HTML used in FAQ answers down to plain text for schema. */
export const plainText = (/** @type {string} */ html) =>
	html
		.replace(/<br\s*\/?>/g, '\n')
		.replace(/<[^>]+>/g, '')
		.replace(/\n{3,}/g, '\n\n')
		.trim();
