'use client';

import React, { useState } from 'react';
import { 
  FiSearch, FiHeart, FiMapPin, FiChevronLeft, FiChevronRight, 
  FiX, FiMenu, FiUser, FiPhone, FiMail, FiClock 
} from 'react-icons/fi';
import { BsFuelPump, BsSpeedometer2, BsFacebook, BsYoutube, BsInstagram, BsTwitter } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi';
import { AiOutlineCar } from 'react-icons/ai';
import { MdElectricCar, MdLocationOn } from 'react-icons/md';


export const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Autotrader</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Help & Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Security Advice</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Buying Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Car Finance</a></li>
                <li><a href="#" className="hover:text-white">Car Insurance</a></li>
                <li><a href="#" className="hover:text-white">Value Your Car</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#04A1FF]"><BsFacebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-[#04A1FF]"><BsTwitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-[#04A1FF]"><BsInstagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-[#04A1FF]"><BsYoutube className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vizon Autos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  