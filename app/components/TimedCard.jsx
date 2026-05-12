import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// 1. Extract the data snippet from the CodePen JS
const data = [];

export default function TimedCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // 2. Set up the GSAP Hook
  useGSAP(() => {
    // GSAP Animation logic will go here. 
    // It will trigger whenever activeIndex changes.
  }, { dependencies: [activeIndex], scope: containerRef });

  return (
    {/* Main Container - replacing the SCSS body styles */}
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#1a1a1a] text-white overflow-hidden font-sans"
    >
      
      {/* Background Images Layer */}
      {data.map((item, index) => (
        <div 
          key={`bg-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={item.image} 
            alt={item.place} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Main Content Layer */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-8">
        <p className="text-lg uppercase tracking-widest text-gray-300 mb-2">
          {data[activeIndex].place}
        </p>
        <h2 className="text-7xl font-bold uppercase leading-none">
          {data[activeIndex].title} <br />
          <span className="text-[#ecad29]">
            {data[activeIndex].title2}
          </span>
        </h2>
        <p className="mt-6 max-w-md text-gray-200">
          {data[activeIndex].description}
        </p>
        <button className="mt-8 w-fit px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          DISCOVER LOCATION
        </button>
      </div>

      {/* Thumbnails Navigation */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        {data.map((item, index) => (
          <div 
            key={`thumb-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`w-32 h-44 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
              index === activeIndex ? 'border-[#ecad29] scale-110' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img 
              src={item.image} 
              className="w-full h-full object-cover" 
              alt="thumbnail" 
            />
          </div>
        ))}
      </div>

    </section>
  );
}