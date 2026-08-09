## Objetivo
Criar uma página dedicada `/festivais` que apresente os 7 festivais do ano do Minha Glória Hotel Boutique com a direção visual "Sophisticated editorial timeline" escolhida pelo usuário. A página usará fotos já existentes no site, manterá o branding (verde, dourado, creme, Playfair Display + Lato) e não será linkada no menu principal nesta primeira etapa.

## Festivais e conteúdo
1. **Agosto — Festival de Fondue** ❤️
2. **Setembro — Festival Fogo de Chão** 🔥
3. **Outubro — Fazenda Encantada** 🎃
4. **Novembro — Festival da Costela & Churrasco** 🍖
5. **Dezembro — Dezembro Encantado** 🎄
6. **Janeiro — Verão na Minha Glória** 🌴
7. **Fevereiro — Fevereiro em Festa** 🎭

## Estrutura da página (direção editorial timeline)
- **Hero textual**: título "Calendário de Festivais", subtítulo curto sobre a curadoria de experiências, dividor dourado.
- **Agosto + Setembro**: layout alternado — imagem à esquerda/texto à direita (Agosto), texto à esquerda/imagem à direita (Setembro). Ambos com moldura dourada sutil e hover de escala suave.
- **Outubro**: seção destaque em largura total com fundo verde (primary) e texto claro, chamando atenho para a "Temporada Especial" de Fazenda Encantada.
- **Novembro a Fevereiro**: grid de 2 colunas com cards que têm imagem quadrada, mês em itálico dourado, título e descrição curta. Cards em zigue-zague vertical (colunas deslocadas) para manter o ritmo editorial.
- **CTA final**: botão para reserva via Omnibees (`buildOmnibeesUrl`).

## Fotos existentes a usar
Todas as imagens já estão em `src/lib/siteImages.ts`:
- **Agosto**: `agostoImages.fondueQueijo` (ou `fondueCarne`)
- **Setembro**: `pacoteImages.setembro2026`
- **Outubro**: `feriasJulhoImages.recreacao` (crianças/família)
- **Novembro**: `pacoteImages.finados2026` (cenário de churrasco/costela)
- **Dezembro**: `feriasJulhoImages.presente` (presente/celebração)
- **Janeiro**: `feriasJulhoImages.piscina` (verão/piscina)
- **Fevereiro**: `pacoteImages.fimDeSemana` (festa/fim de semana)

## Mudanças técnicas
1. **Nova página**: `src/pages/FestivaisPage.tsx`.
2. **Rota**: adicionar `/festivais` em `src/App.tsx`.
3. **SEO**: usar componente `SEO` com título, descrição, canonical `/festivais` e breadcrumb schema (`Início → Festivais`).
4. **Componentes reutilizados**: `Header`, `Footer`, `Button` do shadcn, `motion` do framer-motion.
5. **Design tokens**: usar variáveis semânticas (`bg-background`, `text-primary`, `text-secondary`, `font-display`, `font-body`) — nunca cores hardcoded como hex puros.
6. **Responsivo**: stacks mobile, grids alternadas no desktop, touch-friendly.
7. **Navegação**: **não** adicionar link no `Header` nem no `Footer` nesta etapa (página oculta por enquanto).

## Verificação
- Typecheck (`tsc --noEmit` / `tsgo`).
- Preview em desktop e mobile para confirmar ritmo editorial, legibilidade e CTA.
- Confirmar que todas as fotos carregam corretamente a partir do `site-images` Supabase Storage.

## Escopo fora desta tarefa
- Não gerar novas imagens.
- Não criar links no menu principal.
- Não alterar pacotes existentes ou a lógica de reserva — apenas usar `buildOmnibeesUrl` para CTAs.
