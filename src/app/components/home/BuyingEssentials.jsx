// "use client";

// import React, { useState } from "react";
// import {
//   FiSearch,
//   FiHeart,
//   FiMapPin,
//   FiChevronLeft,
//   FiChevronRight,
//   FiX,
//   FiMenu,
//   FiUser,
//   FiPhone,
//   FiMail,
//   FiClock,
// } from "react-icons/fi";
// import {
//   BsFuelPump,
//   BsSpeedometer2,
//   BsYoutube,
//   BsInstagram,
//   BsTwitter,
// } from "react-icons/bs";
// import { GiGearStickPattern } from "react-icons/gi";
// import { MdElectricCar, MdLocationOn } from "react-icons/md";

// import { FiFilter, FiChevronDown } from "react-icons/fi";
// import { BsFacebook, BsTiktok, BsPinterest } from "react-icons/bs";
// import { AiOutlineCar } from "react-icons/ai";
// import { BUYING_ESSENTIALS } from "../../data/mockVehicals";

// export const BuyingEssentials = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-[1400px] mx-auto px-6">
//         <h2 className="text-4xl font-black text-gray-900 mb-12">
//           Buying essentials
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {BUYING_ESSENTIALS.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer group border border-gray-100"
//             >
//               <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#04A1FF] transition-colors">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React from "react";
import {
  FiFileText,
  FiShield,
  FiCreditCard,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

const BUYING_ESSENTIALS = [
  {
    title: "Check a car's history",
    desc: "Have complete peace of mind before you buy your next car.",
    icon: <FiFileText className="w-full h-full" />,
    color: "blue",
  },
  {
    title: "Security advice",
    desc: "Advice on how to buy and sell vehicles safely.",
    icon: <FiShield className="w-full h-full" />,
    color: "green",
  },
  {
    title: "Car finance & loans",
    desc: "Discover how much you can borrow and find the right package for you.",
    icon: <FiCreditCard className="w-full h-full" />,
    color: "purple",
  },
  {
    title: "What's it worth",
    desc: "Get a free valuation. Sell or part-exchange your car at the right price.",
    icon: <FiDollarSign className="w-full h-full" />,
    color: "orange",
  },
];

const colorClasses = {
  blue: {
    icon: "text-[#04A1FF] group-hover:text-blue-400",
    bg: "group-hover:bg-blue-50",
    border: "group-hover:border-blue-200",
  },
  green: {
    icon: "text-[#04A1FF] group-hover:text-blue-400",
    bg: "group-hover:bg-green-50",
    border: "group-hover:border-blue-200",
  },
  purple: {
    icon: "text-[#04A1FF] group-hover:text-blue-400",
    bg: "group-hover:bg-purple-50",
    border: "group-hover:border-blue-200",
  },
  orange: {
    icon: "text-[#04A1FF] group-hover:text-blue-400",
    bg: "group-hover:bg-orange-50",
    border: "group-hover:border-blue-200",
  },
};

export function BuyingEssentials() {
  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
          Buying essentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUYING_ESSENTIALS.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-gray-200 hover:-translate-y-2 ${
                colorClasses[item.color].bg
              } ${colorClasses[item.color].border}`}
            >
              <div
                className={`w-14 h-14 mb-4 transition-all duration-300 group-hover:scale-110 ${
                  colorClasses[item.color].icon
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-700 transition-colors">
                Learn more
                <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
