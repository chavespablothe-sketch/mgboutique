# Project Memory

## Core
- Cores: verde, dourado e creme. PROIBIDO vermelho em UI/conversão. Tipografia: Playfair Display + Lato.
- PROIBIDO exibir preços numéricos ou descontos (ex: "30% OFF"). Direcionar para o Omnibees.
- Usar `buildOmnibeesUrl` (ID 21954) para todos links de reserva.
- Atividades proibidas/descontinuadas: Trilhas, Sala de Jogos, Horta Orgânica, Confeitaria Artesanal.
- Todas as galerias precisam de setas explícitas. Sincronizar UI mobile/desktop.
- Categorias de chalés (5): Tradicional, Premium, Superior, Romântico, Família. Slugs: chale-tradicional, chale-premium, chale-superior, chale-romantico, chale-familia.
- Pacotes em /tarifas devem ser auto-removidos após o checkOut via `filterActivePackages` em `@/lib/packageStatus`.

## Memories
- [Identidade Visual](mem://style/visual-identity) — Cores da marca (verde, dourado, creme), tipografia (Playfair Display, Lato) e regras do header.
- [Gestão de Imagens](mem://assets/image-management) — Imagens locais, regras para acomodações e overrides de pacotes.
- [Informações de Contato](mem://contacts/information) — Telefone, email, redes sociais e endereço do hotel.
- [Motor de Reservas Omnibees](mem://integrations/omnibees) — Regras de integração, ID do hotel e gestão de links via buildOmnibeesUrl.
- [Política de Preços](mem://pricing/policy) — Restrição estrita de não exibição de valores numéricos ou descontos no site.
- [Formulário de Contato](mem://features/contact-form) — Lógica de salvamento no Supabase, notificações, validação e antispam.
- [Pacotes e Tarifas](mem://features/packages) — Foco em 2026/2027, lógica de agrupamento de datas e rotação de imagens.
- [Destaques de Experiência](mem://content/experience-highlights) — Atividades principais e descontinuadas a serem exibidas no site.
- [Padrões de UI](mem://style/ui-patterns) — Sincronização mobile/desktop, setas em galerias e comportamento de acordeão.
- [Página Sobre](mem://pages/sobre) — Estrutura da página Sobre, pilares e itens removidos.
- [Página Gastronomia](mem://pages/gastronomia) — Foco em fotos locais, detalhes dos serviços e remoção de horta orgânica.
- [Tracking e Analytics](mem://integrations/tracking) — IDs do Meta Pixel e Google Tag Manager, posicionamento dos scripts.
- [Seção de Ofertas (Home)](mem://features/offers-section) — Lógica da seção logo após o Welcome, contagem regressiva e badges dinâmicos.
- [Asksuite](mem://integrations/asksuite) — Widget de chat carregado em todas as páginas via index.html.
- [Categorias de Chalés](mem://features/chalets) — 5 categorias oficiais com slugs e regra de auto-expiração de pacotes.
