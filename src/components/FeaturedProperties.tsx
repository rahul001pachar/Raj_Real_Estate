import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight, Filter } from 'lucide-react';

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const properties = [
    {
      id: 1,
      type: 'residential',
      title: 'Luxury Villa in Banjara Hills',
      location: 'Banjara Hills, Hyderabad',
      price: '₹2.5 Crores',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 4,
      baths: 3,
      area: '3500 sq ft',
      tag: 'Premium'
    },
    {
      id: 2,
      type: 'commercial',
      title: 'Commercial Complex in Jubilee Hills',
      location: 'Jubilee Hills, Hyderabad',
      price: '₹5.2 Crores',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: null,
      baths: null,
      area: '8000 sq ft',
      tag: 'Investment'
    },
    {
      id: 3,
      type: 'plots',
      title: 'DTCP Approved Plot',
      location: 'Kompally, Hyderabad',
      price: '₹45 Lakhs',
      image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: null,
      baths: null,
      area: '2400 sq ft',
      tag: 'Ready to Build'
    },
    {
      id: 4,
      type: 'residential',
      title: 'Modern Apartment in Gachibowli',
      location: 'Gachibowli, Hyderabad',
      price: '₹1.8 Crores',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 3,
      baths: 2,
      area: '2200 sq ft',
      tag: 'New Launch'
    },
    {
      id: 5,
      type: 'commercial',
      title: 'Office Space in HITEC City',
      location: 'HITEC City, Hyderabad',
      price: '₹3.2 Crores',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: null,
      baths: null,
      area: '5000 sq ft',
      tag: 'IT Hub'
    },
    {
      id: 6,
      type: 'plots',
      title: 'Agricultural Land',
      location: 'Medchal, Hyderabad',
      price: '₹25 Lakhs',
      image: 'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: null,
      baths: null,
      area: '1 Acre',
      tag: 'Farming'
    }
  ];

  const filteredProperties = activeTab === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeTab);

  const tabs = [
    { id: 'all', label: 'All Properties', count: properties.length },
    { id: 'residential', label: 'Residential', count: properties.filter(p => p.type === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: properties.filter(p => p.type === 'commercial').length },
    { id: 'plots', label: 'Plots & Land', count: properties.filter(p => p.type === 'plots').length }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our handpicked selection of premium properties and investment opportunities.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-sm opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-lg font-bold text-gray-900">{property.price}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
                  {property.beds && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border-2 border-blue-600 font-medium">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;