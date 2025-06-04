
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Swal from 'sweetalert2';
import FormHeader from '@/components/testimonial-form/FormHeader';
import StarRating from '@/components/testimonial-form/StarRating';
import { translations } from '@/components/testimonial-form/translations';

const TestimonialForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const t = translations[language];

  const testimonialSchema = z.object({
    nombre: z.string().min(2, t.validation.nameMin),
    opinion: z.string().min(10, t.validation.opinionMin).max(500, t.validation.opinionMax),
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
        setIsExiting(true);
        
        // Esperar a que termine la animación de salida antes de mostrar el éxito
        setTimeout(async () => {
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
          setIsExiting(false);
        }, 600);
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

  const handleCancel = () => {
    setIsExiting(true);
    
    setTimeout(() => {
      form.reset();
      setSelectedRating(0);
      setIsExiting(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-pink-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-all duration-500">
      <div className={`w-full max-w-md transform transition-all duration-1000 ${
        isVisible && !isExiting ? 'translate-y-0 opacity-100 scale-100' : 
        isExiting ? 'animate-zoom-out' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        <Card className="border-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl backdrop-blur-lg animate-fade-in">
          <FormHeader
            language={language}
            isDarkMode={isDarkMode}
            onToggleLanguage={toggleLanguage}
            onToggleDarkMode={toggleDarkMode}
            translations={{
              title: t.title,
              titleHighlight: t.titleHighlight,
              subtitle: t.subtitle
            }}
          />
          
          <CardContent className="space-y-6 animate-slide-in-from-bottom">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem className="animate-slide-in-from-left animation-delay-300">
                      <FormLabel className="text-gray-200 font-medium">
                        {t.nameLabel}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t.namePlaceholder}
                          className="border-2 border-transparent bg-white/10 text-white placeholder:text-gray-400 focus:border-pink-400 transition-all duration-300 hover:bg-white/20"
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
                      <FormLabel className="text-gray-200 font-medium">
                        {t.opinionLabel}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder={t.opinionPlaceholder}
                          className="border-2 border-transparent bg-white/10 text-white placeholder:text-gray-400 focus:border-pink-400 transition-all duration-300 resize-none hover:bg-white/20"
                          maxLength={500}
                          rows={8}
                          style={{ minHeight: '160px', maxHeight: '160px' }}
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage />
                        <span className="text-xs text-gray-400">
                          {field.value?.length || 0}/500 {t.characters}
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="calificacion"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-gray-200 font-medium">
                        {t.ratingLabel}
                      </FormLabel>
                      <FormControl>
                        <StarRating
                          selectedRating={selectedRating}
                          onStarClick={handleStarClick}
                          translations={{ ratings: t.ratings }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex space-x-3 pt-4 animate-slide-in-from-bottom animation-delay-600">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-2 border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400/20 transition-all duration-300 hover:scale-105"
                    onClick={handleCancel}
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
