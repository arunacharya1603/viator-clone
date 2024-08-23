import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      text: "Do more with Viator",
      imgSrc: "https://picsum.photos/800/500?random=1", // Example image URL
    },
    {
      text: "Discover unique activities",
      imgSrc: "https://picsum.photos/800/500?random=2", // Example image URL
    },
    {
      text: "Find the perfect trip",
      imgSrc: "https://picsum.photos/800/500?random=3", // Example image URL
    },
  ];

  return (
    <div className="relative bg-gray-100">
      <div className="container mx-auto px-4 pb-0 pt-16  relative z-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 relative z-20">
            Do more with Viator
          </h1>
          <p className="text-lg font-medium text-gray-600 mb-8 relative z-20">
            Plan better with 300,000+ travel experiences.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center bg-white w-full md:w-[50%] rounded-full p-1 gap-4 md:gap-0">
            <div className="flex lg:flex-col flex-row md:flex-start w-full h-full rounded-full hover:shadow-xl p-2">
              <label htmlFor="where" className="p-1 lg:block hidden">Where</label>
              <button className="lg:hidden block mr-5">
              <CiSearch className="text-xl font-semibold" />

              </button>
              <input
                type="text"
                className="border-none focus:ring-0 focus:outline-none"
                placeholder="Search for a place or activity"
              />
            </div>
            <div className="hidden lg:flex flex-row justify-between w-full h-full rounded-full hover:shadow-xl p-3">
              <div className="flex flex-col">
                <label htmlFor="when" className="text-sm font-medium p-1">
                  When
                </label>
                <input
                  type="date"
                  id="when"
                  className="border-none focus:ring-0 focus:outline-none appearance-none"
                  placeholder="Select Date"
                />
              </div>
              <button className="lg:flex justify-center items-center rounded-full w-12 h-12 bg-green-700 ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 4a6 6 0 016 6c0 1.27-.38 2.45-1.02 3.45l4.37 4.38a1 1 0 01-1.41 1.41l-4.38-4.37A5.982 5.982 0 0110 16a6 6 0 110-12zm0 2a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 border-2 border-black rounded-full cursor-pointer transition-colors duration-200 ${
                activeIndex === index ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>

        <div className="flex justify-end mt-8 ">
          <div className="text-lg font-medium pl-6 bg-gray-600 opacity-50 inset-0 rounded-sm w-[30%] h-12 text-black flex items-center">
            <a className="text-white opacity-100 inset-0  underline" href="#">
              {features[activeIndex].text}
            </a>
          </div>
        </div>
      </div>
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src={features[activeIndex].imgSrc}
        alt="Background"
      />
    </div>
  );
};

export default Features;
