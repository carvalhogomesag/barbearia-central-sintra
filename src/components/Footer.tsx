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

  // GATILHO DO PAINEL SECRETO 🤫
  const handleSecretClick = () => {
    if (clickCount >= 4) {
      window.dispatchEvent(new Event("open-admin"));
      setClickCount(0);
    } else {
      setClickCount(prev => prev + 1);
    }
  };

  const socials = salonData.socialLinks || { instagram: "", facebook: "", tiktok: "" };

  // LINKS DINÂMICOS DA MATRIX (Sincronizados com a Navbar)
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
      {/* Detalhe Editorial: Linha Dupla Superior */}
      <div className="absolute top-4 left-0 w-full h-px bg-brand-straw/10"></div>
      <div className="absolute top-6 left-0 w-full h-px bg-brand-straw/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          
          {/* COLUNA 1: MANCHETE FINAL */}
          <div className="col-span-2">
            <h2 className="text-4xl font-serif font-black tracking-tighter mb-6 uppercase border-b-2 border-brand-straw/20 pb-2 w-fit">
              {salonData.name.split(' ')[0]} <span className="font-light italic lowercase tracking-normal text-brand-straw/80">{salonData.name.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-brand-cream/40 max-w-md leading-relaxed mb-8 font-serif italic text-lg pr-10">
              "{t.footerDescription}"
            </p>
            <div className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-brand-straw/30 flex flex-col gap-1">
              <span>NIF: 123 456 789</span>
              <span>Propriedade de Central Sintra Unipessoal Lda</span>
            </div>
          </div>
          
          {/* COLUNA 2: ARQUIVO DE LINKS (Typewriter Style) */}
          <div>
            <h4 className="text-brand-straw uppercase tracking-[0.3em] text-[10px] font-black mb-8 font-typewriter italic underline decoration-brand-straw/30 underline-offset-8">
              {t.quickLinks}
            </h4>
            <ul className="space-y-4 text-brand-cream/60 text-[11px] font-bold uppercase tracking-widest font-typewriter">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
              
              {/* LINKS LEGAIS OBRIGATÓRIOS */}
              <li className="pt-4 mt-4 border-t border-brand-straw/10">
                <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer" className="text-[9px] opacity-30 hover:opacity-100 transition-all font-sans italic">
                  Livro de Reclamações
                </a>
              </li>
              <li>
                <a href="#" className="text-[9px] opacity-30 hover:opacity-100 transition-all font-sans italic">
                  Resolução de Litígios
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: CARIMBOS SOCIAIS (Stamp Style) */}
          <div>
            <h4 className="text-brand-straw uppercase tracking-[0.3em] text-[10px] font-black mb-8 font-typewriter italic underline decoration-brand-straw/30 underline-offset-8">
              {t.followUs}
            </h4>
            <div className="flex gap-6">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-brand-straw/20 flex items-center justify-center text-brand-straw rotate-45 hover:rotate-0 hover:bg-brand-cream hover:text-brand-dark transition-all duration-500 group">
                  <Instagram size={20} strokeWidth={1.5} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-brand-straw/20 flex items-center justify-center text-brand-straw rotate-45 hover:rotate-0 hover:bg-brand-cream hover:text-brand-dark transition-all duration-500 group">
                  <Facebook size={20} strokeWidth={1.5} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </a>
              )}
              {socials.tiktok && (
                <a href={socials.tiktok} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-brand-straw/20 flex items-center justify-center text-brand-straw rotate-45 hover:rotate-0 hover:bg-brand-cream hover:text-brand-dark transition-all duration-500 group">
                  <TikTokIcon size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* NOTA DE RODAPÉ: COPYRIGHT & LEGAL */}
        <div className="pt-10 border-t border-brand-straw/10 flex flex-col md:flex-row justify-between items-center gap-8 text-brand-straw/30 text-[9px] font-bold uppercase tracking-[0.3em] font-typewriter">
          <p onClick={handleSecretClick} className="select-none cursor-default hover:text-white transition-colors">
            © {new Date().getFullYear()} {salonData.name}. {t.allRightsReserved}
          </p>
          <div className="flex gap-10">
            <button className="hover:text-white transition-colors border-b border-transparent hover:border-white">{t.privacy}</button>
            <button className="hover:text-white transition-colors border-b border-transparent hover:border-white">{t.terms}</button>
          </div>
        </div>
      </div>

      {/* Marca d'água técnica de gráfica */}
      <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-white/[0.02] pointer-events-none select-none">
        01
      </div>
    </footer>
  );
};