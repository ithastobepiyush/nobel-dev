"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative pt-40 pb-20 px-8 md:px-16 flex flex-col items-center justify-center min-h-[50vh] z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // cinematic easing
        className="text-center max-w-4xl mx-auto"
      >
        <span className="text-sm tracking-widest text-[#2F4F22] font-semibold uppercase mb-6 block">
          What We Do
        </span>
        <h1 className="text-5xl md:text-8xl font-medium text-[#2F4F22] leading-[1] tracking-tighter mb-8">
          OUR SERVICES
        </h1>
        <p className="text-lg md:text-xl text-[#2F4F22]/80 leading-relaxed max-w-2xl mx-auto">
          We architect intelligent systems, design premium software, and empower teams to innovate through rigorous training and strategic consulting.
        </p>
      </motion.div>
    </section>
  );
}
