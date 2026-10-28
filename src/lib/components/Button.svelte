<script>
	/**
	 * Uppercase block button. Renders <a> when given href, otherwise <button>.
	 * Any other attribute (onclick, aria-*) is passed through.
	 * @type {{ href?: string, light?: boolean, full?: boolean, small?: boolean, type?: 'button' | 'submit', children: import('svelte').Snippet, [key: string]: any }}
	 */
	let { href, light = false, full = false, small = false, type = 'button', children, ...rest } = $props();
	const external = $derived(href?.startsWith('http'));
</script>

{#if href}
	<a {...rest} {href} class:light class:full class:small target={external ? '_blank' : null} rel={external ? 'noopener' : null}>
		{@render children()}
	</a>
{:else}
	<button {...rest} {type} class:light class:full class:small>{@render children()}</button>
{/if}

<style>
	a,
	button {
		display: inline-block;
		padding: 0.8rem 2rem;
		border: 0;
		background: var(--btn-bg);
		color: var(--btn-text);
		font-weight: 500;
		line-height: inherit;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 250ms ease;
	}
	:hover {
		opacity: 0.8;
	}
	:active {
		transform: scale(0.95);
	}
	.light {
		background: var(--sand);
		color: var(--green-deep);
	}
	.full {
		width: 100%;
		text-align: center;
	}
	.small {
		font-size: 14px;
	}

	@media (max-width: 991px) {
		a,
		button {
			width: 100%;
			font-size: 16px;
			text-align: center;
		}
	}
	@media (max-width: 479px) {
		a,
		button {
			font-size: 14px;
		}
	}
</style>
