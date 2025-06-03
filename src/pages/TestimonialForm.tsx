
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Swal from 'sweetalert2';

const testimonialSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  opinion: z.string().min(10, 'La opinión debe tener al menos 10 caracteres').max(250, 'La opinión no puede exceder 250 caracteres'),
  calificacion: z.number().min(1, 'Debes seleccionar una calificación').max(5, 'La calificación máxima es 5')
});

type TestimonialFormData = z.infer<typeof testimonialSchema>;

const TestimonialForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const form = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      nombre: '',
      opinion: '',
      calificacion: 0
    }
  });

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
          title: '¡Gracias por tu opinión!',
          text: 'Tu testimonio ha sido guardado exitosamente.',
          confirmButtonColor: '#ec4899',
          background: '#1a1a1a',
          color: '#ffffff'
        });
        
        form.reset();
        setSelectedRating(0);
      } else {
        throw new Error('Error al guardar');
      }
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar tu opinión. Por favor intenta nuevamente.',
        confirmButtonColor: '#ec4899',
        background: '#1a1a1a',
        color: '#ffffff'
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
          className={`text-3xl transition-all duration-200 hover:scale-110 ${
            starNumber <= selectedRating 
              ? 'text-yellow-400' 
              : 'text-gray-400 hover:text-yellow-300'
          }`}
        >
          ★
        </button>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 bg-gradient-to-br from-background to-muted/20 shadow-2xl backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-playfair font-bold mb-2">
              Comparte tu <span className="gradient-text">Opinión</span>
            </CardTitle>
            <p className="text-muted-foreground">
              Nos interesa conocer tu experiencia con nosotros
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Nombre y Apellido
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Ingresa tu nombre y apellido"
                          className="border-muted-foreground/20 bg-background/50 focus:border-primary transition-colors"
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
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Ingresa tu opinión
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Escribe tu opinión aquí"
                          className="border-muted-foreground/20 bg-background/50 focus:border-primary transition-colors min-h-[120px] resize-none"
                          maxLength={250}
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage />
                        <span className="text-xs text-muted-foreground">
                          {field.value?.length || 0}/250 caracteres
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
                      <FormLabel className="text-foreground font-medium">
                        Califica el servicio obtenido
                      </FormLabel>
                      <FormControl>
                        <div className="flex justify-center space-x-1 py-2">
                          {renderStars()}
                        </div>
                      </FormControl>
                      <div className="text-center">
                        {selectedRating > 0 && (
                          <span className="text-sm text-muted-foreground">
                            {selectedRating === 1 && 'Muy malo'}
                            {selectedRating === 2 && 'Malo'}
                            {selectedRating === 3 && 'Regular'}
                            {selectedRating === 4 && 'Bueno'}
                            {selectedRating === 5 && 'Excelente'}
                          </span>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-muted-foreground/20 hover:bg-muted/50"
                    onClick={() => {
                      form.reset();
                      setSelectedRating(0);
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium"
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Mi Opinión'}
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
