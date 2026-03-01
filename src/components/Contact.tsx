// src/components/Contact.tsx
import { motion } from "motion/react";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const Contact = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();

  return (
    /* Fundo Papel Envelhecido (brand-cream) */
    <section id="contato" className="section-padding bg-brand-cream overflow-hidden relative border-t-2 border-brand-leaf/10">
      
      {/* Detalhe Decorativo: Linha de separação editorial dupla */}
      <div className="absolute top-4 left-0 w-full h-px bg-brand-leaf/20"></div>
      <div className="absolute top-6 left-0 w-full h-px bg-brand-leaf/10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* INFORMAÇÕES DE CONTACTO: Estilo Redação */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-leaf/60 uppercase tracking-[0.4em] text-[10px] md:text-xs font-typewriter font-bold mb-4 block">
            {t.visitUs}
          </span>
          <h2 className="text-5xl md:text-7xl mb-12 font-serif font-black uppercase tracking-tighter text-brand-leaf leading-[0.9]">
            {t.location}
          </h2>
          
          <div className="space-y-12">
            {/* Bloco: Morada (Estética de Correspondência) */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 bg-brand-leaf rounded-none flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] shrink-0 rotate-45 group-hover:rotate-0 transition-all duration-500">
                <MapPin className="text-brand-cream -rotate-45 group-hover:rotate-0 transition-all duration-500" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl mb-2 font-serif font-black uppercase tracking-tight text-brand-leaf">{t.location}</h4>
                <p className="text-base md:text-lg text-brand-leaf/70 mb-3 font-serif italic leading-relaxed">
                  {salonData.address}
                </p>
                <a 
                  href={salonData.googleMapsUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-brand-leaf font-black flex items-center gap-1 hover:gap-3 transition-all duration-300 uppercase tracking-[0.2em] text-[10px] border-b-2 border-brand-leaf pb-1 font-typewriter"
                >
                  {t.seeOnGoogleMaps} <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Bloco: Horários (Estética de Tabela Técnica) */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 bg-brand-leaf rounded-none flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] shrink-0 rotate-45 group-hover:rotate-0 transition-all duration-500">
                <Clock className="text-brand-cream -rotate-45 group-hover:rotate-0 transition-all duration-500" size={24} strokeWidth={1.5} />
              </div>
              <div className="w-full">
                <h4 className="text-xl mb-4 font-serif font-black uppercase tracking-tight text-brand-leaf">{t.openingHours}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                  {salonData.hours.map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-brand-leaf/10 pb-2 group/line">
                      <span className="text-xs text-brand-leaf/50 font-bold uppercase tracking-wider font-typewriter group-hover/line:text-brand-leaf transition-colors">{h.day[lang]}</span>
                      <span className="text-sm font-black text-brand-leaf font-typewriter">
                        {h.time === "Fechado" ? t.closed : h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAPA INTERATIVO: Efeito "Fotografia Impressa" */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          /* 
             MOLDURA CENTRAL SINTRA:
             - Cantos Sharp (rounded-none)
             - Sombra Sólida de Tinta (Offset)
             - Filtro de imagem de arquivo (Sepia/Grayscale)
          */
          className="relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(26,26,26,1)] h-[400px] md:h-[550px] rounded-none border-[2px] border-brand-leaf p-2 bg-white z-10"
        >
          <div className="w-full h-full overflow-hidden border border-brand-leaf/20 relative">
            {/* Overlay técnico para mobile */}
            <div className="absolute inset-0 pointer-events-none bg-brand-leaf/5 z-10 md:hidden"></div>
            
            <iframe 
              src={salonData.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale-[0.8] sepia-[0.3] contrast-125 brightness-90" 
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Marca d'água monumental de fundo (Estilo Cabeçalho de Gazeta) */}
      <div className="absolute bottom-12 left-8 text-[120px] font-serif font-black text-brand-leaf/[0.03] pointer-events-none select-none hidden lg:block uppercase tracking-tighter leading-none">
        Central <br /> Sintra
      </div>
    </section>
  );
};