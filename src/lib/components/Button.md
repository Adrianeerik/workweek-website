# Button

An uppercase block button. Renders `<a>` when you pass `href`, otherwise `<button>`. External links open in a new tab automatically.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `href` | `string` | — | Makes it a link. |
| `light` | `boolean` | `false` | Sand background, green text (for dark sections). Default is brown/cream. |
| `full` | `boolean` | `false` | 100% width, centred text. |
| `small` | `boolean` | `false` | 14px text (pricing cards). |
| `type` | `'button' \| 'submit'` | `'button'` | Only used for `<button>`. |
| …rest | | | Any other attribute (`onclick`, `aria-*`) goes on the `<a>`/`<button>`. |

## Usage
```svelte
<Button href="/pricing" light>plans &amp; pricing</Button>
<Button type="submit" light full>Send</Button>
```

## What it replaces
`.button`, `.button.inverted`, `.button.full`, `.full-width`, `.w-button`. Hover (opacity 0.8) and press (scale 0.95) match the original. Goes full width on tablet and below, like the original.
