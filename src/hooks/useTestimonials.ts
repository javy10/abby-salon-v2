
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
  service: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [hasTestimonials, setHasTestimonials] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        
        // Si no hay datos o el array está vacío
        if (!data || data.length === 0) {
          setTestimonials([]);
          setHasTestimonials(false);
          setError(null);
          setLoading(false);
          return;
        }
        
        // Transformar los datos de la API al formato requerido
        const transformedTestimonials: Testimonial[] = data.map((item, index) => ({
          name: item.nombre,
          comment: item.opinion,
          rating: item.calificacion,
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
