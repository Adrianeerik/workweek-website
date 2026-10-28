# Marquee

The grey band with scrolling uppercase text. Its position is tied to scroll: as the band travels up the viewport, the text slides from +10vw to −20vw, matching Webflow's "banner-mid" interaction.

## Props
| Prop | Type | Default |
|---|---|---|
| `text` | `string` | — |
| `repeat` | `number` | `4` |

## Usage
```svelte
<Marquee text="Workweek development • filipino developers for filipino businesses" />
```

## What it replaces
`.banner.mid`, `.banner-long`, interaction a-29.
