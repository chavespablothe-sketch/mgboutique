import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "maesLightboxDismissed";
const SHOW_DELAY_MS = 1800;

const MaesPromoLightbox = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Promoção Dia das Mães"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[360px] sm:max-w-[400px] bg-card rounded-2xl overflow-hidden shadow-2xl border border-secondary/30"
          >
            <button
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X size={16} />
            </button>

            <Link to="/pacotes/dia-das-maes-2026" onClick={handleClose} className="block group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/promo-dia-das-maes-2026.jpeg"
                  alt="Festival das Rainhas — Dia das Mães 2026"
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-secondary text-primary text-[10px] font-body font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow-md">
                  15% OFF · últimos quartos
                </span>
              </div>

              <div className="p-4 sm:p-5 bg-card">
                <p className="font-display text-lg text-foreground font-semibold leading-tight mb-1">
                  Festival das Rainhas
                </p>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  8 a 10 de maio · 2 noites · pensão completa
                </p>

                <span className="w-full inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta/90 text-cta-foreground font-body text-xs uppercase tracking-[0.15em] px-5 py-3 rounded-full shadow-md transition-all">
                  Ver pacote <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default MaesPromoLightbox;
