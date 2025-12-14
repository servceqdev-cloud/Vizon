"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  FaHeart,
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaGasPump,
  FaCogs,
} from "react-icons/fa";

import { VehicleDetailModal } from "./VechicalDetailModal";

export const VehicleCard = ({ vehicle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [vehicle.images.length]);

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300">
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <Image
          src={vehicle.images[currentImageIndex]}
          alt={vehicle.title}
          fill
          className="w-full h-full object-cover"
        />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow">
            {vehicle.seller}
          </span>
          <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow">
            {vehicle.year}
          </span>
        </div>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 cursor-pointer bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-white"
        >
          <FaHeart
            className={`w-4 h-4 ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
          />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {vehicle.images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {vehicle.title}
        </h3>

        <div className="flex items-center text-sm text-[#04A1FF] mb-4">
          <FaMapMarkerAlt className="w-3 h-3 mr-1" />
          {vehicle.location}
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm mb-5">
          <div className="flex items-center text-gray-800 gap-2">
            <FaTachometerAlt className="text-gray-400" />
            <span>{vehicle.mileage.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-gray-800 gap-2">
            <FaGasPump className="text-gray-400" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center text-gray-800 gap-2">
            <FaCogs className="text-gray-400" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <div className="border-t flex flex-row justify-between border-gray-800 pt-4 mb-4">
          <div className="mt-2 text-sm text-gray-500 space-y-1">
            <p>
              Finance from{" "}
              <span className="font-medium text-[#04A1FF]">
                £{Math.round(vehicle.price / 50)}/mo
              </span>{" "}
              (inc. VAT)
            </p>

            <p>
              Contract:{" "}
              <span className="font-medium text-gray-800">50 months</span>
            </p>
          </div>

          <div className="flex  flex-col justify-end  p-2">
            <span className="text-gray-500  text-sm">Price</span>
            <span className="text-xl font-bold text-[#04A1FF]">
              £{vehicle.price.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 border cursor-pointer border-gray-300 py-2.5 rounded-lg text-sm font-medium text-[#04A1FF] hover:bg-gray-100 transition"
          >
            View Details
          </button>
          <button className="flex-1 cursor-pointer bg-[#04A1FF] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-400 transition">
            Apply Finance
          </button>
        </div>
      </div>
      <VehicleDetailModal
        vehicle={vehicle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
