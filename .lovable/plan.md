## Diagnóstico

Hoje é **10/05/2026**. O destaque "Fins de Semana de Maio" sumiu porque o pacote `primeiro-de-maio-2026` tem `checkOut = 03/05/2026` → `isPackageActive()` o filtrou como expirado. A contagem regressiva pulou direto para o próximo feriado fixo.

## Regra nova (confirmada pelo usuário)

> Quando o pacote não tem data específica (ex.: "Fins de Semana de Maio", "Arraiá de Inverno"), o sistema deve **calcular automaticamente o próximo fim de semana** dentro da janela do pacote e usar essa data como `checkIn` para a contagem regressiva e para o link Omnibees.

## Plano

### 1. Util `src/lib/recurringWeekend.ts`
- `getNextWeekend(rangeStart, rangeEnd, now)` → retorna `{ checkIn: "DDMMYYYY", checkOut, label: "16 e 17 de maio" }` para a próxima sexta/domingo dentro da janela. Se acabou, retorna `null`.
- Função genérica, reutilizável para qualquer pacote recorrente.

### 2. Marcar pacotes como "recorrentes" em `src/data/packages.ts`
- Novo campo opcional `recurringWeekends?: { from: string; to: string }` (DDMMYYYY).
- Adicionar entry **`fins-de-semana-maio-2026`**:
  - `recurringWeekends: { from: "01052026", to: "31052026" }`.
  - Sem `checkIn`/`checkOut` fixos.
  - `shortTitle: "Fins de Semana de Maio"`, `period: "Todos os fins de semana de maio · 2026"`.
  - `linkSlug` para reservas: `fim-de-semana`.
- No entry **`arraia-inverno-2026`**: adicionar `recurringWeekends: { from: "19062026", to: "26072026" }` (mantém os campos atuais como fallback de exibição).

### 3. Resolver datas dinâmicas
- Helper `resolvePackageDates(pkg, now)` em `src/lib/packageStatus.ts`:
  - Se `pkg.recurringWeekends`, retorna o próximo FDS via `getNextWeekend(...)`.
  - Caso contrário retorna `{ checkIn: pkg.checkIn, checkOut: pkg.checkOut }`.
- `isPackageActive` passa a usar essa resolução: pacote recorrente continua ativo enquanto `getNextWeekend` retornar algo.

### 4. Atualizar `OffersSection.tsx`
- `featuredSlugs = ["fins-de-semana-maio-2026", "arraia-inverno-2026"]`.
- Em `FeaturedCard`, `PackageCard` e `UrgencyBanner`: substituir leituras diretas de `pkg.checkIn` / `pkg.checkOut` por `resolvePackageDates(pkg)` — usado tanto em `getDaysUntil` quanto em `buildOmnibeesUrl`.
- Period exibido para recorrentes: usa o `label` retornado (ex.: "Próximo FDS · 16 e 17 de maio") em vez do `period` estático.
- Manter `KidsFamilyFrame` para `fins-de-semana-maio-2026` (moldura com balões e selo "Feriado em Família").
- Manter `ArraiaFrame` para Arraiá; agora o countdown aponta para o próximo sábado da janela, não mais 19/06 fixo.

### 5. Limpeza
- Remover override de display em cima de `primeiro-de-maio-2026` (vira pacote próprio).
- `primeiro-de-maio-2026` continua existindo como histórico mas fora da home (já expirou naturalmente).

## Arquivos afetados
- **Novo**: `src/lib/recurringWeekend.ts`
- **Editar**: `src/data/packages.ts`, `src/lib/packageStatus.ts`, `src/components/sections/OffersSection.tsx`

## Validação
- Em `/`, o card "Fins de Semana de Maio · 16 e 17 de maio" aparece acima do Arraiá com a moldura kids.
- Banner de urgência: "Fins de Semana de Maio em 6 dias".
- Para Arraiá: mostra "Arraiá em 39 dias" (sexta 19/06 ainda é o primeiro). Após 19/06, atualiza sozinho para o próximo sábado.
- Após 31/05, o card de maio some sozinho.
