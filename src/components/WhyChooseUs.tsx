import React from 'react';
import { Shield, Award, Users, Clock, TrendingUp, MapPin, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'RERA Certified',
      description: 'All our projects are RERA registered ensuring complete transparency and legal compliance.',
      stats: '100% Compliance',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as the Best Real Estate Developer in Hisar.',
      stats: '15+ Awards',
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of certified professionals brings decades of experience in real estate.',
      stats: '50+ Experts',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We pride ourselves on delivering projects on time with zero delays in possession.',
      stats: '100% On-Time',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'High ROI',
      description: 'Our properties have shown consistent appreciation with average ROI of 15-20% annually.',
      stats: '18% Avg ROI',
      color: 'red'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Strategic locations with excellent connectivity and amenities.',
      stats: '50+ Locations',
      color: 'indigo'
    }
  ];

  const testimonialStats = [
    { value: '4.9/5', label: 'Customer Rating', icon: Star },
    { value: '98%', label: 'Satisfaction Rate', icon: CheckCircle },
    { value: '1500+', label: 'Happy Families', icon: Users },
    { value: '₹1000Cr+', label: 'Worth Delivered', icon: TrendingUp }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500 text-white',
      yellow: 'bg-yellow-500 text-white',
      green: 'bg-green-500 text-white',
      purple: 'bg-purple-500 text-white',
      red: 'bg-red-500 text-white',
      indigo: 'bg-indigo-500 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500 text-white';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Real Estate Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of excellence, we've built a reputation for delivering quality properties and exceptional customer service.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getColorClasses(advantage.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {advantage.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h3>
            <p className="text-xl text-gray-600">Our numbers speak for our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Simple Process</h3>
            <p className="text-xl text-gray-600">From consultation to possession, we make it seamless</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free consultation to understand your needs' },
              { step: '02', title: 'Property Selection', desc: 'Curated options based on your requirements' },
              { step: '03', title: 'Documentation', desc: 'Complete legal verification and paperwork' },
              { step: '04', title: 'Possession', desc: 'Smooth handover with all amenities ready' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;