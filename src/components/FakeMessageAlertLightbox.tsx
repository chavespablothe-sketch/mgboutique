import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Phone, Mail } from "lucide-react";

const STORAGE_KEY = "fakeMsgLightboxDismissed";
const SHOW_DELAY_MS = 6500; // appears after the Mães lightbox is likely closed

const FakeMessageAlertLightbox = () => {
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
          className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Aviso importante sobre mensagens fraudulentas"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[320px] sm:max-w-[360px] bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <button
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X size={14} />
            </button>

            <div className="px-5 pt-7 pb-5">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center">
                  <AlertTriangle size={22} className="text-secondary" />
                </div>
              </div>

              <h3 className="font-display text-lg text-foreground font-semibold text-center mb-3">
                Aviso importante
              </h3>

              <p className="font-body text-[13px] text-muted-foreground leading-relaxed text-center mb-3">
                Identificamos contatos via WhatsApp se passando pelo Minha Glória solicitando dados ou pagamentos após reservas.
              </p>

              <p className="font-body text-[13px] text-foreground leading-relaxed text-center mb-4">
                <strong>Não compartilhe seus dados.</strong> Confirme sempre por nossos canais oficiais:
              </p>

              <div className="space-y-2 bg-muted/50 rounded-lg p-3">
                <a
                  href="tel:+5522997792023"
                  className="flex items-center gap-2 font-body text-[13px] text-foreground hover:text-secondary transition-colors"
                >
                  <Phone size={13} className="text-secondary shrink-0" />
                  (22) 99779-2023
                </a>
                <a
                  href="mailto:contato@minhagloria.com.br"
                  className="flex items-center gap-2 font-body text-[13px] text-foreground hover:text-secondary transition-colors break-all"
                >
                  <Mail size={13} className="text-secondary shrink-0" />
                  contato@minhagloria.com.br
                </a>
              </div>

              <button
                onClick={handleClose}
                className="w-full mt-4 inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-body text-[11px] uppercase tracking-[0.15em] px-4 py-2.5 rounded-full transition-all"
              >
                Entendi
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default FakeMessageAlertLightbox;
