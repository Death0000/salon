import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import HeroCarousel from '@/components/HeroCarousel';
import { ArrowRight, Instagram as InstagramIcon } from 'lucide-react';

const Home = () => {
  const carouselImages = [
    {
      src:'/lovable-uploads/fd6055f3-bd26-489f-88a7-0eb7cbb4299c.png',
      alt: 'Moans Beauty Salon interior'
    },
    {
      src:'/lovable-uploads/fd6055f3-bd26-489f-88a7-0eb7cbb4299c.png',
      alt: 'Relaxing spa treatment'
    },
    {
      src: '/lovable-uploads/fd6055f3-bd26-489f-88a7-0eb7cbb4299c.png',
      alt: 'Hair styling services'
    },
    {
      src: '/lovable-uploads/14a92680-19f3-4700-91d9-789c729b4357.png',
      alt: 'Professional beauty service'
    },
    {
      src: '/lovable-uploads/d7bfc4c8-45b3-4e8c-a2bc-a03fe29d322b.png',
      alt: 'Salon styling stations'
    }
  ];

  const services = [
    {
      id: 1,
      title: 'Haircuts',
      description: 'Expert styling for all hair types and lengths',
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      price: '45',
    },
    {
      id: 2,
      title: 'Facials',
      description: 'Rejuvenating treatments for glowing skin',
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      price: '65',
    },
    {
      id: 3,
      title: "Women's Grooming",
      description: 'Complete styling and beauty services',
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      price: '75',
    },
    {
      id: 4,
      title: "Men's Grooming",
      description: 'Haircuts, beard trims, and styling services',
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      price: '55',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'The team at Moans Beauty Salon transformed my hair completely! Their attention to detail and styling expertise is unmatched.',
      rating: 5,
      avatar: '/lovable-uploads/722ebefc-d47d-466a-89a9-0334d845c535.png',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      comment: 'Best haircut I\'ve ever had. The stylist really listened to what I wanted and delivered beyond my expectations.',
      rating: 5,
      avatar: '/lovable-uploads/14a92680-19f3-4700-91d9-789c729b4357.png',
    },
    {
      id: 3,
      name: 'Jennifer Lee',
      comment: 'The facial treatments here are amazing. My skin has never looked better, and the salon atmosphere is so relaxing.',
      rating: 4,
      avatar: '/lovable-uploads/fd6055f3-bd26-489f-88a7-0eb7cbb4299c.png',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png"
            alt="Moans Beauty Salon interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ribeye text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of premium salon services for both men and women.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ribeye text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experiences at Moans Beauty Salon.
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-ribeye text-3xl md:text-4xl font-bold text-primary mb-4">Follow Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our latest work and behind-the-scenes moments on Instagram.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 rounded-md overflow-hidden group relative">
                <img 
                  src={`/lovable-uploads/${item % 5 === 0 ? '82a80b0d-f64f-4568-9f8d-022e095e7db7' : 
                         item % 4 === 0 ? '82a80b0d-f64f-4568-9f8d-022e095e7db7' : 
                         item % 3 === 0 ? '82a80b0d-f64f-4568-9f8d-022e095e7db7' : 
                         item % 2 === 0 ?'37c6424e-6c2b-423c-9191-cbf26631db59': '37c6424e-6c2b-423c-9191-cbf26631db59'}.png`} 
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <InstagramIcon size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              <span className="font-medium">Follow us on Instagram</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-ribeye text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-white/80 mb-8">
              Subscribe to our newsletter for exclusive offers, styling tips, and salon updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-primary"
                required
              />
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
