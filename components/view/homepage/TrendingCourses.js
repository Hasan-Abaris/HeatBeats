"use client";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import TrendingCard from "./TrendingCard";
import { getCategiryList } from "@/app/comman/FrontApi";

function TrendingCourses() {
  const [categories, setCategories] = useState(["All"]);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await getCategiryList();
        if (res.data?.status && Array.isArray(res.data.data)) {
          const apiCategories = res.data.data.map((cat) => cat.name);
          setCategories(["All", ...apiCategories]);
        } else {
          // Dummy fallback categories if API doesn't return expected data
          setCategories(["All", "Technology", "Business", "Design"]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        // Dummy fallback so page doesn't look empty
        setCategories(["All", "Technology", "Business", "Design"]);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="p-4 mt-14 w-[1130px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Trending Courses</h2>
      <div className="flex items-center gap-4 overflow-x-auto border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`whitespace-nowrap border-b-2 px-2 py-1 transition-colors ${
              selected === category
                ? "border-blue-600 text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}

        <button className="ml-auto text-gray-600 hover:text-black p-1">
          <Menu size={18} />
        </button>
      </div>
      <TrendingCard selectedCategory={selected} />
    </div>
  );
}

export default TrendingCourses;
