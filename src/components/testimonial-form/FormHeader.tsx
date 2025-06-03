
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Globe, Moon, Sun } from 'lucide-react';

interface FormHeaderProps {
  language: 'es' | 'en';
  isDarkMode: boolean;
  onToggleLanguage: () => void;
  onToggleDarkMode: () => void;
  translations: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
}

const FormHeader: React.FC<FormHeaderProps> = ({
  language,
  isDarkMode,
  onToggleLanguage,
  onToggleDarkMode,
  translations
}) => {
  return (
    <CardHeader className="text-center pb-6 animate-slide-in-from-top">
      {/* Controls Bar inside form */}
      <div className="flex items-center justify-end space-x-4 mb-4">
        {/* Language Toggle */}
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
          <Globe className="h-3 w-3 text-white" />
          <span className="text-xs font-medium text-white">{language.toUpperCase()}</span>
          <Switch 
            checked={language === 'en'} 
            onCheckedChange={onToggleLanguage}
            className="scale-75"
          />
        </div>
        
        {/* Theme Toggle */}
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
          {isDarkMode ? <Moon className="h-3 w-3 text-white" /> : <Sun className="h-3 w-3 text-white" />}
          <Switch 
            checked={isDarkMode} 
            onCheckedChange={onToggleDarkMode}
            className="scale-75"
          />
        </div>
      </div>

      <CardTitle className="text-3xl font-playfair font-bold mb-2 animate-fade-in text-white">
        {translations.title} <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{translations.titleHighlight}</span>
      </CardTitle>
      <p className="text-gray-300 animate-fade-in animation-delay-200">
        {translations.subtitle}
      </p>
    </CardHeader>
  );
};

export default FormHeader;
