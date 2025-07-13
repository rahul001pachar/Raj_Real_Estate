import React, { useState } from 'react';
import rrd from '../images/rrd.jpeg';
import acres from '../images/54acres.jpeg';
import { MapPin, Navigation, Clock, Car, Train, Plane, School, Guitar as Hospital, ShoppingBag, Building } from 'lucide-react';

const LocationAdvantage = () => {
  const [activeLocation, setActiveLocation] = useState('banjara-hills');

  const locations = [
    {
      id: '54 Acres-',
      name: '54 Acres',
      description: 'The most prestigious residential, commercial and industrial area in Hisar',
      image: acres,
      highlights: [
        'Prime residential locality',
        'Excellent connectivity',
        'Premium amenities'
      ],
      connectivity: [
        { icon: Car, label: 'Abha Hospital', time: '1 min' },
        { icon: Train, label: 'Tulips Resort', time: '2 mins' },
        { icon: Plane, label: 'Airport', time: '10 mins' },
        { icon: Building, label: 'Siddharth International School', time: '1 min' }
      ],
      amenities: [
        { icon: School, label: 'Top Schools', count: '8+' },
        { icon: Hospital, label: 'Hospitals', count: '6+' },
        { icon: ShoppingBag, label: 'Malls', count: '4+' },
        { icon: Building, label: 'Offices', count: '50+' }
      ]
    },
    {
      id: 'Saraswati Vihar',
      name: 'Saraswati Vihar',
      description: 'Plots in the most iconic place near Hisar Airport',
      image: rrd,
      highlights: [
        'Hisar Airport',
        'Modern infrastructure',
        'High rental yields',
        'Growth potential'
      ],
      connectivity: [
        { icon: Car, label: 'Hisar Airport', time: '5 mins' },
        { icon: Train, label: 'Main Bus Stand', time: '10 mins' },
        { icon: Plane, label: 'Jindal Hospital', time: '10 mins' },
        { icon: Building, label: 'Hisar Cantt', time: '5 mins' }
      ],
      amenities: [
        { icon: School, label: 'International Schools', count: '15+' },
        { icon: Hospital, label: 'Multi-specialty Hospitals', count: '8+' },
        { icon: ShoppingBag, label: 'Shopping Centers', count: '6+' },
        { icon: Building, label: 'Offices', count: '50+' }
      ]
    },
    {
      id: 'rajat vihar',
      name: 'Rajat Vihar',
      description: 'Emerging residential hub with excellent growth prospects',
      image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Affordable pricing',
        'Rapid development',
        'Good connectivity',
        'Investment potential'
      ],
      connectivity: [
        { icon: Hospital, label: 'Aadhar Hospital', time: '2 mins' },
        { icon: Train, label: 'Railway Station', time: '10 mins' },
        { icon: Plane, label: 'Airport', time: '15 mins' },
        { icon: Building, label: 'Dabra Chowk', time: '5 mins' }
      ],
      amenities: [
        { icon: School, label: 'Schools', count: '10+' },
        { icon: Hospital, label: 'Healthcare', count: '6+' },
        { icon: ShoppingBag, label: 'Markets', count: '5+' },
        { icon: Building, label: 'Commercial', count: '20+' }
      ]
    }
  ];

  const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Prime Locations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Strategic Location Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our properties are strategically located in Hisar's most sought-after areas with excellent connectivity and amenities.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${activeLocation === location.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Location Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={currentLocation.image}
              alt={currentLocation.name}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold mb-2">{currentLocation.name}</h3>
              <p className="text-lg opacity-90">{currentLocation.description}</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            {/* Highlights */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Location Highlights</h4>
              <div className="grid grid-cols-2 gap-4">
                {currentLocation.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connectivity */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Connectivity</h4>
              <div className="grid grid-cols-2 gap-4">
                {currentLocation.connectivity.map((conn, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <conn.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{conn.label}</div>
                      <div className="text-sm text-gray-600">{conn.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Nearby Amenities</h4>
              <div className="grid grid-cols-2 gap-4">
                {currentLocation.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{amenity.label}</div>
                      <div className="text-sm text-gray-600">{amenity.count}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Locations</h3>
            <p className="text-xl text-gray-600">Interactive map showing all our project locations</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.125337144778!2d75.71196417549407!3d29.14905576213151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391230dc00000001%3A0x0!2s4PHV%2BH4%20Hisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1720267557441!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-800 font-medium">{location.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;