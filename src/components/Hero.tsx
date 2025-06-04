import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { elementRef, isInView } = useIntersectionObserver();
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    const handleError = () => {
      console.error('Error loading video');
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Cargar el video cuando el componente está visible
    if (isInView && !videoLoaded) {
      video.load();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, [isInView, videoLoaded]);

  // Controlar reproducción basada en visibilidad
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoLoaded) return;

    if (isInView) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  }, [isInView, videoLoaded]);

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
          ref={videoRef}
          autoPlay={false}
          loop
          muted
          playsInline
          preload="none"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        >
          <source 
            src="https://videos.pexels.com/video-files/3997792/3997792-uhd_2732_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {!videoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }}
          />
        )}
        
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-float z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-20">
        <div className="flex items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
              <span className="block text-white mb-2 drop-shadow-lg">{t('hero.title1')}</span>
              <span className="block gradient-text drop-shadow-lg">{t('hero.title2')}</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                {t('hero.services')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
