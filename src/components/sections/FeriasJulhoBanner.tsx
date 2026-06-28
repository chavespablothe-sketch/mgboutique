import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Sparkles, PartyPopper } from "lucide-react";
import bolhas from "@/assets/ferias-julho/ferias-bolhas.jpg.asset.json";
import recreacao from "@/assets/ferias-julho/ferias-recreacao.jpg.asset.json";
import pintura from "@/assets/ferias-julho/ferias-pintura.jpg.asset.json";

const FeriasJulhoBanner = () => {
  return (
    <section className="relative py-14 lg:py-20 overflow-hidden bg-gradient-to-br from-[#0f7a4d] via-[#16a34a] to-[#facc15]">
      {/* confetti-like blobs */}
      <div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-[#fb7185]/40 blur-3xl" aria-hidden />
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-[#38bdf8]/40 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#fde047]/50 blur-3xl" aria-hidden />

      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/ferias-de-julho"
            className="group relative grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-0 overflow-hidden rounded-3xl border-2 border-white/40 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.45)] bg-gradient-to-br from-emerald-700 via-emerald-600 to-amber-400"
          >
            {/* Texto */}
            <div className="relative px-6 py-10 md:px-12 md:py-14 lg:py-16">
              <span className="inline-flex items-center gap-2 bg-white/95 text-emerald-800 font-body text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-5 px-3 py-1.5 rounded-full shadow-md">
                <Sun size={14} className="text-amber-500" /> Férias de Julho 2026
              </span>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-[1.05] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                Um julho inteiro pras crianças{" "}
                <span className="italic bg-gradient-to-r from-yellow-200 via-amber-100 to-pink-200 bg-clip-text text-transparent">
                  amarem
                </span>
                . <PartyPopper className="inline-block text-amber-200 ml-1" size={32} />
              </h2>

              <p className="text-white/95 font-body text-sm md:text-base mb-7 leading-relaxed max-w-xl">
                Programação completa de segunda a domingo: fazendinha, oficinas, gincanas, skibunda, pintura, cozinha kids e muito mais.
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {["🎨 Oficinas", "🐮 Fazendinha", "🏇 Skibunda", "🎯 Gincanas"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center text-white font-body text-xs bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-3 bg-white text-emerald-800 font-body font-bold uppercase tracking-[0.15em] text-xs md:text-sm px-7 py-3.5 rounded-full shadow-xl group-hover:gap-4 group-hover:shadow-2xl transition-all">
                <Sparkles size={16} className="text-amber-500" />
                Conheça a programação
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Mosaico de fotos */}
            <div className="relative hidden lg:grid grid-cols-2 gap-2 p-4">
              <div className="row-span-2 overflow-hidden rounded-2xl border-2 border-white/40 shadow-xl">
                <img
                  src={bolhas.url}
                  alt="Crianças brincando com bolhas"
                  loading="lazy"
                  className="w-full h-full object-cover min-h-[280px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border-2 border-white/40 shadow-xl">
                <img
                  src={recreacao.url}
                  alt="Recreação ao ar livre"
                  loading="lazy"
                  className="w-full h-full object-cover min-h-[135px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border-2 border-white/40 shadow-xl">
                <img
                  src={pintura.url}
                  alt="Oficina de pintura"
                  loading="lazy"
                  className="w-full h-full object-cover min-h-[135px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeriasJulhoBanner;
