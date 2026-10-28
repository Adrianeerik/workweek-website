<script>
	/** @type {{ icon: string, title: string, text: string }} */
	let { icon, title, text } = $props();
</script>

<article>
	<img src={icon} width="64" height="64" alt="" loading="lazy" />
	<h3>{title}</h3>
	<p>{text}</p>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-self: start;
		text-align: center;
	}
	img {
		object-fit: none;
		margin-bottom: 1rem;
		filter: var(--art-filter);
		mix-blend-mode: var(--art-blend);
	}
	h3 {
		margin-bottom: 1rem;
	}
	h3,
	p {
		width: 70%;
	}
	p {
		margin: 0;
	}
</style>
