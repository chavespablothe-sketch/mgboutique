---
name: Seção de Ofertas (Home)
description: Lógica da seção de pacotes da home, frase mensal automática, splash promocional sticky e carrossel auto-rotativo.
type: feature
---

- Seção fica logo após Welcome.
- Inclui pacote `fim-de-semana` no grid (não filtrar mais).
- Cards têm hover `shadow-xl + -translate-y-1` (transition 500ms).
- Subtítulo dourado dinâmico via `monthPhrase()` de `@/lib/monthPhrase` — troca sozinho todo mês.
- Badges de urgência dinâmicos por dias até check-in.

## Carrossel de pacotes secundários
- Implementado via scroll nativo (`overflow-x-auto` + `snap-x`), sem CSS marquee.
- Hook local `useAutoScroll` faz auto-rotação via `requestAnimationFrame` incrementando `scrollLeft` (~0.5px/frame).
- Lista duplicada (`[...secondary, ...secondary]`) → ao chegar em `scrollWidth/2`, reseta `scrollLeft` para 0 (loop invisível).
- Pausa automática por 6s ao interagir: `mouseenter`, `touchstart`, `pointerdown`, `wheel`, `focusin`, ou clique nas setas.
- Setas chamam `scrollBy({ behavior: "smooth" })` e disparam a mesma pausa.
- Respeita `prefers-reduced-motion` (desativa auto-rotação).
- NUNCA usar `animate-marquee` + `scrollBy` no mesmo elemento — conflita transform com scrollLeft.

## PromoSplash (`src/components/PromoSplash.tsx`)
- Componente global montado em `App.tsx` dentro do `BrowserRouter`.
- Aparece após 400px de scroll, fechável com `×` (persiste em `sessionStorage`).
- Click no card leva para `/tarifas` (NÃO Omnibees, NÃO WhatsApp).
- Pulsação sofisticada: `animate-ping` no badge + `animate-pulse` lento (3s) na borda + ponto dourado piscando.
- Cores: bg primary (verde), border/accent secondary (dourado). Nunca vermelho.
- Texto via `splashPhrase()` — muda com o mês.
