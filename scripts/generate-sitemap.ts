// Gera public/sitemap.xml com domínio canônico e todas as rotas dinâmicas.
// Roda em `predev` e `prebuild`.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { packages } from "../src/data/packages";
import { chalets } from "../src/data/chalets";

const BASE_URL = "https://www.minhagloria.com.br";

interface Entry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const staticEntries: Entry[] = [
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
];

const chaleEntries: Entry[] = chalets.map((c) => ({
  path: `/acomodacoes/${c.slug}`,
  changefreq: "monthly",
  priority: "0.8",
}));

const pacoteEntries: Entry[] = packages.map((p) => ({
  path: `/ofertas/${p.slug}`,
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
