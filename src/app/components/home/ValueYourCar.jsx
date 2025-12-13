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

export const ValueYourCar = () => {
  return (
    <section className="pb-5 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
              alt="Car valuation"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              We know what your car is really worth
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join the millions who value their car with Autotrader. It's
              completely free and within seconds we will give you a live
              valuation of what your car is worth.
            </p>
            <button className="bg-[#04A1FF] hover:bg-blue-400 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl">
              Value your car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
