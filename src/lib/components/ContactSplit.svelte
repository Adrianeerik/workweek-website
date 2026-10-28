<script>
	import Button from './Button.svelte';
	import ContactForm from './ContactForm.svelte';

	/**
	 * 60/40 band: copy + links on the left, contact form on the right.
	 * @type {{
	 *   heading: string, text: string, links: { href: string, label: string }[],
	 *   note?: string, cta?: { href: string, label: string },
	 *   light?: boolean, h1?: boolean, submit?: string, plans?: string[], plan?: string,
	 *   children?: import('svelte').Snippet
	 * }}
	 * `children` renders under the text. `plans`/`plan` pass through to ContactForm (plan picker).
	 */
	let { heading, text, links, note, cta, light = false, h1 = false, submit, plans, plan = $bindable(''), children } = $props();
</script>

<div class="split" class:light>
	<div class="copy">
		<svelte:element this={h1 ? 'h1' : 'h2'}>{heading}</svelte:element>
		<p>{@html text}</p>
		{@render children?.()}
		{#each links as { href, label }}
			<a {href} target={href.startsWith('http') ? '_blank' : null}>{label}</a>
		{/each}
		{#if note}<p>{note}</p>{/if}
		{#if cta}<div><Button href={cta.href} light={!light}>{cta.label}</Button></div>{/if}
	</div>
	<div class="form"><ContactForm {submit} {plans} bind:plan /></div>
</div>

<style>
	.split {
		display: grid;
		grid-template-columns: 60% 40%;
	}
	.copy {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 3rem 4rem 3rem var(--gutter);
		background: var(--green-deep);
		color: #fff;
	}
	.light .copy {
		background: var(--bg);
		color: var(--text);
	}
	h1 {
		margin-top: 0;
		font-size: 48px;
		line-height: 1.2;
	}
	.copy p {
		opacity: 0.8;
	}
	.light p {
		opacity: 0.7;
	}
	a {
		display: block;
		margin-bottom: 1.5rem;
		opacity: 0.7;
		color: var(--cream);
		letter-spacing: -1px;
	}
	a:hover {
		opacity: 1;
	}
	.light a {
		margin-bottom: 0.5rem;
		color: inherit;
	}
	.light a:last-of-type {
		margin-bottom: 1.5rem;
	}
	.form {
		display: flex;
		align-items: center;
		padding-inline: 8vw;
		background: var(--green-dark);
	}

	@media (max-width: 991px) {
		.copy {
			padding-block: 4vh;
		}
		h1 {
			font-size: 56px;
		}
	}
	@media (max-width: 767px) {
		.split {
			grid-template-columns: 1fr;
		}
		.light .copy {
			padding-block: 10vh 8vh;
		}
		h1 {
			font-size: 36px;
		}
		a {
			margin-bottom: 1rem;
			font-size: 16px;
		}
	}
</style>
