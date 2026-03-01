// src/components/Hero.tsx
import { motion } from "motion/react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const Hero = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-brand-cream">
      {/* Background Otimizado para Lisbon'Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src={salonData.images?.heroBg || "/hero-bg.webp"} 
          alt={`${salonData.name} Ambient`} 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/90 via-brand-cream/30 to-brand-cream"></div>
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20 md:pt-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Tag de Localização */}
          <span className="text-brand-leaf uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-8 block border-b border-brand-leaf/20 pb-2 w-fit">
            Alvalade, Lisboa
          </span>
          
          {/* Título Neo-Clássico */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-10 leading-[1] md:leading-[0.85] text-brand-dark tracking-tighter uppercase">
            {lang === "pt" ? (
              <>Lisbon'Style <br />& <span className="text-brand-leaf">Tradição.</span></>
            ) : lang === "en" ? (
              <>Lisbon'Style <br />& <span className="text-brand-leaf">Tradition.</span></>
            ) : (
              <>Lisbon'Style <br />& <span className="text-brand-leaf">Tradición.</span></>
            )}
          </h1>

          {/* Última frase com margem inferior ajustada */}
          <p className="text-base md:text-2xl text-brand-dark/70 mb-16 md:mb-20 max-w-2xl mx-auto font-light leading-relaxed">
            {salonData.tagline[lang]}
          </p>

          {/* 
              BOTÕES CENTRALIZADOS: 
              Adicionámos pt-4 e pb-8 para garantir que eles fiquem no centro 
              do espaço entre o texto acima e o fim da secção abaixo.
          */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto pt-4 pb-12">
            <a href={salonData.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-64">
              {t.bookTreatment}
            </a>
            <a href="#servicos" className="btn-outline w-full sm:w-64">
              {t.viewServices}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Detalhes de Assinatura Visual em Azul */}
      <div className="absolute left-8 bottom-0 w-px h-24 bg-brand-leaf/20 hidden lg:block"></div>
      <div className="absolute right-8 bottom-0 w-px h-24 bg-brand-leaf/20 hidden lg:block"></div>
    </section>
  );
};