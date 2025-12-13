// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { VehicleCard } from "../components/vehicals/VehicalCard";
// import { MOCK_VEHICLES } from "../data/mockVehicals";
// import { VehicleFilters } from "../components/filters/VehicleFilters";

// const CarSearchPage = () => {
//   const searchParams = useSearchParams();
  
//   // Get initial search parameters from URL
//   const initialKeyword = searchParams.get("keyword") || "";
//   const initialMake = searchParams.get("make") || "";
//   const initialModel = searchParams.get("model") || "";
//   const channel = searchParams.get("channel") || "";

//   const [filters, setFilters] = useState({
//     make: initialMake,
//     model: initialModel,
//     bodyType: "",
//     transmission: "",
//     minPrice: "",
//     maxPrice: "",
//     fuelType: "",
//   });

//   const [keyword, setKeyword] = useState(initialKeyword);

//   const resetFilters = () => {
//     setFilters({
//       make: "",
//       model: "",
//       bodyType: "",
//       transmission: "",
//       minPrice: "",
//       maxPrice: "",
//       fuelType: "",
//     });
//     setKeyword("");
//   };

//   // Filter vehicles based on search params and filters
//   const filteredVehicles = MOCK_VEHICLES.filter((vehicle) => {
//     // Keyword search - searches in title, make, model, location
//     if (keyword) {
//       const searchTerm = keyword.toLowerCase();
//       const matchesKeyword =
//         vehicle.title.toLowerCase().includes(searchTerm) ||
//         vehicle.make.toLowerCase().includes(searchTerm) ||
//         vehicle.model.toLowerCase().includes(searchTerm) ||
//         vehicle.location.toLowerCase().includes(searchTerm) ||
//         vehicle.description.toLowerCase().includes(searchTerm);
      
//       if (!matchesKeyword) return false;
//     }

//     // Filter by make
//     if (filters.make && vehicle.make !== filters.make) return false;
    
//     // Filter by model
//     if (filters.model && vehicle.model !== filters.model) return false;
    
//     // Filter by body type
//     if (filters.bodyType && vehicle.bodyType !== filters.bodyType) return false;
    
//     // Filter by transmission
//     if (filters.transmission && vehicle.transmission !== filters.transmission)
//       return false;
    
//     // Filter by fuel type
//     if (filters.fuelType && vehicle.fuel !== filters.fuelType) return false;
    
//     // Filter by min price
//     if (filters.minPrice && vehicle.price < parseFloat(filters.minPrice))
//       return false;
    
//     // Filter by max price
//     if (filters.maxPrice && vehicle.price > parseFloat(filters.maxPrice))
//       return false;

//     return true;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Search Results Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Search Results
//           </h1>
//           {(keyword || initialMake || initialModel) && (
//             <div className="flex flex-wrap gap-2 items-center">
//               <span className="text-gray-600">Searching for:</span>
//               {keyword && (
//                 <span className="bg-[#04A1FF] text-white px-3 py-1 rounded-full text-sm font-medium">
//                   Keyword: {keyword}
//                 </span>
//               )}
//               {initialMake && (
//                 <span className="bg-[#04A1FF] text-white px-3 py-1 rounded-full text-sm font-medium">
//                   Make: {initialMake}
//                 </span>
//               )}
//               {initialModel && (
//                 <span className="bg-[#04A1FF] text-white px-3 py-1 rounded-full text-sm font-medium">
//                   Model: {initialModel}
//                 </span>
//               )}
//               {channel && (
//                 <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
//                   Channel: {channel}
//                 </span>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Filters */}
//         <VehicleFilters
//           filters={filters}
//           setFilters={setFilters}
//           onReset={resetFilters}
//         />

//         {/* Results */}
//         {filteredVehicles.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="mb-6">
//               <svg
//                 className="mx-auto h-24 w-24 text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//             <p className="text-2xl font-semibold text-gray-900 mb-2">
//               No vehicles found
//             </p>
//             <p className="text-gray-600 mb-6">
//               We couldn't find any vehicles matching your search criteria.
//               <br />
//               Try adjusting your filters or search terms.
//             </p>
//             <button
//               onClick={resetFilters}
//               className="bg-[#04A1FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition shadow-lg"
//             >
//               Reset All Filters
//             </button>
//           </div>
//         ) : (
//           <>
//             <div className="mb-6 flex items-center justify-between">
//               <p className="text-gray-600">
//                 Showing{" "}
//                 <span className="font-semibold text-gray-900">
//                   {filteredVehicles.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-semibold text-gray-900">
//                   {MOCK_VEHICLES.length}
//                 </span>{" "}
//                 vehicles
//               </p>
              
//               {/* Sort Dropdown (optional) */}
//               <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:border-[#04A1FF] focus:outline-none">
//                 <option value="relevance">Sort by: Relevance</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="year-new">Year: Newest First</option>
//                 <option value="mileage-low">Mileage: Low to High</option>
//               </select>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {filteredVehicles.map((vehicle) => (
//                 <VehicleCard key={vehicle.id} vehicle={vehicle} />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CarSearchPage;


import React, { Suspense } from "react";
import CarSearchContent from "./CarSearchContent";

// Loading component
function SearchLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
const CarSearchPage = () => {
  return (
    <Suspense fallback={<SearchLoading />}>
      <CarSearchContent />
    </Suspense>
  );
};

export default CarSearchPage;