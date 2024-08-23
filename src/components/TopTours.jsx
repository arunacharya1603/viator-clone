import React, { useRef } from 'react';
import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const tours = [
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/1d/5b/73.jpg",
    location: "Florence, Tuscany",
    title: "Tuscany Day Trip from Florence: Siena, San Gimignano, Pisa and Lunch at a Winery",
    rating: 5,
    reviews: 16201,
    price: "₹10,006.50",
    isLikelyToSellOut: false,
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/11/dc/06/69.jpg",
    location: "Grand Canyon National Park, Arizona",
    title: "Grand Canyon West with Lunch, Hoover Dam Stop & Skywalk Upgrade",
    rating: 5,
    reviews: 5130,
    price: "₹8,158.79",
    isLikelyToSellOut: false,
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/aa/5c/71.jpg",
    location: "London, England",
    title: "Stonehenge, Windsor Castle, and Bath from London",
    rating: 5,
    reviews: 13425,
    price: "₹11,060.15",
    isLikelyToSellOut: true,
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/0d/07/fa/30.jpg",
    location: "Chicago, Illinois",
    title: "Chicago River 90-Minute Architecture Tour",
    rating: 4,
    reviews: 6321,
    price: "₹3,778.81",
    isLikelyToSellOut: true,
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/11/dc/06/69.jpg",
    location: "Chicago, Illinois",
    title: "Chicago River 90-Minute Architecture Tour",
    rating: 5,
    reviews: 6321,
    price: "₹3,778.81",
    isLikelyToSellOut: true,
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/aa/5c/71.jpg",
    location: "Chicago, Illinois",
    title: "Chicago River 90-Minute Architecture Tour",
    rating: 5,
    reviews: 6321,
    price: "₹3,778.81",
    isLikelyToSellOut: true,
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/0d/07/fa/26.jpg",
    location: "Chicago, Illinois",
    title: "Chicago River 90-Minute Architecture Tour",
    rating: 5,
    reviews: 6321,
    price: "₹3,778.81",
    isLikelyToSellOut: true,
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/13/46/d9/d1.jpg",
    location: "Chicago, Illinois",
    title: "Chicago River 90-Minute Architecture Tour",
    rating: 3.5,
    reviews: 6321,
    price: "₹3,778.81",
    isLikelyToSellOut: true,
  },
];

const TopTours = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 relative">
      <h1 className="text-3xl font-bold text-center mb-8">Top Tours</h1>
      <div className="flex items-center mb-16">
        <button
          className="lg:hidden block absolute left-0 z-10 p-2 bg-white rounded-full shadow-md"
          onClick={() => scroll(-300)}
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {tours.map((tour, index) => (
            <div
              key={index}
              className="min-w-[300px] cursor-pointer rounded-lg mx-2 p-4 snap-start"
            >
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover hover:shadow-lg rounded-lg"
                />
                <div className="absolute h-16 w-16 top-2 right-1">
                  <button className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
                    <div className="top-2 right-1">
                      <FaHeart className="text-gray-400 hover:scale-105 rounded-full text-xl" />
                    </div>
                  </button>
                </div>
                {tour.isLikelyToSellOut && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Likely to Sell Out
                  </span>
                )}
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">{tour.location}</p>
                <h2 className="text-lg font-semibold mt-2 hover:underline">
                  {tour.title}
                </h2>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((star, i) => (
                      <FaStar key={i} className="hover:scale-110" />
                    ))}
                  </div>
                  <p className="text-gray-600 ml-2">
                    ({tour.reviews.toLocaleString()})
                  </p>
                </div>
                <p className="text-lg font-bold mt-4">from {tour.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="lg:hidden block absolute right-0 z-10 p-2 bg-white rounded-full shadow-md"
          onClick={() => scroll(300)}
        >
          <FaChevronRight />
        </button>
      </div>


      <div className="bg-green-100 flex flex-col justify-center items-center text-center py-20 px-6">
        <h1 className="text-4xl font-bold w-full max-w-xs sm:max-w-sm mb-8 leading-tight">
        Free cancellation
        </h1>
        <p className="text-xl font-thin w-full max-w-md sm:max-w-lg leading-relaxed">
        You'll receive a full refund if you cancel at least 24 hours in advance of most experiences.
        </p>
      </div>
    </div>
  );
};

export default TopTours;
