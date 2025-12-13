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
import { BUYING_ESSENTIALS } from "../../data/mockVehicals";

export const BuyingEssentials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl font-black text-gray-900 mb-12">
          Buying essentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {BUYING_ESSENTIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer group border border-gray-100"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#04A1FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
