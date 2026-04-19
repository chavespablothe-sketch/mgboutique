---
name: Categorias de Chalés
description: 5 categorias oficiais de chalés sincronizadas com Omnibees (fonte da verdade) e regra de auto-expiração de pacotes em /tarifas.
type: feature
---

## Fonte da verdade

**Omnibees**: https://book.omnibees.com/hotelresults?q=21954

Sempre que houver dúvida sobre nome, capacidade, área, vista, descrição ou comodidades de um chalé → consultar a Omnibees. Nunca inventar comodidades (lareira, hidromassagem, Nespresso, roupão etc.) que não constem no painel "Comodidades principais" oficial.

## Nomenclatura oficial (5 categorias, na ordem da Omnibees)

| Ordem | Nome exibido      | Slug                | Capacidade | Área  | Vista              | RoomID Omnibees |
|-------|-------------------|---------------------|------------|-------|--------------------|-----------------|
| 1     | Chalé Tradicional | `chale-tradicional` | até 3 pax  | 20 m² | Vista para o jardim | 134512 |
| 2     | Chalé Família     | `chale-familia`     | até 6 pax  | 40 m² | Vista para o jardim | 134513 |
| 3     | Chalé Superior    | `chale-superior`    | até 4 pax  | 30 m² | Vista para o jardim | 134515 |
| 4     | Chalé Premium     | `chale-premium`     | até 5 pax  | 30 m² | Vista para o jardim | 134514 |
| 5     | Chalé Romântico   | `chale-romantico`   | até 4 pax  | 30 m² | Vista para o jardim | 134516 |

**Único diferencial preservado por categoria**: banheira no Chalé Romântico (citado no texto oficial da Omnibees).

**Nunca usar**: "Chalé Master", "Chalé Luxo", "Chalé Standard". Aposentados.
Redirect ativo em `App.tsx`: `/acomodacoes/chale-master` → `/acomodacoes/chale-romantico`.

## Imagens (sincronizadas em 2026-04-19)

URLs oficiais Omnibees: `https://media.omnibees.com/Images/21954/RoomTypes/1024x768/<id>.jpg`.
Resolução padrão: **1024x768** (HD para galeria fullscreen).

Como obter o pack completo: POST em `https://book.omnibees.com/allRoomsModalAjax?...&c=11566` com body `{"_token":CSRF,"hotelId":"21954","roomId":<rid>,"availableRooms":[134512,134513,134515,134514,134516]}` retorna HTML com TODAS as fotos de todos os quartos.

**Contagem oficial (badge do modal — fonte da verdade)**:
- Tradicional: **14** fotos
- Família: **7** fotos
- Superior: **26** fotos
- Premium: **11** fotos
- Romântico: **12** fotos

⚠️ Regra: contar fotos pelo badge do modal de detalhes, NUNCA pelos thumbs da listagem (que mostra só 6).

IDs por categoria (capa primeiro):
- Tradicional: 5241884 (jpeg), 1601852, 1601853, 1601854, 1601855, 1601856, 1601857, 1601851, 1601859, 1601860, 1601861, 1601862, 1601863, 1601858
- Família: 1601845, 1601844, 1601846, 1601847, 1601848, 1601849, 1601850
- Superior: 1601925, 1601898, 1601899, 1601896, 1601895, 1601897, 1601901, 1601902, 1601903, 1601904, 1601905, 1601910, 1601909, 1601912, 1601906, 1601908, 1601907, 1601913, 1601916, 1601915, 1601914, 1601921, 1601919, 1601923, 1601924, 1601922
- Premium: 1601843, 1601842, 1601834, 1601835, 1601836, 1601837, 1601838, 1601839, 1601840, 1601841, 1601833
- Romântico: 1601890, 1601876, 1601891, 1601886, 1601884, 1601880, 1601881, 1601877, 1601878, 1601887, 1601893, 1601894

Os arquivos locais antigos em `/public/images/chales/superior-*.jpg` e `premium-*.jpg` ficaram obsoletos com a sincronização à Omnibees — mantidos no repo mas não referenciados.

## Preços

**Proibido** exibir `priceFrom` ou qualquer valor numérico. Campo removido de `Chalet`. CTA sempre direciona para Omnibees via `buildOmnibeesUrl`.

## Auto-expiração de pacotes

`filterActivePackages` em `src/lib/packageStatus.ts` filtra pacotes cujo `checkOut` (DDMMYYYY) já passou. Pacotes sem `checkOut` (ex: `fim-de-semana`) ficam permanentes. Aplicada em `TarifasPage.tsx` e `PacotesPage.tsx`.

## Mensagens de hover (whispers)

`pickHoverMessage(seed)` em `packageStatus.ts` retorna uma frase leve rotativa para overlay no hover dos cards de pacote. Mensagens suaves, nunca agressivas — sem "ÚLTIMAS HORAS!", "URGENTE!" etc.
