
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions or ready to book an appointment? Reach out to our team and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-primary mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-primary mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut & Styling</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="facial">Facial</option>
                    <option value="makeup">Makeup</option>
                    <option value="mens-grooming">Men's Grooming</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 py-6">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                Contact Information
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <div className="flex items-start mb-6">
                  <MapPin className="text-accent mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-primary mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Salon Street<br />
                      Beauty City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Mail className="text-accent mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-primary mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@azurehaven.com" className="hover:text-accent transition-colors">
                        info@azurehaven.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-accent mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-primary mb-1">Hours of Operation</h3>
                    <table className="w-full text-gray-600">
                      <tbody>
                        <tr>
                          <td className="py-1 pr-4">Monday - Friday</td>
                          <td className="py-1">9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-1 pr-4">Saturday</td>
                          <td className="py-1">9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-1 pr-4">Sunday</td>
                          <td className="py-1">10:00 AM - 5:00 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-80 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Book an Appointment
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your look? Schedule an appointment with one of our skilled professionals today.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
