import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGift, FaHandsHelping } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <div 
      className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 duration-300 ease-in-out`}
    >
      <div className="p-4 z-70">
        <div className="flex justify-end mb-4">
          <button onClick={toggleSideBar}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <hr className='w-full border shadow-sm' />
        
        {/* Menu Items */}
        <div className="p-4 flex flex-col justify-center items-center">
            <ul className="mt-4">
              <button className="w-80 h-10 rounded-md hover:shadow-md bg-green-800 text-white">
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

        {/* Blog Link */}
        <hr className='w-full mt-8' />

      </div>
    </div>
  );
};

export default SideBar;
