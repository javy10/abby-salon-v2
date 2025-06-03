
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Globe, Moon, Sun } from 'lucide-react';
import Swal from 'sweetalert2';

const translations = {
  es: {
    title: 'Comparte tu',
    titleHighlight: 'Opinión',
    subtitle: 'Nos interesa conocer tu experiencia con nosotros',
    nameLabel: 'Nombre y Apellido',
    namePlaceholder: 'Ingresa tu nombre y apellido',
    opinionLabel: 'Ingresa tu opinión',
    opinionPlaceholder: 'Escribe tu opinión aquí',
    ratingLabel: 'Califica el servicio obtenido',
    cancel: 'Cancelar',
    submit: 'Enviar Mi Opinión',
    submitting: 'Enviando...',
    characters: 'caracteres',
    ratings: {
      1: 'Muy malo',
      2: 'Malo', 
      3: 'Regular',
      4: 'Bueno',
      5: 'Excelente'
    },
    success: {
      title: '¡Gracias por tu opinión!',
      text: 'Tu testimonio ha sido guardado exitosamente.'
    },
    error: {
      title: 'Error',
      text: 'No se pudo guardar tu opinión. Por favor intenta nuevamente.'
    },
    validation: {
      nameMin: 'El nombre debe tener al menos 2 caracteres',
      opinionMin: 'La opinión debe tener al menos 10 caracteres',
      opinionMax: 'La opinión no puede exceder 250 caracteres',
      ratingMin: 'Debes seleccionar una calificación',
      ratingMax: 'La calificación máxima es 5'
    }
  },
  en: {
    title: 'Share your',
    titleHighlight: 'Opinion',
    subtitle: 'We are interested in knowing your experience with us',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    opinionLabel: 'Enter your opinion',
    opinionPlaceholder: 'Write your opinion here',
    ratingLabel: 'Rate the service received',
    cancel: 'Cancel',
    submit: 'Send My Opinion',
    submitting: 'Sending...',
    characters: 'characters',
    ratings: {
      1: 'Very bad',
      2: 'Bad',
      3: 'Regular',
      4: 'Good',
      5: 'Excellent'
    },
    success: {
      title: 'Thank you for your opinion!',
      text: 'Your testimonial has been saved successfully.'
    },
    error: {
      title: 'Error',
      text: 'Could not save your opinion. Please try again.'
    },
    validation: {
      nameMin: 'Name must have at least 2 characters',
      opinionMin: 'Opinion must have at least 10 characters',
      opinionMax: 'Opinion cannot exceed 250 characters',
      ratingMin: 'You must select a rating',
      ratingMax: 'Maximum rating is 5'
    }
  }
};

const TestimonialForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isVisible, setIsVisible] = useState(false);

  const t = translations[language];

  const testimonialSchema = z.object({
    nombre: z.string().min(2, t.validation.nameMin),
    opinion: z.string().min(10, t.validation.opinionMin).max(250, t.validation.opinionMax),
    calificacion: z.number().min(1, t.validation.ratingMin).max(5, t.validation.ratingMax)
  });

  type TestimonialFormData = z.infer<typeof testimonialSchema>;

  const form = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      nombre: '',
      opinion: '',
      calificacion: 0
    }
  });

  useEffect(() => {
    setIsVisible(true);
    const savedTheme = localStorage.getItem('testimonial-theme');
    const savedLanguage = localStorage.getItem('testimonial-language') as 'es' | 'en';
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('testimonial-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('testimonial-theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('testimonial-language', newLang);
  };

  const onSubmit = async (data: TestimonialFormData) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('https://abby-salon.koyeb.app/api/opiniones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        await Swal.fire({
          icon: 'success',
          title: t.success.title,
          text: t.success.text,
          confirmButtonColor: '#ec4899',
          background: isDarkMode ? '#1a1a1a' : '#ffffff',
          color: isDarkMode ? '#ffffff' : '#000000'
        });
        
        form.reset();
        setSelectedRating(0);
      } else {
        throw new Error('Error al guardar');
      }
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: t.error.title,
        text: t.error.text,
        confirmButtonColor: '#ec4899',
        background: isDarkMode ? '#1a1a1a' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    form.setValue('calificacion', rating);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1;
      return (
        <button
          key={index}
          type="button"
          onClick={() => handleStarClick(starNumber)}
          className={`text-4xl transition-all duration-300 hover:scale-125 transform ${
            starNumber <= selectedRating 
              ? 'text-yellow-400 animate-pulse' 
              : 'text-gray-400 hover:text-yellow-300'
          }`}
        >
          ★
        </button>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 flex items-center justify-center p-4 transition-all duration-500">
      {/* Controls Bar */}
      <div className="fixed top-4 right-4 flex items-center space-x-4 z-50">
        {/* Language Toggle */}
        <div className="flex items-center space-x-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
          <Switch checked={language === 'en'} onCheckedChange={toggleLanguage} />
        </div>
        
        {/* Theme Toggle */}
        <div className="flex items-center space-x-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
          {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
        </div>
      </div>

      <div className={`w-full max-w-md transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        <Card className="border-0 bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60 shadow-2xl backdrop-blur-lg animate-fade-in">
          <CardHeader className="text-center pb-6 animate-slide-in-from-top">
            <CardTitle className="text-3xl font-playfair font-bold mb-2 animate-fade-in">
              {t.title} <span className="gradient-text">{t.titleHighlight}</span>
            </CardTitle>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              {t.subtitle}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6 animate-slide-in-from-bottom">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem className="animate-slide-in-from-left animation-delay-300">
                      <FormLabel className="text-foreground font-medium">
                        {t.nameLabel}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t.namePlaceholder}
                          className="border-2 border-transparent bg-white/50 dark:bg-gray-800/50 focus:border-pink-400 transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/70"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="opinion"
                  render={({ field }) => (
                    <FormItem className="animate-slide-in-from-right animation-delay-400">
                      <FormLabel className="text-foreground font-medium">
                        {t.opinionLabel}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder={t.opinionPlaceholder}
                          className="border-2 border-transparent bg-white/50 dark:bg-gray-800/50 focus:border-pink-400 transition-all duration-300 min-h-[120px] resize-none hover:bg-white/70 dark:hover:bg-gray-700/70"
                          maxLength={250}
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage />
                        <span className="text-xs text-muted-foreground">
                          {field.value?.length || 0}/250 {t.characters}
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="calificacion"
                  render={() => (
                    <FormItem className="animate-scale-in animation-delay-500">
                      <FormLabel className="text-foreground font-medium">
                        {t.ratingLabel}
                      </FormLabel>
                      <FormControl>
                        <div className="flex justify-center space-x-2 py-4">
                          {renderStars()}
                        </div>
                      </FormControl>
                      <div className="text-center">
                        {selectedRating > 0 && (
                          <span className="text-sm text-muted-foreground animate-fade-in">
                            {t.ratings[selectedRating as keyof typeof t.ratings]}
                          </span>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex space-x-3 pt-4 animate-slide-in-from-bottom animation-delay-600">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-2 border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-500 dark:text-orange-400 dark:hover:bg-orange-950 transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      form.reset();
                      setSelectedRating(0);
                    }}
                  >
                    {t.cancel}
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {isLoading ? t.submitting : t.submit}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestimonialForm;
