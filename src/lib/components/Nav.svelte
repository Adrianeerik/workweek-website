<script>
	import { fade } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { nav, email, mailto } from '#lib/site.js';

	let open = $state(false);
	afterNavigate(() => (open = false));

	// Light/dark toggle. Until the visitor picks one, the theme follows the OS (see app.css / app.html).
	let dark = $state(false);
	$effect(() => {
		const os = matchMedia('(prefers-color-scheme: dark)');
		const sync = () => {
			const chosen = document.documentElement.dataset.theme;
			dark = chosen ? chosen === 'dark' : os.matches;
		};
		sync();
		os.addEventListener('change', sync);
		return () => os.removeEventListener('change', sync);
	});

	function toggleTheme() {
		dark = !dark;
		const theme = dark ? 'dark' : 'light';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {}
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<button class="menu" class:open aria-label="Menu" aria-expanded={open} onclick={() => (open = !open)}>
	<span></span><span></span><span></span>
</button>

<button class="theme" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onclick={toggleTheme}>
	{#if dark}
		<!-- sun -->
		<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
	{:else}
		<!-- moon -->
		<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" /></svg>
	{/if}
</button>

{#if open}
	<nav in:fade={{ duration: 400, easing: quartOut }}>
		{#each nav as { href, label }}
			<a {href} aria-current={page.url.pathname === href ? 'page' : null}>
				<span>{label}</span><span aria-hidden="true">{label}</span>
			</a>
		{/each}
		<a href={mailto} class="email">{email}</a>
	</nav>
{/if}

<style>
	/* Hamburger → X. Lines slide together, then rotate (and the reverse on close). */
	.menu {
		position: fixed;
		z-index: 999;
		top: 1.5rem;
		left: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 32px;
		height: 32px;
		padding: 0.4rem 0.2rem;
		border: 0;
		background: none;
		cursor: pointer;
		transition: all 200ms ease;
	}
	.menu:hover {
		opacity: 0.7;
		transform: scale(1.05);
	}
	.menu:active {
		transform: scale(0.99);
	}
	.menu span {
		height: 2px;
		background: var(--text);
		transition:
			rotate 300ms var(--quart),
			translate 500ms var(--quart) 350ms,
			opacity 0s 300ms;
	}
	.open span {
		transition:
			translate 500ms var(--quart),
			rotate 500ms var(--quint) 350ms,
			opacity 0s 350ms;
	}
	.open span:first-child {
		translate: 0 8px;
		rotate: 45deg;
	}
	.open span:nth-child(2) {
		opacity: 0;
	}
	.open span:last-child {
		translate: 0 -8px;
		rotate: -45deg;
	}

	.theme {
		position: fixed;
		z-index: 999;
		top: 1.25rem;
		right: 1.5rem;
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		padding: 0;
		border: 0;
		border-radius: 50%;
		background: var(--surface);
		box-shadow: 2px 2px 16px -6px var(--shadow);
		color: var(--text);
		cursor: pointer;
		transition: transform 200ms ease;
	}
	.theme:hover {
		transform: scale(1.08);
	}
	.theme:active {
		transform: scale(0.95);
	}
	svg {
		width: 20px;
		height: 20px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	nav {
		position: fixed;
		z-index: 998;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		padding: 20vh 0 15vh var(--gutter);
		background: color-mix(in srgb, var(--bg) 98%, transparent);
	}

	/* Two stacked copies of the label; hover slides the second one into view. */
	a:not(.email) {
		--h: 64px;
		display: block;
		overflow: hidden;
		height: var(--h);
		font-size: var(--h);
		line-height: 1;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	a:not(.email) span {
		display: block;
		transition: translate 1000ms var(--quint);
	}
	a:not(.email):hover span {
		translate: 0 -100%;
		transition: translate 800ms var(--quart);
	}
	.email {
		opacity: 0.7;
		font-size: 16px;
		letter-spacing: -1px;
	}

	@media (max-width: 991px) {
		a:not(.email) {
			--h: 56px;
		}
	}
	@media (max-width: 767px) {
		a:not(.email) {
			--h: 48px;
		}
	}
	@media (max-width: 479px) {
		a:not(.email) {
			--h: 36px;
		}
	}
</style>
