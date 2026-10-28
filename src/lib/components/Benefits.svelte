<script>
	const items = [
		'Easily accomodate your customers',
		'Look more professional',
		'Have a special place to demonstrate services',
		'Create a solid foundation for your branding'
	];
	const delays = [100, 300, 600, 800];
</script>

<section>
	<div class="copy">
		<h2>Why do you need a new website?</h2>
		<ul>
			{#each items as item, i}
				<li><span data-reveal="down" style:--delay="{delays[i]}ms">{item}</span></li>
			{/each}
		</ul>
	</div>
	<div class="crop">
		<img
			src="/images/why-1080.webp"
			srcset="/images/why-500.webp 500w, /images/why-800.webp 800w, /images/why-1080.webp 1080w"
			sizes="(max-width: 991px) 100vw, 30vw"
			alt=""
			loading="lazy"
			data-reveal="shrink"
			style:--delay="400ms"
		/>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 70% 30%;
	}
	.copy {
		width: 100%;
		max-width: calc(600px + 2 * var(--gutter));
		margin-inline: auto;
		padding: 5rem var(--gutter);
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		display: flex;
		align-items: center;
		overflow: hidden;
		margin-bottom: 1.5rem;
		color: color-mix(in srgb, var(--leaf) 70%, transparent);
		font-size: 24px;
		line-height: 1;
	}
	li:last-child {
		margin-bottom: 0;
	}
	li::before {
		content: '';
		flex: none;
		width: 24px;
		height: 24px;
		margin-right: 2rem;
		background: var(--text);
		mask: url('/images/check.png') center / contain no-repeat;
	}
	.crop {
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 991px) {
		section {
			grid-template-columns: 1fr;
			grid-template-rows: auto 15vh;
		}
		.copy {
			max-width: none;
		}
		li {
			font-size: 20px;
		}
		li::before {
			margin-right: 1rem;
		}
	}
	@media (max-width: 767px) {
		li {
			margin-bottom: 1rem;
		}
	}
</style>
