"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Banner() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];

  const handleStartLearning = () => {
    router.push("/Homemain");
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto h-[250px] sm:h-[350px] md:h-[462px] rounded-lg overflow-hidden shadow-xl group">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-full h-[250px] sm:h-[350px] md:h-[462px] relative"
          >
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Learn with Us!
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200 mt-2 mb-5">
          Explore the latest Gaming tutorials, projects, and community challenges.
        </p>
        <button
          onClick={handleStartLearning}
          className="px-6 py-2 sm:px-8 sm:py-3 bg-green-600 text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-green-700 transition-colors duration-300 shadow-md"
        >
          Start Learning Now
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-green-500 w-5" : "bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
