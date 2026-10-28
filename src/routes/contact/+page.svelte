<script>
	import Seo from '#lib/components/Seo.svelte';
	import ContactSplit from '#lib/components/ContactSplit.svelte';
	import { email, mailto, calendly } from '#lib/site.js';

	const steps = [
		{ title: 'Tell us about your business', text: 'Your name, email and a few lines about what you need.' },
		{ title: 'We get in touch', text: 'We reply by email and set up a strategy call if it helps.' },
		{ title: 'Get your plan and quote', text: 'A clear scope, timeline and price before any work starts.' }
	];
</script>

<Seo
	title="Contact Us | Workweek Web Design"
	description="Tell us about your business and the website you need. Send the Workweek team a message or book a strategy call."
	type="ContactPage"
	name="Contact"
/>

<div class="page">
	<ContactSplit
		light
		h1
		heading="Let’s build your website"
		text="Fill out the form and we’ll get back to you as soon as possible."
		links={[
			{ href: mailto, label: email },
			{ href: 'mailto:krischanb.workweek@gmail.com', label: 'krischanb.workweek@gmail.com' },
			{ href: 'https://facebook.com/mmiixxvi', label: 'Krischan Balasbas - Facebook' }
		]}
		note="Prefer to talk it through? Schedule a call with us:"
		cta={{ href: calendly, label: 'Schedule a call' }}
		submit="Send Message"
	>
		<h2>What happens next</h2>
		<ol>
			{#each steps as { title, text }}
				<li><b>{title}</b>{text}</li>
			{/each}
		</ol>
		<h2>Or contact us at</h2>
	</ContactSplit>
</div>

<style>
	.page {
		display: grid;
		min-height: 95vh;
	}
	h2 {
		margin: 1rem 0 1rem;
		opacity: 0.6;
		font-size: 13px;
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	ol {
		margin: 0 0 2rem;
		padding: 0;
		list-style: none;
		counter-reset: step;
	}
	li {
		position: relative;
		margin-bottom: 1rem;
		padding-left: 3rem;
		opacity: 0.8;
		font-size: 16px;
		line-height: 1.4;
		letter-spacing: -0.5px;
		counter-increment: step;
	}
	li::before {
		content: counter(step);
		position: absolute;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: var(--sand);
		color: var(--green-deep);
		font-size: 14px;
		font-weight: 600;
	}
	b {
		display: block;
		color: var(--leaf);
		font-weight: 500;
	}
</style>
