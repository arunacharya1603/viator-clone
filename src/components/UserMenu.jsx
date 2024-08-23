import React from 'react';

const UserMenu = () => {
  return (
    <div className="bg-white  w-[14rem] shadow-md rounded-md p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c0 1.1.9 2 2 2s2-.9 2-2 1.9-2 2-2s-.9-2-2-2-2 .9-2 2zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2z" /></svg>
            Log in / Sign up
          
          </a>
          
        </li>
        <hr />
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Viator Rewards
            <span className="ml-2 px-2 py-1 rounded-full bg-red-500 text-white font-bold text-xs">New!</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 5.75h15a.75.75 0 010 1.5h-15a.75.75 0 010-1.5zM12 11.25h.001M12 15h.001M12 18.75h.001M9 11.25h.001M9 15h.001M9 18.75h.001" /></svg>
            Wishlists
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;