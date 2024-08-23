import React, { useState } from "react";
import UserMenu from "./UserMenu";
import SideBar from "./SideBar";
import { MdOutlineLegendToggle } from "react-icons/md";
import SideBarLeft from './SideBarLeft';

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBarLeft = () => {
    setShowSideBar(!showSideBar);
  }

  const handleUserMenuClick = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <div className="flex flex-row lg:justify-between justify-evenly gap-16 p-4 shadow-md mb-2 md:flex-wrap sm:flex-wrap relative">
    <div className="lg:hidden block">
        <button 
          className="hover:shadow-lg"
          onClick={handleSideBarLeft}
        >
          <MdOutlineLegendToggle className="text-4xl" />
        </button>
        {showSideBar && (
            <>
              <div className="absolute z-50 right-0 left-2 top-full mt-0 block lg:hidden">
                <SideBarLeft isOpen={showSideBar} toggleSideBarLeft={handleSideBarLeft} />
              </div>
            </>
          )}
      </div>

      {/* SideBar */}

      


      {/* SideBarEnd Here */}





      <div>
        <div>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368.78 91.63"
            className="fill-green-700"
          >
            <defs></defs>
            <path
              className="cls-header-logo"
              d="M360.75 79a5.26 5.26 0 11-5 5.25 5.13 5.13 0 015-5.25m0-.75a6 6 0 106 6 6 6 0 00-6-6zm.87 6.13a1.63 1.63 0 001.31-1.57c0-1.1-.95-1.56-2.31-1.56h-1.74v6h1v-2.7h.8l1.26 2c.4.63.47.67 1 .67h.51v-.06zm-1.08-.1h-.68v-2.76h.61c1 0 1.41.38 1.41 1.37s-.28 1.34-1.34 1.34zM79.98 18.2h22.15v72H79.98zM223.42 83c-6.51 0-9.61-3.91-9.61-10.59V24.2h17.59v-6h-17.59V.2h-21.28l-1 18h-9.44v6h9.44v47.43c0 12.22 7 20.19 21.34 20.19 10.75 0 17.11-4.39 19.71-10.25l-1-1.14a13.43 13.43 0 01-8.16 2.57z"
            ></path>
            <path
              className="cls-header-logo"
              d="M269.7 16.57c-23.62 0-38.61 16.45-38.61 38 0 21.33 14 37.29 38.12 37.29 24.6 0 38.6-16.44 38.6-37.95 0-21.37-14.66-37.34-38.11-37.34zm-.16 70.05C257.64 86.62 256 77 256 54c0-22.64 1.62-32.42 13.35-32.42 11.89 0 13.52 9.78 13.52 32.74.02 22.52-1.44 32.3-13.33 32.3zM338.81 30.58l-.49-12.38h-21.5v72H339V32.54a14.3 14.3 0 014.11-.66c3.95 0 8.55 1.63 22.36 8.15l1.31-.49v-20.2a14.57 14.57 0 00-8.78-2.77c-6.21 0-13.44 3.91-19.19 14.01zM153.35 81.57l2.55 8.63h18.95V34.82c0-12.22-9.61-18.25-25.41-18.25-10.59 0-23.62 2.93-32.58 5.87l-1 12.54 1.31.65c16.94-11.4 22-14 27.2-14 6 0 8.47 3.1 8.47 9.61v15c-25.08 5.21-40.4 9-40.4 26.06 0 11.73 7.82 19.55 20.37 19.55 9.63-.02 16.79-4.58 20.54-10.28zm-19.06-13.36c0-11.08 3.75-13.85 18.57-16.94V79a14.29 14.29 0 01-9.45 3.1c-6.35-.04-9.12-3.63-9.12-13.89z"
            ></path>
            <circle
              className="cls-header-logo"
              cx="57.25"
              cy="30.2"
              r="13.5"
            ></circle>
            <path
              className="cls-header-logo"
              d="M42.39 90.2l7.05-15.83L24.43 18.2H.75l32.06 72h9.58z"
            ></path>
          </svg>
        </div>
        <span className="text-xs font-normal font-[.425531875rem] whitespace-nowrap leading-tight pt-[0.1rem]">
          a TripAdvisor company
        </span>
      </div>
      <div className="flex flex-row items-center">
        <button className="hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="icon__UJ21"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-18.5c-.5 0-1.37.45-2.2 2.1-.4.8-.73 1.78-.96 2.9h6.32c-.23-1.12-.57-2.1-.97-2.9-.82-1.65-1.68-2.1-2.19-2.1zm-7.75 5a8.53 8.53 0 014.71-4.44A12.42 12.42 0 007.31 8.5H4.25zM3.74 10a8.52 8.52 0 00.3 5h3.19a19.4 19.4 0 01-.13-5H3.75h-.01zm1.05 6.5a8.53 8.53 0 004.17 3.44 11.5 11.5 0 01-1.43-3.44H4.8zM15.04 4.06a12.42 12.42 0 011.65 4.44h3.06a8.53 8.53 0 00-4.71-4.44zM20.26 10H16.9a19.83 19.83 0 01-.13 5h3.19a8.48 8.48 0 00.3-5zm-1.05 6.5a8.53 8.53 0 01-4.17 3.44 11.5 11.5 0 001.43-3.44h2.74zm-5.02 1.9c.28-.55.52-1.19.72-1.9H9.1c.2.71.44 1.35.72 1.9.82 1.65 1.68 2.1 2.19 2.1.5 0 1.37-.45 2.2-2.1zM15.5 12c0 1.06-.09 2.07-.25 3h-6.5a17.76 17.76 0 01-.14-5h6.78c.07.64.11 1.3.11 2z"
            ></path>
          </svg>
        </button>
        <div className="hidden lg:block h-8 mx-4 w-px bg-gray-300"></div>
        <div className="flex items-center relative">
          <button
            className="flex items-center p-2 rounded-full border hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="User avatar and options"
            onClick={handleUserMenuClick}
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <circle cx="24" cy="24" r="24" fill="#1f2937"></circle>
              <path
                d="M42.132 39.782c-3.53-6.346-10.305-10.64-18.082-10.64-7.851 0-14.6 4.228-18.101 10.674.081-.148-.034.061 0 0C10.333 44.878 16.76 48 24.05 48c7.213 0 13.683-3.182 18.082-8.218z"
                fill="#ffffff"
              ></path>
              <circle cx="24" cy="17.357" r="10.5" fill="#ffffff"></circle>
            </svg>
            <span className="ml-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.72 5.22c.3-.3.77-.3 1.06 0l3.97 3.97 3.97-3.97a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </span>
          </button>

          {showUserMenu && (
            <>
              <div className="absolute z-50 right-2 top-full mt-2 lg:block hidden">
                <UserMenu onClose={() => setShowUserMenu(false)} />
              </div>
              <div className="absolute z-50 right-2 top-full mt-2 block lg:hidden">
                <SideBar onClose={() => setShowUserMenu(false)} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
