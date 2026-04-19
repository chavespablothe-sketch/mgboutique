---
name: Seção de Ofertas (Home)
description: Lógica da seção de pacotes da home, frase mensal automática e splash promocional sticky.
type: feature
---

- Seção fica logo após Welcome.
- Inclui pacote `fim-de-semana` no grid (não filtrar mais).
- Cards têm hover `shadow-xl + -translate-y-1` (transition 500ms).
- Subtítulo dourado dinâmico via `monthPhrase()` de `@/lib/monthPhrase` — troca sozinho todo mês.
- Badges de urgência dinâmicos por dias até check-in.

## PromoSplash (`src/components/PromoSplash.tsx`)
- Componente global montado em `App.tsx` dentro do `BrowserRouter`.
- Aparece após 400px de scroll, fechável com `×` (persiste em `sessionStorage`).
- Click no card leva para `/tarifas` (NÃO Omnibees, NÃO WhatsApp).
- Pulsação sofisticada: `animate-ping` no badge + `animate-pulse` lento (3s) na borda + ponto dourado piscando.
- Cores: bg primary (verde), border/accent secondary (dourado). Nunca vermelho.
- Texto via `splashPhrase()` — muda com o mês.
