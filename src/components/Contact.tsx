import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Instagram, Facebook } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const { elementRef, isInView } = useIntersectionObserver();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleWhatsAppMessage = () => {
    const message = `Hola! Soy ${formData.name || '[Nombre]'}. Me gustaría agendar una cita para ${formData.service || '[Servicio]'}.`;
    const phoneNumber = '50378335406';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const generateQRCode = () => {
    const message = "Hola! Me gustaría agendar una cita en Abby's Salon";
    const phoneNumber = '50378335406';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;
  };

  return (
    <section 
      id="contacto" 
      ref={elementRef}
      className={`py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-black animate-on-scroll min-h-screen flex items-center ${
        isInView ? 'animate animate-contact-entrance' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reserva tu cita y déjanos cuidar de tu belleza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Contact Form */}
          <div className="flex justify-center">
            <Card className="border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-2xl w-full max-w-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-gray-800 dark:text-white">
                  Agenda tu Cita
                </h3>
                
                <div className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/70 dark:bg-white/20 border-gray-200 dark:border-white/30 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                  <Input
                    name="phone"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/70 dark:bg-white/20 border-gray-200 dark:border-white/30 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                  <Select onValueChange={handleServiceChange}>
                    <SelectTrigger className="bg-white/70 dark:bg-white/20 border-gray-200 dark:border-white/30 text-gray-800 dark:text-white">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50">
                      {services.map((service) => (
                        <SelectItem 
                          key={service} 
                          value={service}
                          className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Button
                    onClick={handleWhatsAppMessage}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Enviar por WhatsApp 📱
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QR and Social */}
          <div className="space-y-8">
            {/* QR Code */}
            <Card className="border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-gray-800 dark:text-white">
                  Escanea para WhatsApp
                </h3>
                <div className="flex justify-center mb-6">
                  <img
                    src={generateQRCode()}
                    alt="QR Code para WhatsApp"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Escanea este código QR para contactarnos directamente por WhatsApp
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-gray-800 dark:text-white">
                  Síguenos en Redes
                </h3>
                <div className="flex justify-center space-x-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open('https://www.instagram.com/aby_beltran17/', '_blank')}
                    className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full text-white"
                  >
                    <Instagram className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=100084958413452', '_blank')}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full text-white"
                  >
                    <Facebook className="w-8 h-8" />
                  </Button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Mantente al día con nuestras últimas tendencias y promociones
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
