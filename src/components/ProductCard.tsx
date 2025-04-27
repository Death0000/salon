
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    discountedPrice: number | null;
    image: string;
    isOnSale: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discount = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  return (
    <div 
      className="rounded-lg bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {product.isOnSale && (
          <Badge className="absolute top-3 left-3 bg-accent text-white font-bold py-1 px-3">
            {product.discountedPrice ? `${discount}% OFF` : 'SALE'}
          </Badge>
        )}
        
        {product.category === 'hair' && (
          <Badge className="absolute top-3 right-3 bg-primary text-white font-bold py-1 px-3">
            BEST SELLER
          </Badge>
        )}
        
        {product.category === 'skin' && product.isOnSale && (
          <Badge className="absolute top-3 right-3 bg-secondary text-white font-bold py-1 px-3">
            LIMITED OFFER
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-ribeye text-xl font-bold text-primary">
            {product.name}
          </h3>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm ml-1">4.8</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 capitalize">
          {product.category} Care
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {product.discountedPrice ? (
              <>
                <span className="text-accent font-bold mr-2">
                  ${product.discountedPrice.toFixed(2)}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-accent font-bold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
