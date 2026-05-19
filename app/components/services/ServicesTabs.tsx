"use client";

import { motion } from "framer-motion";
import { ServiceCategory } from "../../data/services";

interface ServicesTabsProps {
  categories: ServiceCategory[];
  activeCategory: ServiceCategory;
  onSelect: (category: ServiceCategory) => void;
}

export default function ServicesTabs({ categories, activeCategory, onSelect }: ServicesTabsProps) {
  return (
    <div className="relative z-20 flex justify-center w-full px-4 -mt-8 mb-16">
      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xl p-2 rounded-full border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                isActive ? "text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {category}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#2F4F22] rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
