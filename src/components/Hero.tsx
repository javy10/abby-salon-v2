
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { elementRef, isInView } = useIntersectionObserver();
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      ref={elementRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden animate-on-scroll ${
        isInView ? 'animate animate-hero-entrance' : ''
      }`}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source 
            src="https://videos.pexels.com/video-files/3196284/3196284-hd_1920_1080_30fps.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://videos.pexels.com/video-files/3985554/3985554-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Fallback gradient background */}
        <div className="absolute inset-0 w-full h-full gradient-bg"></div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-float z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
              <span className="block text-white mb-2 drop-shadow-lg">{t('hero.title1')}</span>
              <span className="block gradient-text drop-shadow-lg">{t('hero.title2')}</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {t('hero.book')}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                {t('hero.services')}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Salón de Belleza"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
