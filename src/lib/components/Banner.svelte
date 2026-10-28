<script>
	/** @type {{ children: import('svelte').Snippet }} */
	let { children } = $props();
</script>

<p data-reveal="down" style:--delay="200ms">{@render children()}</p>

<style>
	p {
		margin: 0;
		padding: 1rem;
		opacity: 1;
		background: #274799 linear-gradient(209deg, rgb(39 71 153 / 0) 72%, rgb(255 255 255 / 0.5));
		color: var(--cream);
		font-size: 14px;
		font-weight: 600;
		line-height: 1.2;
		letter-spacing: 5px;
		text-align: center;
		text-transform: uppercase;
	}

	@media (max-width: 991px) {
		p {
			padding-inline: 5rem;
		}
	}
	@media (max-width: 479px) {
		p {
			padding-inline: 2rem;
		}
	}
</style>
