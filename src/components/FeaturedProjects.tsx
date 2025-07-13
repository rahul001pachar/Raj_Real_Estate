import React, { useState } from 'react';
import pam from '../images/premiumamentities.webp';
import pld from '../images/plotdevelop.jpg';
import fh from '../images/farmhouse.jpg';
import { MapPin, Bed, Bath, Square, ArrowRight, Star, Calendar, TrendingUp, Eye } from 'lucide-react';

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'residential',
      title: '54 Acres',
      subtitle: 'Luxury Residential Plots',
      location: 'Tosham Road, Hisar',
      price: '₹90L onwards',
      originalPrice: '₹1.2 Cr',
      image: pam,
      gallery: [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      area: '220-350 sq ft',
      status: 'Ready to Move',
      rating: 4.8,
      reviews: 124,
      features: ['Swimming Pool', 'Gym', 'Club House', 'Security'],
      possession: 'Immediate',
      discount: '10% Off',
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      category: 'commercial',
      title: '54 Acres',
      subtitle: 'Premium Office Spaces',
      location: 'Tosham Road, Hisar',
      price: '₹3.95 Cr onwards',
      originalPrice: '₹4.20 Cr',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      beds: null,
      baths: null,
      area: '150-200 sq ft',
      status: 'Under Construction',
      rating: 4.9,
      reviews: 89,
      features: ['IT Ready', 'Cafeteria', 'Parking', 'Airport Connectivity'],
      possession: 'Dec 2024',
      discount: '15% Off',
      isNew: false,
      isFeatured: true
    },
    {
      id: 3,
      category: 'plots',
      title: 'Saraswati Vihar',
      subtitle: 'RERA Approved Plots',
      location: 'Mirzapur Road, Hisar',
      price: '₹50 L onwards',
      originalPrice: '₹65 L',
      image: pld,
      gallery: [
        'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      beds: null,
      baths: null,
      area: '1200-2400 sq ft',
      status: 'Ready to Build',
      rating: 4.7,
      reviews: 67,
      features: ['RERA Approved', 'Gated Community', 'Park Facing', 'Corner Plots'],
      possession: 'Immediate',
      discount: '8% Off',
      isNew: true,
      isFeatured: false
    },
    {
      id: 4,
      category: 'residential',
      title: 'Rajat Vihar',
      subtitle: 'Farmhouses',
      location: 'Tosham Road, Hisar',
      price: '₹1.8 Cr onwards',
      originalPrice: '₹2.0 Cr',
      image: fh,
      gallery: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      beds: null,
      baths: null,
      area: '1400-2200 sq ft',
      status: 'New Launch',
      rating: 4.6,
      reviews: 45,
      features: ['Vastu Compliant', 'Garden View', 'On Main Highway', 'Serene Environment'],
      possession: 'Mar 2025',
      discount: '12% Off',
      isNew: true,
      isFeatured: false
    },
    {
      id: 5,
      category: 'residential',
      title: 'Saraswati Enclave II',
      subtitle: 'Residential Spaces',
      location: 'Mirzapur Road, Hisar',
      price: '₹45L onwards',
      originalPrice: '₹55L',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      beds: null,
      baths: null,
      area: '140-220 sq ft',
      status: 'New Launch',
      rating: 4.6,
      reviews: 45,
      features: ['Vastu Compliant', 'Near Hisar Airport', 'On Main Highway', 'Serene Environment'],
      possession: 'Dec 2025',
      discount: '12% Off',
      isNew: true,
      isFeatured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'residential', label: 'Residential', count: projects.filter(p => p.category === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
    { id: 'plots', label: 'Plots & Land', count: projects.filter(p => p.category === 'plots').length }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Premium Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our handpicked selection of luxury residences, prime commercial spaces, and strategic plot investments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {project.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      New Launch
                    </span>
                  )}
                  {project.isFeatured && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                  {project.discount && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.discount}
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-900">{project.price}</div>
                    {project.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{project.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Ready to Move' ? 'bg-green-100 text-green-600' :
                    project.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                    {project.status}
                  </span>

                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{project.rating}</span>
                    <span className="text-sm text-gray-500">({project.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.subtitle}</p>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  {project.beds && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-700">{project.beds}</span>
                    </div>
                  )}
                  {project.baths && (
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-700">{project.baths}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="text-gray-700">{project.area}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Possession */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Possession: {project.possession}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 group">
                  <span className="font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 border-2 border-blue-600 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;