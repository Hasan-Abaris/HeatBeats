"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  getAllCourseCategories,
  getPopularCourses,
  storePopularSearch,
  searchCourses,
   getPopularSearches  // ✅ Add this
} from "@/app/comman/FrontApi";

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [popularSearches, setPopularSearches] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const router = useRouter();

  // Debounce helper
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchSuggestions = useCallback(
    debounce(async (query) => {
      if (query.trim().length > 1) {
        try {
          const res = await searchCourses(query);
          setSearchSuggestions(res.data?.data || []);
        } catch (err) {
          console.error("Error fetching suggestions:", err);
        }
      } else {
        setSearchSuggestions([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    if (isOpen) {
      // Fetch popular searches from backend
      getPopularSearches()
        .then((res) => {
          const keywords =
            res.data?.data?.map((item) => item.search_keyword) || [];
          setPopularSearches(keywords);
        })
        .catch((err) => {
          console.error("Popular searches API failed:", err);
          // fallback to localStorage
          const saved = JSON.parse(
            localStorage.getItem("popularSearches") || "[]"
          );
          setPopularSearches(saved);
        });

      getAllCourseCategories()
        .then((res) => setPopularCategories(res.data?.data?.slice(0, 5) || []))
        .catch((err) => console.error("Categories API failed:", err));

      getPopularCourses()
        .then((res) => setPopularCourses(res.data?.data || []))
        .catch((err) => console.error("Courses API failed:", err));
    }
  }, [isOpen]);

  useEffect(() => {
    fetchSuggestions(searchQuery);
  }, [searchQuery, fetchSuggestions]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const keyword = searchQuery.trim();

    try {
      await storePopularSearch({ search_keyword: keyword });

      let searches = JSON.parse(
        localStorage.getItem("popularSearches") || "[]"
      );
      searches = [keyword, ...searches.filter((k) => k !== keyword)].slice(
        0,
        10
      );
      localStorage.setItem("popularSearches", JSON.stringify(searches));
      setPopularSearches(searches);

      router.push(`/search?query=${encodeURIComponent(keyword)}`);
      onClose();
    } catch (err) {
      console.error("Error storing search keyword:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex flex-col">
      {/* Top bar with Back Arrow */}
      <div className="flex items-center px-4 py-4 bg-transparent">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 mr-4"
        >
          <ArrowLeft size={28} />
        </button>

        {/* Search bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center gap-2 flex-1 relative"
        >
          <input
            type="text"
            placeholder="Search for courses, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 rounded-lg px-4 py-3 focus:outline-none text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Search size={18} /> Search
          </button>

          {/* Suggestions dropdown */}
          {searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-50">
              {searchSuggestions.map((course) => (
                <div
                  key={course.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                  onClick={() => {
                    router.push(`/courses-detail/${course.id}`);
                    onClose();
                  }}
                >
                  <img
                    src={course.image || "/placeholder.jpg"}
                    alt={course.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">{course.name}</p>
                    <p className="text-xs text-gray-500">
                      {course.category_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto bg-white rounded-t-2xl p-6">
        {/* Recent Searches */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            {popularSearches.length > 0 ? (
              popularSearches.map((keyword, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(keyword)}
                  className="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-sm rounded-full"
                >
                  {keyword}
                </button>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No recent searches yet.</p>
            )}
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-3">
            Popular Course Categories
          </h3>
          <div className="flex flex-wrap gap-3">
            {popularCategories.map((cat) => (
              <div
                key={cat.id}
                className="border rounded-full px-5 py-2 text-sm hover:shadow cursor-pointer"
                onClick={() => router.push(`/courses?category=${cat.id}`)}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </section>

        {/* Popular Courses */}
        <section>
          <h3 className="text-lg font-semibold mb-3">Popular Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg overflow-hidden hover:shadow-md cursor-pointer bg-white"
                onClick={() => router.push(`/courses-detail/${course.id}`)}
              >
                <img
                  src={course.image || "/placeholder.jpg"}
                  alt={course.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm">{course.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {course.category_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
