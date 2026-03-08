export interface HotelPackage {
  slug: string;
  title: string;
  shortTitle: string;
  period: string;
  nights: string;
  price: string;
  pricePerNight: string;
  priceNote: string;
  description: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  kidsFeatures: string[];
  schedule: { day: string; items: string[] }[];
  image: string;
  gallery: string[];
  tag: string;
  tagColor: string;
}

const packages: HotelPackage[] = [
  {
    slug: "pascoa-2026",
    title: "Páscoa 2026 no Minha Glória Hotel Boutique",
    shortTitle: "Páscoa 2026",
    period: "3 a 5 de abril de 2026",
    nights: "2 noites",
    price: "R$ 2.268,00",
    pricePerNight: "R$ 1.134,00",
    priceNote: "em até 10x de R$ 226,80 sem juros",
    description: "No feriado de Páscoa 2026, o Hotel Boutique Minha Glória preparou uma programação especial, pensada para quem busca conforto, boa gastronomia e experiências únicas em um ambiente acolhedor.",
    longDescription: "A Páscoa no Minha Glória é uma celebração em família. Nossos pequenos hóspedes ganham uma programação especial com caça aos ovos pelos jardins da fazenda, oficina de chocolate artesanal e atividades lúdicas ao ar livre. Para os adultos, momentos de relaxamento no spa, degustação de vinhos e jantares especiais com música ao vivo. Tudo pensado para criar memórias inesquecíveis em meio à natureza da Mata Atlântica.",
    highlights: ["Welcome drink de Páscoa", "Mimo no quarto com chocolate artesanal", "Jantares especiais com música ao vivo", "Experiências de wellness (yoga, meditação e massagem)"],
    included: ["Pensão completa (café, almoço e jantar)", "Welcome drink na chegada", "Chocolate artesanal no quarto", "Acesso completo ao spa", "Atividades ao ar livre", "Wi-Fi gratuito", "Estacionamento privativo"],
    kidsFeatures: ["Caça aos ovos de Páscoa nos jardins", "Oficina de chocolate artesanal", "Recreação monitorada", "Menu infantil especial", "Crianças até 6 anos: cortesia"],
    schedule: [
      { day: "Sexta-feira (03/04)", items: ["Check-in a partir das 15h", "Welcome drink de Páscoa", "Mimo de chocolate no quarto", "Jantar de boas-vindas com música ao vivo"] },
      { day: "Sábado (04/04)", items: ["Café da manhã estendido até 11h", "Caça aos ovos para crianças", "Oficina de chocolate", "Almoço especial de Páscoa", "Tarde livre: spa, piscina, trilhas", "Yoga ao pôr-do-sol", "Jantar temático com harmonização de vinhos"] },
      { day: "Domingo (05/04)", items: ["Café da manhã especial de Páscoa", "Atividades ao ar livre em família", "Check-out até 12h", "Brunch de despedida"] },
    ],
    image: "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/rv6jyv97zg-1770309523978.webp",
    gallery: [
      "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/rv6jyv97zg-1770309523978.webp",
      "https://www.minhagloria.com.br/images/carousel-new-1.jpg",
      "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png",
    ],
    tag: "família",
    tagColor: "bg-secondary",
  },
  {
    slug: "tiradentes-2026",
    title: "Feriado de Tiradentes no Minha Glória Hotel Boutique",
    shortTitle: "Tiradentes 2026",
    period: "17 a 21 de abril de 2026",
    nights: "4 noites",
    price: "R$ 2.268,00",
    pricePerNight: "R$ 567,00",
    priceNote: "em até 10x de R$ 226,80 sem juros",
    description: "O Glória Hotel Boutique convida você a viver dias de descanso, cultura e experiências cuidadosamente pensadas para adultos e crianças — sempre com o conforto, a elegância e o atendimento personalizado.",
    longDescription: "O feriado de Tiradentes é a oportunidade perfeita para uma imersão prolongada na natureza. São 4 noites de pura tranquilidade, com atividades para todas as idades. Passeios de quadriciclo, trilhas ecológicas, contato com os animais da fazenda e uma programação cultural especial com histórias e tradições da região serrana. Para as crianças, recreação monitorada com atividades educativas e muita diversão ao ar livre.",
    highlights: ["Welcome drink para adultos", "Bebida especial para crianças", "Mimo de boas-vindas no quarto", "Café da manhã estendido"],
    included: ["Pensão completa (café, almoço e jantar)", "Welcome drink adulto e infantil", "Mimo de boas-vindas", "Atividades diárias programadas", "Passeio de quadriciclo", "Acesso ao spa e piscina", "Wi-Fi gratuito", "Estacionamento privativo"],
    kidsFeatures: ["Bebida especial de boas-vindas", "Recreação monitorada diária", "Contato com animais da fazenda", "Atividades educativas na natureza", "Menu kids em todas as refeições", "Crianças até 6 anos: cortesia"],
    schedule: [
      { day: "Quinta-feira (17/04)", items: ["Check-in a partir das 15h", "Welcome drink e bebida kids", "Passeio de reconhecimento da fazenda", "Jantar de boas-vindas"] },
      { day: "Sexta-feira (18/04)", items: ["Café da manhã estendido", "Trilha ecológica guiada", "Almoço regional", "Recreação infantil", "Spa e piscina", "Jantar com música"] },
      { day: "Sábado (19/04)", items: ["Café da manhã", "Passeio de quadriciclo", "Visita aos animais da fazenda", "Almoço na varanda", "Tarde de atividades em família", "Noite de fogueira com marshmallow"] },
      { day: "Domingo (20/04)", items: ["Café da manhã estendido", "Atividades ao ar livre", "Almoço especial", "Tarde livre", "Jantar de despedida"] },
      { day: "Segunda-feira (21/04)", items: ["Café da manhã", "Check-out até 12h"] },
    ],
    image: "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/oe8dp4nznk-1770310040271.jpg",
    gallery: [
      "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/oe8dp4nznk-1770310040271.jpg",
      "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
      "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png",
    ],
    tag: "aventura",
    tagColor: "bg-primary",
  },
  {
    slug: "primeiro-de-maio-2026",
    title: "Feriado de 1º de Maio no Minha Glória Hotel Boutique",
    shortTitle: "1º de Maio 2026",
    period: "1 a 3 de maio de 2026",
    nights: "2 noites",
    price: "R$ 2.268,00",
    pricePerNight: "R$ 1.134,00",
    priceNote: "em até 10x de R$ 226,80 sem juros",
    description: "O Glória Hotel Boutique convida você e sua família para viver um feriado tranquilo, acolhedor e cheio de boas memórias. Pensão Completa incluída.",
    longDescription: "Um feriado prolongado perfeito para recarregar as energias em família. Com pensão completa incluída, você não precisa se preocupar com nada. Café da manhã com produtos frescos da região, almoço com receitas da fazenda e jantar especial. As crianças aproveitam atividades ao ar livre, enquanto os pais relaxam no spa ou exploram as trilhas. Um final de semana de conexão familiar em meio à natureza mais bonita da serra fluminense.",
    highlights: ["Café da manhã diário", "Almoço diário", "Jantar diário", "Welcome drink na chegada"],
    included: ["Pensão completa (café, almoço e jantar)", "Welcome drink", "Atividades recreativas", "Acesso ao spa e piscina", "Trilhas guiadas", "Wi-Fi gratuito", "Estacionamento privativo"],
    kidsFeatures: ["Atividades ao ar livre supervisionadas", "Contato com animais da fazenda", "Oficina de artes com materiais naturais", "Menu infantil em todas as refeições", "Crianças até 6 anos: cortesia"],
    schedule: [
      { day: "Sexta-feira (01/05)", items: ["Check-in a partir das 15h", "Welcome drink", "Passeio pela fazenda", "Jantar de boas-vindas"] },
      { day: "Sábado (02/05)", items: ["Café da manhã estendido", "Trilha guiada pela Mata Atlântica", "Almoço regional", "Recreação infantil", "Spa e piscina", "Jantar especial"] },
      { day: "Domingo (03/05)", items: ["Café da manhã especial", "Atividades em família", "Check-out até 12h"] },
    ],
    image: "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/xb2vhb4dm2l-1770315436578.jpg",
    gallery: [
      "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/xb2vhb4dm2l-1770315436578.jpg",
      "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png",
      "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png",
    ],
    tag: "bem-estar",
    tagColor: "bg-secondary",
  },
];

export default packages;
