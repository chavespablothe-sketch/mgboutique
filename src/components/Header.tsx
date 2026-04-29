import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CalendarDays, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import DateSearchBar from "@/components/DateSearchBar";

const navItems = [
  { label: "Acomodações", href: "/acomodacoes" },
  { label: "Experiências", href: "/experiencias" },
  { label: "Gastronomia", href: "/gastronomia" },
  { label: "A Região", href: "/regiao" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

import { OMNIBEES_URL } from "@/lib/omnibees";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-primary/95 backdrop-blur-md border-b border-primary-foreground/5">
          <div className="container mx-auto px-3 lg:px-4">
            <div className="flex items-center justify-between gap-2 h-16 lg:h-24">
              {/* Mobile menu toggle */}
              <button
                className="lg:hidden text-primary-foreground shrink-0"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* Left nav */}
              <nav className="hidden lg:flex items-center gap-6 flex-1">
                {navItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-[13px] tracking-[0.18em] uppercase font-nav font-medium transition-colors whitespace-nowrap ${
                      location.pathname.startsWith(item.href)
                        ? "text-secondary font-bold"
                        : "text-primary-foreground/80 hover:text-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Logo */}
              <Link to="/" className="flex items-center justify-center shrink-0 mx-2 lg:mx-10">
                <img
                  src="/images/logo-light.png"
                  alt="Minha Glória Hotel Boutique"
                  className="h-10 lg:h-16 w-auto object-contain"
                />
              </Link>

              {/* Right nav */}
              <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">
                {navItems.slice(3).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-[13px] tracking-[0.18em] uppercase font-nav font-medium transition-colors whitespace-nowrap ${
                      location.pathname.startsWith(item.href)
                        ? "text-secondary font-bold"
                        : "text-primary-foreground/80 hover:text-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA buttons */}
              <div className="hidden lg:flex items-center gap-3 ml-6">
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    showSearch
                      ? "bg-secondary/20 text-secondary"
                      : "bg-primary-foreground/10 text-primary-foreground/70 hover:text-secondary hover:bg-primary-foreground/15"
                  }`}
                >
                  <Search size={14} />
                </button>
                <Button asChild size="sm" className="bg-promo hover:bg-promo/90 text-promo-foreground font-body text-[10px] uppercase tracking-[0.15em] gap-1.5 px-4 py-2 rounded-full shadow-lg shadow-promo/40 font-bold animate-pulse-soft ring-2 ring-promo/30">
                  <Link to="/tarifas">
                    <Tag size={12} className="fill-promo-foreground" />
                    Promoções
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-[10px] uppercase tracking-[0.15em] gap-1.5 px-4 py-2 rounded-full shadow-lg shadow-cta/20">
                  <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                    Reservar
                  </a>
                </Button>
              </div>

              {/* Mobile/Tablet CTAs */}
              <div className="flex lg:hidden items-center gap-1.5 shrink-0">
                <Button asChild size="sm" className="bg-promo hover:bg-promo/90 text-promo-foreground font-body text-[9px] uppercase tracking-wider gap-1 px-2.5 py-1.5 rounded-full shadow-md shadow-promo/40 font-bold animate-pulse-soft ring-1 ring-promo/30 h-auto">
                  <Link to="/tarifas">
                    <Tag size={10} className="fill-promo-foreground" />
                    Promo
                  </Link>
                </Button>
                <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-[9px] uppercase tracking-wider px-2.5 py-1.5 rounded-full h-auto">
                  <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                    Reservar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Date Search Bar - slides down */}
        <div className={`bg-primary/98 backdrop-blur-md border-b border-primary-foreground/5 transition-all duration-300 overflow-hidden ${showSearch ? 'max-h-40' : 'max-h-0'}`}>
          <div className="container mx-auto px-4 py-4">
            <DateSearchBar />
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/5">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-lg text-sm tracking-[0.2em] uppercase font-body transition-all ${
                    location.pathname.startsWith(item.href)
                      ? "text-secondary bg-secondary/10"
                      : "text-primary-foreground/70 hover:text-secondary hover:bg-secondary/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/tarifas"
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-lg text-sm tracking-[0.2em] uppercase font-body text-promo font-bold"
              >
                Promoções
              </Link>
              <div className="mt-4 pt-4 border-t border-primary-foreground/10 flex gap-3">
                <Button asChild size="lg" className="flex-1 bg-cta hover:bg-cta/90 text-cta-foreground font-body text-sm uppercase tracking-[0.15em] gap-2 rounded-full shadow-lg shadow-cta/20">
                  <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                    <CalendarDays size={16} />
                    Reservar Agora
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
