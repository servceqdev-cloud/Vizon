"use client";

import { useState } from "react";
import { MOCK_VEHICLES } from "../data/mockVehicals";
import { HeroSearch } from "./components/home/SearchBar";
import { LeaseCarousel } from "./components/home/LeaseCarousel";
import { FilterSidebar } from "./components/filters/VehicleFilters";
import { VehicleCard } from "./components/vehicals/VehicalCard";
import { DiscoverSection } from "./components/home/DiscoverSection";
import { ReserveSection } from "./components/home/ReserveSection";
import { BuyingEssentials } from "./components/home/BuyingEssentials";
import { BrowseBrands } from "./components/home/BrowseBrands";
import { ValueYourCar } from "./components/home/ValueYourCar";

export default function Page() {
  const [vehicles, setVehicles] = useState(MOCK_VEHICLES);
  const [filters, setFilters] = useState({
    priceRange: "",
    fuel: "",
    transmission: "",
    bodyType: "",
    seller: "",
  });

  const applyFilters = () => {
    let filtered = MOCK_VEHICLES;

    if (filters.fuel)
      filtered = filtered.filter((v) => v.fuel === filters.fuel);
    if (filters.transmission)
      filtered = filtered.filter(
        (v) => v.transmission === filters.transmission
      );
    if (filters.bodyType)
      filtered = filtered.filter((v) => v.bodyType === filters.bodyType);
    if (filters.seller)
      filtered = filtered.filter((v) => v.seller === filters.seller);

    setVehicles(filtered);
  };
  const [showResults, setShowResults] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  const handleSearch = (params) => {
    setSearchParams(params);
    setShowResults(true);
  };
  if (showResults) {
    return (
      <SearchResultsPage
        onBack={() => setShowResults(false)}
        searchParams={searchParams}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSearch />

      <DiscoverSection />
      <LeaseCarousel />
      <ReserveSection />
      <BuyingEssentials />
      <BrowseBrands />
      <ValueYourCar />
    </div>
  );
}
