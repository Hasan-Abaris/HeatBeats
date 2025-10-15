"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllWebinars } from "@/app/comman/FrontApi";

export default function WebinarCategorySelector({
  categories = [],
  selectedCategory = "All",
  onSelectCategory = () => {},
}) {
  const scrollRef = useRef(null);

  // Fetch categories if not passed via props
  useEffect(() => {
    async function fetchCategories() {
      if (categories.length) return; // categories passed by parent, skip fetching

      try {
        const res = await getAllWebinars();
        if (res?.data?.data) {
          const uniqueCategories = Array.from(
            new Map(
              res.data.data.map((w) => [
                w.category_name,
                {
                  topic: w.category_name,
                  icon: w.category_icon || "/images/fallback.svg",
                },
              ])
            ).values()
          );
          onSelectCategory("All"); // optional: reset selection on load
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, [categories, onSelectCategory]);

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

  // Build category list including "All" as an object
  const categoryList = [{ topic: "All", icon: "/images/world.svg" }, ...categories];

  return (
    <section className="w-full py-10 bg-[#f5f8fd]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Browse by Categories
        </h2>

        <div className="flex items-center justify-center gap-4">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth px-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {categoryList.map((cat, idx) => {
              const isActive = selectedCategory === cat.topic;

              return (
                <button
                  key={idx}
                  onClick={() => onSelectCategory(cat.topic)}
                  className={`min-w-[180px] max-w-[180px] h-[150px] flex-shrink-0 flex flex-col items-center justify-center border rounded-xl shadow-sm transition-all duration-200 ${
                    isActive
                      ? "border-blue-600 bg-blue-50 ring-2 ring-blue-200"
                      : "border-gray-200 hover:shadow-md hover:bg-gray-50"
                  }`}
                  style={{ scrollSnapAlign: "start" }}
                  aria-pressed={isActive}
                >
                  <div className="mb-3">
                    <Image
                      src={cat.icon}
                      alt={cat.topic}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    {cat.topic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6" />
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
