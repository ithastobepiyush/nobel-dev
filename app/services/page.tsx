"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesHero from "../components/services/ServicesHero";
import ServicesTabs from "../components/services/ServicesTabs";
import ServiceSplitLayout from "../components/services/ServiceSplitLayout";
import { servicesData, ServiceCategory } from "../data/services";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Solutions");
  
  const categories: ServiceCategory[] = ["Solutions", "Workshops", "Trainings"];

  return (
    <div className="relative min-h-screen bg-gray-50/30 overflow-hidden font-sans">         
      <div className="relative z-10 flex flex-col min-h-screen">
        <ServicesHero />
        
        <ServicesTabs 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />
        
        <div className="relative w-full flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // cinematic easing
              className="w-full"
            >
              <ServiceSplitLayout items={servicesData[activeCategory]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
