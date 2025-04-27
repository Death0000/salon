
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TeamMember from '@/components/TeamMember';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Emma Johnson',
      role: 'Senior Hair Stylist',
      image: '/lovable-uploads/37c6424e-6c2b-423c-9191-cbf26631db59.png',
      bio: 'With over 10 years of experience, Emma specializes in cutting-edge hair styling and coloring techniques.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Barber & Men\'s Grooming Specialist',
      image: '/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png',
      bio: 'Michael brings his expertise in precision cuts and beard styling to create the perfect look for our male clients.',
    },
    {
      id: 3,
      name: 'Sofia Rodriguez',
      role: 'Esthetician & Makeup Artist',
      image: '/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png',
      bio: 'Sofia is our skincare expert, specializing in facials, peels, and professional makeup application.',
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Color Specialist',
      image: '/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png',
      bio: 'David\'s creative approach to hair coloring has earned him a reputation for stunning transformations.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                About Azure Haven
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Since 2015, we've been dedicated to providing exceptional salon services in a relaxing and welcoming environment. Our team of skilled professionals is committed to helping you look and feel your best.
              </p>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90">
                  Book an Appointment
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <img
                  src="/lovable-uploads/82a80b0d-f64f-4568-9f8d-022e095e7db7.png"
                  alt="Salon interior"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-white font-serif text-xl">7+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                Azure Haven was founded with a simple mission: to create a salon experience that celebrates individuality and brings out the natural beauty in every client. What started as a small studio with just three chairs has grown into a full-service salon with a devoted clientele and award-winning stylists.
              </p>
              <p>
                Our founder, Claire Bennett, envisioned a space where clients could feel comfortable expressing their unique style while receiving top-quality service. Today, that vision continues to guide everything we do at Azure Haven.
              </p>
              <p>
                We pride ourselves on staying at the forefront of industry trends while maintaining a warm, inviting atmosphere where clients can relax and enjoy their salon experience. Our team regularly attends workshops and training sessions to bring the latest techniques and products to our clients.
              </p>
              <p>
                At Azure Haven, we believe that beauty should be sustainable. That's why we partner with eco-friendly brands and implement green practices in our salon operations, from energy-efficient equipment to biodegradable products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Awards & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="inline-block rounded-full bg-accent/10 p-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center font-serif text-3xl font-bold text-accent">
                  1
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Best Salon 2023</h3>
              <p className="text-gray-600">Voted Best Salon in the Metropolitan Area for exceptional service and results.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="inline-block rounded-full bg-accent/10 p-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center font-serif text-3xl font-bold text-accent">
                  2
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Style Innovator</h3>
              <p className="text-gray-600">Recognized for innovative styling techniques and trend-setting approaches.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="inline-block rounded-full bg-accent/10 p-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center font-serif text-3xl font-bold text-accent">
                  3
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Eco-Friendly Business</h3>
              <p className="text-gray-600">Awarded for our commitment to sustainable practices and eco-friendly products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Azure Haven Difference
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community of satisfied clients and discover why we're a leading salon in the region.
          </p>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              Book Your Visit Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
