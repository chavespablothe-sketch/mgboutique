/** Conteúdo do Festival de Fondue — agosto de 2026 */

export const fondueMenu = {
  carnes: {
    icon: "🥩",
    title: "Carnes selecionadas",
    items: ["Carne bovina", "Frango", "Linguiça", "Cubos de filé suíno"],
  },
  acompanhamentos: {
    icon: "🥦",
    title: "Acompanhamentos",
    items: ["Brócolis", "Couve-flor", "Cenoura", "Batata", "Ovo de codorna", "Torradas"],
  },
  chocolate: {
    icon: "🍫",
    title: "Fondue de chocolate",
    items: ["Morango", "Banana", "Uva", "Maçã", "Abacaxi", "Marshmallows", "Brownie"],
  },
};

export const cartaDeVinhos: { pais: string; flag: string; rotulos: string[] }[] = [
  {
    pais: "Rosés",
    flag: "🌹",
    rotulos: ["Artero Rosado", "Claude Val", "Saurus Rosé"],
  },
  {
    pais: "Brasil",
    flag: "🇧🇷",
    rotulos: [
      "Miolo Testardi Syrah",
      "Miolo Sebrumo Cabernet Sauvignon",
      "Supremo Blend",
      "Almadén Shiraz",
      "Saint Germain Merlot Meio Seco",
      "Casa Valduga Naturelle Suave",
      "Miolo Reserva Merlot",
      "Miolo Reserva Cabernet Sauvignon",
    ],
  },
  {
    pais: "Chile",
    flag: "🇨🇱",
    rotulos: [
      "Viejo Feo Pinot Noir",
      "Viejo Feo Cabernet Sauvignon",
      "Terranoble Carménère / Cabernet Sauvignon",
      "Concha y Toro Malbec",
      "Concha y Toro Cabernet Sauvignon",
      "Concha y Toro Carménère",
      "Santa Carolina Carménère",
      "Santa Carolina Merlot",
      "Santa Carolina Cabernet Sauvignon",
      "Casillero del Diablo Cabernet Sauvignon",
      "Cosecha Tarapacá Merlot",
      "Santa Helena Carménère",
      "Santa Helena Cabernet Sauvignon",
    ],
  },
  {
    pais: "Portugal",
    flag: "🇵🇹",
    rotulos: [
      "Cume do Pereiro Douro",
      "Rita Secret Reserva",
      "Porta 6",
      "Julia Florista",
      "Vinho da Pipa",
    ],
  },
];
