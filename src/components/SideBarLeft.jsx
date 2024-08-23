import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaChevronRight } from 'react-icons/fa';

const SideBarLeft = ({ isOpen, toggleSideBarLeft }) => {
  return (
    <div 
      className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 duration-300 ease-in-out`}
    >
      <div className="p-4 z-70">
        <div className="flex justify-start mb-4">
          <button onClick={toggleSideBarLeft}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <hr className='w-full border shadow-sm' />
        
        {/* Menu Items */}
        <ul className="mt-8">
          <li className="flex items-center p-4 mb-4 border rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100">
            <img 
              src="https://cache.vtrcdn.com/orion/images/globalNav/fallback-top-activities_100x100.png" 
              alt="Top activities" 
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-4 flex-grow font-semibold">Top activities</span>
            <FaChevronRight />
          </li>
          <li className="flex items-center p-4 mb-4 border rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100">
            <img 
              src="https://cache.vtrcdn.com/orion/images/globalNav/fallback-top-attractions_100x100.png" 
              alt="Top landmarks" 
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-4 flex-grow font-semibold">Top landmarks</span>
            <FaChevronRight />
          </li>
          <li className="flex items-center p-4 mb-4 border rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100">
            <img 
              src="https://cache.vtrcdn.com/orion/images/globalNav/fallback-explore_100x100.png" 
              alt="Explore the world" 
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-4 flex-grow font-semibold">Explore the world</span>
            <FaChevronRight />
          </li>
        </ul>

        {/* Blog Link */}
        <hr className='w-full mt-8' />
        <div className="mt-8 p-4 ">
          <a href="#" className="flex items-center text-black font-semibold hover:underline">
            See the Viator blog <FaChevronRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft;
