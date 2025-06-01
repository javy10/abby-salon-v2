
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Corte y Peinado',
      description: 'Cortes modernos y peinados elegantes que realzan tu personalidad única.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $45',
      duration: '60 min'
    },
    {
      title: 'Coloración',
      description: 'Técnicas avanzadas de coloración, mechas y balayage para un look espectacular.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $80',
      duration: '120 min'
    },
    {
      title: 'Tratamientos Capilares',
      description: 'Tratamientos nutritivos y reparadores para cabello dañado y deshidratado.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $35',
      duration: '45 min'
    },
    {
      title: 'Maquillaje Profesional',
      description: 'Maquillaje para eventos especiales, bodas y sesiones fotográficas.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $60',
      duration: '90 min'
    },
    {
      title: 'Manicure y Pedicure',
      description: 'Cuidado completo de uñas con técnicas de gel, acrílico y nail art.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '60 min'
    },
    {
      title: 'Facial y Limpieza',
      description: 'Tratamientos faciales personalizados para todo tipo de piel.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $50',
      duration: '75 min'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de belleza con los más altos estándares de calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-primary font-bold text-lg">{service.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    ⏱️ {service.duration}
                  </span>
                  <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
                    Más info →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
