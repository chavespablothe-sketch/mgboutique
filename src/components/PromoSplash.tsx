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
      className="fixed z-40 bottom-[170px] inset-x-4 sm:inset-x-auto sm:bottom-[170px] sm:right-6 sm:max-w-sm animate-fade-in"
      role="complementary"
      aria-label="Promoção em destaque"
    >
      <Link
        to="/tarifas"
        className="group relative block overflow-hidden rounded-2xl bg-promo text-promo-foreground border border-promo-foreground/30 shadow-2xl shadow-promo/40 hover:shadow-promo/70 transition-all duration-500"
      >
        {/* Soft pulsing border glow */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-promo-foreground/30 animate-pulse [animation-duration:3s]" />

        <div className="relative flex items-center gap-3 p-4 pr-10">
          {/* Pulsing badge */}
          <span className="relative flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-promo-foreground/30 animate-ping" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-promo-foreground text-promo shadow-lg">
              <Sparkles size={18} />
            </span>
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-promo-foreground opacity-80 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-promo-foreground" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-promo-foreground/80">
                Promoção · Últimos quartos
              </span>
            </div>
            <p className="font-display text-sm sm:text-base leading-snug truncate text-promo-foreground">
              {splashPhrase()}
            </p>
            <span className="mt-2 inline-flex items-center gap-1.5 bg-promo-foreground text-promo font-body text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md group-hover:brightness-110 transition-all">
              Ver pacotes <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>

        <button
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-2 right-2 z-10 rounded-full p-1 text-promo-foreground/60 hover:text-promo-foreground hover:bg-promo-foreground/10 transition-colors"
        >
          <X size={14} />
        </button>
      </Link>
    </div>
  );
};

export default PromoSplash;
