import React from 'react';

const attractionsData = [
  {
    name: 'Antelope Canyon',
    link: '#',
  },
  {
    name: 'Aquarium of the Pacific',
    link: '#',
  },
  {
    name: 'Xcaret',
    link: '#',
  },
  {
    name: 'British Museum',
    link: '#',
  },
  {
    name: 'San Diego Zoo Safari Park',
    link: '#',
  },
  {
    name: 'London Natural History Museum',
    link: '#',
  },
  {
    name: 'Xplor Park',
    link: '#',
  },
  {
    name: 'Stonehenge',
    link: '#',
  },
  {
    name: 'Öresund Bridge',
    link: '#',
  },
  {
    name: 'Distillery Historic District',
    link: '#',
  },
  {
    name: 'El Yunque National Forest',
    link: '#',
  },
  {
    name: 'Chichen Itza',
    link: '#',
  },
  {
    name: 'Machu Picchu',
    link: '#',
  },
  {
    name: 'Hoover Dam',
    link: '#',
  },
  {
    name: 'Teotihuacan',
    link: '#',
  },
  {
    name: 'Gondola Rides at the Venetian',
    link: '#',
  },
  {
    name: 'Bioluminescent Bay (Mosquito Bay)',
    link: '#',
  },
  {
    name: 'Arch of Cabo San Lucas (El Arco)',
    link: '#',
  },
  {
    name: 'Molokini Crater',
    link: '#',
  },
  {
    name: 'Mauna Kea Summit & Observatory',
    link: '#',
  },
];

const PopularAttraction = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Popular Attractions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {attractionsData.map((attraction) => (
          <a
            key={attraction.name}
            href={attraction.link}
            className="bg-gray-100 rounded-md p-2 hover:bg-gray-200"
          >
            {attraction.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularAttraction;