"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeatureShowcase() {
  const [index, setIndex] = useState(0);

  const features = [
    { title: "Metro Mitra: Smart Metro, Smarter Travel", desc: "Experience real-time metro information powered by AI", img: "assets/slides/slide2.jpeg" },
    { title: "Live Station Monitoring, Smarter Trave", desc: "Stay updated with every station in real time", img: "assets/slides/slide1.jpeg" },
    { title: "AI-Powered Complaint Management", desc: "Report metro issues and let AI prioritize them automatically", img: "assets/slides/slide3.jpeg" },
    { title: "Metro Operations Dashboard", desc: "Complete monitoring and management for metro authorities", img: "assets/slides/slide4.jpeg" },
    { title: "Find Your Best Route", desc: "Search for the fastest and most affordable metro journey", img: "assets/slides/slide5.jpeg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-white w-full flex justify-center items-center">
      {/* Width increased to 90vw for maximum screen presence */}
      <div className="relative w-[90vw] h-[600px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full h-full flex flex-col items-center"
          >
            {/* IMAGE: Now spans wider and feels much larger */}
            <div className="w-full flex-grow flex items-center justify-center">
              <img 
                src={features[index].img} 
                alt={features[index].title} 
                className="max-h-[480px] w-full object-contain" 
              />
            </div>
            
            {/* TEXT: Centered nicely below the expanded image */}
            
            {/* TEXT: Explicitly centered */}
<div className="mt-8 text-center flex flex-col items-center justify-center w-full">
  <h3 className="text-3xl font-black uppercase text-slate-900 tracking-[0.2em] w-full text-center">
    {features[index].title}
  </h3>
  <p className="mt-4 text-lg text-slate-500 font-medium max-w-2xl text-center">
    {features[index].desc}
  </p>
</div>
            
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}