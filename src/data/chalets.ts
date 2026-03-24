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
      "https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png",
      "https://www.minhagloria.com.br/lovable-uploads/2e4a3772-1627-445c-ad0a-bc144dd8a4d5.png",
      "https://www.minhagloria.com.br/lovable-uploads/ad12c7f5-022c-4892-91f8-b68993394270.png",
      "https://www.minhagloria.com.br/images/carousel-new-4.webp",
      "https://www.minhagloria.com.br/lovable-uploads/dd9b430b-970f-407a-9a4f-952850e9d8b7.png",
    ],
    highlight: "Vista para o jardim",
    idealFor: "Casais e famílias pequenas",
  },
  {
    slug: "chale-superior",
    name: "Chalé Superior",
    tagline: "A experiência boutique elevada",
    description: "Para quem quer mais espaço, mais vista e mais momentos de contemplação. A varanda panorâmica emoldura as montanhas como uma obra de arte.",
    longDescription: "Para quem quer mais espaço, mais vista e mais momentos de contemplação. A varanda panorâmica emoldura as montanhas da Mata Atlântica como uma obra de arte que muda a cada hora do dia. O interior amplo combina texturas naturais com acabamentos cuidadosos — madeira de demolição, pedra aparente e tecidos que convidam ao toque. Inclui roupão e chinelos para que você se sinta em casa — uma casa muito especial, onde o luxo é o silêncio e a exclusividade é o espaço.",
    capacity: "2–4 hóspedes",
    size: "70m²",
    beds: "1 cama king + 1 sofá-cama",
    view: "Vista panorâmica",
    priceFrom: "R$ 756,00",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart 55\"", "Varanda panorâmica", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Amenities premium"],
    amenitiesByCategory: {
      quarto: ["Ar condicionado", "Frigobar", "TV Smart 55\"", "Wi-Fi", "Café Nespresso", "Roupão e chinelos"],
      banheiro: ["Amenities premium", "Secador de cabelo", "Toalhas premium"],
      areaExterna: ["Varanda panorâmica", "Vista para as montanhas"],
    },
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/042a304b-19fc-4d61-a524-f78eac0368a9.png",
      "https://www.minhagloria.com.br/lovable-uploads/a6a3395d-5965-482b-b1a6-543cb7840e0f.png",
      "https://www.minhagloria.com.br/lovable-uploads/5de7a725-ff58-4211-b5e2-cf47d5d99ba7.png",
      "https://www.minhagloria.com.br/images/carousel-new-1.jpg",
      "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png",
    ],
    highlight: "Vista panorâmica",
    idealFor: "Casais em busca de conforto",
  },
  {
    slug: "chale-master",
    name: "Chalé Master",
    tagline: "O ápice da exclusividade",
    description: "O ápice da exclusividade no Minha Glória. Banheira de hidromassagem, lareira e decoração premium com peças artesanais da região.",
    longDescription: "O ápice da exclusividade no Minha Glória. Banheira de hidromassagem para mergulhar no relaxamento após um dia de trilhas. Lareira para aquecer conversas e criar aquele momento cinematográfico que você sempre quis viver. Decoração premium com peças artesanais da região — cada objeto conta uma história, cada textura convida ao toque. Este chalé foi pensado para momentos que merecem ser inesquecíveis: aniversários, luas de mel, ou simplesmente a decisão de se dar um presente.",
    capacity: "2–6 hóspedes",
    size: "95m²",
    beds: "1 cama king + 1 sofá-cama duplo",
    view: "Vista para o lago e montanhas",
    priceFrom: "R$ 1.134,00",
    amenities: ["Hidromassagem", "Lareira", "Ar condicionado", "TV Smart 60\"", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Amenities premium", "Minibar selecionado"],
    amenitiesByCategory: {
      quarto: ["Lareira", "Ar condicionado", "TV Smart 60\"", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Minibar selecionado"],
      banheiro: ["Hidromassagem", "Amenities premium", "Secador de cabelo", "Toalhas premium"],
      areaExterna: ["Varanda privativa", "Vista para o lago"],
    },
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/44683466-44b0-4f6e-896a-51a9ae1249fc.png",
      "https://www.minhagloria.com.br/lovable-uploads/85379e6d-f1dc-433a-bc75-77c926ac6d9b.png",
      "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png",
      "https://www.minhagloria.com.br/images/carousel-new-2.webp",
      "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png",
    ],
    highlight: "Hidromassagem + Lareira",
    idealFor: "Casais em momentos especiais",
  },
  {
    slug: "chale-familia",
    name: "Chalé Família",
    tagline: "Onde a família se reúne",
    description: "Projetado para o que realmente importa: estar junto. Dois quartos conectados com área de convivência ampla.",
    longDescription: "Projetado para o que realmente importa: estar junto. Dois quartos conectados por uma área de convivência ampla, onde as crianças podem brincar enquanto os pais relaxam. Espaço generoso para malas, carrinhos e toda a parafernália que viagem em família exige. Berço disponível, proteção nas tomadas e todo o cuidado que pais atentos procuram. A decoração é acolhedora e resistente — pensada para que as crianças possam ser crianças, sem restrições.",
    capacity: "4–6 hóspedes",
    size: "110m²",
    beds: "1 cama queen + 2 camas de solteiro",
    view: "Vista para o jardim e fazendinha",
    priceFrom: "R$ 1.134,00",
    amenities: ["2 quartos", "Ar condicionado", "Frigobar", "TV Smart", "Varanda", "Wi-Fi", "Área de convivência", "Berço disponível", "Proteção tomadas"],
    amenitiesByCategory: {
      quarto: ["2 quartos separados", "Ar condicionado", "Frigobar", "TV Smart", "Wi-Fi", "Berço disponível", "Proteção tomadas"],
      banheiro: ["Amenities naturais", "Secador de cabelo", "Toalhas premium"],
      areaExterna: ["Varanda privativa", "Vista para o jardim e fazendinha", "Área de convivência"],
    },
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/28329729-31a6-47f7-b501-4427f2f9c84a.png",
      "https://www.minhagloria.com.br/lovable-uploads/beaeb973-0a83-4d4d-9bc1-a47ccc40cd59.png",
      "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png",
      "https://www.minhagloria.com.br/images/carousel-new-5.webp",
      "https://www.minhagloria.com.br/images/carousel-new-6.webp",
      "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
    ],
    highlight: "Perfeito para famílias",
    idealFor: "Famílias com crianças",
  },
];

export default chalets;
