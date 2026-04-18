import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  open: boolean;
  initialIndex?: number;
  onClose: () => void;
  caption?: string;
}

const ELEGANT_EASE = [0.22, 1, 0.36, 1] as const;

const Lightbox = ({ images, open, initialIndex = 0, onClose, caption }: LightboxProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [chromeVisible, setChromeVisible] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    if (open) {
      setIndex(initialIndex);
      setChromeVisible(true);
    }
  }, [open, initialIndex]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev, onClose]);

  // Preload neighbors for instant transitions
  useEffect(() => {
    if (!open || images.length === 0) return;
    [1, -1].forEach((d) => {
      const i = (index + d + images.length) % images.length;
      const img = new Image();
      img.src = images[i].src;
    });
  }, [index, open, images]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 60;
    if (info.offset.x < -threshold || info.velocity.x < -400) next();
    else if (info.offset.x > threshold || info.velocity.x > 400) prev();
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
          className="fixed inset-0 z-[100] bg-[#0a0a0a]/97 backdrop-blur-md flex items-center justify-center"
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
          onClick={onClose}
        >
          {/* Top chrome: counter + close */}
          <AnimatePresence>
            {chromeVisible && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: ELEGANT_EASE }}
                className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-5 md:py-7 pointer-events-none"
                style={{ paddingTop: "calc(env(safe-area-inset-top) + 1.25rem)" }}
              >
                <div className="pointer-events-auto">
                  {caption && (
                    <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/60 mb-1">
                      {caption}
                    </p>
                  )}
                  <p className="font-display text-base md:text-lg text-secondary tabular-nums tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                    <span className="text-white/30 mx-2">—</span>
                    <span className="text-white/50">{String(images.length).padStart(2, "0")}</span>
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Fechar galeria"
                >
                  <X size={18} className="text-white/80 group-hover:text-white transition-colors" strokeWidth={1.25} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image area */}
          <div
            className="relative w-full h-full flex items-center justify-center px-2 md:px-20 py-20 md:py-24"
            onClick={(e) => {
              e.stopPropagation();
              setChromeVisible((v) => !v);
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={index}
                src={images[index].src}
                alt={images[index].alt}
                custom={direction}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.45, ease: ELEGANT_EASE }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="max-w-full max-h-full object-contain select-none cursor-grab active:cursor-grabbing"
                style={{
                  touchAction: "pan-y pinch-zoom",
                  boxShadow: "0 30px 80px -20px hsl(var(--secondary) / 0.25), 0 10px 40px -10px rgba(0,0,0,0.6)",
                }}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Side arrows (desktop hover; always-on touch) */}
          <AnimatePresence>
            {chromeVisible && images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: ELEGANT_EASE }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/15 hover:border-secondary/60 hover:bg-white/5 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={22} className="text-white/70 group-hover:text-secondary transition-colors" strokeWidth={1.25} />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, ease: ELEGANT_EASE }}
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/15 hover:border-secondary/60 hover:bg-white/5 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={22} className="text-white/70 group-hover:text-secondary transition-colors" strokeWidth={1.25} />
                </motion.button>
              </>
            )}
          </AnimatePresence>

          {/* Bottom thumbnails (desktop) */}
          <AnimatePresence>
            {chromeVisible && images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, ease: ELEGANT_EASE }}
                className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2 max-w-[80vw] overflow-x-auto px-4 py-2"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border transition-all duration-300 ${
                      i === index
                        ? "border-secondary opacity-100 scale-105"
                        : "border-white/10 opacity-50 hover:opacity-80"
                    }`}
                    aria-label={`Ir para foto ${i + 1}`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Lightbox;
