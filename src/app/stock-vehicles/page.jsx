"use client";
import React, { useState } from "react";

import { VehicleCard } from "../components/vehicals/VehicalCard";
import { MOCK_VEHICLES } from "../../data/mockVehicals";
import { VehicleFilters } from "../components/filters/VehicleFilters";

const VehicleGallery = () => {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    bodyType: "",
    transmission: "",
    minPrice: "",
    maxPrice: "",
    fuelType: "",
  });

  const resetFilters = () => {
    setFilters({
      make: "",
      model: "",
      bodyType: "",
      transmission: "",
      minPrice: "",
      maxPrice: "",
      fuelType: "",
    });
  };

  const filteredVehicles = MOCK_VEHICLES.filter((vehicle) => {
    if (filters.make && vehicle.make !== filters.make) return false;
    if (filters.model && vehicle.model !== filters.model) return false;
    if (filters.bodyType && vehicle.bodyType !== filters.bodyType) return false;
    if (filters.transmission && vehicle.transmission !== filters.transmission)
      return false;
    if (filters.fuelType && vehicle.fuel !== filters.fuelType) return false;
    if (filters.minPrice && vehicle.price < parseFloat(filters.minPrice))
      return false;
    if (filters.maxPrice && vehicle.price > parseFloat(filters.maxPrice))
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <VehicleFilters
          filters={filters}
          setFilters={setFilters}
          onReset={resetFilters}
        />

        {filteredVehicles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">No vehicles found</p>
            <button
              onClick={resetFilters}
              className="bg-[#04A1FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredVehicles.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {MOCK_VEHICLES.length}
                </span>{" "}
                vehicles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VehicleGallery;
