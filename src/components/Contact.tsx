import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Calendar, Video, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    location: '',
    message: '',
    preferredContact: 'phone',
    visitDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      budget: '',
      location: '',
      message: '',
      preferredContact: 'phone',
      visitDate: ''
    });
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our property experts',
      value: '+91 98123 01600',
      action: 'Call Now',
      color: 'green'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a virtual consultation',
      value: 'Book Video Call',
      action: 'Schedule',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your detailed requirements',
      value: 'info@rajrealestate.com',
      action: 'Send Email',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Visit Office',
      description: 'Meet our team at our office',
      value: 'Book Appointment',
      action: 'Schedule Visit',
      color: 'amber'
    }
  ];

  const officeLocations = [
    {
      name: 'Head Office',
      address: 'ITI Chowk, Tosham Road, Hisar, 125001',
      phone: '+91 98123 01600',
      email: 'info@rajrealestate.com',
      hours: 'Mon - Sat: 9:00 AM - 9:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.125337144778!2d75.71196417549407!3d29.14905576213151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391230dc00000001%3A0x0!2s4PHV%2BH4%20Hisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1720267557441!5m2!1sen!2sin'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Find Your Perfect Property
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make your real estate dreams come true? Our expert team is here to guide you every step of the way.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${method.color === 'green' ? 'bg-green-100 text-green-600' :
                method.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  method.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-amber-100 text-amber-600'
                }`}>
                <method.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="text-gray-900 font-medium mb-4">{method.value}</p>
              <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${method.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                method.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                  method.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                    'bg-amber-600 hover:bg-amber-700 text-white'
                }`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="plots">Plots & Land</option>
                    <option value="investment">Investment</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="50L-1Cr">₹50L - ₹1Cr</option>
                    <option value="1Cr-2Cr">₹1Cr - ₹2Cr</option>
                    <option value="2Cr-5Cr">₹2Cr - ₹5Cr</option>
                    <option value="5Cr+">₹5Cr+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., Tosham Road"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Visit Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="visitDate"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span className="font-medium">Send Message</span>
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{office.name}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="text-gray-700">{office.address}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div className="text-gray-700">{office.phone}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <div className="text-gray-700">{office.email}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <div className="text-gray-700">{office.hours}</div>
                  </div>
                </div>

                {/* Map */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-blue-100 mb-6">We are available 24/7 to help you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919812301600"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium"
            >
              Call Now: +91 98123 01600
            </a>
            <a
              href="https://wa.me/919812301600"
              className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;