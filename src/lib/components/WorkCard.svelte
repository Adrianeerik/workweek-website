<script>
	/** @type {{ slug: string, name: string, url: string, industry: string, location: string, summary: string, points: string[] }} */
	let { slug, name, url, industry, location, summary, points } = $props();
	const domain = $derived(new URL(url).hostname.replace(/^www\./, ''));
</script>

<article>
	<a class="frame" href={url} target="_blank" rel="noopener" aria-label="Visit {name}">
		<span class="bar" aria-hidden="true"><i></i><i></i><i></i><span>{domain}</span></span>
		<span class="crop">
			<img
				src="/images/work/{slug}.webp"
				srcset="/images/work/{slug}-720.webp 720w, /images/work/{slug}.webp 1440w"
				sizes="(max-width: 767px) 100vw, 45vw"
				width="1440"
				height="900"
				alt="{name} homepage"
				loading="lazy"
				data-reveal="shrink"
			/>
		</span>
	</a>
	<small>{industry} · {location}</small>
	<h3>{name}</h3>
	<p>{summary}</p>
	<ul>
		{#each points as point}<li>{point}</li>{/each}
	</ul>
	<a class="visit" href={url} target="_blank" rel="noopener">Visit {domain} ↗</a>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
	}
	.frame {
		display: block;
		margin-bottom: 1.5rem;
		overflow: hidden;
		border-radius: 8px;
		background: var(--surface);
		box-shadow: 2px 2px 20px -8px var(--shadow);
		transition: box-shadow 300ms ease, transform 300ms var(--quart);
	}
	.frame:hover {
		box-shadow: 4px 8px 32px -8px var(--shadow);
		transform: translateY(-4px);
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 12px;
		background: var(--surface-2);
	}
	.bar i {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: color-mix(in srgb, var(--text) 15%, transparent);
	}
	.bar span {
		margin-left: 10px;
		opacity: 0.6;
		font-size: 12px;
	}
	.crop {
		display: block;
		overflow: hidden;
		aspect-ratio: 16 / 10;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}
	small {
		opacity: 0.6;
		font-size: 13px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	h3 {
		margin: 0.6rem 0 0.8rem;
	}
	p {
		margin-bottom: 1rem;
		font-size: 16px;
	}
	ul {
		margin: 0 0 1.5rem;
		padding: 0;
		list-style: none;
	}
	li {
		display: flex;
		gap: 0.8rem;
		margin-bottom: 0.6rem;
		color: color-mix(in srgb, var(--leaf) 85%, transparent);
		font-size: 16px;
		line-height: 1.35;
		letter-spacing: -0.5px;
	}
	li::before {
		content: '';
		flex: none;
		width: 18px;
		height: 18px;
		margin-top: 1px;
		background: var(--text);
		mask: url('/images/check.png') center / contain no-repeat;
	}
	.visit {
		align-self: flex-start;
		margin-top: auto;
		border-bottom: 1px solid currentColor;
		color: var(--link);
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	.visit:hover {
		opacity: 0.7;
	}

	@media (prefers-reduced-motion: reduce) {
		.frame:hover {
			transform: none;
		}
	}
</style>
