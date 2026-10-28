<script>
	import Button from './Button.svelte';

	/**
	 * `onselect` runs when the visitor picks this plan; the button then jumps to `href` (the inquiry form).
	 * @type {{ price: string, save: string, bestFor: string, features: string[], href: string, onselect?: () => void }}
	 */
	let { price, save, bestFor, features, href, onselect } = $props();
</script>

<article>
	<h3>{price}</h3>
	<small>{save}</small>
	<p>{bestFor}</p>
	<Button {href} onclick={onselect} full small>Choose this plan</Button>
	<ul>
		{#each features as feature}<li>{feature}</li>{/each}
	</ul>
</article>

<style>
	article {
		padding: 1rem;
		background: var(--surface);
		box-shadow: 2px 2px 20px -8px var(--shadow);
	}
	h3 {
		margin-bottom: 0.4rem;
	}
	small {
		display: block;
		margin-bottom: 1.5rem;
		opacity: 0.7;
		font-size: 12px;
	}
	p,
	li {
		font-size: 16px;
		line-height: 1.2;
		letter-spacing: -1px;
	}
	p {
		height: 3rem;
	}
	ul {
		margin: 1.5rem 0 0;
		padding: 0;
		list-style: none;
	}
	li {
		margin-bottom: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--text);
		color: var(--text-soft);
	}

	@media (max-width: 991px) {
		article {
			padding-block: 1.5rem;
		}
	}
	@media (max-width: 767px) {
		article {
			padding-block: 1rem;
		}
		ul {
			margin-top: 1rem;
		}
		li {
			margin-bottom: 1rem;
			padding-top: 1rem;
		}
	}
</style>
