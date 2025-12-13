"use client";
import React, { useState, useEffect } from "react";

import {
  FaHeart,
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaGasPump,
  FaCogs,
  FaTimes,
  FaCar,
  FaDoorClosed,
  FaChair,
  FaPalette,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


export const VehicleDetailModal = ({ vehicle, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto my-8 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {vehicle.title}
            </h2>
            <div className="flex items-center text-sm text-[#04A1FF] mt-1">
              <FaMapMarkerAlt className="w-3 h-3 mr-1" />
              {vehicle.location}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition"
          >
            <FaTimes className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Image Gallery */}
        <div className="p-6">
          <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-4">
            <img
              src={vehicle.images[selectedImageIndex]}
              alt={vehicle.title}
              className="w-full h-96 object-cover"
            />

            {/* Navigation Arrows */}
            {vehicle.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
                >
                  <FaChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
                >
                  <FaChevronRight className="w-5 h-5 text-gray-800" />
                </button>
              </>
            )}

            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 cursor-pointer bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
            >
              <FaHeart
                className={`w-5 h-5 ${
                  isFavorite ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {vehicle.images.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {vehicle.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`flex-shrink-0 w-24  cursor-pointer h-20 rounded-lg overflow-hidden border-2 transition ${
                  idx === selectedImageIndex
                    ? "border-[#04A1FF]"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`${vehicle.title} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Description & Specs */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              {/* Key Specifications */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <FaTachometerAlt className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Mileage</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.mileage.toLocaleString()} miles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaGasPump className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Fuel Type</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.fuel}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCogs className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Transmission</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.transmission}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCar className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Body Type</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.bodyType}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaDoorClosed className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Doors</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.doors}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaChair className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Seats</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.seats}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPalette className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Color</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.color}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCogs className="text-[#04A1FF] w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Engine Size</p>
                      <p className="font-semibold text-gray-900">
                        {vehicle.engineSize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Vehicle Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Make</span>
                    <span className="font-semibold text-gray-900">
                      {vehicle.make}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Model</span>
                    <span className="font-semibold text-gray-900">
                      {vehicle.model}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Year</span>
                    <span className="font-semibold text-gray-900">
                      {vehicle.year}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Seller Type</span>
                    <span className="font-semibold text-gray-900">
                      {vehicle.seller}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Pricing & Actions */}
            <div className="space-y-4">
              {/* Price Card */}
              <div className="bg-[#04A1FF] rounded-xl p-6 text-white shadow-lg ">
                <div className="mb-4">
                  <p className="text-white/80 text-sm mb-1">Total Price</p>
                  <p className="text-4xl font-bold">
                    £{vehicle.price.toLocaleString()}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
                  <p className="text-white/80 text-sm mb-1">Finance from</p>
                  <p className="text-2xl font-bold">
                    £{Math.round(vehicle.price / 50)}/mo
                  </p>
                  <p className="text-white/70 text-xs mt-2">
                    Contract: 50 months (inc. VAT)
                  </p>
                </div>

                <div className="space-y-3">
                  <button className="w-full cursor-pointer bg-white text-[#04A1FF] py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md">
                    Apply for Finance
                  </button>

                  <button className="w-full cursor-pointer  bg-transparent text-white py-3 rounded-lg font-semibold hover:bg-white/10 transition border border-white/50">
                    Contact Seller
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our team is here to assist you with any questions about this
                  vehicle.
                </p>
                <button className="w-full cursor-pointer bg-gray-800 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

