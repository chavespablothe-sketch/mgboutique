

## Plano final (mínimo absoluto)

### Escopo
1. Hover nos cards de pacotes (home)
2. Incluir `fim-de-semana` no grid
3. Frase dinâmica do mês na seção de pacotes
4. Splash promocional flutuante → `/tarifas`, **com pulsação sofisticada**

### Pulsação sofisticada do splash
- Glow dourado pulsante atrás do badge (`absolute inset-0 rounded-full bg-secondary/40 animate-ping`).
- Brilho sutil na borda alternando opacidade (`animate-pulse` lento, 3s).
- Ponto dourado piscando ao lado de "Últimos quartos".
- Sem flicker agressivo — elegante, ritmo lento.

### Edits (2 novos + 2 editados)

**1. `src/lib/monthPhrase.ts`** (novo, 5 linhas) — helper das frases mensais.

**2. `src/components/sections/OffersSection.tsx`** (1 edit consolidado)
- Remover filtro que exclui `fim-de-semana`.
- Adicionar `hover:shadow-xl hover:-translate-y-1 transition-all duration-500` nos wrappers.
- Subtítulo dourado com `monthPhrase()` acima do `<h2>`.

**3. `src/components/PromoSplash.tsx`** (novo, ~80 linhas)
- `fixed bottom-6 right-6` desktop / barra fina `bottom-4 inset-x-4` mobile.
- Aparece após 400px scroll (fade + slide-up).
- Verde com borda dourada, glow `animate-ping` + `animate-pulse` combinados.
- Badge "Últimos quartos" com ponto dourado pulsante.
- Click → `<Link to="/tarifas">`.
- Fechável com `×` (persistência em `sessionStorage`).

**4. `src/App.tsx`** (1 linha) — montar `<PromoSplash />` global.

### Memória
Update curto em `mem://features/offers-section`: frase mensal automática + splash sticky com pulsação → `/tarifas`.

### Custo
2 arquivos novos + 2 edits + 1 update memória. Zero browser, zero scripts, zero validação automatizada.

