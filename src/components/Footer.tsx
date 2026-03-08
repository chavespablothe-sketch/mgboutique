import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">Minha Glória</h3>
            <p className="text-secondary text-xs tracking-[0.3em] uppercase mb-6">Hotel Boutique</p>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Um refúgio exclusivo cercado pela natureza exuberante da Mata Atlântica, 
              onde o luxo encontra a tranquilidade.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Contato</h4>
            <div className="space-y-4 text-sm font-body">
              <a href="tel:+552499999999" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone size={16} />
                (24) 9999-9999
              </a>
              <a href="mailto:reservas@minhagloria.com.br" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail size={16} />
                reservas@minhagloria.com.br
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Rodovia Volta Redonda - Conservatória, Km 12, Volta Redonda - RJ</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Navegue</h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-body">
              {["Sobre", "Chalés", "Lazer", "Gastronomia", "Pacotes", "Contato"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
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
