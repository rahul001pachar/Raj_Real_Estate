import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertySearch from './components/PropertySearch';
import FeaturedProjects from './components/FeaturedProjects';
import PropertyTypes from './components/PropertyTypes';
import About from './components/About';
import LocationAdvantage from './components/LocationAdvantage';
import NewsUpdates from './components/NewsUpdates';
import CustomerStories from './components/CustomerStories';
import InvestmentCalculator from './components/InvestmentCalculator';
import VirtualTour from './components/VirtualTour';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PropertySearch />
      <FeaturedProjects />
      <PropertyTypes />
      <About />
      <LocationAdvantage />
      <InvestmentCalculator />
      <VirtualTour />
      <NewsUpdates />
      <CustomerStories />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;