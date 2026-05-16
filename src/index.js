import { promises as fs } from "node:fs";
import path from "node:path";
import url from "node:url";
import manifest from "../manifest.json" with { type: "json" };

const __filename = url.fileURLToPath(import.meta.url);
const PKG_ROOT = path.resolve(path.dirname(__filename), "..");

export { manifest };

export function listIcons() {
  return manifest.icons.map((i) => i.name);
}

export function listStyles() {
  return manifest.styles;
}

export async function getSvg(name, style = manifest.defaultStyle) {
  const svgPath = path.join(PKG_ROOT, "icons", name, `${style}.svg`);
  return fs.readFile(svgPath, "utf8");
}
