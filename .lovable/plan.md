

# Schema Markup JSON-LD + Meta Tags por Página

Sim — o JSON-LD (Schema.org) é o padrão que Google, Bing, ChatGPT, Perplexity e outros motores de IA usam para entender sites. Vai garantir que qualquer IA ou buscador leia corretamente as informações do hotel.

## O que será implementado

### 1. Componente `SchemaMarkup` reutilizável
Componente React que injeta `<script type="application/ld+json">` no `<head>` via `react-helmet-async`.

### 2. Schemas por página

| Página | Schema Types |
|--------|-------------|
| Home (`/`) | `Hotel`, `LodgingBusiness`, `WebSite` com `SearchAction` |
| Sobre (`/sobre`) | `AboutPage`, `Organization` |
| Acomodações (`/acomodacoes`) | `Hotel` com `makesOffer` listando os 4 chalés |
| Chalé individual (`/acomodacoes/:slug`) | `HotelRoom` com amenidades, preço, fotos |
| Tarifas (`/tarifas`) | `OfferCatalog` com pacotes |
| Pacote detalhe (`/tarifas/:slug`) | `Offer` com preço, datas, descrição |
| Experiências (`/experiencias`) | `TouristAttraction` + `ItemList` |
| Gastronomia (`/gastronomia`) | `FoodEstablishment`, `Person` (Chef) |
| Região (`/regiao`) | `Place` + `TouristDestination` |
| Contato (`/contato`) | `ContactPage` + `FAQPage` (15 perguntas) |
| Blog (`/blog`) | `Blog` + `BlogPosting` |
| Privacidade (`/privacidade`) | `WebPage` |

### 3. Meta tags dinâmicas por página
Usando `react-helmet-async`, cada página terá:
- `<title>` único e otimizado
- `<meta name="description">` único
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- `<link rel="canonical">`

### 4. Dados estruturados do Hotel (base)
```text
- @type: Hotel / LodgingBusiness
- name: Minha Glória Hotel Boutique
- address: Estrada Rosário km 4,5, Banquete, Bom Jardim, RJ
- telephone: (22) 99779-2023
- priceRange: R$ 567 – R$ 1.134
- starRating: 5
- aggregateRating: Google 4.9, Booking 9.3, TripAdvisor 5.0
- amenityFeature: piscina, spa, fazendinha, trilhas, Wi-Fi
- numberOfRooms: 20
- petsAllowed: true
- checkInTime: 15:00
- checkOutTime: 12:00
```

### 5. FAQPage Schema
As 15 perguntas da página de Contato viram `FAQPage` schema — isso habilita rich snippets no Google.

## Arquivos modificados
- **Novo**: `src/components/SEO.tsx` — componente de SEO com Helmet + JSON-LD
- **Novo**: `src/data/seo.ts` — dados de meta tags por rota
- `src/main.tsx` — wrapping com `HelmetProvider`
- Todas as 12 páginas — adicionar `<SEO>` com props específicas
- `index.html` — manter meta tags base como fallback para crawlers que não executam JS
- `package.json` — adicionar `react-helmet-async`

