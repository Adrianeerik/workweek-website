<script>
	/** @type {{ image: string, title: string, text: string }} */
	let { image, title, text } = $props();
</script>

<div class="step">
	<div class="media"><img src={image} width="92" height="92" alt="" loading="lazy" /></div>
	<div class="text">
		<h3>{title}</h3>
		<p>{text}</p>
	</div>
</div>

<style>
	.step {
		display: flex;
		margin-bottom: 2rem;
	}
	.media,
	.text {
		flex: 0 50%;
		overflow: hidden;
	}
	.media {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 3rem;
	}
	img {
		object-fit: contain;
		filter: var(--art-filter);
		mix-blend-mode: var(--art-blend);
	}
	.text {
		padding-block: 2rem;
	}
	/* Original margins collapsed into the 2rem wrapper margin. */
	h3 {
		margin-top: 0;
	}
	p {
		margin-bottom: 0;
	}

	@media (min-width: 1440px) {
		.media,
		.text {
			overflow: visible;
		}
	}
	@media (max-width: 991px) {
		.step {
			flex-direction: column;
		}
		.media {
			margin: 0 0 1.5rem;
		}
		.text {
			flex: none;
			margin-block: -2rem;
			text-align: center;
		}
	}
	@media (max-width: 767px) {
		.media {
			margin-bottom: 1rem;
		}
		img {
			width: 64px;
		}
	}
</style>
