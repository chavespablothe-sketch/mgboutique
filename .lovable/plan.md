## Problema

O GitHub Actions usa `npm` em Node 18 (sem Bun instalado), mas o `prebuild` chama `bun scripts/generate-sitemap.ts` → `bun: not found` → exit 127.

## Solução

Remover Bun do pipeline e rodar a geração do sitemap em Node puro, sem dependências extras (sem `tsx`, sem `ts-node`).

### 1. Converter `scripts/generate-sitemap.ts` → `scripts/generate-sitemap.mjs`

Node executa `.mjs` nativamente. O obstáculo é que hoje o script importa `src/data/packages.ts` e `src/data/chalets.ts` (TypeScript). Para evitar runtime de TS:

- Ler os arquivos `.ts` como texto e extrair os `slug: "..."` via regex simples.
- Funciona porque ambos arquivos seguem o padrão `slug: "x"` (um por item) e não precisamos de tipos, só da lista de slugs para montar URLs.

Vantagem: zero dependências novas, zero Bun, zero TS no Node.

### 2. Atualizar `package.json`

- `predev`: `node scripts/generate-sitemap.mjs`
- `prebuild`: `node scripts/generate-sitemap.mjs`
- Remover `tsx` das devDependencies se ainda estiver lá.

### 3. Apagar `scripts/generate-sitemap.ts`

Substituído pelo `.mjs`.

### 4. Workflow `.github/workflows/deploy.yml`

Já usa `npm install` + `npm run build` em Node 18 — nenhuma mudança necessária. O `prebuild` agora roda com `node` que já existe no runner.

## Arquivos alterados

- **criar** `scripts/generate-sitemap.mjs`
- **deletar** `scripts/generate-sitemap.ts`
- **editar** `package.json` (scripts `predev`/`prebuild`)

## Verificação

Após implementar: rodar `node scripts/generate-sitemap.mjs` localmente (no sandbox) e conferir que `public/sitemap.xml` é gerado com o mesmo número de URLs de hoje (~31).
