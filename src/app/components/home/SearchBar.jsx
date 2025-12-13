"use client";

import React, { useState, useEffect } from "react";
import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.avif",
  "/images/hero3.jpg",
];

export const HeroSearch = ({ onSearch }) => {
  const [postcode, setPostcode] = useState("E1 7DB");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-auto md:h-[500px] w-full overflow-hidden">
      {/* --- Background Image Carousel --- */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] 
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* --- Dark Overlay --- */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* --- Search Content Static --- */}
      <div className="relative z-20 max-w-[1300px] mx-auto px-6 pt-16">
        {/* Headings */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
          Your
          <span className="text-[#04A1FF] px-1">Vision.</span>
          Our<span className="text-[#04A1FF] px-1">Mission .</span>
        </h1>
        <p className="text-lg md:text-xl font-semibold text-white mb-8  drop-shadow-md">
          Car finance made simple. Get your free quote in minutes.
        </p>

        {/* Search Box */}
        <div className="bg-white/95 backdrop-blur-sm border  border-gray-100 rounded-2xl shadow-xl p-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Postcode */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Keyword
              </label>
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="w-full pl-12 pr-5 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg transition-all"
                />
              </div>
            </div>

            {/* Make */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Make
              </label>
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg bg-white transition-all"
              >
                <option value="">All Makes</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes-Benz</option>
                <option value="Audi">Audi</option>
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Model
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg bg-white transition-all"
              >
                <option value="">All Models</option>
                <option value="7 Series">7 Series</option>
                <option value="S-Class">S-Class</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={() => onSearch({ postcode, make, model })}
                className="w-full px-4 py-2 bg-[#04A1FF] hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <FiSearch className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>

          <button className="text-[#04A1FF] hover:text-blue-400 font-semibold text-sm flex items-center gap-2">
            More options
            <FiChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
