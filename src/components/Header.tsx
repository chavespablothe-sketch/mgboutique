import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import DateSearchBar from "@/components/DateSearchBar";

const navItems = [
  { label: "O Hotel", href: "/sobre" },
  { label: "Chalés", href: "/chales" },
  { label: "Experiências", href: "/experiencias" },
  { label: "Gastronomia", href: "/gastronomia" },
  { label: "Pacotes", href: "/pacotes" },
  { label: "Contato", href: "/contato" },
];

const OMNIBEES_URL = "https://book.omnibees.com";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-primary/95 backdrop-blur-md border-b border-primary-foreground/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Mobile menu toggle */}
              <button
                className="lg:hidden text-primary-foreground"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* Left nav */}
              <nav className="hidden lg:flex items-center gap-5 flex-1">
                {navItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-[10px] tracking-[0.2em] uppercase font-body transition-colors whitespace-nowrap ${
                      location.pathname === item.href
                        ? "text-secondary font-bold"
                        : "text-primary-foreground/70 hover:text-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Logo — centered, fixed width so it doesn't push nav */}
              <Link to="/" className="flex items-center justify-center lg:w-32 shrink-0">
                <img
                  src="/images/logo-light.png"
                  alt="Minha Glória Hotel Boutique"
                  className="h-8 lg:h-10 w-auto object-contain"
                />
              </Link>

              {/* Right nav */}
              <nav className="hidden lg:flex items-center gap-5 flex-1 justify-end">
                {navItems.slice(3).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-[10px] tracking-[0.2em] uppercase font-body transition-colors whitespace-nowrap ${
                      location.pathname === item.href
                        ? "text-secondary font-bold"
                        : "text-primary-foreground/70 hover:text-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA buttons */}
              <div className="hidden lg:flex items-center gap-3 ml-4">
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
                <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-[10px] uppercase tracking-[0.15em] gap-2 px-4 py-2 rounded-full shadow-lg shadow-cta/20">
                  <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                    <CalendarDays size={13} />
                    Reservar
                  </a>
                </Button>
              </div>

              {/* Mobile phone */}
              <a href="tel:+5522997792023" className="lg:hidden text-secondary">
                <Phone size={18} />
              </a>
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
              {/* Mobile date search */}
              <div className="mb-4 pb-4 border-b border-primary-foreground/10">
                <DateSearchBar />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-lg text-sm tracking-[0.2em] uppercase font-body transition-all ${
                    location.pathname === item.href
                      ? "text-secondary bg-secondary/10"
                      : "text-primary-foreground/70 hover:text-secondary hover:bg-secondary/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                <Button asChild size="lg" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body text-sm uppercase tracking-[0.15em] gap-2 rounded-full shadow-lg shadow-cta/20">
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
