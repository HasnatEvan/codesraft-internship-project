import React from "react";
import Marquee from "react-fast-marquee";

const services = [
  { name: "Web Development", icon: "https://img.icons8.com/fluency/48/code.png" },
  { name: "Mobile App", icon: "https://img.icons8.com/fluency/48/android-os.png" },
  { name: "Cloud Solutions", icon: "https://img.icons8.com/fluency/48/cloud.png" },
  { name: "UI/UX Design", icon: "https://img.icons8.com/fluency/48/design.png" },
  { name: "SEO & Marketing", icon: "https://img.icons8.com/fluency/48/search--v1.png" },
  { name: "IT Consulting", icon: "https://img.icons8.com/fluency/48/consultation.png" },
];

const SliderSection = () => {
  return (
    <div className="bg-[#f4f8fc] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Marquee Icons + Labels (side by side) */}
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="space-x-8"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 mx-4 bg-white p-2 rounded-lg shadow min-w-[140px]"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <span className="text-gray-700 font-medium whitespace-nowrap text-sm sm:text-base">
                {service.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SliderSection;
