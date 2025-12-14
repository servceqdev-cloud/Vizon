"use client";

import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between   h-16">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/VF-Logo.svg"
                alt="VF Logo"
                width={240}
                height={80}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <nav className="hidden pt-2  lg:flex items-center justify-center gap-6">
              <Link
                href="/"
                className="text-gray-800  cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Home
              </Link>
              <Link
                href=" /car-finance"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Car Finance
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                How it Works
              </Link>
              <Link
                href="/temporay-insurance"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Temporay Insurance
              </Link>
              <Link
                href="/stock-vehicles"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Stock Vehicles
              </Link>

              <Link
                href="/contact-us"
                className="text-gray-800 cursor-pointer hover:text-[#04A1FF] font-medium"
              >
                Contact Us
              </Link>
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
            <Link href="/" className="block py-2 text-gray-800">
              Home
            </Link>
            <Link href="/car-finance" className="block py-2 text-gray-800">
              Car Finance
            </Link>
            <Link href="/how-it-works" className="block py-2 text-gray-800">
              How it Works
            </Link>
            <Link href="/temporay-insurance" className="block py-2 text-gray-800">
            Temporay Insurance
            </Link>
            <Link href="/stock-vehicles" className="block py-2 text-gray-800">
              Stock Vehicles
            </Link>
            <Link href="/contact-us" className="block py-2 text-gray-800">
              Contact Us
            </Link>
            <button className="my-2 flex items-center cursor-pointer gap-2 text-white bg-[#04A1FF] font-semibold  px-4 py-2 rounded-lg">
              Get a Free Qoute
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
