<script>
	import Button from './Button.svelte';
	import { email, mailto } from '#lib/site.js';

	/**
	 * Full name, email and message. Pass `plans` to add a plan picker (pricing page); bind `plan` to preselect one.
	 * @type {{ submit?: string, plans?: string[], plan?: string }}
	 */
	let { submit = 'Talk to Us', plans, plan = $bindable('') } = $props();
	const id = $props.id();

	// No backend yet: hand the message to the visitor's mail app.
	// To switch to a server endpoint later, drop this handler and add method="POST" + action.
	/** @param {SubmitEvent & { currentTarget: HTMLFormElement }} e */
	function send(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get('name')).trim();
		const lines = [`Name: ${name}`, `Email: ${data.get('email')}`];
		if (plan) lines.push(`Plan: ${plan}`);
		const body = `${lines.join('\n')}\n\n${data.get('message')}`;
		const subject = `Website inquiry from ${name}`;
		location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}
</script>

<form onsubmit={send}>
	<label for="{id}-name">Full name</label>
	<input id="{id}-name" name="name" autocomplete="name" maxlength="120" placeholder="Your full name" required />

	<label for="{id}-email">Email</label>
	<input id="{id}-email" type="email" name="email" autocomplete="email" maxlength="256" placeholder="you@company.com" required />

	{#if plans}
		<label for="{id}-plan">Plan</label>
		<select id="{id}-plan" name="plan" bind:value={plan}>
			<option value="">Not sure yet</option>
			{#each plans as option}<option>{option}</option>{/each}
		</select>
	{/if}

	<label for="{id}-message">Message</label>
	<textarea id="{id}-message" name="message" maxlength="5000" placeholder="Tell us about your business and the website you need." required></textarea>

	<Button type="submit" light full>{submit}</Button>
	<small>This opens your email app with your message ready to send. Or email us at <a href={mailto}>{email}</a>.</small>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-block: 3rem;
		color: var(--cream);
	}
	label {
		margin-top: 1rem;
		opacity: 0.8;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	input,
	select,
	textarea {
		height: 48px;
		margin-block: 6px 0;
		padding: 0 1rem;
		border: 1px solid rgb(251 249 248 / 0.6);
		border-radius: 0;
		background: transparent;
		color: var(--cream);
		font-size: 15px;
		line-height: 1.43;
	}
	select {
		appearance: none;
		padding-right: 2.5rem; /* clear the arrow */
		text-overflow: ellipsis;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23fbf9f8' stroke-width='1.5'/%3E%3C/svg%3E") right 1rem center no-repeat;
		cursor: pointer;
	}
	option {
		background: var(--bg);
		color: var(--text);
	}
	textarea {
		height: 18vh;
		min-height: 120px;
		padding-block: 0.75rem;
		resize: vertical;
	}
	::placeholder {
		color: rgb(251 249 248 / 0.45);
	}
	:focus {
		border-color: #3898ec;
		outline: 0;
	}
	form > :global(button) {
		margin-top: 1.5rem;
	}
	small {
		margin-top: 0.75rem;
		opacity: 0.6;
		font-size: 12px;
		line-height: 1.5;
	}
	small a {
		text-decoration: underline;
	}
</style>
