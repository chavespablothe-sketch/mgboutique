import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "O Hotel", href: "/sobre" },
  { label: "Chalés", href: "/chales" },
  { label: "Lazer", href: "/lazer" },
  { label: "Gastronomia", href: "/gastronomia" },
  { label: "Pacotes", href: "/pacotes" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary/95 backdrop-blur-md border-b border-primary-foreground/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu */}
            <button
              className="lg:hidden text-primary-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Left nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-[11px] tracking-[0.25em] uppercase font-body transition-colors ${
                    location.pathname === item.href
                      ? "text-secondary font-bold"
                      : "text-primary-foreground/70 hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <img
                src="/images/logo.png"
                alt="Minha Glória Hotel Boutique"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Right nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-[11px] tracking-[0.25em] uppercase font-body transition-colors ${
                    location.pathname === item.href
                      ? "text-secondary font-bold"
                      : "text-primary-foreground/70 hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-[11px] uppercase tracking-[0.15em] gap-2 px-5 py-2.5 rounded-full shadow-lg">
                <a href="https://wa.me/5522997792023?text=Olá! Gostaria de verificar disponibilidade no Minha Glória." target="_blank" rel="noopener noreferrer">
                  <CalendarDays size={14} />
                  Reservar
                </a>
              </Button>
            </div>

            {/* Mobile phone */}
            <a href="tel:+5522997792023" className="lg:hidden text-secondary">
              <Phone size={20} />
            </a>
          </div>
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
                  location.pathname === item.href
                    ? "text-secondary bg-secondary/10"
                    : "text-primary-foreground/70 hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-primary-foreground/10">
              <Button asChild size="lg" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body text-sm uppercase tracking-[0.15em] gap-2 rounded-full">
                <a href="https://wa.me/5522997792023?text=Olá! Gostaria de verificar disponibilidade." target="_blank" rel="noopener noreferrer">
                  <CalendarDays size={16} />
                  Verificar Disponibilidade
                </a>
              </Button>
            </div>
            <a href="tel:+5522997792023" className="flex items-center gap-2 text-secondary/80 text-sm font-body py-3 px-4 mt-2">
              <Phone size={14} /> (22) 99779-2023
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
