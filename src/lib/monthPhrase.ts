const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
export const currentMonth = () => MESES[new Date().getMonth()];
export const monthPhrase = () => `${currentMonth()} no Minha Glória está imperdível`;
export const splashPhrase = () => `${currentMonth()} está imperdível! Últimos quartos`;
