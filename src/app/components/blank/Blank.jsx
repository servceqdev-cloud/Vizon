import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blank() {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        {/* Logo */}
        <div className="animate-bounce">
          <Image
            src="/images/VF-Logo.svg"
            alt="VF Logo"
            width={300}
            height={300}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            href="/"
            className="px-8 py-3 bg-[#04A1FF] text-white font-semibold rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          >
            Go to Home
          </Link>
          <Link
            href="/stock-vehicles"
            className="px-8 py-3 border-2 border-[#04A1FF] text-[#04A1FF] font-semibold rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:scale-105 hover:bg-[#04A1FF] hover:text-white hover:shadow-xl"
          >
            Go to Stock Vehicles
          </Link>
        </div>
      </div>
    </div>
  );
}
