
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
    'Alisados',
    'Planchados',
    'Cortes para Dama',
    'Baños de Color',
    'Uñas Acrílicas',
    'Esmaltados Permanentes',
    'Pedicure y Manicura',
    'Baños de Luna',
    'Extensiones de Pestañas',
    'Exfoliaciones',
    'Faciales',
    'Cejas Permanentes',
    'Depilaciones',
    'Maquillaje'
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
        
        if (!data || data.length === 0) {
          setTestimonials([]);
          setHasTestimonials(false);
          setError(null);
          setLoading(false);
          return;
        }
        
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

    // Configurar polling para actualizar automáticamente cada 30 segundos
    const interval = setInterval(fetchTestimonials, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    testimonials,
    hasTestimonials,
    loading,
    error
  };
};
