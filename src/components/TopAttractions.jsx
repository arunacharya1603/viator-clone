import React, { useState } from "react";

const attractions = [
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/04/2d.jpg",
    title: "Colosseum",
    activities: "1,337 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/31/ac/92.jpg",
    title: "Yellowstone National Park",
    activities: "108 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/15/ad.jpg",
    title: "Sagrada Familia",
    activities: "359 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/16/f8.jpg",
    title: "Eiffel Tower",
    activities: "927 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/63/15.jpg",
    title: "Niagara Falls",
    activities: "66 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/40/26.jpg",
    title: "Louvre",
    activities: "797 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/33/15/8f.jpg",
    title: "Vatican Museums",
    activities: "883 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/52/31.jpg",
    title: "Antelope Canyon",
    activities: "146 Tours and Activities",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/60/22.jpg",
    title: "Stonehenge",
    activities: "254 Tours and Activities",
  },
];

function TopAttractions() {
  const [showAll, setShowAll] = useState(false);
  const [visibleAttractions, setVisibleAttractions] = useState(5);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setVisibleAttractions(attractions.length);
    } else {
      setVisibleAttractions(5);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Top Attractions</h1>
      <div className="overflow-x-auto scrollbar-hide">
        <div className={`grid grid-cols-3 gap-4`} style={{ minWidth: '54rem' }}>
          {attractions.slice(0, visibleAttractions).map((attraction, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 w-[18rem] bg-white rounded-lg shadow-md p-4 mx-4"
            >
              <img
                src={attraction.image}
                alt={attraction.title}
                className="w-16 h-16 object-cover rounded-md mb-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{attraction.title}</h2>
                <p className="text-gray-500">{attraction.activities}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleShowAll}
        className={`mt-4 px-4 py-2 rounded-md mx-auto block text-white ${
          showAll ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {showAll ? "See Less" : "See All"}
      </button>
    </div>
  );
}

export default TopAttractions;
