import React from "react";

function TrustpilotSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Review Section */}
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-8">
          {/* Left Section - Rating Overview */}
          <div className="flex flex-col w-full md:w-1/3 justify-center items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">Excellent</h2>
            <div className="flex flex-col items-center md:items-start mt-4">
              <span className="text-green-500 text-2xl">★★★★☆</span>
              <span className="text-gray-700 mt-2">Based on 213,792 reviews</span>
            </div>
            <div className="flex items-center mt-6">
              <h1 className="text-3xl font-semibold">Trustpilot</h1>
            </div>
            <p className="text-xs text-gray-500 mt-4 md:mt-6 text-center md:text-left">
              Viator does not perform checks on Trustpilot reviews.
            </p>
          </div>

          {/* Right Section - Reviews */}
          <div className="lg:grid grid-cols-1 hidden md:grid-cols-3 gap-8 w-full md:w-2/3">
            {/* Single Review */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">★★★★★</span>
                <span className="text-gray-500 text-xs">58 minutes ago</span>
              </div>
              <h3 className="font-bold mt-4">Alaska trip</h3>
              <p className="text-gray-600 mt-2">
                You had what I wanted and at a good price.
              </p>
              <p className="text-xs text-gray-500 mt-4">Jon Nadolski</p>
            </div>

            {/* Single Review */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">★★★★★</span>
                <span className="text-gray-500 text-xs">1 hour ago</span>
              </div>
              <h3 className="font-bold mt-4">
                Jason tour guide and his boss made our e...
              </h3>
              <p className="text-gray-600 mt-2">
                Jason tour guide and his boss sorry I don't know his name. They
                made our tour for us excellent...
              </p>
              <p className="text-xs text-gray-500 mt-4">Larissa Ni</p>
            </div>

            {/* Single Review */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">★★★★☆</span>
                <span className="text-gray-500 text-xs">1 hour ago</span>
              </div>
              <h3 className="font-bold mt-4">Miss Lacey</h3>
              <p className="text-gray-600 mt-2">
                Miss Lacey, was a fantastic tour guide. The bus was clean and
                comfortable. I will be...
              </p>
              <p className="text-xs text-gray-500 mt-4">Jennifer Klosowski</p>
            </div>
          </div>
        </div>

        {/* Footer - Latest Reviews Info */}
        <div className="text-center">
          <p className="text-gray-600">
            Showing our latest 4 and 5 star reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrustpilotSection;
