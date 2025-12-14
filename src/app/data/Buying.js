import {
    FiFileText,
    FiShield,
    FiCreditCard,
    FiDollarSign,
  } from "react-icons/fi";
  
export const BUYING_ESSENTIALS = [
    {
      title: "Check a car's history",
      desc: "Have complete peace of mind before you buy your next car.",
      icon: <FiFileText className="w-full h-full" />,
      color: "blue",
    },
    {
      title: "Security advice",
      desc: "Advice on how to buy and sell vehicles safely.",
      icon: <FiShield className="w-full h-full" />,
      color: "green",
    },
    {
      title: "Car finance & loans",
      desc: "Discover how much you can borrow and find the right package for you.",
      icon: <FiCreditCard className="w-full h-full" />,
      color: "purple",
    },
    {
      title: "What's it worth",
      desc: "Get a free valuation. Sell or part-exchange your car at the right price.",
      icon: <FiDollarSign className="w-full h-full" />,
      color: "orange",
    },
  ];

  
export const colorClasses = {
    blue: {
      icon: "text-[#04A1FF] group-hover:text-blue-400",
      bg: "group-hover:bg-blue-50",
      border: "group-hover:border-blue-200",
    },
    green: {
      icon: "text-[#04A1FF] group-hover:text-blue-400",
      bg: "group-hover:bg-green-50",
      border: "group-hover:border-blue-200",
    },
    purple: {
      icon: "text-[#04A1FF] group-hover:text-blue-400",
      bg: "group-hover:bg-purple-50",
      border: "group-hover:border-blue-200",
    },
    orange: {
      icon: "text-[#04A1FF] group-hover:text-blue-400",
      bg: "group-hover:bg-orange-50",
      border: "group-hover:border-blue-200",
    },
  };