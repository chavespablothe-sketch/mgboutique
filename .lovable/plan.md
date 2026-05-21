## Objetivo

1. Padronizar o nome da seção como **"Ofertas"** em todos os pontos de contato (botões, menus, títulos, links).
2. Remover o lightbox flutuante **"Aviso importante"** (sobre mensagens fraudulentas).

---

## 1. Renomear para "Ofertas"

### Rota
- Adicionar nova rota `/ofertas` apontando para `TarifasPage`.
- Manter `/tarifas` e `/tarifas/:slug` como **redirects** para `/ofertas` e `/ofertas/:slug` (preserva SEO e links antigos).
- Detalhe de pacote passa a ser `/ofertas/:slug`.

### Textos visíveis (label "Promoções" / "Tarifas" → "Ofertas")
- **Header desktop e mobile** (`src/components/Header.tsx`): item de menu "Promoções" → "Ofertas", link aponta para `/ofertas`.
- **Footer** (`src/components/Footer.tsx`): item "Promoções" → "Ofertas".
- **PromoSplash** (`src/components/PromoSplash.tsx`): `aria-label` e badge "Promoção · Últimos quartos" → "Oferta · Últimos quartos"; link para `/ofertas`.
- **TarifasPage** (`src/pages/TarifasPage.tsx`): título "Tarifas & Pacotes" → "Ofertas & Pacotes"; SEO title/canonical/breadcrumb atualizados para "Ofertas" e `/ofertas`; CTA "Ver tarifas especiais" → "Ver oferta".
- **PacoteDetalhePage** (`src/pages/PacoteDetalhePage.tsx`): breadcrumb, link "Voltar às tarifas" → "Voltar às ofertas", canonical `/ofertas/:slug`, bloco "Tarifas Especiais" → "Oferta Especial".
- **OffersSection** (`src/components/sections/OffersSection.tsx`): todos os `to="/tarifas/..."` → `/ofertas/...`; CTA "Ver tarifas especiais" → "Ver oferta".
- **HeroSection** (`src/components/sections/HeroSection.tsx`): link `/tarifas/corpus-christi-2026` → `/ofertas/corpus-christi-2026`.
- **ExperienciasPage** (`src/pages/ExperienciasPage.tsx`): link `/tarifas` → `/ofertas`.

### O que NÃO muda
- Pasta/arquivo `TarifasPage.tsx` permanece (renomear arquivo é opcional e não traz benefício ao usuário). Apenas o conteúdo visual e as rotas mudam.
- Texto em `PrivacidadePage.tsx` ("promoções e pacotes") permanece — é genérico, não é label de navegação.
- Texto "Tarifas variam por temporada" em `ChalePage.tsx` permanece — refere-se a preço, não à seção.

---

## 2. Remover o lightbox "Aviso importante"

- Em `src/pages/Index.tsx`: remover import e uso de `<FakeMessageAlertLightbox />`.
- Verificar se o componente é usado em outro lugar; se não, deletar `src/components/FakeMessageAlertLightbox.tsx`.

---

## Verificação final
- `rg "tarifas|Promoç"` para garantir que não sobrou link/label antigo de navegação.
- Conferir preview: header, footer, splash, página `/ofertas` e detalhe `/ofertas/:slug` carregando; `/tarifas` redirecionando.
