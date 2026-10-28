<script>
	import Button from './Button.svelte';
	import TestimonialStack from './TestimonialStack.svelte';
	import { testimonials } from '#lib/data/testimonials.js';
</script>

<section>
	<div class="copy">
		<h1>Looking for a new look for your website?</h1>
		<p>We got you.</p>
		<div><Button href="#options">Get Started</Button></div>
		<div class="review" data-reveal="fade" style:--delay="800ms">
			<TestimonialStack items={testimonials} />
		</div>
	</div>
	<div class="crop">
		<img src="/images/hero-1.webp" srcset="/images/hero-1-500.webp 500w, /images/hero-1.webp 576w" sizes="(max-width: 991px) 100vw, 33vw" alt="" data-reveal="shrink" style:--delay="400ms" />
	</div>
	<div class="crop">
		<img src="/images/hero-2.webp" srcset="/images/hero-2-500.webp 500w, /images/hero-2.webp 576w" sizes="(max-width: 991px) 100vw, 33vw" alt="" data-reveal="shrink" style:--delay="1000ms" />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 67% 33%;
		min-height: 80vh; /* grows with the testimonial stack instead of squeezing it */
		overflow-x: clip; /* a testimonial card flying out can't widen the page */
	}
	.copy {
		grid-row: span 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 6rem 7vw 6rem var(--gutter);
	}
	h1 {
		margin-bottom: 1rem;
	}
	p {
		margin-bottom: 2rem;
		color: var(--leaf);
		font-size: 24px;
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0;
	}
	.crop {
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.review {
		width: 100%;
		max-width: 520px;
		margin-top: 4rem;
	}

	@media (min-width: 1440px) {
		.copy {
			padding-right: 10vw;
		}
	}
	@media (max-width: 991px) {
		section {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			min-height: 0;
		}
		.copy {
			grid-row: auto;
			padding: 6rem var(--gutter) 3rem;
		}
		img {
			height: 20vh;
		}
		.crop:nth-child(2) img {
			object-position: 50% 60%;
		}
		.review {
			max-width: none;
			margin-top: 3rem;
		}
	}
</style>
