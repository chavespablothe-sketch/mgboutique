import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Chalés", href: "#acomodacoes" },
  { label: "Lazer", href: "#comodidades" },
  { label: "Gastronomia", href: "#gastronomia" },
  { label: "Pacotes", href: "#ofertas" },
  { label: "Contato", href: "#localizacao" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary-foreground/80 hover:text-secondary text-sm tracking-widest uppercase font-body transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a href="#" className="flex flex-col items-center">
            <span className="font-display text-2xl lg:text-3xl text-primary-foreground font-semibold tracking-wide">
              Minha Glória
            </span>
            <span className="text-secondary text-[10px] tracking-[0.3em] uppercase font-body">
              Hotel Boutique
            </span>
          </a>

          {/* Right nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary-foreground/80 hover:text-secondary text-sm tracking-widest uppercase font-body transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Phone */}
          <a
            href="tel:+552499999999"
            className="hidden lg:flex items-center gap-2 text-secondary text-sm font-body"
          >
            <Phone size={14} />
            (24) 9999-9999
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-secondary text-sm tracking-widest uppercase font-body py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+552499999999" className="flex items-center gap-2 text-secondary text-sm font-body py-2">
              <Phone size={14} />
              (24) 9999-9999
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
