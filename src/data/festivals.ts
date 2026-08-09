import { agostoImages, feriasJulhoImages, pacoteImages } from "@/lib/siteImages";

export interface Festival {
  id: string;
  month: string;
  emoji: string;
  title: string;
  description: string;
  detail?: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaUrl: string;
  featured?: boolean;
}

export const festivals: Festival[] = [
  {
    id: "agosto",
    month: "Agosto",
    emoji: "❤️",
    title: "Festival de Fondue",
    description:
      "A sofisticação do inverno encontra o calor da nossa lareira. Seleção de queijos nobres, carnes especiais e fondue de chocolate para fechar a noite com chave de ouro.",
    detail: "Todo sábado de agosto",
    image: agostoImages.fondueQueijo,
    imageAlt: "Fondue de queijo no Minha Glória Hotel Boutique",
    ctaLabel: "Descobrir Mais",
    ctaUrl: "/agosto",
  },
  {
    id: "setembro",
    month: "Setembro",
    emoji: "🔥",
    title: "Festival Fogo de Chão",
    description:
      "A essência da tradição brasileira em preparos lentos, cortes selecionados e o aroma de lenha que perfuma toda a propriedade. Harmonizado com vinhos escolhidos a dedo.",
    image: pacoteImages.setembro2026,
    imageAlt: "Churrasco e fogo de chão no hotel boutique",
    ctaLabel: "Ver Detalhes",
    ctaUrl: "/ofertas",
  },
  {
    id: "outubro",
    month: "Outubro",
    emoji: "🎃",
    title: "Fazenda Encantada",
    description:
      "Outubro transforma nossa propriedade em um cenário de sonhos e descobertas. Uma imersão na vida do campo com o requinte de um hotel boutique, pensada para encantar crianças e adultos.",
    detail: "Mês das Crianças & Família",
    image: feriasJulhoImages.recreacao,
    imageAlt: "Recreação monitorada para crianças na fazendinha",
    ctaLabel: "Reservar",
    ctaUrl: "/ofertas",
    featured: true,
  },
  {
    id: "novembro",
    month: "Novembro",
    emoji: "🍖",
    title: "Festival da Costela & Churrasco",
    description:
      "A celebração da gastronomia do fogo em sua forma mais refinada. Costela suculenta, cortes nobres e acompanhamentos exclusivos para uma experiência que só a serra sabe proporcionar.",
    image: pacoteImages.finados2026,
    imageAlt: "Costela e churrasco de qualidade boutique",
    ctaLabel: "Ver Pacotes",
    ctaUrl: "/ofertas",
  },
  {
    id: "dezembro",
    month: "Dezembro",
    emoji: "🎄",
    title: "Dezembro Encantado",
    description:
      "Luzes, sabores e a magia das festas de fim de ano em um ambiente cuidadosamente decorado para sua família. O Natal e o Réveillon ganham um tom especial de intimidade e requinte.",
    image: feriasJulhoImages.presente,
    imageAlt: "Decoração e clima festivo de fim de ano no hotel",
    ctaLabel: "Reservar",
    ctaUrl: "/ofertas",
  },
  {
    id: "janeiro",
    month: "Janeiro",
    emoji: "🌴",
    title: "Verão na Minha Glória",
    description:
      "Bebidas refrescantes, pratos leves e o melhor do sol em nossa área de lazer premium. Piscina climatizada, espreguiçadeiras e o verde da Mata Atlântica como cenário.",
    image: feriasJulhoImages.bolhas,
    imageAlt: "Piscina com bolhas e área de lazer no verão",
    ctaLabel: "Reservar",
    ctaUrl: "/ofertas",
  },
  {
    id: "fevereiro",
    month: "Fevereiro",
    emoji: "🎭",
    title: "Fevereiro em Festa",
    description:
      "A vibração do verão com o conforto e a exclusividade que definem nossa identidade boutique. Momentos de celebração, descontração e gastronomia em plena serra fluminense.",
    image: feriasJulhoImages.heroFerias,
    imageAlt: "Clima festivo de férias no hotel boutique",
    ctaLabel: "Reservar",
    ctaUrl: "/ofertas",
  },
];
