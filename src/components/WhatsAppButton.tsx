import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5522997792023?text=Olá! Gostaria de saber mais sobre o Minha Glória Hotel Boutique."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
    aria-label="Fale pelo WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
