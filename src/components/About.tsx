import React from 'react';
import rre from '../images/rre.jpeg';
import ak from '../images/anilkumar.jpg';
import { Award, Users, Home, TrendingUp, Shield, Clock } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Home,
      number: '500+',
      label: 'Properties Sold',
      description: 'Successfully closed deals'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Clients',
      description: 'Satisfied customers'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'In real estate market'
    },
    {
      icon: TrendingUp,
      number: '₹500Cr+',
      label: 'Worth Transacted',
      description: 'Total property value'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear and honest dealings with complete documentation transparency.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional service and premium properties.'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Building long-term relationships based on trust and reliability.'
    },
    {
      icon: Clock,
      title: 'Timelines',
      description: 'Prompt service delivery and meeting all committed timelines.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Raj Real Estate</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in real estate with over 15 years of experience in helping clients find their perfect properties and investment opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Building Dreams, Creating Wealth
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2018, Raj Real Estate has established itself as a premier real estate consultancy in Hisar.
              We specialize in residential properties, commercial spaces, and strategic plot investments across prime locations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experienced professionals provides comprehensive real estate solutions, from property selection
              to legal documentation, ensuring a seamless experience for our clients.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <achievement.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                  <div className="text-sm font-medium text-gray-900">{achievement.label}</div>
                  <div className="text-xs text-gray-600">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={rre}
              alt="Real Estate Team"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src={ak}
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Anil Kumar</h4>
              <p className="text-blue-600 font-medium mb-2">*******</p>
              <p className="text-gray-600 text-sm">Specializes in residential properties and client relationship management.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Director"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Raj Kumar</h4>
              <p className="text-blue-600 font-medium mb-2">*******</p>
              <p className="text-gray-600 text-sm">15+ years in real estate, expert in property valuation and investment advisory.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Director"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Prem Dhariwal</h4>
              <p className="text-blue-600 font-medium mb-2">*******</p>
              <p className="text-gray-600 text-sm">Specializes in residential properties and client relationship management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;