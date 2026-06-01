// Gera public/sitemap.xml em Node puro (sem Bun/tsx).
// Roda em `predev` e `prebuild`.

import { writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const BASE_URL = "https://www.minhagloria.com.br";

const staticEntries = [
  { path: "/",                 changefreq: "weekly",  priority: "1.0" },
  { path: "/sobre",            changefreq: "monthly", priority: "0.7" },
  { path: "/acomodacoes",      changefreq: "weekly",  priority: "0.9" },
  { path: "/experiencias",     changefreq: "monthly", priority: "0.8" },
  { path: "/gastronomia",      changefreq: "monthly", priority: "0.8" },
  { path: "/ofertas",          changefreq: "weekly",  priority: "0.9" },
  { path: "/regiao",           changefreq: "monthly", priority: "0.6" },
  { path: "/contato",          changefreq: "monthly", priority: "0.7" },
  { path: "/blog",             changefreq: "weekly",  priority: "0.6" },
  { path: "/privacidade",      changefreq: "yearly",  priority: "0.3" },
  { path: "/7-de-setembro",    changefreq: "monthly", priority: "0.6" },
];

function extractSlugs(filePath) {
  const src = readFileSync(resolve(filePath), "utf8");
  const slugs = [];
  const re = /slug:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) slugs.push(m[1]);
  return slugs;
}

const chaleEntries = extractSlugs("src/data/chalets.ts").map((slug) => ({
  path: `/acomodacoes/${slug}`,
  changefreq: "monthly",
  priority: "0.8",
}));

const pacoteEntries = extractSlugs("src/data/packages.ts").map((slug) => ({
  path: `/ofertas/${slug}`,
  changefreq: "weekly",
  priority: "0.8",
}));

const entries = [...staticEntries, ...chaleEntries, ...pacoteEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml gerado (${entries.length} URLs)`);
