

## Plano: Remover preços e valores dos pacotes

### Onde os preços aparecem

1. **Home (OffersSection.tsx)** — Não mostra preços nos cards, apenas link "Ver tarifas especiais". OK, sem alteração necessária.

2. **PacotesPage.tsx** — Bloco "a partir de" com `pkg.price`, `pkg.priceNote` e "por casal · pensão completa" (linhas 203-207). Será removido e substituído por um botão "Ver detalhes" mais limpo.

3. **PacoteDetalhePage.tsx** — Card lateral sticky já não mostra preço (diz "Consulte valores ao reservar"). OK, sem alteração necessária.

4. **TarifasPage.tsx** — Cards no grid não mostram preços visíveis. OK.

5. **OffersSection.tsx (Home)** — Banner "Até 30% OFF" e "Mês do Consumidor" — sem preço explícito, mas implica desconto. Manter? Vou manter pois não mostra valor.

### Alterações

**Arquivo: `src/pages/PacotesPage.tsx`**
- Remover o bloco `md:col-span-4` que exibe `pkg.price`, `pkg.priceNote`, "a partir de" e "por casal · pensão completa"
- Ajustar o grid: o bloco de descrição ocupa toda a largura (`col-span-12`)
- Mover o botão "Reservar" para dentro do bloco de descrição

Isso é uma alteração simples em um único arquivo — o PacotesPage é o único lugar que exibe preços visíveis.

