
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const services = [
    {
      title: 'Corte y Peinado',
      description: 'Cortes modernos y peinados elegantes que realzan tu personalidad única.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $45',
      duration: '60 min',
      category: 'cabello'
    },
    {
      title: 'Coloración',
      description: 'Técnicas avanzadas de coloración, mechas y balayage para un look espectacular.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $80',
      duration: '120 min',
      category: 'cabello'
    },
    {
      title: 'Tratamientos Capilares',
      description: 'Tratamientos nutritivos y reparadores para cabello dañado y deshidratado.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $35',
      duration: '45 min',
      category: 'cabello'
    },
    {
      title: 'Maquillaje Profesional',
      description: 'Maquillaje para eventos especiales, bodas y sesiones fotográficas.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $60',
      duration: '90 min',
      category: 'maquillaje'
    },
    {
      title: 'Manicure y Pedicure',
      description: 'Cuidado completo de uñas con técnicas de gel, acrílico y nail art.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '60 min',
      category: 'unas'
    },
    {
      title: 'Facial y Limpieza',
      description: 'Tratamientos faciales personalizados para todo tipo de piel.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $50',
      duration: '75 min',
      category: 'facial'
    },
    {
      title: 'Depilación',
      description: 'Servicios de depilación con cera y técnicas modernas para una piel suave.',
      image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $20',
      duration: '30 min',
      category: 'depilacion'
    },
    {
      title: 'Extensiones de Pestañas',
      description: 'Extensiones de pestañas profesionales para una mirada más intensa.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $70',
      duration: '120 min',
      category: 'pestanas'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'cabello', name: 'Cabello' },
    { id: 'maquillaje', name: 'Maquillaje' },
    { id: 'unas', name: 'Uñas' },
    { id: 'facial', name: 'Facial' },
    { id: 'depilacion', name: 'Depilación' },
    { id: 'pestanas', name: 'Pestañas' }
  ];

  const filteredServices = selectedCategory === 'todos' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Galería de <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios de belleza profesionales
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                  : 'hover:bg-primary/10 hover:scale-105'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {service.price}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-playfair font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground flex items-center">
                    ⏱️ {service.duration}
                  </span>
                  <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 text-sm">
                    Ver más →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Agenda tu Cita Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
