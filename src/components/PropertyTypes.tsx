import React from 'react';
import { Home, Building2, Landmark, TrendingUp, ArrowRight, Users, MapPin } from 'lucide-react';

const PropertyTypes = () => {
  const propertyTypes = [
    {
      icon: Home,
      title: 'Residential Properties',
      description: 'Plots, Farmhouses, villas, and independent houses in prime locations',
      features: ['Premium Amenities', 'Vastu Compliant', 'Gated Communities'],
      projects: 25,
      priceRange: '₹80L - ₹5Cr',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-blue-700',
      stats: { sold: '500+', rating: '4.8' }
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Office complexes, retail spaces, and business centers for growth',
      features: ['IT Ready Infrastructure', 'Strategic Locations', 'High ROI', 'Excellent Connectivity'],
      projects: 15,
      priceRange: '₹90L - ₹10Cr',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-green-700',
      stats: { sold: '200+', rating: '4.9' }
    },
    {
      icon: Landmark,
      title: 'Plots & Land',
      description: 'RERA approved plots in developing corridors with high appreciation',
      features: ['RERA Approved', 'Clear Titles', 'Growth Potential', 'Flexible Payment'],
      projects: 30,
      priceRange: '₹25L - ₹2Cr',
      image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-500 to-purple-700',
      stats: { sold: '800+', rating: '4.7' }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Property Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Property Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From luxury residences to strategic investments, find the perfect property type that matches your needs and aspirations.
          </p>
        </div>

        {/* Property Types Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Background */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${type.gradient} opacity-80`}></div>

                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Stats */}
                <div className="absolute top-6 right-6 text-right">
                  <div className="text-white text-sm font-medium">{type.stats.sold} Sold</div>
                  <div className="text-white/80 text-xs">★ {type.stats.rating} Rating</div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-white/90 text-sm">{type.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Price Range */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Price Range</div>
                    <div className="text-xl font-bold text-gray-900">{type.priceRange}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Projects</div>
                    <div className="text-xl font-bold text-gray-900">{type.projects}+</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
                  <span className="font-medium">Explore Properties</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Raj Real Estate?</h3>
            <p className="text-xl opacity-90">Trusted by thousands of families and investors across Hisar</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">1500+</div>
              <div className="text-blue-100">Properties Sold</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">₹1000Cr+</div>
              <div className="text-blue-100">Worth Transacted</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;