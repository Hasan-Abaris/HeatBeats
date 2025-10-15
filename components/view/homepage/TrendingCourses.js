"use client";

import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import TrendingCard from "./TrendingCard";

function TrendingCourses() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("all");
  const dropdownRef = useRef(null);

  // 🎮 Static categories (including Game Courses)
  const categories = [
    { id: "all", name: "All" },
    { id: "board", name: "Board Games" },
    { id: "esports", name: "Esports" },
    { id: "multiplayer", name: "Multiplayer" },
    { id: "casual", name: "Casual Games" },
    { id: "puzzle", name: "Puzzle Games" },
    { id: "gamecourses", name: "Game Courses" },
  ];

  const visibleCategories = categories.slice(0, 6);
  const hiddenCategories = categories.slice(6);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };
  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return (
    <div className="p-4 mt-14 w-full max-w-[1130px] mx-auto relative">
      <h2 className="text-2xl font-bold mb-4">Trending Game Courses</h2>

      {/* Categories */}
      <div className="flex items-center gap-4 border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 relative">
        {visibleCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelected(category.id)}
            className={`whitespace-nowrap border-b-2 px-2 py-1 transition-colors ${
              selected === category.id
                ? "border-blue-600 text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {category.name}
          </button>
        ))}

        {hiddenCategories.length > 0 && (
          <div className="ml-auto relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-gray-600 hover:text-black p-1"
            >
              {showDropdown ? <X size={18} /> : <Menu size={18} />}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                {hiddenCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelected(category.id);
                      setShowDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selected === category.id
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Trending Cards */}
      <TrendingCard selectedCategory={selected} />
    </div>
  );
}

export default TrendingCourses;
