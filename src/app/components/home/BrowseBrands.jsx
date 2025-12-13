"use client";

import React, { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiMenu,
  FiUser,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";
import {
  BsFuelPump,
  BsSpeedometer2,
  BsYoutube,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdElectricCar, MdLocationOn } from "react-icons/md";

import { FiFilter, FiChevronDown } from "react-icons/fi";
import { BsFacebook, BsTiktok, BsPinterest } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { BRANDS } from "../../data/mockVehicals";

export const BrowseBrands = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl font-black text-gray-900 mb-12">
          Browse by brand
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="text-6xl group-hover:scale-110 transition-transform">
                  {brand.logo}
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#04A1FF] transition-colors">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="text-[#04A1FF] hover:text-blue-400 font-bold text-lg inline-flex items-center gap-2 border-2 border-[#04A1FF] px-8 py-4 rounded-xl hover:bg-blue-50 transition-all">
            + Show all brands
          </button>
        </div>
      </div>
    </section>
  );
};
