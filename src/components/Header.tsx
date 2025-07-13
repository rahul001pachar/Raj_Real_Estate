import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Search, Phone, User, ChevronDown, MapPin, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      label: 'Properties',
      id: 'properties',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Residential', icon: Home },
        { label: 'Commercial', icon: Building2 },
        { label: 'Plots & Land', icon: MapPin }
      ]
    },
    { label: 'About Us', id: 'about' },
    { label: 'Locations', id: 'locations' },
    { label: 'News & Updates', id: 'news' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Raj Real Estate
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-blue-100'
              }`}>
                Premium Properties & Plots
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}>
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            onClick={() => scrollToSection('properties')}
                            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <dropdownItem.icon className="w-5 h-5" />
                            <span>{dropdownItem.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id || '')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-2 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            <a
              href="tel:+919812301600"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl">
            <nav className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id || '')}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={() => scrollToSection('properties')}
                          className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+919812301600"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call Now</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;