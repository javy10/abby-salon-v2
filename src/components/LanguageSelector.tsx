
import React from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[120px] border-0 bg-transparent hover:bg-white/10 text-white">
        <div className="flex items-center space-x-2">
          <span className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            {currentLanguage?.flag}
          </span>
          <span className="text-sm font-medium text-white">
            {currentLanguage?.code.toUpperCase()}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="bg-black/95 border border-white/20 shadow-lg z-50 min-w-[180px] backdrop-blur-md">
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code} 
            className="cursor-pointer text-white hover:bg-white/10 focus:bg-white/10"
          >
            <div className="flex items-center space-x-3">
              <span className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {lang.flag}
              </span>
              <span className="font-medium text-white">{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
