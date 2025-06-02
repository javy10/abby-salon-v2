
import { useState, useEffect } from 'react';

export const useTestimonials = () => {
  const [hasTestimonials, setHasTestimonials] = useState(false);

  const testimonials = [
    {
      name: 'Ana García',
      comment: 'María es increíble! Transformó completamente mi look y me siento más segura que nunca. El ambiente del salón es muy relajante.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      service: 'Corte y Color'
    },
    {
      name: 'Carmen López',
      comment: 'Los tratamientos faciales son espectaculares. Mi piel nunca había lucido tan radiante. Definitivamente regresaré.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      service: 'Tratamiento Facial'
    },
    {
      name: 'Isabel Martín',
      comment: 'El maquillaje para mi boda fue perfecto. María entendió exactamente lo que quería y superó mis expectativas.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      service: 'Maquillaje Nupcial'
    },
    {
      name: 'Lucía Rodríguez',
      comment: 'Cada vez que vengo es una experiencia única. El profesionalismo y la calidez del trato son excepcionales.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      service: 'Manicure'
    },
    {
      name: 'Sofia Hernández',
      comment: 'Excelente servicio y atención. Los resultados siempre superan mis expectativas. Muy recomendado.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      service: 'Corte y Peinado'
    },
    {
      name: 'Elena Castillo',
      comment: 'El ambiente del salón es increíble y el personal muy profesional. Salgo siempre sintiéndome renovada.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      service: 'Tratamiento Capilar'
    }
  ];

  useEffect(() => {
    // Verificar si hay testimonios disponibles
    setHasTestimonials(testimonials.length > 0);
  }, []);

  return {
    testimonials,
    hasTestimonials
  };
};
