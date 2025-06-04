
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('alisados');

  const services = [
    // Alisados
    {
      title: 'Alisado con Queratina',
      description: 'Alisados profesionales con tratamientos de queratina para cabello liso y manejable.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $80',
      duration: '180 min',
      category: 'alisados'
    },
    {
      title: 'Alisado Permanente',
      description: 'Técnicas avanzadas de alisado permanente para resultados duraderos.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $80',
      duration: '180 min',
      category: 'alisados'
    },
    {
      title: 'Alisado Natural',
      description: 'Alisado natural sin químicos agresivos para cabellos sensibles.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $80',
      duration: '180 min',
      category: 'alisados'
    },

    // Planchados
    {
      title: 'Planchado Profesional',
      description: 'Planchado profesional para un cabello sedoso y brillante.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '45 min',
      category: 'planchados'
    },
    {
      title: 'Planchado con Protección',
      description: 'Planchado con protección térmica para cuidar tu cabello.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0beb67c3e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '45 min',
      category: 'planchados'
    },
    {
      title: 'Planchado para Eventos',
      description: 'Planchado especializado para eventos y ocasiones especiales.',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '45 min',
      category: 'planchados'
    },

    // Cortes para Dama
    {
      title: 'Corte Moderno',
      description: 'Cortes modernos y elegantes adaptados a tu estilo personal.',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $35',
      duration: '60 min',
      category: 'cortes'
    },
    {
      title: 'Corte de Tendencia',
      description: 'Cortes de tendencia con técnicas profesionales de estilismo.',
      image: 'https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $35',
      duration: '60 min',
      category: 'cortes'
    },
    {
      title: 'Corte Personalizado',
      description: 'Cortes personalizados según la forma de tu rostro.',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $35',
      duration: '60 min',
      category: 'cortes'
    },

    // Baños de Color
    {
      title: 'Coloración Profesional',
      description: 'Coloración profesional con productos de alta calidad.',
      image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $60',
      duration: '120 min',
      category: 'color'
    },
    {
      title: 'Balayage y Mechas',
      description: 'Técnicas de balayage y mechas para looks naturales.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $60',
      duration: '120 min',
      category: 'color'
    },
    {
      title: 'Coloración Fantasía',
      description: 'Coloración fantasía y colores vibrantes.',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $60',
      duration: '120 min',
      category: 'color'
    },

    // Uñas Acrílicas
    {
      title: 'Extensiones Acrílicas',
      description: 'Extensiones acrílicas duraderas con diseños personalizados.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $40',
      duration: '90 min',
      category: 'acrilicas'
    },
    {
      title: 'Nail Art Acrílico',
      description: 'Uñas acrílicas con nail art y decoraciones especiales.',
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $40',
      duration: '90 min',
      category: 'acrilicas'
    },
    {
      title: 'Acrílicas Resistentes',
      description: 'Técnicas avanzadas para uñas acrílicas resistentes.',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $40',
      duration: '90 min',
      category: 'acrilicas'
    },

    // Esmaltados Permanentes
    {
      title: 'Esmaltado Gel',
      description: 'Esmaltado gel que dura hasta 3 semanas sin descascararse.',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '60 min',
      category: 'esmaltados'
    },
    {
      title: 'Amplia Gama de Colores',
      description: 'Amplia gama de colores y acabados para esmaltado permanente.',
      image: 'https://images.unsplash.com/photo-1599948128020-9d3d2e116df5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '60 min',
      category: 'esmaltados'
    },
    {
      title: 'Esmaltado Nutritivo',
      description: 'Esmaltado semipermanente con tratamiento nutritivo.',
      image: 'https://images.unsplash.com/photo-1617620165588-36c73ce89adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $25',
      duration: '60 min',
      category: 'esmaltados'
    },

    // Pedicure y Manicura
    {
      title: 'Tratamiento Completo',
      description: 'Cuidado completo de manos y pies con tratamientos relajantes.',
      image: 'https://images.unsplash.com/photo-1588990715767-52d0e5c657b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $30',
      duration: '75 min',
      category: 'pedicure'
    },
    {
      title: 'Spa de Manos y Pies',
      description: 'Spa de manos y pies con exfoliación e hidratación profunda.',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $30',
      duration: '75 min',
      category: 'pedicure'
    },
    {
      title: 'Manicura Francesa',
      description: 'Manicura y pedicura francesa con acabado profesional.',
      image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $30',
      duration: '75 min',
      category: 'pedicure'
    },

    // Baños de Luna
    {
      title: 'Terapia Lunar',
      description: 'Tratamiento relajante con terapia lunar para renovar energías.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $70',
      duration: '90 min',
      category: 'luna'
    },
    {
      title: 'Ritual Luna Llena',
      description: 'Ritual de luna llena con aceites esenciales y minerales.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $70',
      duration: '90 min',
      category: 'luna'
    },
    {
      title: 'Experiencia Sensorial',
      description: 'Experiencia sensorial única con cristales y aromaterapia.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $70',
      duration: '90 min',
      category: 'luna'
    },

    // Extensiones de Pestañas
    {
      title: 'Extensiones Pelo a Pelo',
      description: 'Extensiones de pestañas pelo a pelo para una mirada espectacular.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $50',
      duration: '120 min',
      category: 'pestanas'
    },
    {
      title: 'Técnica Híbrida',
      description: 'Técnica híbrida para volumen y longitud natural.',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $50',
      duration: '120 min',
      category: 'pestanas'
    },
    {
      title: 'Extensiones Rusas',
      description: 'Extensiones rusas para máximo volumen y dramatismo.',
      image: 'https://images.unsplash.com/photo-1586438689892-d7e9b7ad9c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $50',
      duration: '120 min',
      category: 'pestanas'
    },

    // Exfoliaciones
    {
      title: 'Exfoliación Corporal',
      description: 'Exfoliación corporal completa para piel suave y renovada.',
      image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $55',
      duration: '60 min',
      category: 'exfoliaciones'
    },
    {
      title: 'Peeling con Sales Marinas',
      description: 'Peeling corporal con sales marinas y aceites nutritivos.',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $55',
      duration: '60 min',
      category: 'exfoliaciones'
    },
    {
      title: 'Tratamiento Detox',
      description: 'Tratamiento detox con scrub natural y masaje relajante.',
      image: 'https://images.unsplash.com/photo-1592053420092-eb861d8a6f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $55',
      duration: '60 min',
      category: 'exfoliaciones'
    },

    // Faciales
    {
      title: 'Limpieza Facial Profunda',
      description: 'Limpieza facial profunda adaptada a cada tipo de piel.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $45',
      duration: '75 min',
      category: 'faciales'
    },
    {
      title: 'Tratamiento Anti-Edad',
      description: 'Tratamiento anti-edad con productos naturales y orgánicos.',
      image: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $45',
      duration: '75 min',
      category: 'faciales'
    },
    {
      title: 'Hidratación Intensiva',
      description: 'Hidratación intensiva con mascarillas personalizadas.',
      image: 'https://images.unsplash.com/photo-1626503783175-d99d4ad6c5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $45',
      duration: '75 min',
      category: 'faciales'
    },

    // Cejas Permanentes
    {
      title: 'Diseño con Henna',
      description: 'Diseño y tinte de cejas con henna natural de larga duración.',
      image: 'https://images.unsplash.com/photo-1571804626047-90ca665f2ac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $30',
      duration: '45 min',
      category: 'cejas'
    },
    {
      title: 'Microblading',
      description: 'Microblading y técnicas de perfilado profesional.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9d8e0ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $30',
      duration: '45 min',
      category: 'cejas'
    },
    {
      title: 'Arquitectura de Cejas',
      description: 'Arquitectura de cejas según la forma de tu rostro.',
      image: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $30',
      duration: '45 min',
      category: 'cejas'
    },

    // Depilaciones
    {
      title: 'Depilación Suave',
      description: 'Depilación suave con cremas especializadas para piel sensible.',
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $20',
      duration: '30 min',
      category: 'depilacion'
    },
    {
      title: 'Depilación Corporal',
      description: 'Depilación corporal completa con productos hipoalergénicos.',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $20',
      duration: '30 min',
      category: 'depilacion'
    },
    {
      title: 'Técnicas Avanzadas',
      description: 'Técnicas avanzadas de depilación para resultados duraderos.',
      image: 'https://images.unsplash.com/photo-1609592328996-39afa59bf49d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $20',
      duration: '30 min',
      category: 'depilacion'
    },

    // Maquillaje
    {
      title: 'Maquillaje para Eventos',
      description: 'Maquillaje profesional para eventos, bodas y ocasiones especiales.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $40',
      duration: '60 min',
      category: 'maquillaje'
    },
    {
      title: 'Maquillaje Día y Noche',
      description: 'Maquillaje de día y noche con técnicas profesionales.',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $40',
      duration: '60 min',
      category: 'maquillaje'
    },
    {
      title: 'Maquillaje para Fotografía',
      description: 'Sesiones de maquillaje para fotografía y video.',
      image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'Desde $40',
      duration: '60 min',
      category: 'maquillaje'
    }
  ];

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

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Galería de <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios de belleza profesionales
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
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
        <div className="text-center mt-20">
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
