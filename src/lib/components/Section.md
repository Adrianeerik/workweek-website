# Section

A page band. Handles top/bottom spacing, the side gutter and an optional centred content width. Most page sections use it.

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `pad` | `'none' \| 'sm' \| 'lg' \| 'xl'` | `'lg'` | Top/bottom padding: 0 / 4rem / 8rem / 10rem. Anything except `none` becomes 3rem at ≤991px. |
| `max` | `number` | — | Content max-width in px (600, 720, 1280…). Centred with gutters. |
| `bleed` | `boolean` | `false` | No side padding (for full-width grids). |
| `dark` | `boolean` | `false` | Black background (#141414) and white text. |
| `id` | `string` | — | Anchor target, e.g. `#options`. |

## Usage
```svelte
<Section max={600} pad="sm" dark id="options">
  <h2>Heading</h2>
  <p>Copy</p>
</Section>
```

## What it replaces
Webflow `.section`, `.section.small`, `.section.process`, `.container`, `.block-600/720/1280`, `.bg-black`, `.inverted`. One `padding-inline: max(gutter, (100% - max) / 2)` does the job of the old container plus block wrappers.

## Notes
Always `position: relative`, so absolutely positioned children (like the Process track) anchor to it.
