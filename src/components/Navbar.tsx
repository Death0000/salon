import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-white/95 backdrop-blur-md shadow-md dark:bg-primary/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-ribeye text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-white">
                Moans Beauty Salon
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-accent font-medium'
                      : 'text-primary dark:text-white'
                  } px-2 py-1 text-sm font-medium`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button 
                onClick={handleLogout}
                variant="ghost"
                size="sm" 
                className="flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button 
                  variant="ghost"
                  size="sm" 
                  className="flex items-center gap-2"
                >
                  Login
                </Button>
              </Link>
            )}
            <Link to="/contact">
              <Button 
                size="sm" 
                className="bg-accent"
              >
                Book Now
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-primary dark:text-white"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-primary">
          <div className="px-4 pt-20 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-accent font-medium'
                    : 'text-primary dark:text-white'
                } block px-3 py-2 text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-primary dark:text-white"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-primary dark:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
              <div className="px-3 py-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-accent">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
