import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { BUYING_ESSENTIALS, colorClasses } from "@/data/Buying";

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
