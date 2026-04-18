

## Plano: Galeria fullscreen boutique + sincronização completa de fotos

### 1. Coletar TODAS as fotos por categoria (Omnibees)
Abrir cada um dos 5 modais de detalhe via browser e extrair o pack completo de URLs `media.omnibees.com/Images/21954/RoomTypes/...`. Se algum vier vazio → `images: []` e te aviso na lista de pendências.

### 2. Atualizar `src/data/chalets.ts`
Substituir `images[]` de cada chalé pelo pack completo. Manter ordem oficial e demais campos intactos.

### 3. Lightbox boutique (`src/components/Lightbox.tsx`)
Componente novo com bossa de hotel boutique:

**Visual**
- Overlay preto profundo (#0a0a0a/95) com leve blur
- Imagem `object-contain` centralizada, sombra suave dourada
- Tipografia Playfair para contador (ex: "03 — 12") em dourado discreto
- Caption opcional com nome do chalé em letter-spacing alto
- Margens generosas (respira como num catálogo de luxo)

**Transições**
- Fade + scale sutil ao abrir (0.95 → 1, 400ms ease-out)
- Crossfade entre fotos (não slide brusco) — 350ms
- Easing suave em tudo (cubic-bezier elegante, sem bounce)

**Interação Desktop**
- Setas laterais flutuantes (aparecem on hover, ícones finos)
- Teclado: ←/→/Esc
- Click fora fecha
- Cursor customizado nas zonas clicáveis

**Interação Mobile (experiência incrível)**
- Swipe horizontal nativo (framer-motion drag) com snap
- Pinch-to-zoom no toque (CSS `touch-action: pinch-zoom`)
- Tap único mostra/oculta UI (chrome some pra foto respirar)
- Setas maiores e bem posicionadas (touch targets 44px+)
- Bottom-safe-area respeitado (iPhone notch)
- Sem scroll do body quando aberto

### 4. Integração
- **`PhotoGallery.tsx`**: clique na imagem principal abre lightbox no índice atual; cursor `zoom-in`
- **`ChalePage.tsx`**: thumbs e foto principal abrem lightbox

### 5. Auditoria final
- Cada categoria com fotos só dela
- Testar lightbox em mobile (375px) e desktop
- Relatório: total de fotos por chalé + pendências

### Arquivos
- `src/data/chalets.ts` (atualizar imagens)
- `src/components/Lightbox.tsx` (novo)
- `src/components/PhotoGallery.tsx` (integrar)
- `src/pages/ChalePage.tsx` (integrar)
- `.lovable/memory/features/chalets.md` (documentar IDs completos)
- `.lovable/memory/style/ui-patterns` (adicionar padrão lightbox boutique)

