'use client';
import React, { useState } from 'react';
import PropertiesPage from '../properties listing/PropertiesPage';
import RangeSlider from './RangeSlider';
import propertiesData from '../../properties/propertiesData.json';

const AdvSearchForm = () => {
  const [propertyType, setPropertyType] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [maxBeds, setMaxBeds] = useState('');
  const [priceRange, setPriceRange] = useState([0, 180000]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const minBedsNumber = Number(minBeds) || 0;
    const maxBedsNumber = Number(maxBeds) || Infinity;

    if (maxBedsNumber < minBedsNumber) {
      alert("Max beds cannot be less than min beds.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const filtered = propertiesData.properties.filter(property => {
        const isWithinPriceRange = property.price >= priceRange[0] && property.price <= priceRange[1];
        const matchesPropertyType = propertyType ? property.category === propertyType : true;
        const matchesCity = city ? property.cityName === city : true;

        const matchesArea = area ? (
          (area === 'small' && property.squareFootage < 5000) ||
          (area === 'medium' && property.squareFootage >= 5000)
        ) : true;

        const matchesMinBeds = property.beds >= minBedsNumber;
        const matchesMaxBeds = property.beds <= maxBedsNumber;

        return isWithinPriceRange && matchesPropertyType && matchesCity && matchesArea && matchesMinBeds && matchesMaxBeds;
      });

      setFilteredProperties(filtered);
      setLoading(false);
      if (filtered.length === 0) {
        setErrorMessage('No properties found matching your criteria.');
      }
    }, 500);
  };

  const propertiesToShow = filteredProperties.length > 0 ? filteredProperties : propertiesData.properties;

  return (
    <div>
      <div className='bg-blue-200 p-4'>
        <form className="container mx-auto px-5 md:px-20 py-8" onSubmit={handleFilter}>
          <h2 className="text-xl font-bold mb-4">Advanced Search</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
            {/* Property Type */}
            <select
              id="propertyType"
              name="propertyType"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Type</option>
              <option value="sales">Sales</option>
              <option value="rentals">Rentals</option>
            </select>

            {/* Cities */}
            <select
              id="cities"
              name="cities"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 block w-full border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Cities</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Miami">Miami</option>
              <option value="Austin">Austin</option>
              <option value="London">London</option>
              <option value="Dallas">Dallas</option>
              <option value="Houston">Houston</option>
            </select>

            {/* Area */}
            <select
              id="area"
              name="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-1 block w-full border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Area</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>

            {/* Min Beds */}
            <select
              id="minBeds"
              name="minBeds"
              value={minBeds}
              onChange={(e) => setMinBeds(e.target.value)}
              className="mt-1 block w-full border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Min. Beds</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Max Beds */}
            <select
              id="maxBeds"
              name="maxBeds"
              value={maxBeds}
              onChange={(e) => setMaxBeds(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Max. Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
              <option value="5">5 Beds</option>
              <option value="6">6 Beds</option>
            </select>

            {/* Price Range */}
            <div className="md:col-span-2 lg:col-span-2">
              <RangeSlider value={priceRange} onChange={handlePriceRangeChange} />
            </div>

            {/* Search Button */}
            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-indigo-600 font-medium text-[15px] text-white py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {loading ? 'Loading...' : 'SEARCH PROPERTIES'}
              </button>
            </div>
          </div>
        </form>

        {loading && <div className="text-center py-4">Loading properties, please wait...</div>}
        {errorMessage && <div className="text-center py-4 text-red-500">{errorMessage}</div>}
        {!loading && !errorMessage && filteredProperties.length > 0 && (
  <div className="text-center py-4">
    Here are your search properties: {filteredProperties.length} found.
  </div>
)}

      </div>

      <div className='bg-white'>
        <PropertiesPage properties={propertiesToShow} />
      </div>
    </div>
  );
}

export default AdvSearchForm;


