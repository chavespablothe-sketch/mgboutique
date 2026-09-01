import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight, Flame, Music, Leaf, UtensilsCrossed, BedDouble } from "lucide-react";
import { pacoteImages } from "@/lib/siteImages";

const STORAGE_KEY = "feriadaoModalDismissed:sete-de-setembro-2026";
const FERIADAO_END = new Date(2026, 8, 7, 23, 59, 59);

const ELEGANT_EASE = [0.22, 1, 0.36, 1] as const;

const programacao = [
  {
    icon: Flame,
    title: "Festival Fogo de Chão",
    text: "Carnes nobres na brasa e buffet caipira completo durante todo o feriadão.",
  },
  {
    icon: UtensilsCrossed,
    title: "Feijoada & Costela das 12 Horas",
    text: "Feijoada mega especial no sábado e costela assada por 12 horas no domingo.",
  },
  {
    icon: Music,
    title: "Música ao Vivo",
    text: "Noites especiais com música ao vivo no sábado do feriado.",
  },
  {
    icon: Leaf,
    title: "Vida de Fazenda",
    text: "Fazendinha, colheita, charrete e lazer completo em meio à natureza.",
  },
];

const FeriadaoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (new Date().getTime() > FERIADAO_END.getTime()) return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const timer = window.setTimeout(() => setOpen(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: ELEGANT_EASE }}
          className="fixed inset-0 z-[95] bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Feriadão de 7 de Setembro"
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.55, ease: ELEGANT_EASE }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg bg-background shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] border border-secondary/25"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/35 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/55 transition-all"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="grid md:grid-cols-[1fr_1.15fr]">
              {/* Image side */}
              <div className="relative h-52 md:h-auto md:min-h-full">
                <img
                  src={pacoteImages.setembro2026}
                  alt="Feriadão de 7 de Setembro no Hotel Fazenda Minha Glória"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6">
                  <span className="inline-block bg-secondary text-primary font-body text-[9px] font-bold uppercase tracking-[0.24em] px-3 py-1.5 rounded-full shadow-md">
                    Últimos quartos
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-6 md:p-8">
                <p className="font-body text-[10px] tracking-[0.32em] uppercase text-secondary mb-2">
                  4 a 7 de setembro · 3 noites
                </p>
                <h2 className="font-display text-2xl md:text-[28px] leading-tight text-primary mb-2">
                  Feriadão da Independência na serra
                </h2>
                <p className="font-body text-sm text-muted-foreground italic mb-5">
                  Pensão completa e uma programação inteira desenhada para o feriado mais saboroso do ano.
                </p>

                <ul className="space-y-3.5 mb-6">
                  {programacao.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="mt-0.5 w-8 h-8 shrink-0 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
                        <Icon size={15} strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="font-body text-[13px] font-semibold text-foreground leading-snug">
                          {title}
                        </p>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 mb-5 rounded-md bg-muted/70 border border-border px-3.5 py-2.5">
                  <BedDouble size={15} className="text-primary shrink-0" strokeWidth={1.75} />
                  <p className="font-body text-[11px] text-foreground/80 leading-snug">
                    Pacote com <strong>mínimo de apenas 2 diárias</strong> — e restam poucos quartos disponíveis.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/setembro"
                    onClick={close}
                    className="group inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-primary font-body text-[11px] font-bold uppercase tracking-[0.18em] px-6 py-3.5 rounded-full shadow-md transition-all"
                  >
                    Ver programação completa
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <button
                    onClick={close}
                    className="font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    Agora não
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default FeriadaoModal;
