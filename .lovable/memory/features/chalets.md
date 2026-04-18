---
name: Categorias de Chalés
description: 5 categorias oficiais de chalés (Tradicional, Premium, Superior, Romântico, Família) e regra de auto-expiração de pacotes em /tarifas.
type: feature
---

## Nomenclatura oficial (5 categorias)

Todas as referências em código, UI e conteúdo devem seguir EXATAMENTE estes nomes e slugs:

| Nome exibido      | Slug              | Classe planilha | Capacidade |
|-------------------|-------------------|-----------------|------------|
| Chalé Tradicional | `chale-tradicional` | Classe 01 (8 uhs) | 2–4 |
| Chalé Premium     | `chale-premium`     | Classe 02 (2 uhs) | 2–4 |
| Chalé Superior    | `chale-superior`    | Classe 03 (4 uhs) | 2–4 |
| Chalé Romântico   | `chale-romantico`   | Classe 04 (5 uhs) | 2 |
| Chalé Família     | `chale-familia`     | Classe 05 (1 uh)  | 4–6 |

Total: 20 unidades habitacionais.

**Nunca usar:** "Chalé Master", "Chalé Luxo", "Chalé Standard". Estes nomes foram aposentados.

Redirect ativo em `App.tsx`: `/acomodacoes/chale-master` → `/acomodacoes/chale-romantico`.

## Imagens

- **Superior** e **Premium**: imagens locais em `/public/images/chales/superior-*.jpg` e `premium-*.jpg`. NÃO usar URLs do Omnibees para essas duas categorias (estavam erradas).
- **Tradicional, Romântico, Família**: ainda usam URLs do Omnibees (media.omnibees.com/Images/21954/...).

## Auto-expiração de pacotes

Função `filterActivePackages` em `src/lib/packageStatus.ts` filtra pacotes cujo `checkOut` (DDMMYYYY) já passou. Pacotes sem `checkOut` (ex: `fim-de-semana`) ficam permanentes. Aplicada em:
- `src/pages/TarifasPage.tsx`
- `src/pages/PacotesPage.tsx`

A `OffersSection` (home) já filtra naturalmente via `getDaysUntil(checkIn) > 0`.

## Mensagens de hover (whispers)

`pickHoverMessage(seed)` em `packageStatus.ts` retorna uma frase leve rotativa para overlay no hover dos cards de pacote. Mensagens são suaves, nunca agressivas — sem "ÚLTIMAS HORAS!", "URGENTE!" etc.
