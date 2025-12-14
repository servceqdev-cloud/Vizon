import React, { Suspense } from "react";
import CarSearchContent from "./CarSearchContent";

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

const CarSearchPage = () => {
  return (
    <Suspense fallback={<SearchLoading />}>
      <CarSearchContent />
    </Suspense>
  );
};

export default CarSearchPage;