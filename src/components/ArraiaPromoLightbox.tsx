import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "arraiaLightboxDismissed";
const SHOW_DELAY_MS = 1800;

const ArraiaPromoLightbox = () => {
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
          aria-label="Promoção Arraiá de Inverno"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[230px] sm:max-w-[250px] bg-card rounded-2xl overflow-hidden shadow-2xl border border-secondary/30"
          >
            <button
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute top-1.5 right-1.5 z-10 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X size={14} />
            </button>

            <Link to="/pacotes/arraia-inverno-2026" onClick={handleClose} className="block group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/pacote-arraia-inverno-2026.png"
                  alt="Arraiá de Inverno — Festa Junina no Minha Glória"
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 bg-secondary text-primary text-[9px] font-body font-semibold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full shadow-md">
                  <Sparkles size={9} /> Novidade
                </span>
              </div>

              <div className="p-3 bg-card">
                <p className="font-display text-sm text-foreground font-semibold leading-tight mb-0.5">
                  Vem pro Arraiá! 🤠
                </p>
                <p className="font-body text-[10px] text-muted-foreground mb-2.5">
                  Todos os FDS de junho e julho · 19/06 a 25/07
                </p>

                <span className="w-full inline-flex items-center justify-center gap-1.5 bg-cta hover:bg-cta/90 text-cta-foreground font-body text-[10px] uppercase tracking-[0.12em] px-3 py-2 rounded-full shadow-md transition-all">
                  Ver pacote <ArrowRight size={11} />
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

export default ArraiaPromoLightbox;
