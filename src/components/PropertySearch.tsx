import React, { useState } from 'react';
import { Search, MapPin, Home, Building2, Landmark, Filter, SlidersHorizontal } from 'lucide-react';

const PropertySearch = () => {
  const [searchType, setSearchType] = useState('buy');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const propertyTypes = [
    { value: 'residential', label: 'Residential', icon: Home },
    { value: 'commercial', label: 'Commercial', icon: Building2 },
    { value: 'plots', label: 'Plots & Land', icon: Landmark }
  ];

  const locations = [
    'Tosham Road', 'Mirzapur Road', 'Dabra Chowk', 'Main City',
    'Urban Estate', 'Bus Stand', 'Raipur Road'
  ];

  const budgetRanges = [
    '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr - ₹5Cr', '₹5Cr - ₹10Cr', '₹10Cr+'
  ];

  return (
    <section className="relative -mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          {/* Search Type Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8 max-w-md">
            {['buy', 'rent', 'invest'].map((type) => (
              <button
                key={type}
                onClick={() => setSearchType(type)}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${searchType === type
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Property Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="">All Types</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="">Select Location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Budget Range</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Select Budget</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Advanced Filters */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Filters</label>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">More Filters</span>
              </button>
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 opacity-0">Search</label>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Search className="w-5 h-5" />
                <span className="font-medium">Search</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Filters</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Plots</label>
                  <div className="flex space-x-2">
                    {['1', '2', '3', '4+'].map((bed) => (
                      <button
                        key={bed}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      >
                        {bed}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                  <div className="space-y-2">
                    {['Swimming Pool', 'Gym', 'Parking', 'Security'].map((amenity) => (
                      <label key={amenity} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Search Tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="text-sm text-gray-600">Popular searches:</span>
            {['Luxury Farmhouses', 'Residential', 'Commercial Plots', 'Industrial Plots'].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;