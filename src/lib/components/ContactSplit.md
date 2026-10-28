# ContactSplit

A 60/40 band: heading, text and contact links on the left, `ContactForm` on the right. Used in the footer (dark) and on the contact page (light).

## Props
| Prop | Type | Notes |
|---|---|---|
| `heading` | `string` | |
| `h1` | `boolean` | Render the heading as `<h1>` (contact page). Default `<h2>`. |
| `text` | `string` | Trusted HTML (allows `<br />`). |
| `links` | `{ href, label }[]` | Email, social, etc. `http` links open in a new tab. |
| `note` | `string?` | Extra paragraph under the links. |
| `cta` | `{ href, label }?` | Optional button (e.g. "Schedule a call"). Sand on dark, brown on light. |
| `light` | `boolean` | Cream left side with dark text (contact page). |
| `submit` | `string?` | Passed to ContactForm. |
| `plans` | `string[]?` | Passed to ContactForm: adds the plan picker. |
| `plan` | `string` (bindable) | Selected plan, passed to ContactForm. |
| children | snippet | Extra content under `text` (e.g. the contact page's "what happens next" steps). |

## Usage
```svelte
<ContactSplit heading="Ready for a makeover?" text="Fill out the form…" links={[{ href: mailto, label: email }]} />
```

## What it replaces
`.footer-grid`, `.contact-grid`, `.bg-green1/2`, `.bg-white`, `.container.footer`, `.container.contact-copy`, `.label`, `.label.inverted`. Stacks to one column at ≤767px.
