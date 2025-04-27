
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div 
          key={testimonials[activeIndex].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary mb-4">
                {testimonials[activeIndex].avatar ? (
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                    {getInitials(testimonials[activeIndex].name)}
                  </div>
                )}
              </div>
              
              <div className="flex justify-center mb-2">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
                {Array.from({ length: 5 - testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i + testimonials[activeIndex].rating} size={20} className="text-gray-300" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-center mb-6">
              <p className="text-lg md:text-xl text-gray-600 italic">
                "<span className="font-medium text-primary">{testimonials[activeIndex].comment}</span>"
              </p>
            </blockquote>
            
            <div className="text-center">
              <p className="font-ribeye font-medium text-primary text-lg">{testimonials[activeIndex].name}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-6 gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full border-gray-300 hover:border-primary hover:bg-primary hover:text-white"
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={18} />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full border-gray-300 hover:border-primary hover:bg-primary hover:text-white"
          aria-label="Next testimonial"
        >
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
