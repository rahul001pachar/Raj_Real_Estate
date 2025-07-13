import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Heart, Home, Building2 } from 'lucide-react';

const CustomerStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: '54 Acres, Tosham Road',
      propertyType: 'Residential plot',
      rating: 5,
      story: "Moving to 54 Acres has been a dream come true. The attention to detail in construction, the premium amenities, and the excellent location make it perfect for our family. The team's support throughout the buying process was exceptional.",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      propertyImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      purchaseDate: 'March 2025',
      investment: '₹2.8 Cr',
      appreciation: '12%',
      videoThumbnail: true,
      category: 'residential'
    },
    {
      id: 2,
      name: 'Vikram Jain',
      location: '55 Acres,Tosham Road',
      propertyType: 'Office Space',
      rating: 5,
      story: "Our office at 54 Acres has significantly improved our business operations. The modern infrastructure, excellent connectivity, and professional environment have helped us attract top talent and grow our business.",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      propertyImage: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600',
      purchaseDate: 'June 20250',
      investment: '₹4.5 Cr',
      appreciation: '15%',
      videoThumbnail: false,
      category: 'commercial'
    },
    {
      id: 3,
      name: 'Anita Goyal',
      location: 'Saraswati Vihar, Mirzapur Road',
      propertyType: 'Residential Plot',
      rating: 5,
      story: "Investing in a plot at Saraswati Vihar was one of the best decisions I made. The RERA approval, clear documentation, and the area's rapid development have exceeded my expectations. The value has already appreciated significantly.",
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      propertyImage: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600',
      purchaseDate: 'June 2024',
      investment: '₹45 L',
      appreciation: '25%',
      videoThumbnail: true,
      category: 'plots'
    },
    {
      id: 4,
      name: 'Raghav Jaglan',
      location: 'Rajat Vihar-IV, Tosham Road',
      propertyType: 'Farmhouse',
      rating: 5,
      story: "The farmhouse at Rajat Vihar perfectly fits our lifestyle. The serene environment, security, and proximity to companies make it ideal for working professionals. The buying process was transparent and hassle-free.",
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      propertyImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
      purchaseDate: 'September 2024',
      investment: '₹1.8 Cr',
      appreciation: '8%',
      videoThumbnail: false,
      category: 'residential'
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'residential': return Home;
      case 'commercial': return Building2;
      case 'plots': return Home;
      default: return Home;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Customer Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Stories, Real Satisfaction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied customers about their experience with Raj Real Estate and how we've helped them achieve their property dreams.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2">
            {/* Story Content */}
            <div className="p-12">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={currentStoryData.image}
                  alt={currentStoryData.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{currentStoryData.name}</h3>
                  <p className="text-gray-600">{currentStoryData.propertyType}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(currentStoryData.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 opacity-50 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "{currentStoryData.story}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="text-xl font-bold text-gray-900">{currentStoryData.investment}</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600">Appreciation</div>
                  <div className="text-xl font-bold text-green-600">+{currentStoryData.appreciation}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600">
                  {React.createElement(getCategoryIcon(currentStoryData.category), { className: "w-4 h-4" })}
                  <span className="text-sm">{currentStoryData.location}</span>
                </div>
                <div className="text-sm text-gray-500">
                  Purchased: {currentStoryData.purchaseDate}
                </div>
              </div>
            </div>

            {/* Property Image */}
            <div className="relative">
              <img
                src={currentStoryData.propertyImage}
                alt={currentStoryData.location}
                className="w-full h-full object-cover"
              />
              {currentStoryData.videoThumbnail && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={prevStory}
            className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 hover:text-blue-600"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous Story</span>
          </button>

          <div className="flex space-x-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentStory ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextStory}
            className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 hover:text-blue-600"
          >
            <span>Next Story</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Story Thumbnails */}
        <div className="grid md:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setCurrentStory(index)}
              className={`cursor-pointer bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index === currentStory ? 'ring-2 ring-blue-500' : ''
                }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{story.name}</div>
                  <div className="text-xs text-gray-600">{story.propertyType}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-green-600 font-medium">
                  +{story.appreciation}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Customer Satisfaction Metrics</h3>
            <p className="text-xl text-gray-600">Our commitment to excellence reflected in numbers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1500+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">95%</div>
              <div className="text-gray-600">Repeat Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;