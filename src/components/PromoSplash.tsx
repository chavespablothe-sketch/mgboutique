import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { splashPhrase } from "@/lib/monthPhrase";

const STORAGE_KEY = "promoSplashDismissed";

const PromoSplash = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      if (window.scrollY > 400) setVisible(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed z-40 bottom-4 inset-x-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-sm animate-fade-in"
      role="complementary"
      aria-label="Promoção em destaque"
    >
      <Link
        to="/tarifas"
        className="group relative block overflow-hidden rounded-2xl bg-primary text-primary-foreground border border-secondary/60 shadow-2xl shadow-primary/30 hover:shadow-secondary/30 transition-all duration-500"
      >
        {/* Soft pulsing border glow */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-secondary/40 animate-pulse [animation-duration:3s]" />

        <div className="relative flex items-center gap-3 p-4 pr-10">
          {/* Pulsing badge */}
          <span className="relative flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-secondary/40 animate-ping" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary shadow-lg">
              <Sparkles size={18} />
            </span>
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-80 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                Últimos quartos
              </span>
            </div>
            <p className="font-display text-sm sm:text-base leading-snug truncate">
              {splashPhrase()}
            </p>
          </div>

          <ArrowRight
            size={18}
            className="flex-shrink-0 text-secondary group-hover:translate-x-1 transition-transform"
          />
        </div>

        <button
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-2 right-2 z-10 rounded-full p-1 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        >
          <X size={14} />
        </button>
      </Link>
    </div>
  );
};

export default PromoSplash;
