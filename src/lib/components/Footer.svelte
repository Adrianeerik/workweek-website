<script>
	import ContactSplit from './ContactSplit.svelte';
	import BrandBar from './BrandBar.svelte';
	import { email, mailto } from '#lib/site.js';

	/** @type {{ cta?: boolean }} cta=false drops the "Ready for a makeover?" band (contact page). */
	let { cta = true } = $props();
</script>

<footer>
	{#if cta}
		<ContactSplit
			heading="Ready for a makeover?"
			text="Fill out the form and we’ll get back to you as soon as possible.<br />Or just contact us at:"
			links={[{ href: mailto, label: email }]}
		/>
	{/if}
	<BrandBar tall={cta} />
</footer>

<style>
	footer {
		overflow: hidden;
		background: var(--green-deep);
	}
</style>
