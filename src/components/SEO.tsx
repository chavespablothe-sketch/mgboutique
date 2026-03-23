import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemas?: Record<string, unknown>[];
  noindex?: boolean;
}

const BASE_URL = "https://www.minhagloria.com.br";
const DEFAULT_IMAGE = "https://www.minhagloria.com.br/images/carousel-new-1.jpg";

const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  schemas = [],
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes("Minha Glória") ? title : `${title} | Minha Glória Hotel Boutique`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Minha Glória Hotel Boutique" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

/* ── Reusable schema builders ── */

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Minha Glória Hotel Boutique",
  description: "Hotel boutique em Bom Jardim, RJ. Chalés exclusivos em meio à Mata Atlântica com pensão completa, spa e experiências para toda a família.",
  url: BASE_URL,
  telephone: "+55-22-99779-2023",
  email: "contato@minhagloria.com.br",
  image: DEFAULT_IMAGE,
  priceRange: "R$ 567 – R$ 1.134",
  starRating: { "@type": "Rating", ratingValue: "5" },
  numberOfRooms: 20,
  petsAllowed: true,
  checkinTime: "15:00",
  checkoutTime: "12:00",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscina aquecida", value: true },
    { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fazendinha", value: true },
    { "@type": "LocationFeatureSpecification", name: "Trilhas", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurante", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Estrada Rosário km 4,5",
    addressLocality: "Bom Jardim",
    addressRegion: "RJ",
    postalCode: "28660-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -22.1567,
    longitude: -42.4253,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "320",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Minha Glória Hotel Boutique",
  url: BASE_URL,
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export default SEO;
