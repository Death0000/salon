
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="font-ribeye text-2xl font-bold text-white">Moans Beauty Salon</span>
            </Link>
            <p className="text-white/80 max-w-xs">
              Providing premium salon services for both men and women since 2015. Your beauty journey is our passion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 p-2 bg-white/10 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 p-2 bg-white/10 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 p-2 bg-white/10 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200 p-2 bg-white/10 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-accent transition-colors">Services & Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  123 Beauty Street, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-white/80 hover:text-accent transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@moansbeautysalon.com" className="text-white/80 hover:text-accent transition-colors">
                  info@moansbeautysalon.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white/90 font-medium mb-2">Hours</h4>
              <p className="text-white/80 text-sm">Mon-Fri: 9:00 AM - 8:00 PM</p>
              <p className="text-white/80 text-sm">Sat: 10:00 AM - 6:00 PM</p>
              <p className="text-white/80 text-sm">Sun: 11:00 AM - 5:00 PM</p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-2">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Moans Beauty Salon. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
