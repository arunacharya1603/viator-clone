import React, { useState } from "react";

const destinations = [
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/45.jpg",
    title: "Las Vegas",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/6c.jpg",
    title: "Rome",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/50.jpg",
    title: "Paris",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/47.jpg",
    title: "London",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/44.jpg",
    title: "New York City",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/fe.jpg",
    title: "Washington DC",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/f2.jpg",
    title: "Cancun",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/74.jpg",
    title: "Florence",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/9b.jpg",
    title: "Barcelona",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/2f.jpg",
    title: "Oahu",
  },
];

function TopDestination() {
  return (
    <div className="container mx-auto p-4 mb-16">
      <h1 className="text-3xl font-bold text-center mb-8">Top Destinations</h1>
      <div className="overflow-x-auto scrollbar-hide mb-16">
        <div className="flex space-x-4 lg:grid lg:grid-cols-5 lg:space-x-0 gap-4">
          {destinations.map((destination) => (
            <div
              key={destination.title}
              className="relative rounded-md overflow-hidden flex-shrink-0 w-64 sm:w-80 lg:w-auto"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 py-2 text-white font-bold text-lg text-center">
                {destination.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-100 flex flex-col justify-center items-center text-center py-20 px-6">
        <h1 className="text-4xl font-bold w-full max-w-xs sm:max-w-sm mb-8 leading-tight">
          Keep things <br /> flexible
        </h1>
        <p className="text-xl font-thin w-full max-w-md sm:max-w-lg leading-relaxed">
          Use Reserve Now & Pay Later to secure the activities you don't want to
          miss without being locked in.
        </p>
      </div>
    </div>
  );
}

export default TopDestination;
