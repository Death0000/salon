
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const products = [
    {
      id: 1,
      name: 'Hydrating Shampoo',
      category: 'hair',
      price: 24.99,
      discountedPrice: 19.99,
      image: '/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png',
      isOnSale: true,
    },
    {
      id: 2,
      name: 'Styling Gel',
      category: 'hair',
      price: 18.99,
      discountedPrice: null,
      image: '/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png',
      isOnSale: false,
    },
    {
      id: 3,
      name: 'Facial Cleanser',
      category: 'skin',
      price: 32.99,
      discountedPrice: 27.99,
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      isOnSale: true,
    },
    {
      id: 4,
      name: 'Professional Hair Dryer',
      category: 'tools',
      price: 129.99,
      discountedPrice: null,
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      isOnSale: false,
    },
    {
      id: 5,
      name: 'Moisturizing Conditioner',
      category: 'hair',
      price: 22.99,
      discountedPrice: null,
      image: '/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png',
      isOnSale: false,
    },
    {
      id: 6,
      name: 'Anti-Aging Serum',
      category: 'skin',
      price: 49.99,
      discountedPrice: 39.99,
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      isOnSale: true,
    },
    {
      id: 7,
      name: 'Hair Styling Brush',
      category: 'tools',
      price: 15.99,
      discountedPrice: 12.99,
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      isOnSale: true,
    },
    {
      id: 8,
      name: 'Volumizing Spray',
      category: 'hair',
      price: 19.99,
      discountedPrice: null,
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      isOnSale: false,
    },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : activeTab === 'sale' 
      ? products.filter(product => product.isOnSale)
      : products.filter(product => product.category === activeTab);

  return (
    <div className="pt-16 sm:pt-20"> {/* Added padding-top to account for fixed header */}
      {/* Hero Section */}
      <section className="bg-primary py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Products & Special Offers
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Discover our premium collection of salon products and exclusive deals to enhance your beauty routine.
          </p>
        </div>
      </section>

      {/* Products Filter */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <Button
              variant={activeTab === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveTab('all')}
              className={`text-sm ${activeTab === 'all' ? 'bg-accent hover:bg-accent/90' : ''}`}
            >
              All Products
            </Button>
            <Button
              variant={activeTab === 'hair' ? 'default' : 'outline'}
              onClick={() => setActiveTab('hair')}
              className={`text-sm ${activeTab === 'hair' ? 'bg-accent hover:bg-accent/90' : ''}`}
            >
              Hair Care
            </Button>
            <Button
              variant={activeTab === 'skin' ? 'default' : 'outline'}
              onClick={() => setActiveTab('skin')}
              className={`text-sm ${activeTab === 'skin' ? 'bg-accent hover:bg-accent/90' : ''}`}
            >
              Skin Care
            </Button>
            <Button
              variant={activeTab === 'tools' ? 'default' : 'outline'}
              onClick={() => setActiveTab('tools')}
              className={`text-sm ${activeTab === 'tools' ? 'bg-accent hover:bg-accent/90' : ''}`}
            >
              Tools
            </Button>
            <Button
              variant={activeTab === 'sale' ? 'default' : 'outline'}
              onClick={() => setActiveTab('sale')}
              className={`text-sm ${activeTab === 'sale' ? 'bg-accent hover:bg-accent/90' : ''}`}
            >
              On Sale
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-8 sm:py-16 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <div className="max-w-2xl">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
                Get 15% Off Your First Purchase
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6">
                Use code <span className="font-bold text-accent">AZURE15</span> at checkout to receive 15% off your first product purchase. Limited time offer!
              </p>
              <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                Shop Now
              </Button>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src="/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png"
                alt="Special offer"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
