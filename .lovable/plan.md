## Diagnóstico

O site é um SPA Vite + React. Hoje o `index.html` servido tem só um `<div id="root"></div>` — Google até consegue renderizar JS, mas LLMs (ChatGPT, Perplexity, Claude) **não executam JavaScript** e veem uma página vazia. Por isso "as LLMs falam isso do site".

Além disso há 2 problemas críticos de SEO:

1. **Domínio errado no sitemap/robots**: `public/sitemap.xml` e `public/robots.txt` apontam para `mgboutique.lovable.app`, mas o domínio canônico (usado no `SEO.tsx`) é `www.minhagloria.com.br`. Google está recebendo sinais conflitantes.
2. **Rotas antigas só redirecionam client-side** (`/tarifas`, `/pacotes`, `/chales`, `/lazer`, `/tarifas/:slug`, `/pacotes/:slug`). O Google ainda indexa essas URLs porque o servidor responde **200 OK** em vez de **301 Moved Permanently**. O link juice das URLs antigas não é transferido.

## Solução

### 1. Pré-renderização estática (resolve LLMs + melhora SEO)

Adicionar `vite-plugin-prerender` (ou `react-snap`) para gerar HTML estático de cada rota no `vite build`. Cada rota (`/`, `/sobre`, `/acomodacoes`, `/ofertas`, `/ofertas/corpus-christi-2026`, etc.) vira um arquivo `.html` real com conteúdo já renderizado. Hostinger serve esses HTMLs antes do JS hidratar.

Resultado: LLMs e crawlers veem todo o texto, headings, meta tags e JSON-LD imediatamente. O SPA continua funcionando igual para o usuário (hidratação normal).

Lista de rotas a pré-renderizar é derivada de `App.tsx` + `src/data/packages.ts` + `src/data/chalets.ts`.

### 2. Redirects 301 server-side no `.htaccess`

Adicionar regras **antes** do fallback SPA em `public/.htaccess`:

```
Redirect 301 /tarifas /ofertas
Redirect 301 /pacotes /ofertas
Redirect 301 /chales /acomodacoes
Redirect 301 /lazer /experiencias
RedirectMatch 301 ^/tarifas/(.*)$ /ofertas/$1
RedirectMatch 301 ^/pacotes/(.*)$ /ofertas/$1
RedirectMatch 301 ^/acomodacoes/chale-master$ /acomodacoes/chale-romantico
```

Isso transfere o ranking das URLs antigas para as novas e remove as antigas do índice do Google ao longo de algumas semanas.

### 3. Corrigir domínio em sitemap e robots

- `public/sitemap.xml`: trocar todas as URLs `mgboutique.lovable.app` → `www.minhagloria.com.br` e **incluir uma URL por pacote** (`/ofertas/<slug>`) lendo de `src/data/packages.ts`.
- `public/robots.txt`: atualizar `Sitemap:` para `https://www.minhagloria.com.br/sitemap.xml`.
- Gerar o sitemap via `scripts/generate-sitemap.ts` rodado em `prebuild`, para nunca mais ficar desatualizado quando um pacote/chalé novo é adicionado.

### 4. Submeter no Google Search Console

Após publicar:
- Reenviar `sitemap.xml` no Search Console.
- Pedir reindexação das páginas principais (`/`, `/ofertas`, `/acomodacoes`).
- O Google detecta os 301 nas próximas crawls e remove as URLs antigas naturalmente.

## Detalhes técnicos

- **Plugin**: `vite-plugin-prerender` usa Puppeteer headless durante o build. Adiciona ~30s ao `vite build`. Alternativa mais leve: `react-snap` (também via Puppeteer).
- **HelmetProvider** já está configurado — meta tags por rota serão capturadas no HTML estático sem mudanças.
- **Rotas dinâmicas**: o script de pré-render itera sobre `packages` e `chalets` (já exportados de `src/data/`) para gerar HTMLs de cada pacote/chalé.
- **`.htaccess`**: regras `Redirect`/`RedirectMatch` rodam antes do `RewriteRule` SPA, então funcionam sem conflito. As `<Route Navigate>` no React Router viram redundância segura (caso alguém acesse via link interno).
- **Sitemap dinâmico**: script TS lê `packages.ts`/`chalets.ts`, gera `<url>` para cada slug. Roda em `predev` + `prebuild`.

## Arquivos afetados

- `package.json` — adicionar `vite-plugin-prerender` + scripts `predev`/`prebuild`
- `vite.config.ts` — registrar plugin de pré-render
- `public/.htaccess` — adicionar 7 regras de redirect 301 no topo
- `public/robots.txt` — corrigir URL do sitemap
- `public/sitemap.xml` — passa a ser gerado por script (substituído)
- `scripts/generate-sitemap.ts` — novo, gera sitemap com domínio correto + pacotes + chalés
