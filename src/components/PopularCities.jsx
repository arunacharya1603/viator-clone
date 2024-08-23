import React from 'react';

const cities = [
  'Nashville', 'Chicago', 'Houston', 'San Diego',
  'Atlanta', 'Denver', 'Las Vegas', 'Miami',
  'Orlando', 'Boston', 'London', 'Los Angeles',
  'San Francisco', 'Seattle', 'New York City',
  'Washington DC'
];

const CityLink = ({ city }) => (
  <a href="#" className="text-gray-500 hover:text-blue-600">
    Things to do in {city} |
  </a>
);

const PopularCities = () => {
  return (
    <div className="mt-8 mb-8 mx-auto px-4">
      <h2 className="text-4xl font-semibold mb-4">Popular Cities</h2>
      <div className="flex flex-wrap -mx-2">
        {cities.map((city) => (
          <div key={city} className="px-2 py-1 w-auto">
            <CityLink city={city} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
