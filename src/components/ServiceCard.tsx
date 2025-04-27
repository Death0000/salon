
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 right-0 bg-accent px-3 py-1 text-white font-bold">
          ${service.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-ribeye text-xl font-bold text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        <Link to="/contact">
          <Button className="w-full bg-primary hover:bg-primary/90">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
