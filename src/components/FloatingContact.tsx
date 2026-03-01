// src/components/FloatingContact.tsx
import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { useSalon } from "../context/SalonContext";

export const FloatingContact = () => {
  const { salonData } = useSalon();

  // Limpeza do número para os links funcionais (Vem da "Verdade Absoluta")
  const cleanPhone = salonData.phoneNumber?.replace(/\s/g, "") || "";
  const waNumber = cleanPhone.replace("+", "");

  return (
    <div className="fixed bottom-10 right-10 z-40 hidden md:flex flex-col gap-6">
      
      {/* BOTÃO: CHAMADA TELEFÓNICA (Estética de Carimbo de Redação) */}
      <motion.a
        href={`tel:${cleanPhone}`}
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ x: 4, y: 4, transition: { duration: 0.2 } }}
        /* 
           DESIGN VINTAGE NEWS:
           - Borda de tinta preta grossa
           - Sombra sólida OFFSET que simula relevo (Efeito Press)
           - Quando passa o rato, o botão "afunda" na sombra
        */
        className="w-14 h-14 bg-white text-brand-leaf border-2 border-brand-leaf flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-none transition-all duration-200 group rounded-none"
        title={`Ligar para ${salonData.name}`}
      >
        <Phone size={22} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>

      {/* BOTÃO: WHATSAPP (Estética de Tinta de Imprensa) */}
      <motion.a
        href={`https://wa.me/${waNumber}?text=Olá! Gostaria de obter informações sobre os serviços da Barbearia Central Sintra.`}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ x: 4, y: 4, transition: { duration: 0.2 } }}
        /* Sombra sólida de tinta para um aspeto de "Edição Especial" */
        className="w-14 h-14 bg-brand-leaf text-brand-cream flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(26,26,26,0.3)] hover:shadow-none transition-all duration-200 group rounded-none"
        title="Enviar WhatsApp"
      >
        <MessageCircle size={26} fill="currentColor" className="transition-transform duration-300 group-hover:-rotate-12" />
      </motion.a>
    </div>
  );
};