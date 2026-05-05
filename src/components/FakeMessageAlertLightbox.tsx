import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Phone, Mail } from "lucide-react";

const STORAGE_KEY = "fakeMsgLightboxDismissed";
const SHOW_DELAY_MS = 6500;

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
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[95] w-[calc(100vw-2rem)] max-w-[280px] bg-card/95 backdrop-blur-md rounded-xl shadow-xl border border-border overflow-hidden"
          role="dialog"
          aria-label="Aviso sobre mensagens fraudulentas"
        >
          <button
            onClick={handleClose}
            aria-label="Fechar"
            className="absolute top-1.5 right-1.5 z-10 w-6 h-6 rounded-full text-muted-foreground hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X size={12} />
          </button>

          <div className="px-4 py-3.5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} className="text-secondary shrink-0" />
              <h3 className="font-display text-[13px] text-foreground font-semibold">
                Aviso importante
              </h3>
            </div>

            <p className="font-body text-[11px] text-muted-foreground leading-relaxed mb-2.5">
              Há contatos via WhatsApp se passando pelo Minha Glória solicitando dados ou pagamentos. Não compartilhe seus dados — confirme pelos canais oficiais:
            </p>

            <div className="space-y-1">
              <a
                href="tel:+5522997792023"
                className="flex items-center gap-1.5 font-body text-[11px] text-foreground hover:text-secondary transition-colors"
              >
                <Phone size={11} className="text-secondary shrink-0" />
                (22) 99779-2023
              </a>
              <a
                href="mailto:contato@minhagloria.com.br"
                className="flex items-center gap-1.5 font-body text-[11px] text-foreground hover:text-secondary transition-colors"
              >
                <Mail size={11} className="text-secondary shrink-0" />
                contato@minhagloria.com.br
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default FakeMessageAlertLightbox;
