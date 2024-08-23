import React, { useState, useRef } from 'react';

const HeroSection = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const menuRef = useRef(null);
  const submenuRef = useRef(null);

  const topActivities = [
    {
      title: 'Top categories',
      items: [
        'Walking Tours in Rome',
        'Historical Tours in Rome',
        'Day Trips in London',
        'Day Trips in Florence',
      ],
    },
    {
      title: 'Top Middle East & Africa tours',
      items: [
        'Walking Tours in Paris',
        'Historical Tours in Paris',
        'Bus Tours in London',
        'Day Trips in Las Vegas',
      ],
    },
  ];

  const topLandmarks = [
    {
      title: 'Top Europe tours',
      items: [
        'Walking Tours in Paris',
        'Historical Tours in Paris',
        'Bus Tours in London',
        'Day Trips in Las Vegas',
      ],
    },
    {
      title: 'Top North America tours',
      items: [
        'Bus Tours in Las Vegas',
        'Wine Tastings in Florence',
        'Helicopter Tours in New York City',
        'Day Trips in Athens',
      ],
    },
  ];

  const exploreTheWorld = [
    'Day Trips in London',
    'Bus Tours in London',
    'Day Trips in Florence',
    'Day Trips in Las Vegas',
  ];

  const handleMouseEnter = (menu) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setHoveredMenu(menu);
    setHoveredSubmenu(null); // Reset submenu when entering a new menu
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
        if (!menuRef.current.contains(document.activeElement)) {
            setHoveredMenu(null);
            setHoveredSubmenu(null);
          }
        }, 300); // Adjust delay time as needed
        setTimeoutId(id);
      };

  const handleSubmenuMouseEnter = (submenu) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setHoveredSubmenu(submenu);
  };

  const handleSubmenuMouseLeave = () => {
    const id = setTimeout(() => {
        if (!submenuRef.current.contains(document.activeElement)) {
          setHoveredSubmenu(null);
        }
      }, 300); // Adjust delay time as needed
      setTimeoutId(id);
    };

  return (
    <div className="hidden relative z-30 lg:flex lg:flex-row bg-white py-2 shadow-md">
      {/* Top activities dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('topActivities')}
        onMouseLeave={handleMouseLeave}
        ref={menuRef}
      >
        <button className="px-4 py-2 text-gray-700 hover:text-green-700 focus:outline-none">
          Top activities ▼
        </button>
        {hoveredMenu === 'topActivities' && (
          <div className="absolute left-0 w-64 bg-white shadow-lg rounded-lg mt-2 z-10">
            <ul className="py-2">
              {topActivities.map((category) => (
                <li
                  key={category.title}
                  className="group relative"
                  onMouseEnter={() => handleSubmenuMouseEnter(category.title)}
                  onMouseLeave={handleSubmenuMouseLeave}
                  ref={submenuRef}
                >
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                    {category.title}
                    <span>▶</span>
                  </button>
                  {hoveredSubmenu === category.title && (
                    <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg mt-0 z-10">
                      <ul className="py-2">
                        {category.items.map((item) => (
                          <li key={item} className="px-4 py-2 hover:bg-gray-100">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Top landmarks dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('topLandmarks')}
        onMouseLeave={handleMouseLeave}
        ref={menuRef}
      >
        <button className="px-4 py-2 text-gray-700 hover:text-green-700 focus:outline-none">
          Top landmarks ▼
        </button>
        {hoveredMenu === 'topLandmarks' && (
          <div className="absolute left-0 w-64 bg-white shadow-lg rounded-lg mt-2 z-10">
            <ul className="py-2">
              {topLandmarks.map((category) => (
                <li
                  key={category.title}
                  className="group relative"
                  onMouseEnter={() => handleSubmenuMouseEnter(category.title)}
                  onMouseLeave={handleSubmenuMouseLeave}
                  ref={submenuRef}
                >
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                    {category.title}
                    <span>▶</span>
                  </button>
                  {hoveredSubmenu === category.title && (
                    <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg mt-0 z-10">
                      <ul className="py-2">
                        {category.items.map((item) => (
                          <li key={item} className="px-4 py-2 hover:bg-gray-100">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Explore the world dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('exploreTheWorld')}
        onMouseLeave={handleMouseLeave}
        ref={menuRef}
      >
        <button className="px-4 py-2 text-gray-700 hover:text-green-700 focus:outline-none">
          Explore the world ▼
        </button>
        {hoveredMenu === 'exploreTheWorld' && (
          <div className="absolute left-0 w-64 bg-white shadow-lg rounded-lg mt-2 z-10">
            <ul className="py-2">
              {exploreTheWorld.map((item) => (
                <li key={item} className="px-4 py-2 hover:bg-gray-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;


