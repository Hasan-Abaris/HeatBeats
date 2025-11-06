// File: components/Gamesdetails/Banner.jsx
import React from "react";

function Banner() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg">
      {/* 🔹 Background Image (replace this later) */}
      <img
        src="/images/courses/banner.jpg"
        alt="Tournament Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Banner Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          🏆 Tournament Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Get ready for the ultimate gaming showdown — stay tuned for updates and registration details!
        </p>

        {/* Optional CTA Button */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">
          Notify Me
        </button>
      </div>
    </div>
  );
}

export default Banner;
