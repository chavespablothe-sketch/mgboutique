

## Plano: Sincronização total com Omnibees (5 chalés)

### Decisões confirmadas
- **Fotos**: buscar automático na Omnibees por categoria. Se vier vazio → **deixar `images: []`** e te avisar com lista do que faltou. Sem fallback automático.
- **Capacidade/área/vista/descrição**: substituir pelos dados oficiais da Omnibees.
- **Ordem oficial**: Tradicional → Família → Superior → Premium → Romântico.
- **Comodidades**: manter set genérico mínimo (Wi-Fi, Frigobar, TV, Varanda, Ar-condicionado). Único diferencial preservado: **banheira no Romântico** (citado no texto oficial).
- **Preços**: remover qualquer `priceFrom` (memória core proíbe).

### Execução (em modo default)

**1. Coleta de fotos via Omnibees**
Para cada um dos 5 RoomTypeIds, buscar a página de detalhe e extrair URLs `media.omnibees.com/Images/21954/RoomTypes/...`. Se a página/modal não retornar imagens → `images: []` + registrar na lista de "pendências".

**2. Reescrever `src/data/chalets.ts`**
- Reordenar: Tradicional, Família, Superior, Premium, Romântico
- Atualizar `name`, `capacity`, `size`, `view`, `description`, `longDescription`, `amenities`, `amenitiesByCategory`, `images`
- Remover `priceFrom` (e tipagem)
- Manter slugs atuais

**3. Auditoria pós-mudança (varredura completa)**
Buscar e corrigir em todos os arquivos:
- Textos hardcoded com vista errada ("vista para o lago", "fazendinha", "montanhas")
- Comodidades inventadas ("lareira", "hidromassagem", "Nespresso", "roupão")
- Capacidades/m² desatualizados em `AcomodacoesPage.tsx`, `ChalePage.tsx`, `TarifasPage.tsx`, `pages/AcomodacoesPage.tsx`, SEO
- Qualquer preço numérico exibido
- Referências a "Chalé Master", "Standard", "Luxo"

**4. Atualizar memória `mem://features/chalets.md`**
- Fonte da verdade: URL Omnibees
- Tabela oficial (capacidade, m², vista)
- Regra: nunca inventar comodidades fora da Omnibees

**5. Relatório final**
Te entrego no chat:
- ✅ O que ficou 100% sincronizado
- ⚠️ Lista de chalés com `images: []` (se houver) — pra você me enviar as fotos
- ⚠️ Qualquer outra divergência que eu tenha encontrado e corrigido na auditoria

