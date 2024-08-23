import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const destinations = [
  {
    image: "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/5d.jpg",
    name: "Rio de Janeiro",
    tours: "1,278 Tours",
  },
  {
    image: "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5a/b4.jpg",
    name: "Bali",
    tours: "6,123 Tours",
  },
  {
    image: "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/f2.jpg",
    name: "Cancun",
    tours: "3,267 Tours",
  },
  {
    image: "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/10.jpg",
    name: "Miami",
    tours: "981 Tours",
  },
  {
    image: "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/63/9b.jpg",
    name: "Siem Reap",
    tours: "2,199 Tours",
  },
  {
    image: "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5e/14.jpg",
    name: "Punta Cana",
    tours: "2,113 Tours",
  },
];

  const WarmDestination = () => {
    const scrollRef = useRef(null);
  
    const scroll = (scrollOffset) => {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };
  
    return (
      <div className="max-w-7xl mx-auto p-6 relative">
        <h1 className="text-3xl font-bold text-center mb-8">Warm Destinations</h1>
        <div className="flex items-center relative">
          <button
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hidden lg:block"
            onClick={() => scroll(-300)}
          >
            <FaChevronLeft />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto lg:overflow-x-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory w-full"
          >
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[300px] lg:min-w-[250px] xl:min-w-[300px] cursor-pointer rounded-lg mx-2 snap-start"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-bold">{destination.name}</p>
                  <p className="text-gray-600">{destination.tours}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hidden lg:block"
            onClick={() => scroll(300)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  };
  
  export default WarmDestination;