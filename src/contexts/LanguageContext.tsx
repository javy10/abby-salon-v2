
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'fr' | 'de' | 'zh';

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
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title1': 'Beauté qui',
    'hero.title2': 'Transforme',
    'hero.description': 'Découvrez votre meilleure version dans notre salon de beauté exclusif. Services personnalisés qui mettent en valeur votre beauté naturelle avec les dernières tendances.',
    'hero.book': 'Prendre Rendez-vous',
    'hero.services': 'Voir Services',
    
    // Testimonials
    'testimonials.title': 'Ce que Disent',
    'testimonials.subtitle': 'Nos Clientes',
    'testimonials.description': 'La satisfaction de nos clientes est notre plus grande récompense'
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über Mich',
    'nav.testimonials': 'Bewertungen',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title1': 'Schönheit die',
    'hero.title2': 'Verwandelt',
    'hero.description': 'Entdecken Sie Ihre beste Version in unserem exklusiven Schönheitssalon. Personalisierte Dienstleistungen, die Ihre natürliche Schönheit mit den neuesten Trends unterstreichen.',
    'hero.book': 'Termin Buchen',
    'hero.services': 'Services Ansehen',
    
    // Testimonials
    'testimonials.title': 'Was Unsere',
    'testimonials.subtitle': 'Kunden Sagen',
    'testimonials.description': 'Die Zufriedenheit unserer Kunden ist unsere größte Belohnung'
  },
  zh: {
    // Header
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.about': '关于我',
    'nav.testimonials': '客户评价',
    'nav.contact': '联系我们',
    
    // Hero
    'hero.title1': '美丽',
    'hero.title2': '蜕变',
    'hero.description': '在我们专属的美容沙龙中发现最好的自己。个性化服务，以最新的潮流趋势展现您的自然美。',
    'hero.book': '预约',
    'hero.services': '查看服务',
    
    // Testimonials
    'testimonials.title': '客户',
    'testimonials.subtitle': '评价',
    'testimonials.description': '客户的满意是我们最大的回报'
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
