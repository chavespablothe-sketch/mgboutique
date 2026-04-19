import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  lightboxCaption?: string;
}

const PhotoGallery = ({ images, title, subtitle, lightboxCaption }: PhotoGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // Show 8 thumbnails at a time
  const thumbsPerPage = 8;
  const thumbStart = Math.floor(activeIndex / thumbsPerPage) * thumbsPerPage;
  const visibleThumbs = images.slice(thumbStart, thumbStart + thumbsPerPage);

  return (
    <section className="py-24 lg:py-32 bg-hotel-cream">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {subtitle && (
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold leading-[1.1]">
                {title}
              </h2>
            )}
          </motion.div>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
            {/* Thumbnails grid */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-4 lg:grid-cols-2 gap-2">
                {visibleThumbs.map((img, i) => {
                  const realIndex = thumbStart + i;
                  return (
                    <button
                      key={realIndex}
                      onClick={() => goTo(realIndex)}
                      className={`relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-300 ${
                        realIndex === activeIndex
                          ? "ring-2 ring-secondary shadow-lg scale-[1.02]"
                          : "opacity-60 hover:opacity-90"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
              {/* Pagination dots */}
              {images.length > thumbsPerPage && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  <button onClick={prev} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <ChevronLeft size={16} className="text-foreground" />
                  </button>
                  <span className="text-muted-foreground font-body text-xs">
                    {activeIndex + 1} / {images.length}
                  </span>
                  <button onClick={next} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <ChevronRight size={16} className="text-foreground" />
                  </button>
                </div>
              )}
            </div>

            {/* Main image */}
            <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] lg:aspect-auto lg:min-h-[500px] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setLightboxOpen(true)}
                  className="w-full h-full object-cover absolute inset-0 cursor-zoom-in"
                />
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <p className="text-white font-body text-sm">{images[activeIndex].alt}</p>
              </div>
              {/* Nav arrows on main image */}
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <Lightbox
          images={images}
          open={lightboxOpen}
          initialIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
          caption={lightboxCaption ?? title}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
