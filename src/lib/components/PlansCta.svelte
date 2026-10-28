<script>
	import Section from './Section.svelte';
	import Button from './Button.svelte';
</script>

<Section id="options" pad="sm" max={600} dark>
	<h2>Flexible plans.<br /><span>Even more flexible options.</span></h2>
	<p>
		Find the perfect plan for you by clicking the buttons below, or book a call with us for a
		customized option for your business.
	</p>
	<div>
		<Button href="/pricing" light>plans &amp; pricing</Button>
		<Button href="/contact" light>Contact us</Button>
	</div>
</Section>

<style>
	h2 {
		margin-bottom: 1rem;
		font-size: 36px;
		font-weight: 400;
	}
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		justify-items: center;
		padding-block: 2rem;
	}

	@media (max-width: 991px) {
		div {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding-block: 1rem;
		}
	}
</style>
