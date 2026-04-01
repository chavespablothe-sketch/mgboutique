

## Plan: Mover Ano Novo para Dezembro

O problema é que a função `getMonth()` itera o `monthMap` e retorna o **primeiro** mês encontrado no texto do período. Como "janeiro" vem antes de "dezembro" no objeto, pacotes com período "30 de dezembro … a 3 de janeiro" são classificados como "Janeiro".

### Solução

**Arquivo:** `src/pages/TarifasPage.tsx`

1. **Reordenar o `monthMap`** para que "dezembro" venha **antes** de "janeiro", garantindo que pacotes com ambos os meses sejam classificados em Dezembro.

2. **Remover "Janeiro" do `monthOrder`** (caso tenha sido adicionado), já que não haverá mais pacotes nessa categoria.

Mudança concreta na função `getMonth` (linha 15-19): inverter a ordem para que "dezembro" seja checado primeiro:

```ts
const monthMap: Record<string, string> = {
  "dezembro": "Dezembro",
  "janeiro": "Janeiro", "fevereiro": "Fevereiro", "março": "Março",
  "abril": "Abril", "maio": "Maio", "junho": "Junho",
  "julho": "Julho", "agosto": "Agosto", "setembro": "Setembro",
  "outubro": "Outubro", "novembro": "Novembro",
};
```

Isso garante que qualquer pacote mencionando "dezembro" (mesmo que também mencione "janeiro") será agrupado em Dezembro.

