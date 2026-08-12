import { describe, expect, it } from "vitest";
import type { HotelPackage } from "@/data/packages";
import { getNextWeekend } from "@/lib/recurringWeekend";
import { getUpcomingPackages, isPackageActive } from "@/lib/packageStatus";

const instant = (iso: string) => new Date(iso);

function pkg(slug: string, checkIn: string): HotelPackage {
  return {
    slug,
    title: slug,
    shortTitle: slug,
    period: slug,
    nights: "2 noites",
    price: "",
    pricePerNight: "",
    priceNote: "",
    description: "",
    longDescription: "",
    highlights: [],
    included: [],
    kidsFeatures: [],
    schedule: [],
    image: "",
    gallery: [],
    tag: "",
    tagColor: "",
    checkIn,
  };
}

describe("weekly package rollover in Brasilia", () => {
  const start = "01082026";
  const end = "31082026";

  it("keeps the current weekend on Friday", () => {
    expect(getNextWeekend(start, end, instant("2026-08-07T18:00:00Z"))?.checkIn).toBe("07082026");
  });

  it("keeps the current weekend before Saturday at 11:00", () => {
    expect(getNextWeekend(start, end, instant("2026-08-08T13:59:00Z"))?.checkIn).toBe("07082026");
  });

  it("switches at exactly Saturday 11:00", () => {
    expect(getNextWeekend(start, end, instant("2026-08-08T14:00:00Z"))?.checkIn).toBe("14082026");
  });

  it("handles a month boundary", () => {
    expect(getNextWeekend("01082026", "30092026", instant("2026-08-29T14:00:00Z"))?.checkIn).toBe("04092026");
  });

  it("returns null after the recurrence window", () => {
    expect(getNextWeekend(start, end, instant("2026-09-01T12:00:00Z"))).toBeNull();
  });
});

describe("upcoming packages", () => {
  const now = instant("2026-08-12T15:00:00Z");

  it("excludes a package whose check-in passed", () => {
    expect(isPackageActive(pkg("past", "11082026"), now)).toBe(false);
  });

  it("orders valid packages by check-in", () => {
    expect(getUpcomingPackages([
      pkg("later", "20082026"),
      pkg("past", "11082026"),
      pkg("next", "14082026"),
    ], now).map((item) => item.slug)).toEqual(["next", "later"]);
  });
});