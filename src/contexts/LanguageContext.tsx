
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'zh' | 'hi' | 'ar';

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
  },
  hi: {
    // Header
    'nav.home': 'होम',
    'nav.services': 'सेवाएं',
    'nav.about': 'मेरे बारे में',
    'nav.testimonials': 'प्रशंसापत्र',
    'nav.contact': 'संपर्क',
    
    // Hero
    'hero.title1': 'सुंदरता जो',
    'hero.title2': 'बदल देती है',
    'hero.description': 'हमारे विशेष ब्यूटी सैलून में अपना सबसे अच्छा रूप खोजें। व्यक्तिगत सेवाएं जो नवीनतम ट्रेंड्स के साथ आपकी प्राकृतिक सुंदरता को बढ़ाती हैं।',
    'hero.book': 'अपॉइंटमेंट बुक करें',
    'hero.services': 'सेवाएं देखें',
    
    // Testimonials
    'testimonials.title': 'हमारे ग्राहक',
    'testimonials.subtitle': 'क्या कहते हैं',
    'testimonials.description': 'हमारे ग्राहकों की संतुष्टि हमारा सबसे बड़ा इनाम है'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'عني',
    'nav.testimonials': 'الشهادات',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title1': 'جمال',
    'hero.title2': 'يحول',
    'hero.description': 'اكتشفي أفضل نسخة منك في صالون التجميل الحصري لدينا. خدمات شخصية تبرز جمالك الطبيعي مع أحدث الاتجاهات.',
    'hero.book': 'احجزي موعد',
    'hero.services': 'عرض الخدمات',
    
    // Testimonials
    'testimonials.title': 'ما تقوله',
    'testimonials.subtitle': 'عميلاتنا',
    'testimonials.description': 'رضا عميلاتنا هو أعظم مكافأة لنا'
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
