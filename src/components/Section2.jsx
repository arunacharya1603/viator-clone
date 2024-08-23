import React, { useState } from "react";
import ValueProp from "./ValueProp";
import { FcOnlineSupport } from "react-icons/fc";
import { GiLightBulb } from "react-icons/gi";
import { GiJusticeStar } from "react-icons/gi";
import { FaCalendar } from "react-icons/fa";

const Section2 = () => {
  const valueProps = [
    {
      icon: <FcOnlineSupport />,
      title: "24/7 customer support",
      description: "No matter the time zone, we're here to help.",
    },
    {
      icon: <GiLightBulb />,
      title: "Earn rewards",
      description:
        "Explore, earn, redeem, and repeat with our loyalty program.",
    },
    {
      icon: <GiJusticeStar />,
      title: "Millions of reviews",
      description:
        "Plan and book with confidence using reviews from fellow travelers.",
    },
    {
      icon: <FaCalendar />,
      title: "Plan your way",
      description:
        "Stay flexible with free cancellation and the option to reserve now and pay later at no additional cost.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container flex flex-col justify-center items-center mt-5 mb-5 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Why book with Viator?</h1>

      {/* Large screens (show all items) */}
      <div className="flex flex-col justify-center items-center">
  <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
    {valueProps.map((prop, index) => (
      <ValueProp
        key={index}
        icon={prop.icon}
        title={prop.title}
        description={prop.description}
      />
    ))}

    <div className="col-span-full flex items-center justify-center mt-6">
      <div className="flex-1 border-t border-gray-300"></div>
      <a href="#" className="mx-4 text-gray-400">Why are you seeing <span className="underline">these recommondations</span></a>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>
  </div>
</div>


      {/* Small and medium screens (show one item at a time with buttons) */}
      <div className="relative w-full lg:hidden">
        <div className="flex flex-row gap-6 overflow-hidden w-full">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full ${
                index === activeIndex ? "block" : "hidden"
              }`}
            >
              <ValueProp
                icon={prop.icon}
                title={prop.title}
                description={prop.description}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {valueProps.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 border-2 border-black rounded-full cursor-pointer transition-colors duration-200 ${
                activeIndex === index ? "bg-black" : "bg-transparent"
              }`}
              onClick={() => scrollToIndex(index)}
            ></div>
          ))}
        </div>
      </div>
     



    </div>
  );
};

export default Section2;
