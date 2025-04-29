
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="font-ribeye text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
          Welcome to Moans Beauty Salon
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Your destination for premium beauty services and self-care. Experience the luxury and pampering you deserve!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate('/login')}
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/login?tab=register')}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
