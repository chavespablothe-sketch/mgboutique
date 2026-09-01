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
  { icon: Flame, title: "Fogo de Chão", text: "Carnes nobres na brasa." },
  { icon: UtensilsCrossed, title: "Feijoada & Costela", text: "Sábado e domingo especiais." },
  { icon: Music, title: "Música ao Vivo", text: "Noite animada no sábado." },
  { icon: Leaf, title: "Vida de Fazenda", text: "Fazendinha e charrete." },
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
          transition={{ duration: 0.35, ease: ELEGANT_EASE }}
          className="fixed inset-0 z-[95] bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Feriadão de 7 de Setembro"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: ELEGANT_EASE }}
            className="feriadao-modal-card relative w-full max-w-[22rem] max-h-[82vh] overflow-y-auto rounded-xl bg-background shadow-[0_24px_80px_-20px_rgba(0,0,0,0.65)] border border-secondary/25"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/60 transition-all"
            >
              <X size={13} strokeWidth={1.5} />
            </button>

            <div className="relative h-28 sm:h-32 shrink-0">
              <img
                src={pacoteImages.setembro2026}
                alt="Feriadão de 7 de Setembro no Hotel Fazenda Minha Glória"
                className="absolute inset-0 w-full h-full object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-block bg-secondary text-primary font-body text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full shadow-md">
                  Últimos quartos
                </span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4">
              <p className="font-body text-[9px] tracking-[0.26em] uppercase text-secondary mb-0.5">
                4 a 7 de setembro · 3 noites
              </p>
              <h2 className="font-display text-lg sm:text-xl leading-tight text-primary mb-1">
                Feriadão na serra
              </h2>
              <p className="font-body text-[11px] text-muted-foreground italic mb-3">
                Pensão completa e programação especial.
              </p>

              <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-3">
                {programacao.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-2">
                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
                      <Icon size={11} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-body text-[11px] font-semibold text-foreground leading-snug">
                        {title}
                      </p>
                      <p className="font-body text-[10px] text-muted-foreground leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 mb-3 rounded-md bg-muted/70 border border-border px-2.5 py-1.5">
                <BedDouble size={12} className="text-primary shrink-0" strokeWidth={1.75} />
                <p className="font-body text-[10px] text-foreground/80 leading-snug">
                  Mínimo de <strong>2 diárias</strong> — poucos quartos.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  to="/setembro"
                  onClick={close}
                  className="group inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-primary font-body text-[10px] font-bold uppercase tracking-[0.14em] px-4 py-2.5 rounded-full shadow-md transition-all"
                >
                  Ver programação
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <button
                  onClick={close}
                  className="font-body text-[10px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors py-0.5"
                >
                  Agora não
                </button>
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
