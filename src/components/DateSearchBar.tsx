import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarDays, ArrowRight, Users, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const OMNIBEES_BASE = "https://book.omnibees.com";

const DateSearchBar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    // Build Omnibees URL with params
    const params = new URLSearchParams();
    if (checkIn) params.set("CheckIn", format(checkIn, "ddMMyyyy"));
    if (checkOut) params.set("CheckOut", format(checkOut, "ddMMyyyy"));
    params.set("NRooms", "1");
    params.set("ad", String(adults));
    params.set("ch", String(children));
    params.set("lang", "pt-BR");

    // TODO: Replace with actual Omnibees hotel/chain ID
    const omnibeeUrl = `${OMNIBEES_BASE}/hotelresults?${params.toString()}`;
    window.open(omnibeeUrl, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
      {/* Check-in */}
      <Popover>
        <PopoverTrigger asChild>
          <button className={cn(
            "flex items-center gap-2 bg-primary-foreground/8 rounded-xl px-4 py-3 text-left font-body text-sm flex-1 min-w-0 transition-all hover:bg-primary-foreground/12 border border-primary-foreground/5",
            !checkIn && "text-primary-foreground/40"
          )}>
            <CalendarDays size={15} className="text-secondary shrink-0" />
            {checkIn ? (
              <span className="text-primary-foreground text-sm">{format(checkIn, "dd MMM yyyy", { locale: ptBR })}</span>
            ) : (
              <span className="text-sm">Check-in</span>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={checkIn}
            onSelect={setCheckIn}
            disabled={(date) => date < new Date()}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>

      {/* Check-out */}
      <Popover>
        <PopoverTrigger asChild>
          <button className={cn(
            "flex items-center gap-2 bg-primary-foreground/8 rounded-xl px-4 py-3 text-left font-body text-sm flex-1 min-w-0 transition-all hover:bg-primary-foreground/12 border border-primary-foreground/5",
            !checkOut && "text-primary-foreground/40"
          )}>
            <CalendarDays size={15} className="text-secondary shrink-0" />
            {checkOut ? (
              <span className="text-primary-foreground text-sm">{format(checkOut, "dd MMM yyyy", { locale: ptBR })}</span>
            ) : (
              <span className="text-sm">Check-out</span>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={checkOut}
            onSelect={setCheckOut}
            disabled={(date) => date < (checkIn || new Date())}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>

      {/* Adults */}
      <div className="flex items-center gap-2 bg-primary-foreground/8 rounded-xl px-4 py-3 font-body text-sm border border-primary-foreground/5">
        <Users size={15} className="text-secondary shrink-0" />
        <select
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="bg-transparent text-primary-foreground outline-none cursor-pointer text-sm"
        >
          {[1,2,3,4,5,6].map(n => (
            <option key={n} value={n} className="text-foreground bg-background">{n} adulto{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      {/* Children */}
      <div className="flex items-center gap-2 bg-primary-foreground/8 rounded-xl px-4 py-3 font-body text-sm border border-primary-foreground/5">
        <Baby size={15} className="text-secondary shrink-0" />
        <select
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          className="bg-transparent text-primary-foreground outline-none cursor-pointer text-sm"
        >
          {[0,1,2,3,4].map(n => (
            <option key={n} value={n} className="text-foreground bg-background">{n} criança{n !== 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      {/* Search CTA */}
      <Button
        onClick={handleSearch}
        size="lg"
        className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-sm uppercase tracking-[0.15em] gap-2 rounded-xl px-7 whitespace-nowrap shadow-lg shadow-cta/20 transition-all hover:shadow-cta/30 hover:scale-[1.02]"
      >
        Reservar <ArrowRight size={14} />
      </Button>
    </div>
  );
};

export default DateSearchBar;
