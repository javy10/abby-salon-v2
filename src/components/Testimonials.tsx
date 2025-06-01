
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Lo que Dicen <span className="gradient-text">Nuestras Clientas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 bg-gradient-to-br from-background to-muted/20 shadow-2xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].comment}"
              </blockquote>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary font-medium">
                  {testimonials[currentIndex].service}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2">
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

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 bg-gradient-to-br from-background to-muted/10 hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover mb-4 border-2 border-primary/20"
                />
                <h4 className="font-semibold text-foreground mb-1">{testimonial.name}</h4>
                <p className="text-sm text-primary mb-3">{testimonial.service}</p>
                <div className="flex justify-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.comment.substring(0, 80)}..."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
