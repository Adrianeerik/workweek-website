<script>
	import { email, mailto } from '#lib/site.js';

	/** @type {{ tall?: boolean }} tall = 40vh band used under the footer form. */
	let { tall = false } = $props();
</script>

<div class:tall>
	<img src="/images/brand.webp" width="99" height="31" alt="The Workweek" loading="lazy" />
	<a href={mailto}>{email}</a>
	<small>All rights reserved. © {new Date().getFullYear()} Workweek.</small>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 4rem var(--gutter);
		background: var(--green);
		color: var(--cream);
	}
	.tall {
		min-height: 40vh;
		padding-block: 0;
	}
	img {
		margin-bottom: 1rem;
	}
	a,
	small {
		margin-bottom: 1.5rem;
		opacity: 0.7;
		font-size: 18px;
		letter-spacing: -1px;
	}
	a:hover {
		opacity: 1;
	}

	@media (min-width: 1440px) {
		div {
			padding-block: calc(4rem + 8vh);
		}
		.tall {
			min-height: 0;
			padding-block: 8vh;
		}
	}
	@media (max-width: 991px) {
		div {
			padding-block: calc(4rem + 4vh);
		}
		.tall {
			padding-block: 4vh;
		}
		img {
			width: 88px;
			object-fit: contain;
		}
	}
	@media (max-width: 767px) {
		a,
		small {
			margin-bottom: 1rem;
			font-size: 16px;
		}
	}
</style>
