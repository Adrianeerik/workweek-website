<script>
	import { page } from '$app/state';
	import { siteUrl } from '#lib/site.js';
	import { organization, website, webPage } from '#lib/schema.js';

	/**
	 * Head tags plus a JSON-LD @graph (see src/lib/schema.js).
	 * `type` is the schema.org page type, `name` its short breadcrumb label, `schema` extra page-specific nodes.
	 * @type {{ title: string, description?: string, type?: string, name?: string, schema?: object[] }}
	 */
	let { title, description = 'Creating powerful, beautiful websites since 2022.', type, name, schema = [] } = $props();
	const url = $derived(siteUrl + page.url.pathname);

	// "<" is escaped so no string in the data can close the <script> tag early.
	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [organization, website, ...webPage({ url, title, description, type, name }), ...schema]
		}).replace(/</g, '\\u003c')
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{siteUrl}/images/og.webp" />
	<meta property="og:site_name" content="Workweek" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
