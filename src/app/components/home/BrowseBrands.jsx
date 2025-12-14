import React from "react";
import Image from "next/image";
import { BRANDS } from "../../../data/BrandsData";

export const BrowseBrands = () => {
  return (
    <section className="pb-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
          Browse by brand
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                />

                <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#04A1FF] transition-colors">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="text-[#04A1FF] hover:text-blue-400 font-semibold text-lg inline-flex items-center gap-2 border-2 border-[#04A1FF] px-4 py-2 cursor-pointer rounded-xl hover:bg-blue-50 transition-all">
            + Show all brands
          </button>
        </div>
      </div>
    </section>
  );
};
