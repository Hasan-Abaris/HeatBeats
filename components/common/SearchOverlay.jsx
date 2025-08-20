"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  getAllCourseCategories,
  getPopularCourses,
  storePopularSearch,
  searchCourses,
  getPopularSearches,
  postContactQuery,
  getRequestCall,
} from "@/app/comman/FrontApi";

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [popularSearches, setPopularSearches] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [queryForm, setQueryForm] = useState({ phone: "", email: "", query: "" });
  const [callForm, setCallForm] = useState({ phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Debounce function to limit API calls
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch search results
  const fetchSearchResults = useCallback(
    debounce(async (query) => {
      if (query.trim().length > 1) {
        try {
          const res = await searchCourses(query);
          const data = res.data?.data || [];
          setSearchResults(data);
        } catch (err) {
          console.error("Error fetching search results:", err);
        }
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  // Load popular searches, categories, and courses
  useEffect(() => {
    if (isOpen) {
      getPopularSearches()
        .then((res) => {
          const keywords =
            res.data?.data?.map((item) => item.search_keyword) || [];
          setPopularSearches(keywords.slice(0, 6));
        })
        .catch((err) => {
          console.error("Popular searches API failed:", err);
          const saved = JSON.parse(
            localStorage.getItem("popularSearches") || "[]"
          );
          setPopularSearches(saved.slice(0, 6));
        });

      getAllCourseCategories()
        .then((res) => setPopularCategories(res.data?.data?.slice(0, 5) || []))
        .catch((err) => console.error("Categories API failed:", err));

      getPopularCourses()
        .then((res) => setPopularCourses(res.data?.data || []))
        .catch((err) => console.error("Courses API failed:", err));
    }
  }, [isOpen]);

  // Trigger search API when query changes
  useEffect(() => {
    fetchSearchResults(searchQuery);
  }, [searchQuery, fetchSearchResults]);

  // Handle search submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const keyword = searchQuery.trim();

    try {
      await storePopularSearch({ search_keyword: keyword });

      let searches = JSON.parse(localStorage.getItem("popularSearches") || "[]");
      searches = [keyword, ...searches.filter((k) => k !== keyword)].slice(0, 10);
      localStorage.setItem("popularSearches", JSON.stringify(searches));
      setPopularSearches(searches);

      router.push(`/search?query=${encodeURIComponent(keyword)}`);
      onClose();
    } catch (err) {
      console.error("Error storing search keyword:", err);
    }
  };

  // Handle query form submission
  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postContactQuery({
        query: queryForm.query,
        phone: queryForm.phone,
        email: queryForm.email,
      });
      alert("Query submitted successfully!");
      setQueryForm({ phone: "", email: "", query: "" });
    } catch (err) {
      console.error("Error submitting query:", err);
      alert("Failed to submit query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle call request submission
  const handleCallSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await getRequestCall({
        phone: callForm.phone,
        email: callForm.email,
      });
      alert("Call request submitted successfully!");
      setCallForm({ phone: "", email: "" });
    } catch (err) {
      console.error("Error submitting call request:", err);
      alert("Failed to submit call request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-white flex flex-col p-6 overflow-y-auto">
      {/* Header with back button and search bar */}
      <div className="flex items-center mb-6">
        <button onClick={onClose} className="text-gray-700 mr-4">
          <ArrowLeft size={28} />
        </button>
        <form onSubmit={handleSearchSubmit} className="flex-1">
          <input
            type="text"
            placeholder="Search courses"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full px-4 py-3 border-2 border-blue-600 focus:outline-none text-black"
          />
        </form>
      </div>

      {searchQuery && (
  <section className="mb-6 px-4">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">Search Results</h3>
    {searchResults.length > 0 ? (
      <div className="max-w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-4">
        {searchResults.map((course) => (
          <div
            key={course.id}
            className="border border-gray-200 rounded-lg p-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            style={{ minHeight: "120px", maxHeight: "120px", maxWidth: "100%" }}
            onClick={() => {
              router.push(`/courses-detail/${course.id}`);
              onClose();
            }}
          >
            <h4 className="font-medium text-base text-gray-900 line-clamp-2">{course.name}</h4>
            <p className="text-xs text-gray-600 mt-1 line-clamp-1">{course.category_name}</p>
            <span className="flex items-center gap-1 text-yellow-500 mt-2 text-xs">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              {course.learners || "0"}+ Learners
            </span>
            <a
              href={`/courses-detail/${course.id}`}
              className="text-blue-600 text-xs mt-2 block hover:underline"
              onClick={(e) => {
                e.preventDefault();
                router.push(`/courses-detail/${course.id}`);
                onClose();
              }}
            >
              Know More
            </a>
          </div>
        ))}
      </div>
    ) : (
      <div>
        <div className="text-left text-gray-600 text-base mb-6 p-3 bg-gray-50 rounded-lg">
          No results found for "{searchQuery}". Get assistance below!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Query Section */}
          <form onSubmit={handleQuerySubmit} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h4 className="text-sm font-semibold mb-3 text-gray-800">Ask a Question</h4>
            <input
              type="text"
              placeholder="Enter your query"
              value={queryForm.query}
              onChange={(e) => setQueryForm({ ...queryForm, query: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={queryForm.email}
              onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              value={queryForm.phone}
              onChange={(e) => setQueryForm({ ...queryForm, phone: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          {/* Call Request Section */}
          <form onSubmit={handleCallSubmit} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <h4 className="text-sm font-semibold mb-3 text-gray-800">Request a Call</h4>
            <input
              type="email"
              placeholder="Your Email"
              value={callForm.email}
              onChange={(e) => setCallForm({ ...callForm, email: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              value={callForm.phone}
              onChange={(e) => setCallForm({ ...callForm, phone: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Request Call"}
            </button>
          </form>
        </div>
      </div>
    )}
  </section>
)}

      {!searchQuery.trim() && (
        <>
          <div className="flex gap-6">
            <section className="w-1/3 pl-10">
              <h3 className="text-lg font-semibold mb-3">Popular Searches</h3>
              <div className="flex flex-col gap-2">
                {popularSearches.length > 0 ? (
                  popularSearches.map((keyword, idx) => (
                    <span key={idx} className="text-sm text-gray-700">
                      {keyword}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No recent searches yet.</p>
                )}
              </div>
            </section>

            <section className="w-2/3">
              <h3 className="text-lg font-semibold mb-3">Popular Courses</h3>
              <div className="grid grid-cols-2 gap-4">
                {popularCourses.slice(0, 2).map((course) => (
                  <div
                    key={course.id}
                    className="border rounded-lg p-3 bg-white shadow-sm"
                  >
                    <h4 className="font-medium text-sm">{course.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{course.category_name}</p>
                    <span className="flex items-center gap-1 text-yellow-500 mt-1">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      {course.learners || "0"}+ Satisfied Learners
                    </span>
                    <a
                      href={`/courses-detail/${course.id}`}
                      className="text-blue-600 text-sm mt-2 block"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/courses-detail/${course.id}`);
                        onClose();
                      }}
                    >
                      KNOW MORE
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-4 pl-6">
            <h3 className="text-lg font-semibold mb-3">Popular Course Categories</h3>
            <div className="flex flex-col gap-2">
              {popularCategories.map((cat) => (
                <span
                  key={cat.id}
                  className="text-sm text-gray-700 cursor-pointer hover:text-blue-600"
                  onClick={() => router.push(`/courses?category=${cat.id}`)}
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}