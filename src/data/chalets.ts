/**
 * Source of truth: Omnibees official listing
 * https://book.omnibees.com/hotelresults?q=21954
 *
 * Last sync: 2026-04-18
 *
 * Rules:
 * - Names, capacity, area, view, descriptions: copied verbatim from Omnibees.
 * - Comodidades: only what appears in the official "Comodidades principais" panel.
 *   Single differentiator preserved: banheira no Romântico (citado no texto oficial).
 * - Never display priceFrom on the site (regra core).
 * - Order matches Omnibees: Tradicional → Família → Superior → Premium → Romântico.
 */

export interface Chalet {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  capacity: string;
  size: string;
  beds: string;
  view: string;
  amenities: string[];
  amenitiesByCategory: {
    quarto: string[];
    banheiro: string[];
    areaExterna: string[];
  };
  images: string[];
  highlight: string;
  idealFor: string;
}

const IMG = (id: string | number) =>
  `https://media.omnibees.com/Images/21954/RoomTypes/1024x768/${id}.jpg`;
const IMG_JPEG = (id: string | number) =>
  `https://media.omnibees.com/Images/21954/RoomTypes/1024x768/${id}.jpeg`;

const baseAmenities = ["Ar condicionado", "Frigobar", "Mini-bar", "Wi-Fi", "Varanda", "Banheiro privado"];

const chalets: Chalet[] = [
  {
    slug: "chale-tradicional",
    name: "Chalé Tradicional",
    tagline: "Conforto e ar puro em meio à natureza",
    description: "Com vista para o jardim, desfrute de conforto e ar puro em meio à natureza.",
    longDescription:
      "Com vista para o jardim, desfrute de conforto e ar puro em meio à natureza. Cama de casal, ambiente aconchegante e tudo o que você precisa para uma estadia tranquila.",
    capacity: "Até 3 pessoas",
    size: "20m²",
    beds: "Cama de casal",
    view: "Vista para o jardim",
    amenities: baseAmenities,
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "Mini-bar", "Wi-Fi", "Apartamento para não fumantes"],
      banheiro: ["Banheiro privado", "Secador de cabelo"],
      areaExterna: ["Varanda", "Vista para o jardim"],
    },
    images: [
      IMG_JPEG(5241884),
      IMG(1601852),
      IMG(1601853),
      IMG(1601854),
      IMG(1601855),
      IMG(1601856),
      IMG(1601857),
      IMG(1601851),
      IMG(1601859),
      IMG(1601860),
      IMG(1601861),
      IMG(1601862),
      IMG(1601863),
      IMG(1601858),
    ],
    highlight: "Vista para o jardim",
    idealFor: "Casais e hóspedes individuais",
  },
  {
    slug: "chale-familia",
    name: "Chalé Família",
    tagline: "Amplo, com varanda e vista para os jardins",
    description: "Chalés amplos para acolher com conforto e exclusividade. Possuem varanda com vista para os jardins.",
    longDescription:
      "Chalés amplos para acolher com conforto e exclusividade. Possuem varanda com vista para os jardins. Cama de casal e camas adicionais para acomodar toda a família com folga.",
    capacity: "Até 6 pessoas",
    size: "40m²",
    beds: "Cama de casal + camas adicionais",
    view: "Vista para o jardim",
    amenities: [...baseAmenities, "Televisão"],
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "Mini-bar", "Wi-Fi", "Televisão", "Berço (sob solicitação)"],
      banheiro: ["Banheiro privado", "Secador de cabelo"],
      areaExterna: ["Varanda", "Vista para os jardins"],
    },
    images: [
      IMG(1601845),
      IMG(1601844),
      IMG(1601846),
      IMG(1601847),
      IMG(1601848),
      IMG(1601849),
      IMG(1601850),
    ],
    highlight: "Espaço para a família",
    idealFor: "Famílias com crianças",
  },
  {
    slug: "chale-superior",
    name: "Chalé Superior",
    tagline: "Conforto e aconchego",
    description: "Desfrute de conforto e aconchego.",
    longDescription:
      "Desfrute de conforto e aconchego em um chalé com vista para o jardim, ambiente cuidadosamente preparado para acomodar até 4 pessoas com tranquilidade.",
    capacity: "Até 4 pessoas",
    size: "30m²",
    beds: "Cama de casal + cama adicional",
    view: "Vista para o jardim",
    amenities: baseAmenities,
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "Mini-bar", "Wi-Fi"],
      banheiro: ["Banheiro privado", "Secador de cabelo"],
      areaExterna: ["Varanda", "Vista para o jardim"],
    },
    images: [
      IMG(1601925),
      IMG(1601895),
      IMG(1601896),
      IMG(1601897),
      IMG(1601898),
      IMG(1601899),
    ],
    highlight: "Conforto e aconchego",
    idealFor: "Casais e pequenas famílias",
  },
  {
    slug: "chale-premium",
    name: "Chalé Premium",
    tagline: "Conforto e privacidade",
    description: "Chalé para quem busca conforto e privacidade.",
    longDescription:
      "Chalé para quem busca conforto e privacidade. Espaço pensado para acolher até 5 pessoas em meio à natureza, com varanda e vista para o jardim.",
    capacity: "Até 5 pessoas",
    size: "30m²",
    beds: "Cama de casal + camas adicionais",
    view: "Vista para o jardim",
    amenities: baseAmenities,
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "Mini-bar", "Wi-Fi"],
      banheiro: ["Banheiro privado", "Secador de cabelo"],
      areaExterna: ["Varanda", "Vista para o jardim"],
    },
    images: [
      IMG(1601843),
      IMG(1601834),
      IMG(1601835),
      IMG(1601836),
      IMG(1601837),
      IMG(1601842),
    ],
    highlight: "Conforto e privacidade",
    idealFor: "Famílias e grupos pequenos",
  },
  {
    slug: "chale-romantico",
    name: "Chalé Romântico",
    tagline: "Banheira e varanda para momentos a dois",
    description: "Desfrute de conforto e exclusividade. Chalés com banheira e varanda para relaxar e curtir momentos em casal.",
    longDescription:
      "Desfrute de conforto e exclusividade. Chalés com banheira e varanda para relaxar e curtir momentos em casal. Ambiente preparado para escapadas românticas, com vista para o jardim e clima de aconchego.",
    capacity: "Até 4 pessoas",
    size: "30m²",
    beds: "Cama de casal",
    view: "Vista para o jardim",
    amenities: [...baseAmenities, "Banheira"],
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "Mini-bar", "Wi-Fi"],
      banheiro: ["Banheira", "Banheiro privado", "Secador de cabelo"],
      areaExterna: ["Varanda", "Vista para o jardim"],
    },
    images: [
      IMG(1601890),
      IMG(1601876),
      IMG(1601880),
      IMG(1601884),
      IMG(1601886),
      IMG(1601891),
    ],
    highlight: "Banheira + varanda",
    idealFor: "Casais em momentos especiais",
  },
];

export default chalets;
