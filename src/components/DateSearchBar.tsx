import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarDays, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const DateSearchBar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    const checkInStr = checkIn ? format(checkIn, "dd/MM/yyyy") : "";
    const checkOutStr = checkOut ? format(checkOut, "dd/MM/yyyy") : "";
    const msg = `Olá! Gostaria de verificar disponibilidade:\n📅 Check-in: ${checkInStr}\n📅 Check-out: ${checkOutStr}\n👥 Hóspedes: ${guests}\n\nPodem me ajudar?`;
    window.open(`https://wa.me/5522997792023?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      {/* Check-in */}
      <Popover>
        <PopoverTrigger asChild>
          <button className={cn(
            "flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-3 text-left font-body text-sm flex-1 min-w-0 transition-colors hover:bg-primary-foreground/15",
            !checkIn && "text-primary-foreground/50"
          )}>
            <CalendarDays size={16} className="text-secondary shrink-0" />
            {checkIn ? (
              <span className="text-primary-foreground">{format(checkIn, "dd MMM yyyy", { locale: ptBR })}</span>
            ) : (
              <span>Check-in</span>
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
            "flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-3 text-left font-body text-sm flex-1 min-w-0 transition-colors hover:bg-primary-foreground/15",
            !checkOut && "text-primary-foreground/50"
          )}>
            <CalendarDays size={16} className="text-secondary shrink-0" />
            {checkOut ? (
              <span className="text-primary-foreground">{format(checkOut, "dd MMM yyyy", { locale: ptBR })}</span>
            ) : (
              <span>Check-out</span>
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

      {/* Guests */}
      <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-3 font-body text-sm">
        <Users size={16} className="text-secondary shrink-0" />
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="bg-transparent text-primary-foreground outline-none cursor-pointer"
        >
          {[1,2,3,4,5,6].map(n => (
            <option key={n} value={n} className="text-foreground bg-background">{n} hóspede{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      {/* Search CTA */}
      <Button
        onClick={handleSearch}
        size="lg"
        className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-sm uppercase tracking-[0.15em] gap-2 rounded-lg px-6 whitespace-nowrap shadow-lg"
      >
        Consultar <ArrowRight size={14} />
      </Button>
    </div>
  );
};

export default DateSearchBar;
