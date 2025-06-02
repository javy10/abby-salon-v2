
import { useState, useEffect } from 'react';

interface ApiTestimonial {
  id: number;
  nombre: string;
  opinion: string;
  calificacion: number;
}

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  image: string;
  service: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [hasTestimonials, setHasTestimonials] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Imágenes por defecto para los testimonios
  const defaultImages = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  ];

  const services = [
    'Corte y Color',
    'Tratamiento Facial',
    'Maquillaje Nupcial',
    'Manicure',
    'Corte y Peinado',
    'Tratamiento Capilar'
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://abby-salon.koyeb.app/api/opiniones');
        
        if (!response.ok) {
          throw new Error('Error al cargar los testimonios');
        }

        const data: ApiTestimonial[] = await response.json();
        
        // Transformar los datos de la API al formato requerido
        const transformedTestimonials: Testimonial[] = data.map((item, index) => ({
          name: item.nombre,
          comment: item.opinion,
          rating: item.calificacion,
          image: defaultImages[index % defaultImages.length],
          service: services[index % services.length]
        }));

        setTestimonials(transformedTestimonials);
        setHasTestimonials(transformedTestimonials.length > 0);
        setError(null);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setHasTestimonials(false);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return {
    testimonials,
    hasTestimonials,
    loading,
    error
  };
};
