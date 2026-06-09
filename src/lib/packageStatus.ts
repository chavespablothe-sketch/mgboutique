import type { HotelPackage } from "@/data/packages";
import { getNextWeekend, type RecurringWeekend } from "@/lib/recurringWeekend";

/**
 * Parse the optional checkOut field (DDMMYYYY) into a Date at end-of-day.
 * Returns null when no checkOut is set (recurring packages stay live).
 */
export function getPackageEndDate(pkg: HotelPackage): Date | null {
  if (!pkg.checkOut || pkg.checkOut.length !== 8) return null;
  const day = parseInt(pkg.checkOut.slice(0, 2), 10);
  const month = parseInt(pkg.checkOut.slice(2, 4), 10) - 1;
  const year = parseInt(pkg.checkOut.slice(4, 8), 10);
  if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) return null;
  return new Date(year, month, day, 23, 59, 59);
}

/** Pacotes ocultos manualmente. */
export const HIDDEN_PACKAGE_SLUGS: Set<string> = new Set([
  "pascoa-2026",
  "tiradentes-2026",
  "dia-das-maes-2026",
  "primeiro-de-maio-2026",
]);

export interface ResolvedDates {
  checkIn?: string;
  checkOut?: string;
  recurring?: RecurringWeekend | null;
}

/**
 * For recurring packages, compute the next weekend's checkIn/checkOut.
 * For fixed packages, return the static dates.
 */
export function resolvePackageDates(pkg: HotelPackage, now: Date = new Date()): ResolvedDates {
  if (pkg.recurringWeekends) {
    const next = getNextWeekend(pkg.recurringWeekends.from, pkg.recurringWeekends.to, now);
    if (!next) return { recurring: null };
    return { checkIn: next.checkIn, checkOut: next.checkOut, recurring: next };
  }
  return { checkIn: pkg.checkIn, checkOut: pkg.checkOut };
}

/** Parse checkIn (DDMMYYYY) into a Date at start-of-day. */
function getPackageCheckInDate(pkg: HotelPackage): Date | null {
  if (!pkg.checkIn || pkg.checkIn.length !== 8) return null;
  const day = parseInt(pkg.checkIn.slice(0, 2), 10);
  const month = parseInt(pkg.checkIn.slice(2, 4), 10) - 1;
  const year = parseInt(pkg.checkIn.slice(4, 8), 10);
  if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) return null;
  return new Date(year, month, day, 0, 0, 0);
}

/**
 * A package is "active" if:
 *  - not in the hidden list, AND
 *  - is recurring with a future weekend, OR
 *  - has a checkIn in the future (today counts as still active), OR
 *  - has no checkIn at all (truly evergreen, e.g. "fim-de-semana" genérico).
 */
export function isPackageActive(pkg: HotelPackage, now: Date = new Date()): boolean {
  if (HIDDEN_PACKAGE_SLUGS.has(pkg.slug)) return false;

  if (pkg.recurringWeekends) {
    const next = getNextWeekend(pkg.recurringWeekends.from, pkg.recurringWeekends.to, now);
    return next !== null;
  }

  const checkIn = getPackageCheckInDate(pkg);
  if (!checkIn) return true;
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  // Stays active until 1 day after check-in (then next package takes over).
  const cutoff = checkIn.getTime() + 24 * 60 * 60 * 1000;
  return cutoff >= today.getTime();
}

/** Returns only currently-active packages, preserving original order. */
export function filterActivePackages(packages: HotelPackage[], now: Date = new Date()): HotelPackage[] {
  return packages.filter((p) => isPackageActive(p, now));
}

/** Light, rotating hover messages — gentle, inviting, never aggressive. */
export const HOVER_MESSAGES: string[] = [
  "Poucos chalés disponíveis para esta data",
  "Reserve agora e venha ser feliz no Minha Glória",
  "Datas concorridas — garanta a sua",
  "Um refúgio à sua espera na serra",
  "Apenas 20 suítes — escolha a sua",
  "O tempo passa mais devagar por aqui",
  "Que tal presentear quem você ama?",
  "Acordar com vista para a Mata Atlântica",
];

export function pickHoverMessage(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  const idx = Math.abs(hash) % HOVER_MESSAGES.length;
  return HOVER_MESSAGES[idx];
}
