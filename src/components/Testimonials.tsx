import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Saraswati',
      role: 'Plot Buyer',
      location: '55 Acres',
      rating: 5,
      text: 'Raj Real Estate helped us find our dream home in 55 Acres. Their team was professional, transparent, and guided us through every step of the process. Highly recommended!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Vikram Jain',
      role: 'Investor',
      location: 'Saraswati Vihar',
      rating: 5,
      text: 'Excellent service for commercial property investment. The team provided detailed market analysis and helped me make an informed decision. Great ROI on my investment!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Bhavya',
      role: 'Plot Buyer',
      location: 'Rajat Vihar',
      rating: 5,
      text: 'Bought a RERA approved plot through Raj Real Estate. The legal documentation was handled perfectly, and the location has great growth potential. Very satisfied with the service.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      location: '55 Acres',
      rating: 5,
      text: 'Found the perfect office space for my company. The team understood our requirements and provided multiple options. The entire process was smooth and hassle-free.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Raj Real Estate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 line-clamp-4">{testimonial.text}</p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-blue-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Repeat Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;