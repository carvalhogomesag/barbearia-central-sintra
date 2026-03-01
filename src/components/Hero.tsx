// src/components/Hero.tsx
import { motion } from "motion/react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const Hero = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-brand-cream">
      
      {/* BACKGROUND: Efeito de Fotografia de Arquivo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={salonData.images?.heroBg || "/hero-bg.webp"} 
          alt={`${salonData.name} Arquivo`} 
          className="w-full h-full object-cover opacity-30 grayscale sepia-[0.2] brightness-90 mix-blend-multiply" 
          loading="eager"
        />
        {/* Overlay de Textura de Papel */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-transparent to-brand-cream"></div>
      </div>

      {/* CONTEÚDO: Estilo Manchete de Jornal */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20 md:pt-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Cabeçalho da Notícia: Localização */}
          <div className="border-y-2 border-brand-leaf py-2 mb-10 group">
             <span className="text-brand-leaf uppercase tracking-[0.5em] text-[10px] md:text-xs font-typewriter font-bold block px-4">
              Pêro Pinheiro • Sintra
            </span>
          </div>
          
          {/* Manchete Principal: Serif Extra Bold */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black mb-10 leading-[0.9] text-brand-leaf tracking-tighter uppercase">
            {lang === "pt" ? (
              <>Corte & <br /><span className="font-light italic">Tradição.</span></>
            ) : lang === "en" ? (
              <>Cut & <br /><span className="font-light italic">Tradition.</span></>
            ) : (
              <>Corte & <br /><span className="font-light italic">Tradición.</span></>
            )}
          </h1>

          {/* Submanchete: Tagline editável */}
          <p className="text-base md:text-2xl text-brand-leaf/80 mb-16 md:mb-20 max-w-2xl mx-auto font-medium leading-relaxed italic font-serif">
            "{salonData.tagline[lang]}"
          </p>

          {/* ACÇÕES: Estilo Carimbo Industrial */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto pt-4 pb-12">
            <a 
              href={salonData.bookingUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary w-full sm:w-72 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none transition-all"
            >
              {t.bookTreatment}
            </a>
            <a 
              href="#servicos" 
              className="btn-outline w-full sm:w-72 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-none transition-all"
            >
              {t.viewServices}
            </a>
          </div>
        </motion.div>
      </div>

      {/* ELEMENTOS DECORATIVOS: Réguas de Gráfica Antiga */}
      <div className="absolute left-1/2 bottom-0 w-px h-24 bg-brand-leaf/20 hidden lg:block -translate-x-1/2"></div>
      <div className="absolute left-10 top-1/2 -rotate-90 origin-left hidden lg:block">
        <span className="font-typewriter text-[9px] uppercase tracking-widest text-brand-leaf/30 italic">
          Edição Limitada Central Sintra — Vol. 01
        </span>
      </div>
    </section>
  );
};