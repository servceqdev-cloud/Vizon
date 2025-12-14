import React from "react";
import { MOCK_VEHICLES } from "@/app/data/mockVehicals";
import { VehicleCard } from "../vehicals/VehicalCard";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export const LeaseCarousel = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
          Lease a brand new car
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-out">
              {MOCK_VEHICLES.slice(0, 3).map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/stock-vehicles"
              className="text-gray-800 font-semibold  pt-5 text-center hover:text-[#04A1FF]  text-lg hidden md:flex items-center gap-2"
            >
              View more Deals
              <FiChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
