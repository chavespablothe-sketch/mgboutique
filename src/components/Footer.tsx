import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">Minha Glória</h3>
            <p className="text-secondary text-xs tracking-[0.3em] uppercase mb-6">Hotel Boutique</p>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Um refúgio exclusivo em meio à Mata Atlântica, a 18km do centro de Nova Friburgo, 
              no distrito de Banquete, em Bom Jardim-RJ.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Contato</h4>
            <div className="space-y-4 text-sm font-body">
              <a href="tel:+5522997792023" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone size={16} />
                (22) 99779-2023
              </a>
              <a href="mailto:contato@minhagloria.com.br" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail size={16} />
                contato@minhagloria.com.br
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Estrada Rosário km 4,5 - Banquete - Bom Jardim/RJ</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Navegue</h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-body">
              {[
                { label: "Sobre", to: "/sobre" },
                { label: "Chalés", to: "/chales" },
                { label: "Lazer", to: "/lazer" },
                { label: "Gastronomia", to: "/gastronomia" },
                { label: "Pacotes", to: "/pacotes" },
                { label: "Contato", to: "/contato" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/minhagloria" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/minhagloria" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Review Badges */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Avaliações</h4>
            <div className="space-y-5">
              {/* Google Badge */}
              <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                <div className="flex items-center gap-2 mb-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-primary-foreground text-sm font-body font-semibold">Google</span>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < 5 ? "fill-secondary text-secondary" : "text-primary-foreground/30"} />
                  ))}
                  <span className="text-primary-foreground text-sm font-body ml-1 font-semibold">4.9</span>
                </div>
                <p className="text-primary-foreground/50 text-xs font-body">Baseado em avaliações de hóspedes</p>
              </div>

              {/* Booking.com Badge */}
              <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-[#003580] rounded-sm flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">B.</span>
                  </div>
                  <span className="text-primary-foreground text-sm font-body font-semibold">Booking.com</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-[#003580] text-white text-sm font-bold px-2 py-0.5 rounded font-body">
                    9.4
                  </div>
                  <span className="text-primary-foreground text-sm font-body">Fantástico</span>
                </div>
                <p className="text-primary-foreground/50 text-xs font-body">Nota dos hóspedes no Booking.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 text-center text-primary-foreground/50 text-xs font-body">
          © 2026 Minha Glória Hotel Boutique. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
