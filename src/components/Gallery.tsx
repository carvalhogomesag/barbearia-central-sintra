// src/components/Gallery.tsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Camera } from "lucide-react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const Gallery = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const rawPhotos = salonData.galleryPhotos?.filter(url => url && url.trim() !== "") || [];
  
  // EFEITO CIRCULAR: Triplicamos a lista para o scroll infinito visual
  const displayPhotos = rawPhotos.length > 0 
    ? [...rawPhotos, ...rawPhotos, ...rawPhotos] 
    : [];

  // Posiciona o scroll no bloco central ao carregar (Estilo Catálogo)
  useEffect(() => {
    if (scrollRef.current && rawPhotos.length > 0) {
      const container = scrollRef.current;
      const cardWidth = container.querySelector('div')?.offsetWidth || 0;
      const gap = 24; // gap-6
      
      const scrollTo = (cardWidth + gap) * rawPhotos.length;
      container.scrollLeft = scrollTo;
    }
  }, [rawPhotos.length]);

  if (displayPhotos.length === 0) return null;

  return (
    /* Fundo Papel Envelhecido (brand-cream) */
    <section id="galeria" className="py-24 bg-brand-cream text-brand-leaf relative overflow-hidden">
      
      {/* Detalhes de Fundo: Textura de Colunas de Jornal sutil */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex justify-around">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-full bg-brand-leaf"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-leaf/60 uppercase tracking-[0.4em] text-[10px] md:text-xs font-typewriter font-bold mb-4 block"
        >
          {t.gallerySubtitle}
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-tight">
          {t.gallery}
        </h2>
        
        {/* Régua Editorial Dupla */}
        <div className="flex flex-col items-center mt-6">
          <div className="w-32 h-px bg-brand-leaf mb-1"></div>
          <div className="w-24 h-px bg-brand-leaf"></div>
        </div>
      </div>

      {/* --- CATÁLOGO CIRCULAR "ARQUIVO" --- */}
      <div className="relative z-10">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-20 no-scrollbar snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            paddingLeft: '15%', 
            paddingRight: '15%' 
          }}
        >
          {displayPhotos.map((photo, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0.4, scale: 0.9, filter: "grayscale(1)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "grayscale(0.2) sepia(0.2)" }}
              viewport={{ once: false, amount: 0.5 }}
              /* 
                 DESIGN VINTAGE NEWS:
                 - Borda preta fina e dupla (via ring)
                 - Sombra de "recorte de papel"
                 - rounded-none
              */
              className="relative flex-none w-[75vw] md:w-[420px] aspect-[4/5] rounded-none overflow-hidden snap-center cursor-pointer bg-white border border-brand-leaf p-3 shadow-[15px_15px_30px_rgba(0,0,0,0.1)] group transition-all duration-700"
              onClick={() => setSelectedImg(photo)}
            >
              <div className="w-full h-full overflow-hidden relative border border-brand-leaf/20">
                <img 
                  src={photo} 
                  alt="Arquivo Central Sintra" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay Estilo "Revelação de Foto" */}
                <div className="absolute inset-0 bg-brand-leaf/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="w-16 h-16 bg-brand-cream flex items-center justify-center text-brand-leaf border-2 border-brand-leaf shadow-xl">
                    <Camera size={28} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Data/Referência falsa no canto estilo jornal */}
                <div className="absolute bottom-2 left-2 bg-brand-leaf text-brand-cream px-2 py-0.5 text-[8px] font-typewriter uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all">
                  Doc. #SINTRA-2026
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Editorial */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-brand-cream/95 backdrop-blur-xl"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 md:top-10 md:right-10 text-brand-leaf/40 hover:text-brand-leaf transition-colors">
              <X size={48} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.9, rotate: -2 }} 
              animate={{ scale: 1, rotate: 0 }} 
              exit={{ scale: 0.9, rotate: 2 }}
              className="relative p-4 bg-white border-2 border-brand-leaf shadow-2xl max-w-full max-h-full"
            >
              <img 
                src={selectedImg} 
                className="max-w-full max-h-[80vh] object-contain grayscale-[0.2] sepia-[0.1]" 
              />
              <p className="mt-4 font-typewriter text-[10px] text-brand-leaf/60 text-center uppercase tracking-widest">
                — Arquivo Barbearia Central Sintra —
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};