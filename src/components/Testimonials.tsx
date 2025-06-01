
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { elementRef, isInView } = useIntersectionObserver();

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

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section 
      id="testimonios" 
      ref={elementRef}
      className={`py-20 bg-background overflow-hidden animate-on-scroll ${
        isInView ? 'animate animate-testimonials-entrance' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Lo que Dicen <span className="gradient-text">Nuestras Clientas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex transition-transform duration-500 ease-in-out gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.originalIndex}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                style={{
                  transform: `translateX(${index === 1 ? '0%' : index === 0 ? '-2%' : '2%'})`,
                  opacity: index === 1 ? 1 : 0.7,
                  scale: index === 1 ? 1 : 0.95
                }}
              >
                <Card className="border-0 bg-gradient-to-br from-background to-muted/20 shadow-xl h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                      </div>
                      
                      <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                        "{testimonial.comment}"
                      </blockquote>
                    </div>
                    
                    <div>
                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary font-medium">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
