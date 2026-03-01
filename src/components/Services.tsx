// src/components/Services.tsx
import { motion } from "motion/react";
import { Scissors, Clock, CalendarCheck } from "lucide-react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const Services = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();

  return (
    /* Fundo Papel Envelhecido */
    <section id="servicos" className="section-padding bg-brand-cream relative overflow-hidden">
      {/* Detalhe Decorativo: Linha dupla de cabeçalho editorial */}
      <div className="absolute top-0 left-0 w-full h-1 border-y border-brand-leaf/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-leaf/60 uppercase tracking-[0.4em] text-[10px] md:text-xs font-typewriter font-bold mb-4 block"
          >
            {t.ourServices}
          </motion.span>
          <h2 className="text-5xl md:text-7xl mb-6 text-brand-leaf font-serif font-black uppercase tracking-tighter">
            {t.viewServices}
          </h2>
          {/* Régua de Jornal Antigo */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-brand-leaf/30"></div>
            <Scissors size={18} className="text-brand-leaf/40" />
            <div className="w-12 h-px bg-brand-leaf/30"></div>
          </div>
          <p className="text-brand-leaf/70 max-w-xl mx-auto text-lg font-serif italic leading-relaxed px-4">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {salonData.services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.6 }} 
              /* 
                 ESTILO CLASSIFICADOS VINTAGE:
                 - Borda sólida preta
                 - Sombra sólida offset (Efeito recorte/carimbo)
                 - Sem arredondamento
              */
              className="bg-white p-8 rounded-none transition-all duration-500 group border-2 border-brand-leaf flex flex-col h-full relative shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
            >
              {/* Cabeçalho do Card: Estilo Título de Coluna */}
              <div className="flex justify-between items-start mb-6 border-b-2 border-brand-leaf pb-4">
                <h3 className="text-2xl leading-tight text-brand-leaf font-serif font-black uppercase tracking-tight group-hover:italic transition-all">
                  {service.name[lang]}
                </h3>
                <div className="bg-brand-leaf text-brand-cream p-2 rotate-3 group-hover:rotate-0 transition-transform">
                  <Scissors size={20} strokeWidth={2} />
                </div>
              </div>
              
              <p className="text-sm text-brand-leaf/80 mb-10 flex-grow font-serif leading-relaxed italic pr-4">
                "{service.description[lang]}"
              </p>
              
              {/* Info de Valor e Tempo: Estilo Nota Fiscal Antiga */}
              <div className="bg-brand-cream/50 -mx-8 px-8 py-6 mb-8 border-y border-brand-leaf/20 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-widest text-brand-leaf/50 font-typewriter font-bold">{t.duration}</span>
                  <span className="text-xs font-bold flex items-center gap-1.5 text-brand-leaf font-typewriter">
                    <Clock size={12} /> {service.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-widest text-brand-leaf/50 font-typewriter font-bold block mb-1">{t.price}</span>
                  <div className="flex items-start justify-end">
                    <span className="text-xs font-typewriter font-black text-brand-leaf mt-1 mr-1">Esc.</span>
                    <span className="text-4xl font-serif text-brand-leaf font-black leading-none">{service.price}</span>
                  </div>
                </div>
              </div>

              {/* BOTÃO RESERVAR: Estilo Carimbo de Imprensa */}
              <a 
                href={salonData.bookingUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-4 bg-brand-leaf text-brand-cream rounded-none text-[11px] uppercase tracking-[0.2em] font-typewriter font-black transition-all duration-500 flex items-center justify-center gap-3 hover:bg-brand-wood shadow-lg active:scale-95"
              >
                <CalendarCheck size={16} />
                {t.bookNow}
              </a>

              {/* Detalhe técnico de impressão */}
              <div className="absolute -bottom-6 right-0 opacity-20 hidden group-hover:block">
                <span className="text-[8px] font-typewriter uppercase tracking-tighter">Ref. Central-00{i+1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marca d'água de fundo */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rotate-90 text-[120px] font-black text-brand-leaf/[0.02] uppercase pointer-events-none select-none">
        Classificados
      </div>
    </section>
  );
};