"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WebinarCategorySelector({
  selectedCategory = "All",
  onSelectCategory = () => {},
}) {
  const scrollRef = useRef(null);

  // Static gaming categories
  const categories = [
    { topic: "All Games", icon: "/images/courses/amongus-course.jpg"},
    { topic: "PUBG", icon: "/images/courses/pubg.jpg"},
    { topic: "Ludo", icon: "/images/courses/ludo.jpg"},
    { topic: "Carrom", icon: "/images/courses/carrom.jpg"},
    { topic: "Chess", icon: "/images/courses/chess.jpg"},
    { topic: "Arcade", icon: "/images/courses/amongus-course.jpg"},
    { topic: "Strategy", icon: "/images/courses/sudoku.jpg"},
  ];

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.firstChild?.getBoundingClientRect().width || 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-12 bg-[#0d1224] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-orange-400 uppercase tracking-wide">
          Explore Game Categories
        </h2>

        <div className="flex items-center justify-center gap-4">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="bg-gray-800 shadow-md p-3 rounded-full hover:bg-gray-700 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth px-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat.topic;

              return (
                <button
                  key={idx}
                  onClick={() => onSelectCategory(cat.topic)}
                  className={`min-w-[160px] max-w-[160px] h-[150px] flex-shrink-0 flex flex-col items-center justify-center rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-orange-500 bg-orange-100/10 ring-2 ring-orange-400 shadow-lg scale-105"
                      : "border-gray-700 hover:bg-gray-800 hover:shadow-md"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                  aria-pressed={isActive}
                >
                  <div className="mb-3">
                    <Image
                      src={cat.icon}
                      alt={cat.topic}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-center">
                    {cat.topic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="bg-gray-800 shadow-md p-3 rounded-full hover:bg-gray-700 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Hide scrollbar globally */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
