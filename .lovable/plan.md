

## Plano: extrair packs completos via 1 visita à URL correta

### URL oficial (atualizada)
`https://book.omnibees.com/hotelresults?c=11566&q=21954&...&CheckIn=12052026&CheckOut=14052026&...`

### Execução (mínimo absoluto)

**1 navegação** → URL acima.

**1 extract dirigido** com instrução cirúrgica:
> "Para cada um dos 5 quartos (Tradicional, Família, Superior, Premium, Romântico), extraia o nome e TODAS as URLs `media.omnibees.com/Images/21954/RoomTypes/...` no DOM — incluindo `<img src>`, `data-src`, `srcset`, `data-lazy`, `<noscript>` e atributos do slideshow. Retorne JSON: `{ quarto: string, ids: string[] }[]`."

**Meta de contagem** (badges que você confirmou): Tradicional 14 · Família 7 · Superior 26 · Premium 11 · Romântico 12.

**Plano B (só se vier incompleto)**: 1 `act` por categoria que precisar (abre modal) + 1 `extract`. Te aviso antes.

### Edits (depois do extract)

1. **`src/data/chalets.ts`**
   - Substituir `images[]` das 5 categorias pelos packs completos, ordem oficial.
   - Bump resolução: `570x428` → `1024x768` na função `IMG()` (1 linha).
   - Manter capa atual como primeira foto quando possível.

2. **`.lovable/memory/features/chalets.md`**
   - Atualizar tabela de IDs (14/7/26/11/12).
   - Adicionar regra: "contar fotos pelo badge do modal, nunca pelos thumbs da listagem".

### Validação
`console.log` de auditoria no dev (contagem por slug). Você confirma visualmente em `/acomodacoes/{slug}`. Sem browser de validação.

### Custo
1 navegação + 1 extract + 2 edits. Zero screenshots, zero retries especulativos.

