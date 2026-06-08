// Run react-snap using a modern Chromium (via puppeteer),
// because react-snap bundles Puppeteer 1.x / Chromium ~72,
// which throws "Unexpected token '?'" on optional chaining / nullish coalescing
// emitted by modern Vite/SWC bundles.
import { run } from "react-snap";
import puppeteer from "puppeteer";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "../package.json"), "utf8"),
);

const config = {
  ...pkg.reactSnap,
  puppeteerExecutablePath: puppeteer.executablePath(),
};

run(config).catch((err) => {
  console.error("[prerender] react-snap failed:", err);
  process.exit(1);
});
