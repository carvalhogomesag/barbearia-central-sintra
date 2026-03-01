// src/context/SalonContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { SALON_DATA as INITIAL_DATA } from "../constants";

type SalonContextType = {
  salonData: typeof INITIAL_DATA;
  updateSalonData: (newData: typeof INITIAL_DATA) => void;
};

const SalonContext = createContext<SalonContextType | undefined>(undefined);

export const SalonProvider = ({ children }: { children: ReactNode }) => {
  const [salonData, setSalonData] = useState<typeof INITIAL_DATA>(() => {
    // CHAVE ÚNICA PARA A MATRIZ CENTRAL SINTRA
    const saved = localStorage.getItem("central-sintra-data");
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        
        // MERGE INTELIGENTE DA MATRIX:
        // Garante que novas funcionalidades no código (INITIAL_DATA) apareçam 
        // mesmo que o usuário tenha dados antigos no navegador.
        return {
          ...INITIAL_DATA,
          ...parsed,
          team: parsed.team || INITIAL_DATA.team,
          socialLinks: { ...INITIAL_DATA.socialLinks, ...parsed.socialLinks },
          galleryPhotos: parsed.galleryPhotos || INITIAL_DATA.galleryPhotos,
          images: { ...INITIAL_DATA.images, ...parsed.images }
        };
      } catch (e) {
        console.error("Erro ao carregar dados da Matrix:", e);
        return INITIAL_DATA;
      }
    }
    
    return INITIAL_DATA;
  });

  const updateSalonData = (newData: typeof INITIAL_DATA) => {
    setSalonData(newData);
    localStorage.setItem("central-sintra-data", JSON.stringify(newData));
  };

  return (
    <SalonContext.Provider value={{ salonData, updateSalonData }}>
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => {
  const context = useContext(SalonContext);
  if (!context) throw new Error("useSalon must be used within SalonProvider");
  return context;
};