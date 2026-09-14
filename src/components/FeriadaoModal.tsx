import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "setembroBrasaModalDismissed";
const CAMPAIGN_END = new Date(2026, 8, 30, 23, 59, 59);

const ELEGANT_EASE = [0.22, 1, 0.36, 1] as const;

const FeriadaoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (new Date().getTime() > CAMPAIGN_END.getTime()) return;
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
          className="fixed inset-0 z-[95] bg-[#0a0a0a]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Setembro na Brasa"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease: ELEGANT_EASE }}
            className="relative w-full max-w-[22rem] sm:max-w-[24rem] max-h-[88vh] overflow-y-auto rounded-xl bg-background shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] border border-secondary/25"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/70 transition-all"
            >
              <X size={14} strokeWidth={1.5} />
            </button>

            <Link to="/setembro" onClick={close} className="block">
              <img
                src="/images/setembro-na-brasa.jpg"
                alt="Setembro na Brasa — Festival do Fogo de Chão no Hotel Fazenda Minha Glória"
                className="w-full h-auto"
                decoding="async"
              />
            </Link>

            <div className="p-4 flex flex-col gap-2">
              <Link
                to="/setembro"
                onClick={close}
                className="group inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-primary font-body text-[11px] font-bold uppercase tracking-[0.14em] px-4 py-3 rounded-full shadow-md transition-all"
              >
                Ver programação de setembro
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button
                onClick={close}
                className="font-body text-[10px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors py-0.5"
              >
                Continuar no site
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default FeriadaoModal;
