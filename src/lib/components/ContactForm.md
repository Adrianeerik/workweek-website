# ContactForm

Full name, email and message (all required), plus an optional plan picker and a submit button. Styled for dark green backgrounds. Used in the footer, on the contact page and on the pricing page.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `submit` | `string` | `'Talk to Us'` | Button label |
| `plans` | `string[]` | — | Adds a "Plan" dropdown ("Not sure yet" + these options). Pricing page only. |
| `plan` | `string` (bindable) | `''` | Selected plan. Bind it to preselect from outside, e.g. a pricing card's button. |

## Current behaviour
**No backend yet.** On submit, it opens the visitor's email app addressed to `email` in `src/lib/site.js` (info.workweek@gmail.com):
- Subject: `Website inquiry from {name}`
- Body: name, email, plan (if chosen), then the message.

A note under the button says this, and gives the address for visitors who don't use an email app.

## Adding a real endpoint later
1. Create a form action in `src/routes/contact/+page.server.js`. On Cloudflare this runs as a Worker. Send the email with Resend or similar.
2. Delete the `send` handler and give the `<form>` `method="POST" action="/contact"`.
3. Optionally add `use:enhance` from `$app/forms` so submitting doesn't reload the page.
4. Set `export const prerender = false` for that route.
5. Remove the "This opens your email app" note.

## What it replaces
`.w-form`, `.text-field`, `.textarea`, `.w-form-done/.w-form-fail`. Labels are visible above each field. Each instance gets unique IDs via `$props.id()`.
