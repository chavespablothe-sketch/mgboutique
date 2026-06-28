// Run react-snap using a modern Chromium (via puppeteer),
// because react-snap bundles Puppeteer 1.x / Chromium ~72,
// which throws "Unexpected token '?'" on optional chaining / nullish coalescing
// emitted by modern Vite/SWC bundles.
import { run } from "react-snap";
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "../package.json"), "utf8"),
);

const execPath = await puppeteer.executablePath();
const distDir = resolve(__dirname, "../dist");
const assetOrigin = "https://mgboutique.lovable.app";
const assetPathPrefix = "/__l5e/assets-v1/";
const textFileExtensions = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".xml",
  ".txt",
  ".webmanifest",
]);

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

function shouldPatchFile(file) {
  return [...textFileExtensions].some((ext) => file.endsWith(ext));
}

function makeLovableAssetUrlsAbsolute(dir) {
  let patched = 0;
  if (!existsSync(dir)) return patched;

  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);

    if (st.isDirectory()) {
      patched += makeLovableAssetUrlsAbsolute(full);
      continue;
    }

    if (!shouldPatchFile(full)) continue;

    const before = readFileSync(full, "utf8");
    const after = before
      .replaceAll(`"${assetPathPrefix}`, `"${assetOrigin}${assetPathPrefix}`)
      .replaceAll(`'${assetPathPrefix}`, `'${assetOrigin}${assetPathPrefix}`)
      .replaceAll(`(${assetPathPrefix}`, `(${assetOrigin}${assetPathPrefix}`)
      .replaceAll(`&quot;${assetPathPrefix}`, `&quot;${assetOrigin}${assetPathPrefix}`)
      .replaceAll(`&#x27;${assetPathPrefix}`, `&#x27;${assetOrigin}${assetPathPrefix}`)
      .replaceAll(`https://minhagloria.com.br${assetPathPrefix}`, `${assetOrigin}${assetPathPrefix}`)
      .replaceAll(`https://www.minhagloria.com.br${assetPathPrefix}`, `${assetOrigin}${assetPathPrefix}`);

    if (after !== before) {
      writeFileSync(full, after);
      patched += 1;
    }
  }

  return patched;
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

const patchedAssets = makeLovableAssetUrlsAbsolute(distDir);
console.log(`[postbuild] normalized Lovable asset URLs in ${patchedAssets} file(s)`);

