
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { elementRef, isInView } = useIntersectionObserver();

  return (
    <section 
      id="sobre-mi" 
      ref={elementRef}
      className={`py-20 gradient-bg animate-on-scroll min-h-screen flex items-center ${
        isInView ? 'animate animate-about-entrance' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-2xl opacity-30 transform -rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0dcaa4703c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Estilista profesional"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
                Sobre <span className="gradient-text">Mí</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Soy <strong className="text-primary">María González</strong>, estilista profesional con más de 10 años de experiencia 
                  en el mundo de la belleza. Mi pasión por realzar la belleza natural de cada persona 
                  me ha llevado a especializarme en las últimas tendencias y técnicas.
                </p>
                
                <p>
                  Creo firmemente que cada persona es única y merece un servicio personalizado 
                  que refleje su personalidad y estilo de vida. Mi objetivo es que salgas de 
                  nuestro salón sintiéndote más segura y radiante que nunca.
                </p>
                
                <p>
                  Continúo formándome constantemente en las mejores academias internacionales 
                  para ofrecerte siempre los tratamientos más innovadores y efectivos.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold text-primary mb-2">Certificaciones</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• L'Oréal Professional</li>
                  <li>• Redken Certified</li>
                  <li>• Wella Master</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold text-primary mb-2">Experiencia</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• +10 años</li>
                  <li>• +2000 clientes</li>
                  <li>• Eventos VIP</li>
                </ul>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Conoce Más de Mi Trabajo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
