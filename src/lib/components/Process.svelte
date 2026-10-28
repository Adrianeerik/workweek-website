<script>
	import Section from './Section.svelte';
	import ProcessStep from './ProcessStep.svelte';

	const steps = [
		{ image: '/images/step-quote.webp', title: 'Quote Approval', text: 'We send you the final quote, and we receive the payment to kick off the project.' },
		{ image: '/images/step-design.webp', title: 'Design Phase', text: 'We help you craft a vision, original and faithful to preserve the look and feel of your brand.' },
		{ image: '/images/step-dev.webp', title: 'Development Phase', text: 'We bring that vision to life using industry standards and best practices.' },
		{ image: '/images/step-launch.webp', title: 'Debugging & Launch', text: 'We make sure it’s done right, and finally release the website.' }
	];
</script>

<Section pad="xl">
	<!-- Vertical track with a circle that sticks mid-screen while the steps scroll past. -->
	<div class="track" aria-hidden="true"><span></span></div>
	<h2>Our Process</h2>
	{#each steps as step}<ProcessStep {...step} />{/each}
</Section>

<style>
	h2 {
		margin-bottom: 3rem;
		text-align: center;
	}
	.track {
		position: absolute;
		bottom: 13%;
		left: calc(50% - 83px);
		width: 2px;
		height: 65%;
		padding-block: 1rem;
		border-radius: 16rem;
		background: var(--brown);
	}
	span {
		position: sticky;
		top: 40vh;
		display: block;
		width: 32px;
		height: 32px;
		margin: 1.2rem 0 1.2rem -0.95rem;
		border: 2px solid var(--text);
		border-radius: 20px;
		background: var(--surface-2);
	}

	@media (max-width: 991px) {
		.track {
			display: none;
		}
	}
</style>
