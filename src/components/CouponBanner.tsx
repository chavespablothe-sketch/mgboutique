import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, Check, Tag } from "lucide-react";

interface CouponBannerProps {
  variant?: "full" | "compact";
  className?: string;
}

const CODE = "BIEL";

const CouponBanner = ({ variant = "full", className = "" }: CouponBannerProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // noop
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl border border-secondary/30 shadow-xl ${className}`}
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.92) 55%, hsl(var(--primary)) 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, hsl(var(--secondary) / 0.28), transparent 55%), radial-gradient(circle at 85% 70%, hsl(var(--secondary) / 0.22), transparent 60%)",
        }}
      />
      {/* Gold hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div
        className={`relative flex flex-col md:flex-row items-center gap-5 md:gap-7 ${
          variant === "compact" ? "p-5 md:p-6" : "p-6 md:p-8"
        }`}
      >
        {/* Icon medallion */}
        <div className="relative shrink-0">
          <span className="absolute inset-0 rounded-full animate-ping bg-secondary/30" style={{ animationDuration: "2.4s" }} />
          <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-secondary/50 bg-primary-foreground/5 backdrop-blur-sm">
            <Sparkles className="text-secondary" size={22} />
          </span>
        </div>

        {/* Copy */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-secondary font-body text-[10px] md:text-xs uppercase tracking-[0.4em] mb-1.5">
            Cortesia exclusiva
          </p>
          <h3 className="font-display text-xl md:text-2xl lg:text-[1.65rem] text-primary-foreground font-semibold leading-snug">
            Ganhe <span className="italic text-secondary">5% de desconto</span> em qualquer pacote
          </h3>
          <p className="text-primary-foreground/70 font-body text-xs md:text-sm mt-1.5">
            Use o cupom abaixo no momento da reserva e aproveite uma estadia ainda mais especial.
          </p>
        </div>

        {/* Coupon code chip */}
        <button
          onClick={handleCopy}
          aria-label="Copiar cupom BIEL"
          className="group relative shrink-0 flex items-center gap-3 rounded-xl border border-dashed border-secondary/60 bg-primary-foreground/5 backdrop-blur-sm px-5 py-3.5 transition-all hover:bg-primary-foreground/10 hover:border-secondary"
        >
          <Tag size={16} className="text-secondary" />
          <div className="text-left">
            <span className="block text-[9px] uppercase tracking-[0.3em] text-primary-foreground/60 font-body">
              Cupom
            </span>
            <span className="block font-display text-xl md:text-2xl font-bold tracking-[0.25em] text-primary-foreground">
              {CODE}
            </span>
          </div>
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-primary transition-transform group-hover:scale-105">
            {copied ? <Check size={16} /> : <Copy size={15} />}
          </span>
          {copied && (
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-body uppercase tracking-[0.25em] text-secondary">
              Copiado
            </span>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default CouponBanner;
