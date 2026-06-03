# @soar-icons/core

Raw SVG assets and a manifest. Framework-agnostic. Use this from anything that isn't React or Flutter (Vue, Svelte, plain HTML, web components, React Native).

## Install

```bash
pnpm add github:soar-design/soar-icons-core
# or
npm install github:soar-design/soar-icons-core
# or
yarn add github:soar-design/soar-icons-core
```

## Usage

### Get an SVG as a string

```js
import { getSvg } from "@soar-icons/core";

const svg = await getSvg("home-01", "bulk");
```

### Import a specific SVG file

```js
import homeSolid from "@soar-icons/core/icons/home-01/solid.svg";
```

(Requires your bundler to handle SVG imports — Vite, Webpack with `asset/source`, etc.)

### Discover what's available

```js
import { manifest, listIcons, listStyles } from "@soar-icons/core";

listIcons();              // ["a-arrow-down", "abacus", "home-01", ...]
listStyles();             // ["line", "solid", "bulk"]
manifest.icons[0];
```

The full `manifest.json` is also importable:

```js
import manifest from "@soar-icons/core/manifest.json" with { type: "json" };
```

## SVG conventions

Every SVG in this package follows the same rules:

- 24×24 `viewBox`.
- Paints with `currentColor` for the primary tone.
- For `bulk`, the secondary tone uses `currentColor` + `opacity="0.4"`. One color in, two visible tones out.
- No fixed `width`/`height` on the root `<svg>` — the consumer sets size.
