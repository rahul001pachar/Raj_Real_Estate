import React, { useState } from 'react';
import pe from '../images/premiumamentities.webp';
import rea from '../images/rea.jpg';
import growth from '../images/growth.jpg'
import nip from '../images/nip.jpg'
import { Calendar, Clock, ArrowRight, TrendingUp, Award, Building, Users } from 'lucide-react';

const NewsUpdates = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'projects', label: 'New Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'market', label: 'Market Updates' },
    { id: 'events', label: 'Events' }
  ];

  const news = [
    {
      id: 1,
      category: 'projects',
      title: '55 Acres Launched with Premium Amenities',
      excerpt: 'Following the success of Rajat Vihar, we are excited to announce the launch of 55 Acres with enhanced luxury features and world-class amenities.',
      image: pe,
      date: '2025-04-15',
      readTime: '3 min read',
      featured: true,
      icon: Building
    },
    {
      id: 2,
      category: 'awards',
      title: 'Raj Real Estate Wins "Best Developer of the Year 2024"',
      excerpt: 'We are honored to receive the prestigious "Best Developer of the Year" award from the Hisar Real Estate Association for our commitment to quality and innovation.',
      image: rea,
      date: '2024-01-10',
      readTime: '2 min read',
      featured: true,
      icon: Award
    },
    {
      id: 3,
      category: 'market',
      title: 'Hisar Real Estate Market Shows 15% Growth in Q4 2025',
      excerpt: 'The Hisar real estate market continues to show strong growth with residential properties leading the surge, particularly in outer areas.',
      image: growth,
      date: '2024-01-08',
      readTime: '4 min read',
      featured: false,
      icon: TrendingUp
    },
    {
      id: 4,
      category: 'events',
      title: 'Property Investment Seminar - January 2024',
      excerpt: 'Join our exclusive property investment seminar where industry experts will share insights on market trends and investment opportunities.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-05',
      readTime: '1 min read',
      featured: false,
      icon: Users
    },
    {
      id: 5,
      category: 'projects',
      title: 'Raj Real Estate Receives IGBC Gold Certification',
      excerpt: 'Our commercial project Raj Real Estate has been awarded the IGBC Gold certification for sustainable and green building practices.',
      image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2025-01-03',
      readTime: '3 min read',
      featured: false,
      icon: Award
    },
    {
      id: 6,
      category: 'market',
      title: 'New Infrastructure Projects Boost Property Values on Tosham Road and near Airport',
      excerpt: 'Recent infrastructure developments including Airport connectivity and some big projects announcement have significantly boosted property values in outer area.',
      image: nip,
      date: '2024-10-05',
      readTime: '5 min read',
      featured: false,
      icon: TrendingUp
    }
  ];

  const filteredNews = activeCategory === 'all'
    ? news
    : news.filter(item => item.category === activeCategory);

  const featuredNews = news.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);  

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, project launches, market insights, and company achievements.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured News */}
        {activeCategory === 'all' && featuredNews.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        <item.icon className="w-4 h-4" />
                        <span className="capitalize">{item.category}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <div className="flex items-center space-x-2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    <item.icon className="w-3 h-3" />
                    <span className="capitalize">{item.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group">
                  <span>Read More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates about new projects, market insights, and exclusive offers.
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>

          <p className="text-blue-200 text-sm mt-4">
            Join 5,000+ subscribers who trust us for market insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;