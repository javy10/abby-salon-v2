
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppMessage = () => {
    const message = `Hola! Soy ${formData.name || '[Nombre]'}. Me gustaría agendar una cita para ${formData.service || '[Servicio]'}. ${formData.message ? `Mensaje adicional: ${formData.message}` : ''}`;
    const phoneNumber = '1234567890'; // Reemplaza con el número real
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const generateQRCode = () => {
    const message = "Hola! Me gustaría agendar una cita en Bella Studio";
    const phoneNumber = '1234567890';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;
  };

  return (
    <section id="contacto" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserva tu cita y déjanos cuidar de tu belleza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl animate-slide-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">
                Agenda tu Cita
              </h3>
              
              <div className="space-y-4">
                <Input
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
                
                <Input
                  name="email"
                  type="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
                
                <Input
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                />
                
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Corte y Peinado">Corte y Peinado</option>
                  <option value="Coloración">Coloración</option>
                  <option value="Tratamientos Capilares">Tratamientos Capilares</option>
                  <option value="Maquillaje Profesional">Maquillaje Profesional</option>
                  <option value="Manicure y Pedicure">Manicure y Pedicure</option>
                  <option value="Facial y Limpieza">Facial y Limpieza</option>
                </select>
                
                <Textarea
                  name="message"
                  placeholder="Mensaje adicional (opcional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-foreground placeholder:text-muted-foreground"
                  rows={4}
                />
                
                <Button
                  onClick={handleWhatsAppMessage}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Enviar por WhatsApp 📱
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info & QR */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Dirección</h4>
                      <p className="text-muted-foreground">Av. Belleza 123, Centro, Ciudad</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Teléfono</h4>
                      <p className="text-muted-foreground">+1 (234) 567-8900</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Horarios</h4>
                      <p className="text-muted-foreground">Lun-Sáb: 9:00-19:00</p>
                      <p className="text-muted-foreground">Dom: 10:00-16:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Code */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Escanea para WhatsApp
                </h3>
                <div className="flex justify-center mb-4">
                  <img
                    src={generateQRCode()}
                    alt="QR Code para WhatsApp"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  Escanea este código QR para contactarnos directamente por WhatsApp
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Síguenos
                </h3>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full"
                  >
                    <Facebook className="w-6 h-6 text-primary" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
