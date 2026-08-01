## Objetivo
Padronizar toda a comunicação da piscina para "climatizada" (nunca "aquecida") em todo o site.

## Mapeamento atual de "aquecida"
1. `index.html` linha 28 — JSON-LD description: "piscina aquecida"
2. `index.html` linha 106 — bloco de conteúdo SEO (noscript/prerender): "piscina aquecida"
3. `src/components/SEO.tsx` linha 78 — amenity do schema: "Piscina aquecida"
4. `src/components/sections/AgostoBanner.tsx` linha 36 (seção Agosto 2026 na home) — "...fazendinha e piscina aquecida"
5. `src/pages/AgostoPage.tsx` linha 24 — "piscinas aquecidas"; linha 160 — alt "Piscina aquecida"
6. `src/pages/ExperienciasPage.tsx` linha 16 — título do card "Piscina Aquecida"; linhas 118 e 141 — meta description e texto do hero
7. `src/pages/ContatoPage.tsx` linha 29 — FAQ "A piscina é aquecida?" (a resposta já diz climatizada)

Demais menções (`LazerPage`, `packages.ts`, `GallerySection`, `SobrePage`) falam só "piscina", sem "aquecida".

## Mudanças
- Trocar "aquecida/aquecidas/Aquecida" por "climatizada/climatizadas/Climatizada" em todos os pontos acima (textos visíveis, alt de imagem, meta descriptions e schema).
- `AgostoBanner` (home): remover a menção "piscina aquecida" conforme pedido — a frase fica "...recreação monitorada, fazendinha e piscina climatizada" apenas se você preferir manter; a instrução foi retirar da seção de agosto, então o item sai da enumeração, ficando "recreação monitorada e fazendinha".
- FAQ do Contato: pergunta vira "A piscina é climatizada?", mantendo a resposta atual.
- Em `LazerPage` e `ExperienciasPage`, onde a piscina é descrita, garantir que o texto deixe claro que é climatizada.

## Técnico
Apenas edições de texto em arquivos de apresentação (`.tsx`) e no `index.html`. Sem mudanças de dados, rotas ou backend. Verificação com typecheck ao final.
