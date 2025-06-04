
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';
import { useTestimonials } from '@/hooks/useTestimonials';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { testimonials } = useTestimonials();

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

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-playfair font-bold text-white">
                Abby's Salon
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Tu salón de belleza de confianza donde la elegancia y el profesionalismo 
              se unen para realzar tu belleza natural.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-pink-400" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-pink-400" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-playfair font-semibold text-white">Servicios</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              {services.map((service) => (
                <li key={service} className="hover:text-pink-400 cursor-pointer transition-colors text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-playfair font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>
                <button 
                  onClick={() => document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-400 transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-400 transition-colors"
                >
                  Sobre Mí
                </button>
              </li>
              {testimonials && testimonials.length > 0 && (
                <li>
                  <button 
                    onClick={() => document.querySelector('#testimonios')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-pink-400 transition-colors"
                  >
                    Testimonios
                  </button>
                </li>
              )}
              <li>
                <button 
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-pink-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-playfair font-semibold text-white">Contacto</h4>
            <div className="space-y-3 text-gray-300 dark:text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm">Av. Belleza 123, Centro, Ciudad</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm">info@abbyssalon.com</span>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white">Horarios:</h5>
              <div className="text-sm text-gray-300 dark:text-gray-400 space-y-1">
                <p>Solo por citas</p>
                <p>Lunes - Sábado: 9:00 - 19:00</p>
                <p>Domingo: 10:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 dark:text-gray-400 text-sm">
              © {currentYear} Abby's Salon. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
              <span>para nuestras clientas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
