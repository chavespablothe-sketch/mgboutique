# Plano

## 1. Serviços & Passeios (pagos à parte) em todos os pacotes
- Em `src/data/packages.ts`, adicionar uma nova `ProgramSection` compartilhada `servicosEPasseios`:
  - Ícone `🌄`, título "Serviços & Passeios"
  - Descrição curta indicando que são serviços opcionais (sem preços, conforme regra)
  - Itens: Quadriciclo, Passeio de Jeep, Massagem, Cavalo & Charrete
  - Fechamento: "Consulte a recepção para mais informações."
- Anexar essa seção ao final de `programSections` de **todos** os pacotes (genérico + qualquer pacote com seções customizadas como Namorados, Arraiá, Réveillon, etc.).
- Como `ProgramSections.tsx` já renderiza dinamicamente a lista, nada muda no componente.
- Verificar `PacoteDetalhePage.tsx` para garantir que a nova seção aparece corretamente. Nenhum preço será exibido.

## 2. Hero: voltar ao próximo "fim-de-semana" em vez do pacote de Namorados
- O pacote `dia-dos-namorados-2026` (check-in 12/06/2026) ainda aparece em 13/06 por um off-by-one em `isPackageActive` (`cutoff >= today` deveria ser `today > checkIn` → trocar `>=` por `>` em `src/lib/packageStatus.ts`).
- Com a correção, `NextPackageHighlight` passa a destacar automaticamente o próximo pacote ativo (o `fim-de-semana` recorrente).
- Remover badge "-10% últimos quartos" específico de Namorados do `NextPackageHighlight` quando o tema padrão for usado (já condicionado a `isValentines`, então só limpa naturalmente).
- Manter `OffersSection` e `PacoteDetalhePage` do pacote Namorados intactos (continua aparecendo nas Ofertas até o check-out passar).

## 3. Destaque "Jogos do Brasil" na home — sofisticado e leve
- Criar `src/components/sections/JogosBrasilSection.tsx`:
  - Faixa horizontal discreta, paleta da marca (verde/dourado/creme) com **toques sutis** de amarelo/azul (sem bandeiras grandes, sem visual de Copa).
  - Layout: card único editorial, fundo `bg-card`/`primary/5`, borda fina dourada, ícone pequeno (ex: `Tv` ou bola estilizada Lucide).
  - Headline: "Torça com a gente nos jogos do Brasil"
  - Sub: "Área especial reservada no salão para você assistir aos jogos da seleção, com gastronomia e clima de hotel boutique."
  - CTA discreto: "Saiba mais" → `/contato` (ou WhatsApp).
  - Sem confetes, sem bandeiras grandes, sem cores saturadas — manter elegância.
- Inserir no `src/pages/Index.tsx` entre `OffersSection` e `KidsSection`.

## 4. Validação
- Conferir build e que a nova seção `Serviços & Passeios` aparece em todas as páginas `/ofertas/<slug>`.
- Conferir hero em `/` mostrando "Fim de Semana" e não mais "Dia dos Namorados".
- Conferir destaque "Jogos do Brasil" na home, integrado visualmente (sem poluição de cores).

## Arquivos afetados
- `src/data/packages.ts` (adicionar seção + anexar a cada pacote)
- `src/lib/packageStatus.ts` (cutoff `>` em vez de `>=`)
- `src/components/NextPackageHighlight.tsx` (limpeza pequena se necessário)
- `src/components/sections/JogosBrasilSection.tsx` (novo)
- `src/pages/Index.tsx` (montar a seção)
