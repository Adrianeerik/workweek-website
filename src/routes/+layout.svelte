<script>
	import '@fontsource-variable/work-sans/wght.css';
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { observeReveals } from '#lib/reveal.js';
	import Nav from '#lib/components/Nav.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();

	/** @type {() => void} */
	let stop;
	afterNavigate(() => {
		stop?.();
		stop = observeReveals();
	});
</script>

<Nav />
<main>{@render children()}</main>
<Footer cta={page.data.footerCta ?? true} />
