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

export const DiscoverSection = () => {
  const sections = [
    {
      title: "Leasing you can trust",
      desc: "The price you see is the price you get no admin fees added on.",
      cta: "Find your lease",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    },
    {
      title: "Sell your car, your way",
      desc: "Get a free, instant valuation in seconds and choose the best way to sell.",
      cta: "Sell your car",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
    },
    {
      title: "Get the full experience",
      desc: "See your saved cars, track progress and pick up right where you left off.",
      cta: "Sign in",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    },
  ];

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
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#04A1FF] transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {section.desc}
                </p>
                <button className="text-[#04A1FF] hover:text-blue-400 font-bold text-lg inline-flex items-center gap-2 border-2 border-[#04A1FF] hover:border-blue-400 px-6 py-3 rounded-xl transition-all">
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
