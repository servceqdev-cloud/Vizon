"use client";
import React, { useState, useEffect } from "react";
// import { Heart, MapPin, Gauge, Fuel, Calendar, Settings } from "lucide-react";
// import {
//   FaHeart,
//   FaMapMarkerAlt,
//   FaTachometerAlt,
//   FaGasPump,
//   FaCogs,
// } from "react-icons/fa";

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
import { VehicleCard } from "../components/vehicals/VehicalCard";
import { MOCK_VEHICLES } from "../data/mockVehicals";
import { VehicleFilters } from "../components/filters/VehicleFilters";

// const MOCK_VEHICLES = [
//   {
//     id: 1,
//     make: "BMW",
//     model: "7 Series 750e M Sport",
//     title: "BMW 7 Series 750e M Sport",
//     description:
//       "Luxury hybrid saloon offering exceptional comfort, cutting-edge technology, and strong performance.",
//     price: 79995,
//     year: 2023,
//     mileage: 17250,
//     fuel: "Hybrid",
//     transmission: "Automatic",
//     location: "Cambridgeshire",
//     bodyType: "Saloon",
//     color: "Black",
//     doors: 4,
//     seats: 5,
//     engineSize: "3.0L",
//     seller: "Dealer",
//     images: [
//       "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
//       "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800",
//       "https://images.unsplash.com/photo-1549921296-3c7b1e4b0a4b?w=800",
//     ],
//     financePerMonth: 2129,
//   },
//   {
//     id: 2,
//     make: "Mercedes-Benz",
//     model: "S-Class S500",
//     title: "Mercedes-Benz S-Class S500",
//     description:
//       "Flagship luxury saloon with a refined interior, smooth ride, and advanced driver assistance systems.",
//     price: 65000,
//     year: 2022,
//     mileage: 12000,
//     fuel: "Petrol",
//     transmission: "Automatic",
//     location: "London",
//     bodyType: "Saloon",
//     color: "Silver",
//     doors: 4,
//     seats: 5,
//     engineSize: "3.0L",
//     seller: "Dealer",
//     images: [
//       "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
//       "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
//     ],
//     financePerMonth: 1750,
//   },
//   {
//     id: 3,
//     make: "Audi",
//     model: "A8 L 55 TFSI Quattro",
//     title: "Audi A8 L 55 TFSI Quattro",
//     description:
//       "Long-wheelbase executive saloon combining quattro all-wheel drive with premium comfort.",
//     price: 58500,
//     year: 2022,
//     mileage: 15600,
//     fuel: "Petrol",
//     transmission: "Automatic",
//     location: "Manchester",
//     bodyType: "Saloon",
//     color: "White",
//     doors: 4,
//     seats: 5,
//     engineSize: "3.0L",
//     seller: "Private",
//     images: [
//       "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
//       "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800",
//     ],
//     financePerMonth: 1580,
//   },
//   {
//     id: 4,
//     make: "Porsche",
//     model: "Panamera 4 E-Hybrid",
//     title: "Porsche Panamera 4 E-Hybrid",
//     description:
//       "Sporty hybrid saloon delivering Porsche performance with everyday practicality.",
//     price: 72000,
//     year: 2023,
//     mileage: 8500,
//     fuel: "Hybrid",
//     transmission: "Automatic",
//     location: "Birmingham",
//     bodyType: "Saloon",
//     color: "Blue",
//     doors: 4,
//     seats: 5,
//     engineSize: "2.9L",
//     seller: "Dealer",
//     images: [
//       "https://images.unsplash.com/photo-1611821064430-a3eb2b9c3205?w=800",
//       "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800",
//     ],
//     financePerMonth: 1940,
//   },
//   {
//     id: 5,
//     make: "Tesla",
//     model: "Model S Long Range",
//     title: "Tesla Model S Long Range",
//     description:
//       "Fully electric saloon with impressive range, rapid acceleration, and minimalist interior.",
//     price: 68900,
//     year: 2023,
//     mileage: 5200,
//     fuel: "Electric",
//     transmission: "Automatic",
//     location: "Edinburgh",
//     bodyType: "Saloon",
//     color: "Red",
//     doors: 4,
//     seats: 5,
//     engineSize: "Electric",
//     seller: "Dealer",
//     images: [
//       "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800",
//       "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800",
//     ],
//     financePerMonth: 1860,
//   },
//   {
//     id: 6,
//     make: "Jaguar",
//     model: "XJ Portfolio",
//     title: "Jaguar XJ Portfolio",
//     description:
//       "Elegant British luxury saloon with a smooth diesel engine and premium interior materials.",
//     price: 45000,
//     year: 2021,
//     mileage: 22000,
//     fuel: "Diesel",
//     transmission: "Automatic",
//     location: "Glasgow",
//     bodyType: "Saloon",
//     color: "Grey",
//     doors: 4,
//     seats: 5,
//     engineSize: "3.0L",
//     seller: "Private",
//     images: [
//       "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800",
//       "https://images.unsplash.com/photo-1603575448362-6b54f3b0c7e4?w=800",
//     ],
//     financePerMonth: 1215,
//   },
// ];

// const VehicleDetailModal = ({ vehicle, isOpen, onClose }) => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => (prev + 1) % vehicle.images.length);
//   };

//   const prevImage = () => {
//     setSelectedImageIndex(
//       (prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length
//     );
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
//       <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto my-8 shadow-2xl">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">
//               {vehicle.title}
//             </h2>
//             <div className="flex items-center text-sm text-[#04A1FF] mt-1">
//               <FaMapMarkerAlt className="w-3 h-3 mr-1" />
//               {vehicle.location}
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 cursor-pointer hover:bg-gray-100 rounded-full transition"
//           >
//             <FaTimes className="w-6 h-6 text-gray-600" />
//           </button>
//         </div>

//         {/* Image Gallery */}
//         <div className="p-6">
//           <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-4">
//             <img
//               src={vehicle.images[selectedImageIndex]}
//               alt={vehicle.title}
//               className="w-full h-96 object-cover"
//             />

//             {/* Navigation Arrows */}
//             {vehicle.images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
//                 >
//                   <FaChevronLeft className="w-5 h-5 text-gray-800" />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
//                 >
//                   <FaChevronRight className="w-5 h-5 text-gray-800" />
//                 </button>
//               </>
//             )}

//             {/* Favorite Button */}
//             <button
//               onClick={() => setIsFavorite(!isFavorite)}
//               className="absolute top-4 right-4 cursor-pointer bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
//             >
//               <FaHeart
//                 className={`w-5 h-5 ${
//                   isFavorite ? "text-red-500" : "text-gray-400"
//                 }`}
//               />
//             </button>

//             {/* Image Counter */}
//             <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-sm">
//               {selectedImageIndex + 1} / {vehicle.images.length}
//             </div>
//           </div>

//           {/* Thumbnail Gallery */}
//           <div className="flex gap-3 overflow-x-auto pb-2">
//             {vehicle.images.map((img, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedImageIndex(idx)}
//                 className={`flex-shrink-0 w-24  cursor-pointer h-20 rounded-lg overflow-hidden border-2 transition ${
//                   idx === selectedImageIndex
//                     ? "border-[#04A1FF]"
//                     : "border-gray-200 hover:border-gray-400"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`${vehicle.title} ${idx + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content Grid */}
//         <div className="px-6 pb-6">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Left Column - Description & Specs */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Description */}
//               <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   Description
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   {vehicle.description}
//                 </p>
//               </div>

//               {/* Key Specifications */}
//               <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Key Specifications
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex items-start gap-3">
//                     <FaTachometerAlt className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Mileage</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.mileage.toLocaleString()} miles
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <FaGasPump className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Fuel Type</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.fuel}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <FaCogs className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Transmission</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.transmission}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <FaCar className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Body Type</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.bodyType}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <FaDoorClosed className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Doors</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.doors}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <FaChair className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Seats</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.seats}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <FaPalette className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Color</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.color}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <FaCogs className="text-[#04A1FF] w-5 h-5 mt-0.5" />
//                     <div>
//                       <p className="text-sm text-gray-500">Engine Size</p>
//                       <p className="font-semibold text-gray-900">
//                         {vehicle.engineSize}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Vehicle Information */}
//               <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Vehicle Information
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between py-2 border-b border-gray-200">
//                     <span className="text-gray-600">Make</span>
//                     <span className="font-semibold text-gray-900">
//                       {vehicle.make}
//                     </span>
//                   </div>
//                   <div className="flex justify-between py-2 border-b border-gray-200">
//                     <span className="text-gray-600">Model</span>
//                     <span className="font-semibold text-gray-900">
//                       {vehicle.model}
//                     </span>
//                   </div>
//                   <div className="flex justify-between py-2 border-b border-gray-200">
//                     <span className="text-gray-600">Year</span>
//                     <span className="font-semibold text-gray-900">
//                       {vehicle.year}
//                     </span>
//                   </div>
//                   <div className="flex justify-between py-2">
//                     <span className="text-gray-600">Seller Type</span>
//                     <span className="font-semibold text-gray-900">
//                       {vehicle.seller}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Pricing & Actions */}
//             <div className="space-y-4">
//               {/* Price Card */}
//               <div className="bg-[#04A1FF] rounded-xl p-6 text-white shadow-lg ">
//                 <div className="mb-4">
//                   <p className="text-white/80 text-sm mb-1">Total Price</p>
//                   <p className="text-4xl font-bold">
//                     £{vehicle.price.toLocaleString()}
//                   </p>
//                 </div>

//                 <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-4">
//                   <p className="text-white/80 text-sm mb-1">Finance from</p>
//                   <p className="text-2xl font-bold">
//                     £{Math.round(vehicle.price / 50)}/mo
//                   </p>
//                   <p className="text-white/70 text-xs mt-2">
//                     Contract: 50 months (inc. VAT)
//                   </p>
//                 </div>

//                 <div className="space-y-3">
//                   <button className="w-full cursor-pointer bg-white text-[#04A1FF] py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md">
//                     Apply for Finance
//                   </button>

//                   <button className="w-full cursor-pointer  bg-transparent text-white py-3 rounded-lg font-semibold hover:bg-white/10 transition border border-white/50">
//                     Contact Seller
//                   </button>
//                 </div>
//               </div>

//               {/* Additional Info */}
//               <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
//                 <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
//                 <p className="text-sm text-gray-600 mb-3">
//                   Our team is here to assist you with any questions about this
//                   vehicle.
//                 </p>
//                 <button className="w-full cursor-pointer bg-gray-800 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
//                   Call Us Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // VehicleCard Component
// const VehicleCard = ({ vehicle }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [vehicle.images.length]);

//   return (
//     <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300">
//       {/* Image */}
//       <div className="relative h-60 overflow-hidden bg-gray-100">
//         <img
//           src={vehicle.images[currentImageIndex]}
//           alt={vehicle.title}
//           className="w-full h-full object-cover"
//         />

//         {/* Badges */}
//         <div className="absolute top-3 left-3 flex gap-2">
//           <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow">
//             {vehicle.seller}
//           </span>
//           <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow">
//             {vehicle.year}
//           </span>
//         </div>

//         {/* Favourite */}
//         <button
//           onClick={() => setIsFavorite(!isFavorite)}
//           className="absolute top-3 right-3 cursor-pointer bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-white"
//         >
//           <FaHeart
//             className={`w-4 h-4 ${
//               isFavorite ? "text-red-500" : "text-gray-400"
//             }`}
//           />
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//           {vehicle.images.map((_, idx) => (
//             <span
//               key={idx}
//               className={`h-1.5 rounded-full transition-all ${
//                 idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
//           {vehicle.title}
//         </h3>

//         <div className="flex items-center text-sm text-[#04A1FF] mb-4">
//           <FaMapMarkerAlt className="w-3 h-3 mr-1" />
//           {vehicle.location}
//         </div>

//         {/* Specs */}
//         <div className="grid grid-cols-3 gap-4 text-sm mb-5">
//           <div className="flex items-center text-gray-800 gap-2">
//             <FaTachometerAlt className="text-gray-400" />
//             <span>{vehicle.mileage.toLocaleString()}</span>
//           </div>
//           <div className="flex items-center text-gray-800 gap-2">
//             <FaGasPump className="text-gray-400" />
//             <span>{vehicle.fuel}</span>
//           </div>
//           <div className="flex items-center text-gray-800 gap-2">
//             <FaCogs className="text-gray-400" />
//             <span>{vehicle.transmission}</span>
//           </div>
//         </div>

//         {/* Pricing */}
//         <div className="border-t flex flex-row justify-between border-gray-800 pt-4 mb-4">
//           <div className="mt-2 text-sm text-gray-500 space-y-1">
//             <p>
//               Finance from{" "}
//               <span className="font-medium text-[#04A1FF]">
//                 £{Math.round(vehicle.price / 50)}/mo
//               </span>{" "}
//               (inc. VAT)
//             </p>

//             <p>
//               Contract:{" "}
//               <span className="font-medium text-gray-800">50 months</span>
//             </p>
//           </div>

//           <div className="flex  flex-col justify-end  p-2">
//             <span className="text-gray-500  text-sm">Price</span>
//             <span className="text-xl font-bold text-[#04A1FF]">
//               £{vehicle.price.toLocaleString()}
//             </span>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex gap-3">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="flex-1 border cursor-pointer border-gray-300 py-2.5 rounded-lg text-sm font-medium text-[#04A1FF] hover:bg-gray-100 transition"
//           >
//             View Details
//           </button>
//           <button className="flex-1 cursor-pointer bg-[#04A1FF] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-400 transition">
//             Apply Finance
//           </button>
//         </div>
//       </div>
//       <VehicleDetailModal
//         vehicle={vehicle}
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// Main Gallery Component
// const VehicleGallery = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-3">
//             Premium Luxury Vehicles
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Discover our exclusive collection of premium cars
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {MOCK_VEHICLES.map((vehicle) => (
//             <VehicleCard key={vehicle.id} vehicle={vehicle} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


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
                Showing <span className="font-semibold text-gray-900">{filteredVehicles.length}</span> of{" "}
                <span className="font-semibold text-gray-900">{MOCK_VEHICLES.length}</span> vehicles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

