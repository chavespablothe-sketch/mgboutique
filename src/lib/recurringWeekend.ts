/**
 * Helpers for packages that recur on every weekend within a date range.
 * The package's "current" check-in is dynamically the NEXT Friday (Sex–Dom)
 * from today, clamped inside the recurrence window.
 */

const MONTHS_PT = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

function parse(ddmmyyyy: string): Date {
  const d = parseInt(ddmmyyyy.slice(0, 2), 10);
  const m = parseInt(ddmmyyyy.slice(2, 4), 10) - 1;
  const y = parseInt(ddmmyyyy.slice(4, 8), 10);
  return new Date(y, m, d);
}

function format(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}${mm}${yyyy}`;
}

function startOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

/** Returns the next Friday on or after the given date. */
function nextFriday(from: Date): Date {
  const d = startOfDay(from);
  const dow = d.getDay(); // 0=Sun, 5=Fri
  // Days to next Friday: (5 - dow + 7) % 7. If today is Friday, stay (0).
  const offset = (5 - dow + 7) % 7;
  d.setDate(d.getDate() + offset);
  return d;
}

export interface RecurringWeekend {
  checkIn: string;   // DDMMYYYY
  checkOut: string;  // DDMMYYYY
  label: string;     // "16 a 18 de maio"
  shortLabel: string; // "FDS · 16 a 18 de maio"
}

/**
 * Compute the next Fri–Sun weekend within [rangeStart, rangeEnd].
 * If we're past the range, return null.
 */
export function getNextWeekend(
  rangeStartDDMMYYYY: string,
  rangeEndDDMMYYYY: string,
  now: Date = new Date(),
): RecurringWeekend | null {
  const rangeStart = startOfDay(parse(rangeStartDDMMYYYY));
  const rangeEnd = startOfDay(parse(rangeEndDDMMYYYY));
  const today = startOfDay(now);

  // Always look for the next upcoming Friday (a Sat/Sun today means this weekend
  // is ending — so we jump to next week's weekend).
  const dow = today.getDay();
  let candidate: Date;
  if (dow === 5) candidate = today; // Friday: this weekend is starting today
  else candidate = nextFriday(new Date(today.getTime() + 86400000)); // tomorrow onward

  if (candidate < rangeStart) candidate = nextFriday(rangeStart);
  if (candidate > rangeEnd) return null;

  const checkOutDate = new Date(candidate);
  checkOutDate.setDate(checkOutDate.getDate() + 2); // Sunday
  // Cap to range end (inclusive)
  if (checkOutDate > rangeEnd) checkOutDate.setTime(rangeEnd.getTime());

  const sameMonth = candidate.getMonth() === checkOutDate.getMonth();
  const startDay = candidate.getDate();
  const endDay = checkOutDate.getDate();
  const monthName = MONTHS_PT[checkOutDate.getMonth()];
  const startMonth = MONTHS_PT[candidate.getMonth()];

  const label = sameMonth
    ? `${startDay} a ${endDay} de ${monthName}`
    : `${startDay} de ${startMonth} a ${endDay} de ${monthName}`;

  return {
    checkIn: format(candidate),
    checkOut: format(checkOutDate),
    label,
    shortLabel: `Próximo FDS · ${label}`,
  };
}
