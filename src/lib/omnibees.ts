/**
 * Omnibees booking URL builder for Minha Glória Hotel Boutique (q=21954)
 */

const OMNIBEES_BASE = "https://book.omnibees.com/hotelresults";
const HOTEL_ID = "21954";

interface OmnibeesParams {
  checkIn?: string;   // ddMMyyyy
  checkOut?: string;  // ddMMyyyy
  adults?: number;
  children?: number;
  rooms?: number;
  coupon?: string;
}

export function buildOmnibeesUrl(params: OmnibeesParams = {}): string {
  const qs = new URLSearchParams();
  qs.set("q", HOTEL_ID);
  qs.set("NRooms", String(params.rooms ?? 1));
  if (params.checkIn) qs.set("CheckIn", params.checkIn);
  if (params.checkOut) qs.set("CheckOut", params.checkOut);
  qs.set("ad", String(params.adults ?? 2));
  qs.set("ch", String(params.children ?? 0));
  if (params.coupon) qs.set("Code", params.coupon);
  return `${OMNIBEES_BASE}?${qs.toString()}`;
}

/** Generic booking URL (no dates) */
export const OMNIBEES_URL = buildOmnibeesUrl();
