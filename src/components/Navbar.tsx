// src/components/Navbar.tsx
import { motion, AnimatePresence } from "motion/react";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

export const Navbar = ({ lang, setLang }: NavbarProps) => {
  const { salonData } = useSalon();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = UI_STRINGS[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: "#sobre" },
    { name: t.services, href: "#servicos" },
    { name: t.gallery, href: "#galeria" },
  ];

  if (salonData.team && salonData.team.length > 0) {
    navLinks.push({ name: t.team, href: "#equipa" });
  }

  navLinks.push(
    { name: t.reviews, href: "#avaliacoes" },
    { name: t.location, href: "#contato" }
  );

  const languages: { code: Language; label: string }[] = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGÓTIPO: Estilo Cabeçalho de Jornal Antigo */}
        <a href="#" className="flex flex-col items-center leading-none group border-y-2 border-brand-leaf py-1 px-2">
          <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter text-brand-leaf uppercase">
            Central
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-brand-leaf font-typewriter">
            Barbearia Sintra
          </span>
        </a>

        {/* --- MENU DESKTOP --- */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-widest font-typewriter text-brand-leaf/70 hover:text-brand-leaf transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-leaf transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Seletor de Idioma: Estilo "Classificado" */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest font-typewriter hover:bg-brand-straw/20 px-2 py-1 transition-colors"
            >
              <Globe size={14} /> {lang}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }} 
                  className="absolute right-0 mt-4 w-32 bg-brand-cream shadow-2xl rounded-none overflow-hidden border-2 border-brand-leaf p-1"
                >
                  {languages.map((l) => (
                    <button 
                      key={l.code} 
                      onClick={() => { setLang(l.code); setIsLangMenuOpen(false); }} 
                      className={`w-full text-left px-3 py-2 text-[10px] font-typewriter uppercase tracking-tighter transition-colors ${lang === l.code ? "bg-brand-leaf text-brand-cream" : "text-brand-leaf hover:bg-brand-straw/30"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Botão de Agendamento: Estilo Carimbo */}
          <a href={salonData.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary">
            {t.bookNow}
          </a>
        </div>

        {/* --- CABEÇALHO MOBILE --- */}
        <div className="flex items-center gap-3 lg:hidden">
          
          <div className="relative">
            <button 
              onClick={() => {
                setIsLangMenuOpen(!isLangMenuOpen);
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }} 
              className="flex items-center gap-1 px-3 py-2 bg-brand-leaf text-brand-cream border border-brand-leaf rounded-none text-[9px] font-black uppercase tracking-widest"
            >
              {lang}
              <ChevronDown size={10} className={`${isLangMenuOpen ? "rotate-180" : ""} transition-transform`} />
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 5 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9, y: 5 }} 
                  className="absolute right-0 mt-3 w-32 bg-brand-cream shadow-2xl border-2 border-brand-leaf p-1 z-[60]"
                >
                  {languages.map((l) => (
                    <button 
                      key={l.code} 
                      onClick={() => { setLang(l.code); setIsLangMenuOpen(false); }} 
                      className={`w-full text-left px-4 py-3 text-[10px] font-typewriter uppercase transition-colors ${lang === l.code ? "bg-brand-leaf text-brand-cream" : "text-brand-leaf"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            className="w-10 h-10 flex items-center justify-center text-brand-leaf active:scale-90 transition-transform" 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isLangMenuOpen) setIsLangMenuOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE EXPANDIDO: Efeito "Folha de Jornal" --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-cream z-[100] p-8 flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center mb-12 border-b-2 border-brand-leaf pb-6">
              <span className="font-serif font-black uppercase text-xl">Menu Central</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif font-black text-brand-leaf uppercase tracking-tighter border-b border-brand-straw/30 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <p className="font-typewriter text-[10px] uppercase text-brand-leaf/40 mb-6 text-center italic">
                Edição Especial — Sintra
              </p>
              <a href={salonData.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary w-full text-center py-5 text-lg">
                {t.bookNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};