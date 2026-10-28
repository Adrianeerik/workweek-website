<script>
	/** @type {{ name: string, role: string, quote: string }} */
	let { name, role, quote } = $props();
</script>

<figure>
	<figcaption><b>{name}</b>{role}</figcaption>
	<span role="img" aria-label="5 stars"></span>
	<blockquote>{quote}</blockquote>
</figure>

<style>
	figure {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0;
		padding: 1rem 2rem;
		background: var(--surface);
		box-shadow: 2px 2px 20px -8px var(--shadow);
	}
	figcaption,
	blockquote {
		margin: 0 0 0.45rem;
		opacity: 0.7;
		font-size: 13px;
		line-height: 1.5;
		letter-spacing: -0.5px;
	}
	b {
		display: block;
		font-size: 20px;
		font-weight: 500;
	}
	/* stars.webp is black on transparent: used as a mask so it follows the theme's text colour. */
	span {
		width: 91px; /* 16px tall at the image's 1136×200 ratio */
		height: 16px;
		margin-bottom: 0.45rem;
		background: var(--text);
		mask: url('/images/stars.webp') left center / contain no-repeat;
	}
	blockquote {
		margin: 0;
	}

	@media (max-width: 991px) {
		figure {
			padding: 1.5rem var(--gutter);
		}
	}
	@media (max-width: 767px) {
		figure {
			padding-block: 1rem;
		}
	}
</style>
