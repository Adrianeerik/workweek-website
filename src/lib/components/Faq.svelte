<script>
	/** @type {{ items: { question: string, answer: string }[] }} */
	let { items } = $props();
</script>

<!-- Native <details>: zero JS. Collapsed by default, like the original. -->
{#each items as { question, answer }}
	<details>
		<summary>{question}</summary>
		<p>{@html answer}</p>
	</details>
{/each}

<style>
	details {
		margin-top: 0.5rem;
		cursor: pointer;
		transition: all 200ms ease;
		interpolate-size: allow-keywords;
	}
	details:hover {
		opacity: 0.6;
	}
	details:active {
		transform: scale(0.99);
	}
	/* Animated height where supported (Chromium); instant toggle elsewhere. */
	details::details-content {
		height: 0;
		overflow: hidden;
		transition:
			height 700ms var(--quart),
			content-visibility 700ms allow-discrete;
	}
	details[open]::details-content {
		height: auto;
	}
	summary {
		margin-bottom: 1rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--text);
		list-style: none;
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: -1px;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary,
	p {
		color: var(--text-soft);
	}
	p {
		margin: 0;
		opacity: 1;
		font-size: 17px;
	}
	p :global(a) {
		text-decoration: underline;
	}

	@media (max-width: 767px) {
		summary {
			padding-top: 1rem;
		}
	}
</style>
