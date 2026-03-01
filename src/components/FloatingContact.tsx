// src/components/FloatingContact.tsx
import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { useSalon } from "../context/SalonContext";

export const FloatingContact = () => {
  const { salonData } = useSalon();

  // Limpeza do número para os links funcionais
  const cleanPhone = salonData.phoneNumber?.replace(/\s/g, "") || "";
  const waNumber = cleanPhone.replace("+", "");

  return (
    <div className="fixed bottom-10 right-10 z-40 hidden md:flex flex-col gap-6">
      
      {/* BOTÃO: CHAMADA TELEFÓNICA (Industrial Sharp) */}
      <motion.a
        href={`tel:${cleanPhone}`}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, x: -5 }}
        /* Cantos retos e sombra sólida offset */
        className="w-14 h-14 bg-white text-brand-dark border-2 border-brand-dark flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(153,27,27,1)] hover:shadow-none hover:bg-brand-leaf hover:text-white transition-all duration-300 group"
        title="Ligar para MORN Barbearia"
      >
        <Phone size={22} strokeWidth={2} className="group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>

      {/* BOTÃO: WHATSAPP (Branding MORN) */}
      <motion.a
        href={`https://wa.me/${waNumber}?text=Olá! Gostaria de obter informações sobre os serviços da MORN Barbearia.`}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05, x: -5 }}
        /* Cantos retos e sombra sólida offset no verde característico */
        className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(10,10,10,0.8)] hover:shadow-none transition-all duration-300 group"
        title="Enviar WhatsApp"
      >
        <MessageCircle size={26} fill="currentColor" className="transition-transform duration-300 group-hover:-rotate-12" />
      </motion.a>
    </div>
  );
};