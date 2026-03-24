

## Substituir 3 fotos quebradas na seção Bem-vindos

A seção WelcomeSection tem 5 imagens no mosaico. As 3 primeiras usam URLs do domínio antigo (`minhagloria.com.br`) que não carregam mais. As 2 últimas usam paths locais (`/images/...`) que ainda funcionam.

### Plano

1. Copiar as 3 fotos enviadas para `public/images/`:
   - `640carrossel-5.webp` → `public/images/welcome-aerial.webp` (vista aérea)
   - `640almoco-mg-25.webp` → `public/images/welcome-horse.webp` (cavalo com pedra)
   - `640brunch-1.webp` → `public/images/welcome-brunch.webp` (brunch Chandon)

2. Atualizar `WelcomeSection.tsx` — substituir as 3 URLs quebradas pelos novos paths locais:
   - Imagem 1: `minhagloria.com.br/images/carousel-new-2.webp` → `/images/welcome-aerial.webp`
   - Imagem 2: `minhagloria.com.br/images/carousel-new-4.webp` → `/images/welcome-horse.webp`
   - Imagem 3: `minhagloria.com.br/lovable-uploads/...` → `/images/welcome-brunch.webp`

