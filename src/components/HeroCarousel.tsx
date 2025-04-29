
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface HeroCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (showOverlay) return;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [showOverlay, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    toast({
      title: "Welcome to Moans Beauty Salon",
      description: "Browse our services and book your appointment today!",
    });
  };

  return (
    <div className="relative h-[85vh] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Promotional Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center animate-zoom-in">
          <button
            onClick={handleCloseOverlay}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            aria-label="Close overlay"
          >
            <X size={32} />
          </button>
          
          <div className="text-center text-white p-8 max-w-3xl">
            <h1 className="font-ribeye text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Your Perfect Style at Moans Beauty Salon
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
              Experience premium salon services tailored to your unique style and personality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content (visible when overlay is closed) */}
      <div className={`relative z-10 h-full flex items-center transition-opacity duration-500 ${showOverlay ? 'opacity-0' : 'opacity-100'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-ribeye text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your Perfect Style at Moans Beauty Salon
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Experience premium salon services tailored to your unique style and personality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-accent" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;
