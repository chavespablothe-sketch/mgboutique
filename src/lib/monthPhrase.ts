const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

/**
 * Returns the "promo month": current month, but rolls over to the NEXT month
 * starting 1 day after the last weekend (Sun) of the current month.
 * Ex.: Last Sunday of April = 26/04. From 28/04 onward, we already say "Maio".
 */
function getPromoMonthIndex(today = new Date()): number {
  const year = today.getFullYear();
  const month = today.getMonth();
  // Find last Sunday of the current month
  const lastDay = new Date(year, month + 1, 0); // last day of month
  const dow = lastDay.getDay(); // 0 = Sun
  const lastSunday = new Date(year, month, lastDay.getDate() - dow);
  // Cutoff: 1 day after the last Sunday (start of Tuesday 00:00)
  const cutoff = new Date(year, month, lastSunday.getDate() + 2);
  if (today.getTime() >= cutoff.getTime()) {
    return (month + 1) % 12;
  }
  return month;
}

export const currentMonth = () => MESES[getPromoMonthIndex()];
export const monthPhrase = () => `${currentMonth()} no Minha Glória está imperdível`;
export const splashPhrase = () => `${currentMonth()} está imperdível! Últimos quartos`;
