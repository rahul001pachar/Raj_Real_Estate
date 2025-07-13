import React from 'react';
import { Building, MapPin, Key, TrendingUp, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Residential Properties',
      description: 'Find your perfect home from our curated selection of apartments, villas, and houses.',
      features: ['Premium Locations', 'Serene Localities', 'Modern Amenities', 'Verified Listings'],
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Commercial Properties',
      description: 'Discover prime commercial spaces for your business growth and investment needs.',
      features: ['Business Centers', 'Retail Spaces', 'Office Complexes', 'Industrial Units'],
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Plot Investment',
      description: 'Secure your future with strategic plot investments in developing areas.',
      features: ['RERA Approved', 'Clear Titles', 'Growth Potential', 'Flexible Payment'],
      color: 'purple'
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Complete property management services for hassle-free ownership.',
      features: ['Maintenance', 'Tenant Management', 'Legal Support', 'Documentation'],
      color: 'amber'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
      purple: 'bg-purple-500 text-white',
      amber: 'bg-amber-500 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500 text-white';
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs. From residential properties to commercial spaces and investment plots.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(service.color)}`}>
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Why Choose Raj Real Estate?</h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              With over a decade of experience, we provide trusted, transparent, and professional real estate services.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="opacity-90">Legal Compliance</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;