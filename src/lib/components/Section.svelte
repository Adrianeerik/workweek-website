<script>
	/**
	 * Page band: vertical rhythm + side gutter + optional centred content width.
	 * @type {{ pad?: 'none' | 'sm' | 'lg' | 'xl', max?: number, bleed?: boolean, dark?: boolean, id?: string, children: import('svelte').Snippet }}
	 */
	let { pad = 'lg', max, bleed = false, dark = false, id, children } = $props();
</script>

<section {id} class={pad} class:bleed class:dark style:--max={max ? `${max}px` : null}>
	{@render children()}
</section>

<style>
	section {
		position: relative;
		padding-inline: max(var(--gutter), (100% - var(--max, 100%)) / 2);
	}
	.lg {
		padding-block: 8rem;
	}
	.sm {
		padding-block: 4rem;
	}
	.xl {
		padding-block: 10rem;
	}
	.bleed {
		padding-inline: 0;
	}
	.dark {
		background: var(--black);
		color: #fff;
	}
	.dark :global(p) {
		opacity: 0.8;
	}

	@media (max-width: 991px) {
		section:not(.none) {
			padding-block: 3rem;
		}
		section {
			padding-inline: var(--gutter);
		}
		.bleed {
			padding-inline: 0;
		}
	}
</style>
