<script>
	import Seo from '#lib/components/Seo.svelte';
	import Section from '#lib/components/Section.svelte';
	import WorkCard from '#lib/components/WorkCard.svelte';
	import PlansCta from '#lib/components/PlansCta.svelte';
	import { sites } from '#lib/data/work.js';
	import { siteUrl } from '#lib/site.js';
	import { ids } from '#lib/schema.js';

	// Structured data: the portfolio as an ordered list of websites Workweek built.
	const schema = [
		{
			'@type': 'ItemList',
			'@id': `${siteUrl}/work#portfolio`,
			name: 'Websites built by Workweek',
			numberOfItems: sites.length,
			itemListElement: sites.map((s, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				item: {
					'@type': 'WebSite',
					name: s.name,
					url: s.url,
					description: s.summary,
					image: `${siteUrl}/images/work/${s.slug}.webp`,
					genre: s.industry,
					creator: { '@id': ids.organization }
				}
			}))
		}
	];
</script>

<Seo
	title="Our Work | Websites Built by Workweek"
	description="See 20 websites we’ve designed and built for clinics, roofers, investors, event companies and online shops across Asia, the US, Europe and the Middle East."
	type="CollectionPage"
	name="Our Work"
	{schema}
/>

<Section pad="sm">
	<header>
		<h1>Our work</h1>
		<p>
			{sites.length} websites for clinics, roofers, investors, event crews, online shops and more, from
			Laguna to Los Angeles. Here’s what makes each one work.
		</p>
	</header>
	<div class="grid">
		{#each sites as site (site.slug)}<WorkCard {...site} />{/each}
	</div>
</Section>

<PlansCta />

<style>
	header {
		max-width: 720px;
		padding-block: 4rem 2rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 6rem 4rem;
		padding-bottom: 4rem;
	}

	@media (max-width: 991px) {
		header {
			padding-block: 3rem 1rem;
		}
		.grid {
			gap: 4rem 2rem;
		}
	}
	@media (max-width: 767px) {
		.grid {
			grid-template-columns: 1fr;
			padding-bottom: 1rem;
		}
	}
</style>
