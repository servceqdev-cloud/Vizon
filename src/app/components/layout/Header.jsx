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
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { MdElectricCar, MdLocationOn } from "react-icons/md";
import Image from "next/image";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between   h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/images/VF-logo.svg"
              alt="VF Logo"
              width={240}
              height={80}
              className="object-contain cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-8 justify-center">
            <nav className="hidden pt-2  lg:flex items-center justify-center gap-6">
              <a
                href="/"
                className="text-gray-800  cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Car Finance
              </a>
              <a
                href="#"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                How it Works
              </a>
              <a
                href="#"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Temporay Insurance
              </a>
              <a
                href="/stock-vehicles"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Stock Vehicles
              </a>

              <a
                href="#"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Contact Us
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden mt-2 md:flex items-center cursor-pointer gap-2 text-white bg-[#04A1FF] font-semibold  px-4 py-2 rounded-lg">
              Get a Free Qoute
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <nav className="lg:hidden py-4 border-t">
            <a href="/" className="block py-2 text-gray-800">
              Home
            </a>
            <a href="#" className="block py-2 text-gray-800">
              Car Finance
            </a>
            <a href="#" className="block py-2 text-gray-800">
              How it Works
            </a>
            <a href="#" className="block py-2 text-gray-800">
              Car leasing
            </a>
            <a href="/stock-vehicles" className="block py-2 text-gray-800">
              Stock Vehicles
            </a>
            <a href="#" className="block py-2 text-gray-800">
              Contact Us
            </a>
            <button className="my-2 flex items-center cursor-pointer gap-2 text-white bg-[#04A1FF] font-semibold  px-4 py-2 rounded-lg">
              Get a Free Qoute
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
