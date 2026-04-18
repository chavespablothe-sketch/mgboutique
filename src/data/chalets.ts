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
  priceFrom: string;
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

const chalets: Chalet[] = [
  {
    slug: "chale-tradicional",
    name: "Chalé Tradicional",
    tagline: "Charme rústico, conforto moderno",
    description: "Seu primeiro abraço da serra. Chalé aconchegante com decoração rústica sofisticada, onde madeira e pedra criam uma atmosfera de acolhimento.",
    longDescription: "Seu primeiro abraço da serra. Chalé aconchegante com decoração rústica sofisticada, onde madeira e pedra criam uma atmosfera de acolhimento. Pela manhã, a luz filtra pelas árvores e entra pela janela. À noite, o silêncio da montanha é a trilha sonora do seu descanso. Cada detalhe foi pensado para que você se sinta em casa — uma casa cercada por Mata Atlântica, onde o tempo passa mais devagar e a natureza cuida de tudo.",
    capacity: "2–4 hóspedes",
    size: "55m²",
    beds: "1 cama queen + 1 sofá-cama",
    view: "Vista para o jardim",
    priceFrom: "R$ 567,00",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart 50\"", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Amenities naturais"],
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "TV Smart 50\"", "Wi-Fi", "Café Nespresso"],
      banheiro: ["Amenities naturais", "Secador de cabelo", "Toalhas premium"],
      areaExterna: ["Varanda privativa", "Vista para o jardim"],
    },
    images: [
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/5241884.jpeg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601853.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601861.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601860.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601862.jpg",
    ],
    highlight: "Vista para o jardim",
    idealFor: "Casais e famílias pequenas",
  },
  {
    slug: "chale-premium",
    name: "Chalé Premium",
    tagline: "Conforto ampliado para a família",
    description: "Espaço pensado para receber a família com conforto. Quarto amplo com cama queen e sofá-cama duplo, climatização e varanda privativa.",
    longDescription: "O Chalé Premium combina o aconchego rústico da serra com o espaço extra que famílias pedem. Cama queen confortável e sofá-cama duplo permitem que pais e filhos pequenos compartilhem o mesmo refúgio sem abrir mão do conforto. A decoração mistura tijolo aparente, madeira de demolição e tecidos naturais, criando uma atmosfera quente que convida a desacelerar. A climatização garante noites perfeitas em qualquer estação, e a varanda privativa é o cenário ideal para o café da manhã contemplando o jardim.",
    capacity: "2–4 hóspedes",
    size: "65m²",
    beds: "1 cama queen + 2 camas de solteiro",
    view: "Vista para o jardim",
    priceFrom: "R$ 680,00",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Amenities naturais"],
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "TV Smart", "Wi-Fi", "Café Nespresso"],
      banheiro: ["Amenities naturais", "Secador de cabelo", "Toalhas premium"],
      areaExterna: ["Varanda privativa", "Vista para o jardim"],
    },
    images: [
      "/images/chales/premium-2.jpg",
      "/images/chales/premium-1.jpg",
      "/images/chales/premium-3.jpg",
      "/images/chales/premium-4.jpg",
    ],
    highlight: "Espaço para a família",
    idealFor: "Famílias com 1 ou 2 crianças",
  },
  {
    slug: "chale-superior",
    name: "Chalé Superior",
    tagline: "A experiência boutique elevada",
    description: "Para quem quer mais espaço, mais vista e mais momentos de contemplação. Lareira, cama king e atmosfera rústica sofisticada.",
    longDescription: "Para quem quer mais espaço, mais vista e mais momentos de contemplação. O Chalé Superior é um refúgio elevado: cama king de madeira maciça, lareira a lenha que aquece as noites frias da serra e detalhes em tijolo aparente que dão personalidade ao ambiente. O interior amplo combina texturas naturais com acabamentos cuidadosos — madeira de demolição, granito polido no banheiro e tecidos que convidam ao toque. O luxo aqui é o silêncio, a vista para a fazendinha e o tempo que parece andar mais devagar.",
    capacity: "2–4 hóspedes",
    size: "70m²",
    beds: "1 cama king + 1 sofá-cama",
    view: "Vista para a fazendinha",
    priceFrom: "R$ 756,00",
    amenities: ["Lareira", "Ar condicionado", "Frigobar", "TV Smart", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Amenities premium"],
    amenitiesByCategory: {
      quarto: ["Lareira a lenha", "Ar condicionado", "Frigobar", "TV Smart", "Wi-Fi", "Café Nespresso", "Roupão e chinelos"],
      banheiro: ["Amenities premium", "Secador de cabelo", "Toalhas premium", "Box amplo"],
      areaExterna: ["Varanda privativa", "Vista para a fazendinha"],
    },
    images: [
      "/images/chales/superior-1.jpg",
      "/images/chales/superior-2.jpg",
      "/images/chales/superior-3.jpg",
      "/images/chales/superior-4.jpg",
      "/images/chales/superior-5.jpg",
    ],
    highlight: "Lareira a lenha",
    idealFor: "Casais em busca de conforto",
  },
  {
    slug: "chale-romantico",
    name: "Chalé Romântico",
    tagline: "O ápice da exclusividade",
    description: "O ápice da exclusividade no Minha Glória. Banheira de hidromassagem, lareira e decoração premium com peças artesanais da região.",
    longDescription: "O ápice da exclusividade no Minha Glória. Banheira de hidromassagem para mergulhar no relaxamento após um dia de trilhas. Lareira para aquecer conversas e criar aquele momento cinematográfico que você sempre quis viver. Decoração premium com peças artesanais da região — cada objeto conta uma história, cada textura convida ao toque. Este chalé foi pensado para momentos que merecem ser inesquecíveis: aniversários, luas de mel, ou simplesmente a decisão de se dar um presente.",
    capacity: "2 hóspedes",
    size: "95m²",
    beds: "1 cama king",
    view: "Vista para o lago e montanhas",
    priceFrom: "R$ 1.134,00",
    amenities: ["Hidromassagem", "Lareira", "Ar condicionado", "TV Smart 60\"", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Amenities premium", "Minibar selecionado"],
    amenitiesByCategory: {
      quarto: ["Lareira", "Ar condicionado", "TV Smart 60\"", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Minibar selecionado"],
      banheiro: ["Hidromassagem", "Amenities premium", "Secador de cabelo", "Toalhas premium"],
      areaExterna: ["Varanda privativa", "Vista para o lago"],
    },
    images: [
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601890.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601898.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601895.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601876.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601899.jpg",
    ],
    highlight: "Hidromassagem + Lareira",
    idealFor: "Casais em momentos especiais",
  },
  {
    slug: "chale-familia",
    name: "Chalé Família",
    tagline: "Onde a família se reúne",
    description: "Projetado para o que realmente importa: estar junto. Casa ampla com quarto principal e espaço extra para crianças.",
    longDescription: "Projetado para o que realmente importa: estar junto. A Casa Família é a maior acomodação do Minha Glória — com cama queen extra-grande e duas camas de solteiro, acomoda toda a família com folga. Espaço generoso para malas, carrinhos e toda a parafernália que viagem em família exige. Berço disponível, proteção nas tomadas e todo o cuidado que pais atentos procuram. A decoração é acolhedora e resistente — pensada para que as crianças possam ser crianças, sem restrições.",
    capacity: "4–6 hóspedes",
    size: "110m²",
    beds: "1 cama queen + 2 camas de solteiro",
    view: "Vista para o jardim e fazendinha",
    priceFrom: "R$ 1.134,00",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart", "Varanda", "Wi-Fi", "Área de convivência", "Berço disponível", "Proteção tomadas"],
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "TV Smart", "Wi-Fi", "Berço disponível", "Proteção tomadas"],
      banheiro: ["Amenities naturais", "Secador de cabelo", "Toalhas premium"],
      areaExterna: ["Varanda privativa", "Vista para o jardim e fazendinha", "Área de convivência"],
    },
    images: [
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601845.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601846.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601847.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601856.jpg",
      "https://media.omnibees.com/Images/21954/RoomTypes/570x428/1601851.jpg",
    ],
    highlight: "Perfeito para famílias",
    idealFor: "Famílias com crianças",
  },
];

export default chalets;
