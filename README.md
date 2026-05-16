# @soar-icons/core

Raw SVG assets and a manifest. Framework-agnostic. Use this from anything that isn't React or Flutter (Vue, Svelte, plain HTML, web components, React Native).

## Install

This package is not published to npm. Install via the Git monorepo.

**Workspace** (recommended for monorepos):

```jsonc
{
  "dependencies": {
    "@soar-icons/core": "workspace:*"
  }
}
```

**Git submodule + link**:

```bash
git submodule add https://github.com/soar-design/soar-icons vendor/soar-icons
```

```jsonc
{
  "dependencies": {
    "@soar-icons/core": "link:./vendor/soar-icons/packages/core"
  }
}
```

## Usage

### Get an SVG as a string

```js
import { getSvg } from "@soar-icons/core";

const svg = await getSvg("home", "duo");
```

### Import a specific SVG file

```js
import homeSolid from "@soar-icons/core/icons/home/solid.svg";
```

(Requires your bundler to handle SVG imports — Vite, Webpack with `asset/source`, etc.)

### Discover what's available

```js
import { manifest, listIcons, listStyles } from "@soar-icons/core";

listIcons();              // ["home", ...]
listStyles();             // ["line", "solid", "remix", "duo", "flat"]
manifest.icons[0].variants;
```

The full `manifest.json` is also importable:

```js
import manifest from "@soar-icons/core/manifest.json" with { type: "json" };
```

## SVG conventions

Every SVG in this package follows the same rules:

- Paints with `currentColor` for the primary tone.
- For two-tone styles, the secondary tone uses `currentColor` + `fill-opacity="0.4"` (or `stroke-opacity`). One color in, two visible tones out.
- No fixed `width`/`height` on the root `<svg>` — the consumer sets size.
- `viewBox` preserved from the source. It's typically `0 0 14 14` for Flex icons; you don't need to care, since you size the icon yourself.

## Available icons

See [`manifest.json`](./manifest.json) in this package.
