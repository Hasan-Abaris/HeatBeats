"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import TrendingCard from "./TrendingCard";
import { getCategiryList } from "@/app/comman/FrontApi";

function TrendingCourses() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await getCategiryList();
        if (res.data?.status && Array.isArray(res.data.data)) {
          const apiCategories = res.data.data
            .sort((a, b) => a.order - b.order) // Sort by order
            .map((cat) => ({
              id: cat.id,
              name: cat.name,
            }));
          setCategories(apiCategories);
          setSelected(apiCategories[0]?.id || null); // Set first category as default
        } else {
          setCategories([{ id: "1", name: "General" }]);
          setSelected("1");
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories([{ id: "1", name: "General" }]);
        setSelected("1");
      }
    }
    fetchCategories();
  }, []);

  const visibleCategories = categories.slice(0, 6); // Show first 6 inline
  const hiddenCategories = categories.slice(6); // Show rest in dropdown

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-4 mt-14 w-[1130px] mx-auto relative">
      <h2 className="text-2xl font-bold mb-4">Trending Courses</h2>

      {/* Top Categories Row */}
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

        {/* Menu Icon */}
        {hiddenCategories.length > 0 && (
          <div className="ml-auto relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-gray-600 hover:text-black p-1"
            >
              {showDropdown ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Dropdown */}
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

      {/* Courses */}
      <TrendingCard selectedCategory={selected} />
    </div>
  );
}

export default TrendingCourses;