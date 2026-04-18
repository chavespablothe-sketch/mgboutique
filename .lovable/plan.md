

## Auditoria: "Chalé Master" → "Chalé Romântico"

### Ocorrências encontradas

Vou rodar busca completa, mas com base no que já conheço:

**`src/data/chalets.ts`** (linha ~93)
- `slug: "chale-master"` → manter ou trocar para `chale-romantico`?
- `name: "Chalé Master"` → `Chalé Romântico`

**Possíveis outros locais:**
- `src/data/packages.ts` (pode mencionar "Chalé Master" em descrições/upgrades)
- Páginas que listam categorias (`AcomodacoesPage`, `ChalePage`, `TarifasPage`)
- SEO/meta descriptions
- Memórias do projeto

### Decisão necessária sobre o slug

O slug atual é `chale-master` → URL: `/acomodacoes/chale-master`

**Opção A (recomendada):** Trocar slug para `chale-romantico`
- ✅ URL coerente com o novo nome
- ⚠️ Quebra links antigos (não há indicação de tráfego SEO consolidado ainda)

**Opção B:** Manter slug `chale-master`, trocar só o nome exibido
- ✅ Não quebra links
- ❌ URL fica inconsistente com a marca

### Plano de execução (após confirmação)

1. **Buscar todas as ocorrências** com `code--search_files` para "Chalé Master", "chale-master" e "Master" (filtrando falsos positivos como "Masterclass" se houver).
2. **Substituir em todos os arquivos**:
   - `src/data/chalets.ts` — `name`, possíveis menções no `longDescription`
   - `src/data/packages.ts` — qualquer menção em features/descrições
   - Páginas (`AcomodacoesPage.tsx`, `ChalePage.tsx`, `TarifasPage.tsx`, etc.)
   - Componentes que listam categorias
3. **Atualizar slug** (se Opção A) e adicionar redirect de `/acomodacoes/chale-master` → `/acomodacoes/chale-romantico` em `App.tsx` para preservar links existentes.
4. **Atualizar memória** se houver referência a "Master" nas regras do projeto.

### Pergunta antes de executar

Preciso confirmar a decisão sobre o slug (Opção A com redirect, ou Opção B mantendo `chale-master` na URL).

