---
name: Padrões de UI
description: Sincronização mobile/desktop, setas em galerias, acordeão e lightbox boutique de fotos.
type: design
---

## Galerias
- Toda galeria tem setas explícitas (esquerda/direita) — não depender só de swipe.
- Sincronizar mobile e desktop: mesmo comportamento, layouts adaptados.

## Lightbox boutique (`src/components/Lightbox.tsx`)
Componente fullscreen para visualizar galerias de fotos. Usado em `PhotoGallery` e `ChalePage`.

**Visual**: overlay `bg-[#0a0a0a]/97` + backdrop-blur, imagem `object-contain` centralizada com sombra dourada (`hsl(var(--secondary)/0.25)`), contador Playfair em dourado (formato `01 — 06`), caption opcional acima do contador em `tracking-[0.4em] uppercase`.

**Transições**: easing `[0.22,1,0.36,1]`; crossfade 450ms entre fotos (não slide); chrome (UI) entra/sai com fade+slide 300ms.

**Desktop**: setas laterais flutuantes com border sutil, teclado ←/→/Esc, click no overlay fecha, thumbs no rodapé, cursor `zoom-in` no trigger.

**Mobile**: drag horizontal via framer-motion (threshold 60px ou velocity 400), `touch-action: pan-y pinch-zoom`, tap único no centro mostra/oculta chrome, setas com touch target ≥44px, respeita `env(safe-area-inset-*)`, body scroll lock enquanto aberto.

**Performance**: pré-carrega vizinho anterior/próximo para transição instantânea.

## Acordeão
Acordeões devem ter animação suave de altura, sem saltos.
