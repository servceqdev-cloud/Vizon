import React from "react";
import { sections } from "@/data/DiscoverSectionData";
import Image from "next/image";
export const DiscoverSection = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Discover more from Autotrader
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#04A1FF] transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {section.desc}
                </p>
                <button className="text-[#04A1FF] hover:text-blue-400 font-semibold cursor-pointer text-lg inline-flex items-center gap-2 border-2 border-[#04A1FF] hover:border-blue-400 px-6 py-3 rounded-xl  hover:bg-blue-50 transition-all">
                  {section.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
