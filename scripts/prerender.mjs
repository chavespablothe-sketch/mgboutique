// Run react-snap using a modern Chromium (via puppeteer),
// because react-snap bundles Puppeteer 1.x / Chromium ~72,
// which throws "Unexpected token '?'" on optional chaining / nullish coalescing
// emitted by modern Vite/SWC bundles.
import { run } from "react-snap";
import puppeteer from "puppeteer";
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "../package.json"), "utf8"),
);

const execPath = await puppeteer.executablePath();
const distDir = resolve(__dirname, "../dist");

const config = {
  ...pkg.reactSnap,
  puppeteerExecutablePath: execPath,
};

function countHtml(dir) {
  let n = 0;
  if (!existsSync(dir)) return 0;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) n += countHtml(full);
    else if (entry.endsWith(".html")) n += 1;
  }
  return n;
}

try {
  await run(config);
  console.log("[prerender] react-snap completed");
} catch (err) {
  // Hydration errors (#418/#423) inside puppeteer can make react-snap reject
  // even though many pages were saved. Treat as non-fatal as long as at
  // least the home page snapshot was written — better partial SEO than none.
  const homeOk = existsSync(resolve(distDir, "index.html"));
  const total = countHtml(distDir);
  console.warn(
    `[prerender] react-snap finished with errors (saved ${total} html files):`,
    err?.message || err,
  );
  if (!homeOk) {
    console.error("[prerender] no index.html generated — failing build");
    process.exit(1);
  }
  console.log("[prerender] continuing build with partial prerender");
}

