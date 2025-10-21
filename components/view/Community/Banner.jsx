"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Banner() {
  const router = useRouter();

  const handleStartLearning = () => {
    router.push("/Homemain"); // 👈 This will navigate to /Homemain page
  };

  return (
    <div
      className="relative w-full max-w-[1200px] mx-auto h-[250px] sm:h-[350px] md:h-[462px] 
      bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] text-white rounded-lg overflow-hidden 
      shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Decorative code-style background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
            viewBox='0 0 100 100'%3E%3Cpath d='M10 10 H90 V90 H10 Z 
            M20 20 H80 V80 H20 Z' fill='none' stroke='%234CAF50' 
            stroke-width='2'/%3E%3Ctext x='50' y='50' font-family='monospace' 
            font-size='12' fill='%234CAF50' text-anchor='middle' 
            dominant-baseline='middle'%3Ecode%3C/text%3E%3C/svg%3E") repeat`,
        }}
      />

      {/* Banner content */}
      <div className="relative text-center bg-black/30 rounded-lg p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
          Learn with Us!
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-5">
          Explore the latest Gaming tutorials, projects, and community challenges.
        </p>
        <button
          onClick={handleStartLearning}
          className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-green-600 text-white 
          text-sm sm:text-base md:text-lg rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          Start Learning Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
