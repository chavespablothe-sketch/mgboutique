## Diagnóstico do bug atual

No `OffersSection.tsx` o carrossel de pacotes secundários tem dois sistemas de movimento brigando:

1. **Animação CSS `animate-marquee`** no filho interno move o conteúdo via `transform: translateX(...)`.
2. **Setas** chamam `scrollerRef.current.scrollBy(...)` no container pai (`overflow-x-auto`).

Como o conteúdo é movido por `transform` (não por scroll real), o `scrollLeft` do pai não acompanha — as setas parecem inertes. Além disso, `snap-mandatory` + `transform` em movimento causa travadas no swipe mobile.

## Solução

Substituir o marquee CSS por **auto-scroll programático** (via `requestAnimationFrame` incrementando `scrollLeft`), com **pausa em interação** e setas que controlam o mesmo `scrollLeft`. Sem conflito, já que tudo opera no mesmo eixo (scroll nativo).

### Comportamento desejado

- **Auto-rotação**: avança ~0.5px por frame (~30px/s) continuamente para a direita.
- **Loop infinito**: duplicar a lista; ao passar da metade do `scrollWidth`, "teleportar" `scrollLeft` de volta sem animação (truque clássico de marquee infinito sem usar transform).
- **Pausa automática quando o usuário interage**: ao `mouseenter`, `touchstart`, `focusin` dentro da seção, ou ao clicar nas setas — pausa por **6 segundos** após a última interação, depois retoma.
- **Setas** chamam `scrollBy({ left: ±70% da largura, behavior: "smooth" })` e disparam a pausa temporária.
- **Swipe mobile** funciona nativamente (`overflow-x-auto` + `touch-pan-x`); também dispara pausa.
- **`prefers-reduced-motion`**: desativa a auto-rotação (acessibilidade).

### Mudanças (todas em `src/components/sections/OffersSection.tsx`)

1. Remover classes `animate-marquee` e `group-hover:[animation-play-state:paused]` do filho interno.
2. Remover `w-max` do filho (deixar flexbox natural).
3. Adicionar `touch-pan-x` no scroller.
4. Manter `marquee = [...secondary, ...secondary]` (a duplicação ajuda o loop).
5. Criar hook local `useAutoScroll(ref, { speed: 0.5, pauseMs: 6000 })`:
   - rAF loop que faz `el.scrollLeft += speed` quando não pausado.
   - Quando `el.scrollLeft >= el.scrollWidth / 2`, subtrair `scrollWidth/2` de `scrollLeft` (reset invisível, pois a segunda metade é idêntica à primeira).
   - Listeners: `mouseenter`, `mouseleave`, `touchstart`, `focusin`, `wheel`, `pointerdown` no container → setam timestamp de "última interação"; rAF só avança se `now - lastInteract > pauseMs`.
   - Respeitar `window.matchMedia("(prefers-reduced-motion: reduce)")`.
6. `scrollBy()` das setas dispara o mesmo "última interação = now" para pausar 6s.

### Nota

Atualizar a memória `mem://features/offers-section` com a nova lógica do carrossel (auto-scroll + pausa em interação + setas) após implementação.