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

export const ReserveSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-gradient-to-r from-[#04A1FF] to-indigo-400 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">
                Reserve online with Autotrader
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Once you've found your car, build your deal to reserve online.
              </p>
              <button className="bg-white text-[#04A1FF] px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
                <FiSearch className="inline w-5 h-5 mr-2" />
                Search 154,432 cars
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black text-[#04A1FF]">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Build your deal, step-by-step
                </h3>
                <p className="text-sm text-blue-100">
                  Add part exchange, finance and more
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black text-[#04A1FF]">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Peace of mind</h3>
                <p className="text-sm text-blue-100">
                  Free vehicle history check included
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black text-[#04A1FF]">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Save time</h3>
                <p className="text-sm text-blue-100">
                  Complete everything online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
