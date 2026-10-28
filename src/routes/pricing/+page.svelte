<script>
	import Seo from '#lib/components/Seo.svelte';
	import Banner from '#lib/components/Banner.svelte';
	import Section from '#lib/components/Section.svelte';
	import PricingCard from '#lib/components/PricingCard.svelte';
	import ContactSplit from '#lib/components/ContactSplit.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import { plans, faqs } from '#lib/data/pricing.js';
	import { email, mailto, calendly, siteUrl } from '#lib/site.js';
	import { ids, plainText } from '#lib/schema.js';

	// "₱3,499/month · Best for expanding businesses": what the plan picker shows and the email includes.
	const labels = plans.map((p) => `${p.price} · ${p.bestFor}`);
	let plan = $state('');

	// Structured data: the service with one monthly Offer per plan, and the FAQ.
	const url = `${siteUrl}/pricing`;
	const schema = [
		{
			'@type': 'Service',
			'@id': `${url}#service`,
			name: 'Website design and development',
			serviceType: 'Web design',
			provider: { '@id': ids.organization },
			areaServed: { '@type': 'Country', name: 'Philippines' },
			offers: plans.map((p) => ({
				'@type': 'Offer',
				name: `${p.price} plan`,
				description: `${p.bestFor}: ${p.features.join(', ')}.`,
				url: `${url}#inquire`,
				price: p.amount,
				priceCurrency: 'PHP',
				priceSpecification: {
					'@type': 'UnitPriceSpecification',
					price: p.amount,
					priceCurrency: 'PHP',
					unitText: 'MONTH',
					referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' }
				},
				availability: 'https://schema.org/InStock',
				seller: { '@id': ids.organization }
			}))
		},
		{
			'@type': 'FAQPage',
			'@id': `${url}#faq`,
			isPartOf: { '@id': ids.page(url) },
			mainEntity: faqs.map((f) => ({
				'@type': 'Question',
				name: f.question,
				acceptedAnswer: { '@type': 'Answer', text: plainText(f.answer) }
			}))
		}
	];
</script>

<Seo
	title="Pricing & Plans | Workweek Web Design"
	description="Website plans from ₱1,999/month with custom design, forms, monthly reports and e-commerce. Pick a plan and tell us about your business."
	name="Pricing"
	{schema}
/>

<Banner>Exclusive for businesses in the philippines! 🇵🇭</Banner>

<Section pad="sm">
	<div class="plans">
		<div>
			<h1>Plans &amp; pricing</h1>
			<p>Choose what’s right for you - we’ve catered these options perfect for businesses of every size.</p>
			<p class="hint">Pick a plan and tell us about your project. We’ll reply with next steps.</p>
		</div>
		{#each plans as p, i}<PricingCard {...p} href="#inquire" onselect={() => (plan = labels[i])} />{/each}
	</div>
</Section>

<Section max={720}>
	<h2>Frequently Asked Questions</h2>
	<Faq items={faqs} />
</Section>

<div id="inquire">
	<ContactSplit
		heading="Tell us about your project"
		text="Choose a plan (or leave it as “Not sure yet”), add a few details about your business, and we’ll get back to you as soon as possible.<br /><br />Or reach us directly at:"
		links={[{ href: mailto, label: email }]}
		note="Prefer to talk it through?"
		cta={{ href: calendly, label: 'Schedule a call' }}
		submit="Send inquiry"
		plans={labels}
		bind:plan
	/>
</div>

<style>
	.plans {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
		margin-inline: -2rem; /* original used a 6rem gutter here instead of 8rem */
	}
	h1,
	h2 {
		margin: 0 0 1rem;
		font-size: 36px;
		font-weight: 400;
		line-height: 1.2;
	}
	h2 {
		margin-bottom: 1.5rem;
	}
	.hint {
		color: var(--leaf);
		font-size: 16px;
		font-weight: 500;
	}

	@media (max-width: 991px) {
		.plans {
			grid-template-columns: repeat(3, 1fr);
			margin-inline: 0;
		}
		.plans > div {
			grid-column: 1 / -1;
		}
	}
	@media (max-width: 767px) {
		.plans {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 479px) {
		.plans {
			margin-inline: calc(1.5rem - var(--gutter));
		}
	}
</style>
