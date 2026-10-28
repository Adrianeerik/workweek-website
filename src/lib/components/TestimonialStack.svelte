<script>
	import Testimonial from './Testimonial.svelte';

	/**
	 * Stacked testimonial cards. "Next" flies the top card off to the side and sends it to the back;
	 * "Previous" flies the back card in from the side onto the top.
	 * @type {{ items: { name: string, role: string, quote: string }[] }}
	 */
	let { items } = $props();

	const SHOWN = 3; // cards visible in the stack
	const MS = 500; // matches the transition below

	let top = $state(0);
	let flying = $state(-1); // card currently off to the side
	let instant = $state(-1); // card being placed without a transition
	let busy = false;

	const n = $derived(items.length);
	const pos = (/** @type {number} */ i) => (i - top + n) % n;
	const wait = (/** @type {number} */ ms) => new Promise((r) => setTimeout(r, ms));
	const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

	async function next() {
		if (busy) return;
		busy = true;
		flying = top;
		top = (top + 1) % n;
		await wait(MS);
		flying = -1;
		busy = false;
	}

	async function prev() {
		if (busy) return;
		busy = true;
		const target = (top - 1 + n) % n;
		// Jump the back card to the side (it's invisible there), then animate it onto the top.
		instant = flying = target;
		await frame();
		instant = -1;
		flying = -1;
		top = target;
		await wait(MS);
		busy = false;
	}
</script>

<section aria-roledescription="carousel" aria-label="Client testimonials">
	<div class="deck">
		{#each items as item, i}
			{@const p = pos(i)}
			<div
				class="card"
				class:hidden={p >= SHOWN}
				class:fly={flying === i}
				class:instant={instant === i}
				style:--p={Math.min(p, SHOWN - 1)}
				style:z-index={flying === i ? n + 1 : n - p}
				aria-hidden={p !== 0}
				inert={p !== 0}
			>
				<Testimonial {...item} />
			</div>
		{/each}
	</div>

	<div class="controls">
		<span aria-live="polite">{top + 1} / {n}</span>
		<button aria-label="Previous testimonial" onclick={prev}>←</button>
		<button aria-label="Next testimonial" onclick={next}>→</button>
	</div>
</section>

<style>
	.deck {
		display: grid;
		padding-bottom: 28px; /* room for the cards peeking out below */
	}
	.card {
		grid-area: 1 / 1;
		display: grid;
		transform: translateY(calc(var(--p) * 14px)) scale(calc(1 - var(--p) * 0.06));
		transform-origin: 50% 100%;
		transition:
			transform 500ms var(--quart),
			opacity 500ms var(--quart);
	}
	.card:not([aria-hidden='false']) :global(figure > *) {
		opacity: 0.35;
	}
	.hidden {
		opacity: 0;
	}
	.fly {
		opacity: 0;
		transform: translate(115%, -10px) rotate(8deg);
	}
	.instant {
		transition: none;
	}

	.controls {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.5rem;
		margin-top: 1.25rem;
	}
	span {
		margin-right: auto;
		opacity: 0.6;
		font-size: 13px;
		letter-spacing: 2px;
	}
	button {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		padding: 0;
		border: 0;
		border-radius: 50%;
		background: var(--btn-bg);
		color: var(--btn-text);
		font-size: 18px;
		cursor: pointer;
		transition: all 250ms ease;
	}
	button:hover {
		opacity: 0.8;
	}
	button:active {
		transform: scale(0.92);
	}

	@media (max-width: 991px) {
		.deck {
			overflow-x: clip; /* keep the flying card from widening the page */
		}
		.card :global(figure) {
			padding: 1rem 1.5rem; /* the section already supplies the gutter */
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.card {
			transition: none;
		}
	}
</style>
