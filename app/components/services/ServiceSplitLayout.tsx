"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SubTopic } from "../../data/services";
import { CheckCircle2 } from "lucide-react";

interface ServiceSplitLayoutProps {
  items: SubTopic[];
}

export default function ServiceSplitLayout({ items }: ServiceSplitLayoutProps) {
  const [activeItem, setActiveItem] = useState<SubTopic>(items[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-20 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sidebar - Subtopics */}
        <div className="lg:col-span-4 flex flex-col space-y-2">
          {items.map((item) => {
            const isActive = activeItem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 relative group ${
                  isActive ? "bg-white shadow-md text-[#2F4F22]" : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-green-500 rounded-r-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <h3 className={`font-semibold text-lg transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                  {item.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Right Content Panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-4xl p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-gray-100"
            >
              <div className="w-full h-48 md:h-64 bg-linear-to-br from-green-50 to-purple-50 rounded-2xl mb-8 flex items-center justify-center border border-gray-100/50">
                <span className="text-gray-400 text-sm tracking-widest uppercase">Abstract Conceptual Render</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 leading-tight">
                {activeItem.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {activeItem.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeItem.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
