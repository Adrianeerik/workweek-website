<section>
	<div class="copy">
		<h2>Our Mission</h2>
		<p>
			We at the Workweek think that a website shouldn’t pose as a challenge or a hurdle in your
			business.<br /><br />
			Instead, it should be used as a leverage to enhance, if not completely elevate your business to
			a new level.<br /><br />
			Our aim is to give Filipino brands a distinctive digital platform that helps them express
			themselves as an entity and leave an impression to your audience.<br /><br />
			Businesses need a platform to express, impress, and attract qualified customers, and the best
			tool to do so is a website made with love.<br /><br />
			We know you’re tired of the salesy world out there, so choose the agency that will help you
			achieve the look you’re going for.
		</p>
	</div>
	<div class="crop">
		<img src="/images/mission-1.webp" srcset="/images/mission-1-500.webp 500w, /images/mission-1.webp 576w" sizes="(max-width: 991px) 100vw, 40vw" alt="" loading="lazy" data-reveal="shrink" style:--delay="400ms" />
	</div>
	<div class="crop">
		<img src="/images/mission-2.webp" srcset="/images/mission-2-500.webp 500w, /images/mission-2.webp 576w" sizes="(max-width: 991px) 100vw, 40vw" alt="" loading="lazy" data-reveal="shrink" style:--delay="1000ms" />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 40% 60%;
		grid-template-areas: 'a copy' 'b copy';
	}
	.copy {
		grid-area: copy;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 4rem 0 var(--gutter);
	}
	.crop {
		overflow: hidden;
	}
	.crop:nth-child(2) {
		grid-area: a;
	}
	.crop:nth-child(3) {
		grid-area: b;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 1440px) {
		.copy {
			padding-right: 9vw;
		}
	}
	@media (max-width: 991px) {
		section {
			grid-template-columns: 1fr;
			grid-template-areas: 'copy' 'a' 'b';
		}
		.copy {
			padding-inline: var(--gutter);
		}
		img {
			height: 20vh;
		}
	}
</style>
