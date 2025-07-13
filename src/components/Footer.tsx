import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp, Award, Shield, Clock, ShieldAlert } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };    

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Properties', id: 'properties' },
    { label: 'About Us', id: 'about' },
    { label: 'Locations', id: 'locations' },
    { label: 'News', id: 'news' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Residential Properties',
    'Commercial Properties',
    'Plot Investments',
    'Property Management',
    'Legal Documentation',
    'Investment Advisory',
    'Home Loans',
    'Property Valuation'
  ];

  const certifications = [
    { icon: Shield, label: 'RERA Certified' },
    { icon: Award, label: 'ISO 9001:2024' },
    { icon: Clock, label: 'CREDAI Member' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <Home className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Raj Real Estate</h3>
                <p className="text-sm text-gray-400">Premium Properties & Plots</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in real estate for over 15 years. We specialize in premium properties,
              commercial spaces, and strategic plot investments across Hisar's most sought-after locations.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-300">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                    <cert.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-gray-300">{cert.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Aq5Kmb8Vf/?mibextid=wwXIfr" className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/anilmohil?igsh=MTduMHFxZXM5djJhYw==" className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Head Office</p>
                  <p>ITI Chowk, Tosham Road</p>
                  <p>Hisar, Haryana</p>
                  <p>125005</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1" />
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Phone</p>
                  <p>+91 98123 01600</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1" />
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Email</p>
                  <p>info@rajrealestate.com</p>
                  <p>sales@rajrealestate.com</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 bg-gray-800 rounded-xl p-4">
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                <p>Sun: 10:00 AM - 6:00 PM</p>
                <p className="text-green-400 font-medium">24/7 Emergency Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Market Insights</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest property updates, market trends, and exclusive offers.
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
              Join 10,000+ subscribers who trust us for market insights
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© Raj Real Estate. All rights reserved.</p>
              <p className="mt-1">Designed with ❤️ for premium real estate experience</p>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors group"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;