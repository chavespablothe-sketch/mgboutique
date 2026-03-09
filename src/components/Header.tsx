import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "/sobre" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm tracking-widest uppercase font-body transition-colors ${
                  location.pathname === item.href
                    ? "text-secondary"
                    : "text-primary-foreground/80 hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Minha Glória Hotel Boutique"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm tracking-widest uppercase font-body transition-colors ${
                  location.pathname === item.href
                    ? "text-secondary"
                    : "text-primary-foreground/80 hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+5522997792023"
            className="hidden lg:flex items-center gap-2 text-secondary text-sm font-body"
          >
            <Phone size={14} />
            (22) 99779-2023
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-secondary text-sm tracking-widest uppercase font-body py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+5522997792023" className="flex items-center gap-2 text-secondary text-sm font-body py-2">
              <Phone size={14} />
              (22) 99779-2023
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
