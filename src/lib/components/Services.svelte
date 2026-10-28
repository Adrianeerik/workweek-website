<script>
	import Section from './Section.svelte';
	import ServiceCard from './ServiceCard.svelte';

	const services = [
		{ icon: '/images/icon-wireframe.png', title: 'Wireframing and Prototyping', text: 'Professional websites complete with fluid animations.' },
		{ icon: '/images/icon-design.png', title: 'Web Design and Development', text: 'Responsive UI/UX from scratch or from a starting point.' },
		{ icon: '/images/icon-strategy.png', title: 'Strategy and Positioning', text: 'Ensure the edge over the competitors with solid research.' }
	];
</script>

<Section max={1280}>
	<h2>We are Workweek.</h2>
	<hr />
	<div>
		{#each services as service}<ServiceCard {...service} />{/each}
	</div>
</Section>

<style>
	h2 {
		/* Original band had 12rem top padding (Section gives 8rem). */
		margin: 4rem 0 2rem;
		text-align: center;
	}
	hr {
		height: 1px;
		margin: 0 0 1.5rem;
		border: 0;
		background: var(--text);
	}
	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 32px;
	}

	@media (max-width: 991px) {
		h2 {
			margin-top: 0;
		}
		div {
			gap: 8px;
		}
	}
	@media (max-width: 767px) {
		hr {
			margin-bottom: 1rem;
		}
		div {
			grid-template-columns: 1fr;
			gap: 16px;
		}
	}
</style>
