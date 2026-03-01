// src/components/Footer.tsx
import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

export const Footer = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();
  const [clickCount, setClickCount] = useState(0);

  // O NOSSO EASTER EGG (5 cliques no copyright) 🤫
  const handleSecretClick = () => {
    if (clickCount >= 4) {
      window.dispatchEvent(new Event("open-admin"));
      setClickCount(0);
    } else {
      setClickCount(prev => prev + 1);
    }
  };

  const socials = salonData.socialLinks || { instagram: "", facebook: "", tiktok: "" };

  // LINKS DINÂMICOS DA MATRIX
  const footerLinks = [
    { name: t.about, href: "#sobre" },
    { name: t.services, href: "#servicos" },
    { name: t.gallery, href: "#galeria" },
  ];

  if (salonData.team && salonData.team.length > 0) {
    footerLinks.push({ name: t.team, href: "#equipa" });
  }

  footerLinks.push(
    { name: t.reviews, href: "#avaliacoes" },
    { name: t.location, href: "#contato" }
  );

  return (
    <footer className="bg-brand-dark text-brand-cream pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Detalhe Decorativo: Linha Superior Industrial */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-leaf/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          
          {/* COLUNA 1: IDENTIDADE MORN */}
          <div className="col-span-2">
            <h2 className="text-4xl font-serif font-black tracking-tighter mb-6 uppercase">
              {salonData.name.split(' ')[0]} <span className="text-brand-leaf italic font-light lowercase tracking-normal">{salonData.name.split(' ')[1]}</span>
            </h2>
            <p className="text-brand-cream/50 max-w-md leading-relaxed mb-8 font-light text-lg italic border-l-2 border-brand-leaf/30 pl-6">
              {t.footerDescription}
            </p>
            <p className="text-[10px] text-brand-straw uppercase tracking-[0.3em] font-bold">
              NIF: 123 456 789 — {salonData.name} Unipessoal Lda
            </p>
          </div>
          
          {/* COLUNA 2: NAVEGAÇÃO DINÂMICA */}
          <div>
            <h4 className="text-brand-leaf uppercase tracking-[0.3em] text-[10px] font-black mb-8">{t.quickLinks}</h4>
            <ul className="space-y-4 text-brand-cream/60 text-sm font-medium uppercase tracking-widest">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-leaf hover:translate-x-2 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
              
              {/* LINKS LEGAIS PORTUGAL */}
              <li className="pt-4 mt-4 border-t border-brand-straw/10">
                <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer" className="text-[9px] opacity-40 hover:opacity-100 transition-all">
                  Livro de Reclamações
                </a>
              </li>
              <li>
                <a href="#" className="text-[9px] opacity-40 hover:opacity-100 transition-all">
                  Resolução de Litígios
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: REDES SOCIAIS (Style Sharp) */}
          <div>
            <h4 className="text-brand-leaf uppercase tracking-[0.3em] text-[10px] font-black mb-8">{t.followUs}</h4>
            <div className="flex gap-6">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-brand-straw/20 flex items-center justify-center text-brand-straw rotate-45 hover:rotate-0 hover:bg-brand-leaf hover:text-white hover:border-brand-leaf transition-all duration-500 group">
                  <Instagram size={20} strokeWidth={1.5} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-brand-straw/20 flex items-center justify-center text-brand-straw rotate-45 hover:rotate-0 hover:bg-brand-leaf hover:text-white hover:border-brand-leaf transition-all duration-500 group">
                  <Facebook size={20} strokeWidth={1.5} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </a>
              )}
              {socials.tiktok && (
                <a href={socials.tiktok} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-brand-straw/20 flex items-center justify-center text-brand-straw rotate-45 hover:rotate-0 hover:bg-brand-leaf hover:text-white hover:border-brand-leaf transition-all duration-500 group">
                  <TikTokIcon size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* BARRA FINAL: COPYRIGHT & LEGAL */}
        <div className="pt-10 border-t border-brand-straw/10 flex flex-col md:flex-row justify-between items-center gap-8 text-brand-straw/40 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p onClick={handleSecretClick} className="select-none cursor-default hover:text-brand-leaf transition-colors">
            © {new Date().getFullYear()} {salonData.name}. {t.allRightsReserved}
          </p>
          <div className="flex gap-10">
            <button className="hover:text-brand-cream transition-colors">{t.privacy}</button>
            <button className="hover:text-brand-cream transition-colors">{t.terms}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};