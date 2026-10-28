<script>
	/** @type {{ text: string, repeat?: number }} */
	let { text, repeat = 4 } = $props();

	/** @type {HTMLDivElement} */
	let el;
	// Scroll-linked: slides from 10vw to -20vw as the band travels from the bottom to the top of the viewport.
	let x = $state(20);

	function update() {
		const progress = Math.min(1, Math.max(0, 1 - el.getBoundingClientRect().top / innerHeight));
		x = 10 - 30 * progress;
	}

	$effect(update);
</script>

<svelte:window onscroll={update} onresize={update} />

<div bind:this={el}>
	<p style:translate="{x}vw 0">{Array(repeat).fill(text).join(' • ')} •</p>
</div>

<style>
	div {
		display: flex;
		overflow: hidden;
		padding-block: 1rem;
		background: var(--gray);
	}
	p {
		margin: 0;
		opacity: 0.6;
		color: var(--cream);
		font-size: 18px;
		font-weight: 600;
		line-height: 1.2;
		letter-spacing: 2px;
		text-transform: uppercase;
		white-space: nowrap;
		transition: translate 0.3s ease-out;
	}
</style>
