
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import MobileServicesMenu from '@/components/MobileServicesMenu';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('alisados');

  const categories = [
    { id: 'alisados', name: 'Alisados' },
    { id: 'planchados', name: 'Planchados' },
    { id: 'cortes', name: 'Cortes para Dama' },
    { id: 'color', name: 'Baños de Color' },
    { id: 'acrilicas', name: 'Uñas Acrílicas' },
    { id: 'esmaltados', name: 'Esmaltados Permanentes' },
    { id: 'pedicure', name: 'Pedicure y Manicura' },
    { id: 'luna', name: 'Baños de Luna' },
    { id: 'pestanas', name: 'Extensiones de Pestañas' },
    { id: 'exfoliaciones', name: 'Exfoliaciones' },
    { id: 'faciales', name: 'Faciales' },
    { id: 'cejas', name: 'Cejas Permanentes' },
    { id: 'depilacion', name: 'Depilaciones' },
    { id: 'maquillaje', name: 'Maquillaje' }
  ];

  const filteredServices = services.filter(service => service.category === selectedCategory);

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-background flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Galería de <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios de belleza profesionales
          </p>
        </div>

        {/* Mobile Menu */}
        <MobileServicesMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Desktop Category Filter */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20 overflow-hidden animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.description}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground flex-1 mr-4">{service.description}</p>
                  <button 
                    onClick={scrollToContact}
                    className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 text-sm whitespace-nowrap"
                  >
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
            onClick={scrollToContact}
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
