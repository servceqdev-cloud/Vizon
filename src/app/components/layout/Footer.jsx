import React from "react";
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About Autotrader
               </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
               </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
               </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Help & Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Security Advice
               </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQs
               </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Buying Guide
               </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Car Finance
               </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Car Insurance
               </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Value Your Car
               </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#04A1FF]">
                <BsFacebook className="w-6 h-6" />
             </Link>
              <Link href="#" className="hover:text-[#04A1FF]">
                <BsTwitter className="w-6 h-6" />
             </Link>
              <Link href="#" className="hover:text-[#04A1FF]">
                <BsInstagram className="w-6 h-6" />
             </Link>
              <Link href="#" className="hover:text-[#04A1FF]">
                <BsYoutube className="w-6 h-6" />
             </Link>
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
