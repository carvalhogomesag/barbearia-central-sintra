// src/components/CookieBanner.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie } from "lucide-react";
import { UI_STRINGS, Language } from "../constants";

interface CookieBannerProps {
  lang: Language;
}

export const CookieBanner = ({ lang }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = UI_STRINGS[lang];

  useEffect(() => {
    // Verifica se já existe um consentimento gravado (Chave atualizada para MORN)
    const consent = localStorage.getItem("morn_cookies_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("morn_cookies_consent", "all");
    setIsVisible(false);
  };

  const handleEssentialsOnly = () => {
    localStorage.setItem("morn_cookies_consent", "essentials");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          /* Ajuste para não sobrepor a barra mobile (Thumb Zone) */
          className="fixed bottom-24 md:bottom-10 left-4 right-4 md:left-auto md:right-10 md:w-[420px] z-[100]"
        >
          {/* CONTENTOR INDUSTRIAL MORN: Cantos Sharp e Sombra Sólida */}
          <div className="bg-brand-dark border-t-4 border-brand-leaf p-6 md:p-8 rounded-none shadow-[15px_15px_0px_0px_rgba(0,0,0,0.3)] relative overflow-hidden">
            
            {/* Detalhe de fundo: Grelha Industrial sutil */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#A6A6A6 1px, transparent 1px), linear-gradient(90deg, #A6A6A6 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-white/5 p-3 border border-brand-straw/20 rounded-none text-brand-leaf shrink-0 rotate-12">
                <Cookie size={24} strokeWidth={1.5} />
              </div>

              <div className="flex-1 text-left">
                <h4 className="font-serif text-xl font-bold uppercase tracking-tighter text-white mb-2">
                  {t.cookiesTitle}
                </h4>
                <p className="text-[11px] text-brand-straw leading-relaxed mb-8 font-medium">
                  {t.cookiesText}
                </p>

                {/* BLOCO DE ACÇÕES: Mobile First e Estilo Industrial */}
                <div className="flex flex-col gap-3 w-full">
                  <button 
                    onClick={handleAcceptAll}
                    className="bg-brand-leaf text-white px-6 py-4 rounded-none text-[10px] tracking-[0.3em] font-black uppercase hover:bg-white hover:text-brand-dark transition-all duration-500 w-full shadow-lg active:scale-95"
                  >
                    {t.cookiesAccept}
                  </button>
                  
                  <div className="flex gap-6 w-full justify-center pt-2">
                    <button 
                      onClick={handleEssentialsOnly}
                      className="text-brand-straw/50 text-[9px] tracking-widest uppercase font-bold hover:text-brand-leaf transition-all duration-300"
                    >
                      {t.cookiesReject}
                    </button>
                    
                    <a 
                      href="#" 
                      className="text-brand-straw/50 text-[9px] tracking-widest uppercase font-bold hover:text-white border-b border-transparent hover:border-white transition-all duration-300"
                    >
                      {t.cookiesMore}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};