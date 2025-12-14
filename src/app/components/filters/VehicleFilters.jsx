"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MOCK_VEHICLES } from "@/app/data/mockVehicals";

export const VehicleFilters = ({ filters, setFilters, onReset }) => {
  const makes = [...new Set(MOCK_VEHICLES.map((v) => v.make))];
  const models = [...new Set(MOCK_VEHICLES.map((v) => v.model))];
  const bodyTypes = [...new Set(MOCK_VEHICLES.map((v) => v.bodyType))];
  const transmissions = [...new Set(MOCK_VEHICLES.map((v) => v.transmission))];
  const fuelTypes = [...new Set(MOCK_VEHICLES.map((v) => v.fuel))];

  const [openDropdown, setOpenDropdown] = useState(null);

  const FilterDropdown = ({ label, value, options, onChange, filterKey }) => {
    const isOpen = openDropdown === filterKey;

    return (
      <div className="relative">
        <button
          onClick={() => setOpenDropdown(isOpen ? null : filterKey)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between hover:border-[#04A1FF] transition text-left"
        >
          <span className={value ? "text-gray-900" : "text-gray-500"}>
            {value || label}
          </span>
          <FaChevronDown
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setOpenDropdown(null)}
            />
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
              <button
                onClick={() => {
                  onChange("");
                  setOpenDropdown(null);
                }}
                className="w-full px-4 py-2.5 text-left hover:bg-gray-50 text-gray-500 text-sm"
              >
                All {label}s
              </button>
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setOpenDropdown(null);
                  }}
                  className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition ${
                    value === option
                      ? "bg-blue-50 text-[#04A1FF] font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-[#0A1628] to-[#1a2744] rounded-2xl p-8 mb-6 text-center">
        <p className="text-[#04A1FF] text-sm font-semibold mb-2 tracking-wide">
         Avalible Car for Finance
        </p>
        <h1 className="text-4xl font-bold text-white mb-4">
        Browse stock Vehicles
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
        Choose your next car from one of our stock dealerships
         
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Filter by options
        </h2>
        <button
          onClick={onReset}
          className="text-[#04A1FF] hover:text-blue-600 font-medium text-sm transition"
        >
          Reset filters
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <FilterDropdown
          label="Make"
          value={filters.make}
          options={makes}
          onChange={(val) => setFilters({ ...filters, make: val, model: "" })}
          filterKey="make"
        />

        <FilterDropdown
          label="Model"
          value={filters.model}
          options={
            filters.make
              ? models.filter(
                  (m) =>
                    MOCK_VEHICLES.find((v) => v.model === m)?.make ===
                    filters.make
                )
              : models
          }
          onChange={(val) => setFilters({ ...filters, model: val })}
          filterKey="model"
        />

        <FilterDropdown
          label="Body type"
          value={filters.bodyType}
          options={bodyTypes}
          onChange={(val) => setFilters({ ...filters, bodyType: val })}
          filterKey="bodyType"
        />

        <FilterDropdown
          label="Gearbox"
          value={filters.transmission}
          options={transmissions}
          onChange={(val) => setFilters({ ...filters, transmission: val })}
          filterKey="transmission"
        />

        <div className="relative">
          <input
            type="number"
            placeholder="Min price"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })
            }
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 hover:border-[#04A1FF] transition focus:outline-none focus:border-[#04A1FF]"
          />
        </div>

        <div className="relative">
          <input
            type="number"
            placeholder="Max price"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 hover:border-[#04A1FF] transition focus:outline-none focus:border-[#04A1FF]"
          />
        </div>

        <FilterDropdown
          label="Fuel type"
          value={filters.fuelType}
          options={fuelTypes}
          onChange={(val) => setFilters({ ...filters, fuelType: val })}
          filterKey="fuelType"
        />
      </div>
    </div>
  );
};
