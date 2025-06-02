
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Sobre Mí',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title1': 'Belleza que',
    'hero.title2': 'Transforma',
    'hero.description': 'Descubre tu mejor versión en nuestro exclusivo salón de belleza. Servicios personalizados que realzan tu belleza natural con las últimas tendencias.',
    'hero.book': 'Reservar Cita',
    'hero.services': 'Ver Servicios',
    
    // Testimonials
    'testimonials.title': 'Lo que Dicen',
    'testimonials.subtitle': 'Nuestras Clientas',
    'testimonials.description': 'La satisfacción de nuestras clientas es nuestra mayor recompensa'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Me',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title1': 'Beauty that',
    'hero.title2': 'Transforms',
    'hero.description': 'Discover your best version in our exclusive beauty salon. Personalized services that enhance your natural beauty with the latest trends.',
    'hero.book': 'Book Appointment',
    'hero.services': 'View Services',
    
    // Testimonials
    'testimonials.title': 'What Our',
    'testimonials.subtitle': 'Clients Say',
    'testimonials.description': 'Our clients\' satisfaction is our greatest reward'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
