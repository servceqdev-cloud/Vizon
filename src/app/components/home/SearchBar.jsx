// "use client";

// import React, { useState, useEffect } from "react";
// import { FiSearch, FiMapPin, FiChevronDown } from "react-icons/fi";
// import Image from "next/image";
// const heroImages = [
//   "/images/hero1.jpg",
//   "/images/hero2.avif",
//   "/images/hero3.jpg",
// ];

"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  FaChevronDown,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MOCK_VEHICLES } from "@/app/data/mockVehicals";

// export const HeroSearch = ({ onSearch }) => {
//   const [postcode, setPostcode] = useState("");
//   const [make, setMake] = useState("");
//   const [model, setModel] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-auto md:h-[500px] w-full overflow-hidden">
//       {/* --- Background Image Carousel --- */}
//       <div className="absolute inset-0">
//         {heroImages.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]
//             ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
//             style={{ backgroundImage: `url(${img})` }}
//           />
//         ))}
//       </div>

//       {/* --- Dark Overlay --- */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* --- Search Content Static --- */}
//       <div className="relative z-20 max-w-[1300px] mx-auto px-6 py-8  md:py-16">
//         {/* Headings */}
//         <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
//           Your
//           <span className="text-[#04A1FF] px-1">Vision.</span>
//           Our<span className="text-[#04A1FF] px-1">Mission.</span>
//         </h1>
//         <p className="text-lg md:text-xl font-semibold text-white mb-8  drop-shadow-md">
//           Car finance made simple. Get your free quote in minutes.
//         </p>

//         {/* Search Box */}
//         <div className="bg-white/95 backdrop-blur-sm border  border-gray-100 rounded-2xl shadow-xl p-6 max-w-4xl">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//             {/* Postcode */}
//             <div>
//               <label className="block text-sm font-bold text-gray-700 mb-1">
//                 Keyword
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={postcode}
//                   onChange={(e) => setPostcode(e.target.value)}
//                   className="w-full pl-12 pr-5 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg transition-all"
//                 />
//               </div>
//             </div>

//             {/* Make */}
//             <div>
//               <label className="block text-sm font-bold text-gray-700 mb-1">
//                 Make
//               </label>
//               <select
//                 value={make}
//                 onChange={(e) => setMake(e.target.value)}
//                 className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg bg-white transition-all"
//               >
//                 <option value="">All Makes</option>
//                 <option value="BMW">BMW</option>
//                 <option value="Mercedes">Mercedes-Benz</option>
//                 <option value="Audi">Audi</option>
//               </select>
//             </div>

//             {/* Model */}
//             <div>
//               <label className="block text-sm font-bold text-gray-700 mb-1">
//                 Model
//               </label>
//               <select
//                 value={model}
//                 onChange={(e) => setModel(e.target.value)}
//                 className="w-full px-5 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg bg-white transition-all"
//               >
//                 <option value="">All Models</option>
//                 <option value="7 Series">7 Series</option>
//                 <option value="S-Class">S-Class</option>
//               </select>
//             </div>

//             {/* Search Button */}
//             <div className="flex items-end">
//               <button
//                 onClick={() => onSearch({ postcode, make, model })}
//                 className="w-full px-4 py-2 bg-[#04A1FF] hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
//               >
//                 <FiSearch className="w-5 h-5" />
//                 Search
//               </button>
//             </div>
//           </div>

//           <button className="text-[#04A1FF] hover:text-blue-400 font-semibold text-sm flex items-center gap-2">
//             More options
//             <FiChevronDown className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export const HeroSearch = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.avif",
    "/images/hero3.jpg",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200",
  ];

  const makes = [...new Set(MOCK_VEHICLES.map((v) => v.make))];
  const models = [...new Set(MOCK_VEHICLES.map((v) => v.model))];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set("channel", "financecar");
    if (keyword) params.set("keyword", keyword);
    if (make) params.set("make", make);
    if (model) params.set("model", model);

    router.push(`/car-search?${params.toString()}`);
  };

  return (
    <div className="relative h-auto md:h-[500px] w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] 
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Search Content */}
      <div className="relative z-20 max-w-[1300px] mx-auto px-2 md:px-6 py-8 md:py-16">
        {/* Headings */}
        <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
          Your
          <span className="text-[#04A1FF] px-1">Vision.</span>
          Our<span className="text-[#04A1FF] px-1">Mission.</span>
        </h1>
        <p className="text-lg md:text-xl font-semibold text-white mb-8 drop-shadow-md">
          Car finance made simple. Get your free quote in minutes.
        </p>

        {/* Search Box */}
        <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-xl p-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Keyword */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Keyword
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. E1 7DB"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg transition-all"
              />
            </div>

            {/* Make */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Make
              </label>
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg bg-white transition-all"
              >
                <option value="">All Makes</option>
                {makes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Model
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-[#04A1FF] focus:outline-none text-lg bg-white transition-all"
              >
                <option value="">All Models</option>
                {models.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full px-4 py-2 bg-[#04A1FF] hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <FiSearch className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>

          <button className="text-[#04A1FF] hover:text-blue-400 font-semibold text-sm flex items-center gap-2">
            More options
            <FaChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
