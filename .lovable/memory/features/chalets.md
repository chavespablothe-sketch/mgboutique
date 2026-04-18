---
name: Categorias de Chalés
description: 5 categorias oficiais de chalés sincronizadas com Omnibees (fonte da verdade) e regra de auto-expiração de pacotes em /tarifas.
type: feature
---

## Fonte da verdade

**Omnibees**: https://book.omnibees.com/hotelresults?q=21954

Sempre que houver dúvida sobre nome, capacidade, área, vista, descrição ou comodidades de um chalé → consultar a Omnibees. Nunca inventar comodidades (lareira, hidromassagem, Nespresso, roupão etc.) que não constem no painel "Comodidades principais" oficial.

## Nomenclatura oficial (5 categorias, na ordem da Omnibees)

| Ordem | Nome exibido      | Slug                | Capacidade | Área  | Vista              |
|-------|-------------------|---------------------|------------|-------|--------------------|
| 1     | Chalé Tradicional | `chale-tradicional` | até 3 pax  | 20 m² | Vista para o jardim |
| 2     | Chalé Família     | `chale-familia`     | até 6 pax  | 40 m² | Vista para o jardim |
| 3     | Chalé Superior    | `chale-superior`    | até 4 pax  | 30 m² | Vista para o jardim |
| 4     | Chalé Premium     | `chale-premium`     | até 5 pax  | 30 m² | Vista para o jardim |
| 5     | Chalé Romântico   | `chale-romantico`   | até 4 pax  | 30 m² | Vista para o jardim |

**Único diferencial preservado por categoria**: banheira no Chalé Romântico (citado no texto oficial da Omnibees).

**Nunca usar**: "Chalé Master", "Chalé Luxo", "Chalé Standard". Aposentados.
Redirect ativo em `App.tsx`: `/acomodacoes/chale-master` → `/acomodacoes/chale-romantico`.

## Imagens

Todas as 5 categorias usam URLs oficiais da Omnibees: `https://media.omnibees.com/Images/21954/RoomTypes/570x428/<id>.jpg`.

IDs por categoria (capturados via slideshow oficial):
- Tradicional: 5241884 (jpeg), 1601852, 1601853, 1601854, 1601855, 1601856
- Família: 1601844, 1601845, 1601846, 1601847, 1601848, 1601849
- Superior: 1601895, 1601896, 1601897, 1601898, 1601899, 1601925
- Premium: 1601834, 1601835, 1601836, 1601837, 1601842, 1601843
- Romântico: 1601876, 1601880, 1601884, 1601886, 1601890, 1601891

Os arquivos locais antigos em `/public/images/chales/superior-*.jpg` e `premium-*.jpg` ficaram obsoletos com a sincronização à Omnibees — mantidos no repo mas não referenciados.

## Preços

**Proibido** exibir `priceFrom` ou qualquer valor numérico. Campo removido de `Chalet`. CTA sempre direciona para Omnibees via `buildOmnibeesUrl`.

## Auto-expiração de pacotes

`filterActivePackages` em `src/lib/packageStatus.ts` filtra pacotes cujo `checkOut` (DDMMYYYY) já passou. Pacotes sem `checkOut` (ex: `fim-de-semana`) ficam permanentes. Aplicada em `TarifasPage.tsx` e `PacotesPage.tsx`.

## Mensagens de hover (whispers)

`pickHoverMessage(seed)` em `packageStatus.ts` retorna uma frase leve rotativa para overlay no hover dos cards de pacote. Mensagens suaves, nunca agressivas — sem "ÚLTIMAS HORAS!", "URGENTE!" etc.
