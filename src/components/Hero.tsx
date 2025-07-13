import React, { useState, useEffect } from 'react';
import rre from './images/rre.jpg';
import { ArrowRight, Play, MapPin, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Luxury Redefined",
      subtitle: "Premium Residential Projects",
      description: "Experience world-class amenities and architectural excellence in our flagship residential developments across Hisar's most prestigious locations.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Explore Residences",
      stats: { value: "₹500Cr+", label: "Worth Delivered" }
    },
    {
      id: 2,
      title: "Strategic Investments",
      subtitle: "Commercial Excellence",
      description: "Prime commercial spaces designed for business growth. From retail shops to complexes, discover opportunities that drive success.",
      image: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "View Commercial",
      stats: { value: "50+", label: "Projects Delivered" }
    },
    {
      id: 3,
      title: "Future Ready Plots",
      subtitle: "Land Investment Opportunities",
      description: "RERA approved plots in rapidly developing corridors. Secure your future with strategic land investments in Hisar's growth zones.",
      image: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1600",
      cta: "Discover Plots",
      stats: { value: "1000+", label: "Happy Families" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-blue-600/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 mb-12">
                    <button
                      onClick={() => scrollToSection('properties')}
                      className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      <span className="font-semibold text-lg">{slide.cta}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="group flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                      <Play className="w-5 h-5" />
                      <span className="font-semibold text-lg">Watch Virtual Tour</span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">{slide.stats.value}</div>
                      <div className="text-gray-300">{slide.stats.label}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">15+</div>
                      <div className="text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">98%</div>
                      <div className="text-gray-300">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Floating Achievement Cards */}
      <div className="absolute bottom-20 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">RERA Certified</div>
              <div className="text-sm opacity-80">Trusted Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;