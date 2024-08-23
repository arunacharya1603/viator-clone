import React, { useState } from "react";
import { FaGift } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="p-4 flex flex-col justify-center items-center">
        
          <ul className="mt-4">
            <button className="w-56 h-10 rounded-md hover:shadow-md bg-green-800 text-white">
              Login/signup
            </button>

            <li className="mt-8 flex flex-row items-center gap-4">
              <FaGift />
              <a href="#" className="hover:text-gray-400">
                Viator Rewards
              </a>
            </li>

            <li className="mt-8 flex flex-row items-center gap-4">
              <CiHeart />
              <a href="#" className="hover:text-gray-400">
                Wishlist
              </a>
            </li>

            <li className="mt-8 flex flex-row items-center gap-4">
              <FaHandsHelping />
              <a href="#" className="hover:text-gray-400">
                Help
              </a>
            </li>
            <li className="mt-8 flex flex-row items-center gap-4">
              <FiLogOut />
              <a href="#" className="hover:text-gray-400">
                Logout
              </a>
            </li>
          </ul>


        </div>
      </div>
    </div>
  );
};

export default Sidebar;
