// src/constants.ts

export type Language = "pt" | "en" | "es";

export const UI_STRINGS = {
  pt: {
    about: "História", services: "Preçário", gallery: "Arquivo", gallerySubtitle: "Crónicas em imagem.",
    reviews: "Testemunhos", location: "Localização", bookNow: "Reservar Cadeira", bookTreatment: "Marcar Corte",
    viewServices: "Ver Preçário", ourEssence: "Desde sempre", luxuryMeetsRelaxation: "Estilo Tradicional & Navalha",
    ourServices: "Serviços Centrais", servicesSubtitle: "Rituais de barbearia clássica no coração de Pêro Pinheiro, Sintra.",
    duration: "Tempo", price: "Valor", visitUs: "Visite a Barbearia Central", openingHours: "Horário",
    seeOnGoogleMaps: "Localizar", followUs: "Siga-nos", quickLinks: "Atalhos", privacy: "Privacidade",
    terms: "Termos", allRightsReserved: "Todos os direitos reservados.",
    tagline: "A sua barbearia de confiança com o espírito da velha guarda em Sintra.",
    footerDescription: "Barbearia Central Sintra: Excelência profissional e tradição num espaço único decorado com a história do tempo.",
    closed: "Fechado", team: "Mestres", teamSubtitle: "Os artesãos da tesoura e navalha.",
    cookiesTitle: "Notas de Rodapé", cookiesText: "Usamos cookies para melhorar a leitura do site.",
    cookiesAccept: "Aceitar", cookiesReject: "Ignorar", cookiesMore: "Saber mais"
  },
  en: {
     about: "History", services: "Services", gallery: "Archive", gallerySubtitle: "Visual chronicles.",
     reviews: "Reviews", location: "Location", bookNow: "Book Now", bookTreatment: "Book a Chair",
     viewServices: "Prices", ourEssence: "Always", luxuryMeetsRelaxation: "Traditional Style & Razor",
     ourServices: "Central Services", servicesSubtitle: "Classic barbering rituals in the heart of Pêro Pinheiro, Sintra.",
     duration: "Time", price: "Price", visitUs: "Visit Us", openingHours: "Hours",
     seeOnGoogleMaps: "Locate", followUs: "Follow Us", quickLinks: "Links", privacy: "Privacy",
     terms: "Terms", allRightsReserved: "All rights reserved.", tagline: "Your trusted old-school barbershop in Sintra.",
     footerDescription: "Barbearia Central Sintra: Professional excellence and tradition in a unique historic space.",
     closed: "Closed", team: "Masters", teamSubtitle: "The craftsmen of scissors and razor.",
     cookiesTitle: "Privacy", cookiesText: "We use cookies.", cookiesAccept: "Accept", cookiesReject: "Decline", cookiesMore: "More"
  },
  es: {
     about: "Historia", services: "Servicios", gallery: "Archivo", gallerySubtitle: "Crónicas visuales.",
     reviews: "Reseñas", location: "Ubicación", bookNow: "Reservar", bookTreatment: "Reservar Silla",
     viewServices: "Precios", ourEssence: "Siempre", luxuryMeetsRelaxation: "Estilo Tradicional y Navaja",
     ourServices: "Servicios Centrales", servicesSubtitle: "Rituales de barbería clásica en el corazón de Pêro Pinheiro, Sintra.",
     duration: "Tiempo", price: "Precio", visitUs: "Visítanos", openingHours: "Horario",
     seeOnGoogleMaps: "Localizar", followUs: "Síguenos", quickLinks: "Enlaces", privacy: "Privacidad",
     terms: "Términos", allRightsReserved: "Todos los derechos reservados.", tagline: "Tu barbería de confianza con espíritu de la vieja escuela en Sintra.",
     footerDescription: "Barbearia Central Sintra: Excelencia profesional y tradición en un espacio histórico único.",
     closed: "Cerrado", team: "Maestros", teamSubtitle: "Los artesanos de la tijera y navaja.",
     cookiesTitle: "Privacidad", cookiesText: "Usamos cookies.", cookiesAccept: "Aceptar", cookiesReject: "Rechazar", cookiesMore: "Saber más"
  }
};

export const SALON_DATA = {
  name: "Barbearia Central Sintra",
  tagline: {
    pt: "Onde a história e o estilo se encontram em Pêro Pinheiro.",
    en: "Where history and style meet in Pêro Pinheiro.",
    es: "Donde la historia y el estilo se encuentran en Pêro Pinheiro."
  },
  description: {
    pt: "Localizada na Av. da Liberdade, a Barbearia Central Sintra é mais do que um local para cortar o cabelo; é um arquivo vivo da cultura do barbeiro. Decorada com jornais antigos e memórias, oferecemos um ambiente acolhedor onde Valmir e Gabriel aplicam a arte da tesoura e navalha com precisão absoluta.",
    en: "Located at Av. da Liberdade, Barbearia Central Sintra is a living archive of barber culture. Decorated with old newspapers and memories, we offer a welcoming vibe where Valmir and Gabriel apply their craft.",
    es: "Ubicada en la Av. da Liberdade, la Barbearia Central Sintra es un archivo vivo de la cultura del barbero. Decorada con periódicos antiguos y memorias."
  },
  address: "Av. da Liberdade 96, 2715-005 Pêro Pinheiro",
  phoneNumber: "+351219271007",
  googleMapsUrl: "https://www.google.com/maps/dir//Barbearia+Central+Sintra,+Av.+da+Liberdade+96,+2715-005+Pêro+Pinheiro",
  bookingUrl: "https://www.fresha.com/pt/a/barbearia-central-pero-pinheiro-pero-pinheiro-avenida-da-liberdade-96-vm4fhm-pero-pinheiro-portugal-xcgfypxc",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.154789!2d-9.3323!3d38.8475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed67000000000%3A0x0!2sBarbearia%20Central%20Sintra!5e0!3m2!1spt!2spt!4v1740860000000",
  
  images: {
    heroBg: "/hero-bg.webp",
    aboutPrincipal: "/sobre-principal.webp",
    aboutDetail: "/sobre-detalhe.webp"
  },

  socialLinks: { instagram: "https://www.instagram.com/barbeariacentralsintra/", facebook: "", tiktok: "" },

  galleryPhotos: [
    "https://i.ibb.co/JFqMZPw6/pexels-gustavo-fring-7447150.jpg",
    "https://i.ibb.co/tp55bNd6/pexels-kevinbidwell-9971240.jpg",
    "https://i.ibb.co/MxjKjv56/pexels-cottonbro-3998429.jpg", "", "", "", "", "", "", ""
  ],

  team: [
    { name: "Valmir", role: { pt: "Mestre Barbeiro", en: "Master Barber", es: "Maestro Barbero" }, image: "https://i.ibb.co/PG8X2CK3/Captura-de-ecr-2026-03-01-225245.webp" },
    { name: "Gabriel", role: { pt: "Especialista Kids & Estilo", en: "Kids & Style Specialist", es: "Especialista Kids" }, image: "" }
  ],
  
  services: [
    { name: { pt: "Corte Central", en: "Central Cut", es: "Corte Central" }, price: "12", duration: "45min", description: { pt: "Corte tradicional com lavagem e finalização a seco.", en: "Traditional cut with wash and styling.", es: "Corte tradicional con lavado y peinado." } },
    { name: { pt: "Barba de Toalha", en: "Hot Towel Beard", es: "Barba de Toalla" }, price: "10", duration: "30min", description: { pt: "Barba desenhada com ritual de toalha quente e massagem.", en: "Beard trim with hot towel and massage.", es: "Barba con ritual de toalla caliente." } },
    { name: { pt: "Corte Júnior", en: "Junior Cut", es: "Corte Junior" }, price: "10", duration: "30min", description: { pt: "Atendimento especializado para crianças com o mestre Gabriel.", en: "Specialized care for children with master Gabriel.", es: "Atención especializada para niños." } }
  ],
  
  hours: [
    { day: { pt: "Segunda a Sexta", en: "Mon to Fri", es: "Lun a Vie" }, time: "09:00 - 19:30" },
    { day: { pt: "Sábado", en: "Saturday", es: "Sábado" }, time: "08:30 - 18:30" },
    { day: { pt: "Domingo", en: "Sunday", es: "Domingo" }, time: "Fechado" }
  ],
  
  features: {
    pt: ["Decoração Histórica", "Corte Infantil", "Estacionamento à porta", "Ambiente Familiar", "Preço Acessível", "Especialistas em Barba"],
    en: ["Historic Decor", "Kids Friendly", "Easy Parking", "Family Vibe", "Affordable", "Beard Specialists"],
    es: ["Decoración Histórica", "Corte Infantil", "Parking Fácil", "Ambiente Familiar", "Precio Asequible", "Expertos en Barba"]
  },
  
  reviews: [
    { author: "Bárbara Global", text: { pt: "O Gabriel tem muita experiência com crianças também e isso ajudou nosso filho.", en: "Gabriel is great with kids, helped our son a lot.", es: "Gabriel tiene mucha experiencia con niños, ayudó mucho a nuestro hijo." }, rating: 5 },
    { author: "Leticia Rodrigues", text: { pt: "Sempre tem horário disponível, Gabriel que nos atendeu é um excelente profissional.", en: "Always has slots, Gabriel is an excellent professional.", es: "Siempre hay disponibilidad, Gabriel es un excelente profesional." }, rating: 5 }
  ]
};