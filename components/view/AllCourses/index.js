"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SlCalender, SlGraph } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import {
  getAllCourses,
  getCoursesByCategory,
  getAllCourseCategoriesV2,
  searchCourses,
  submitCounsellorQuery,
} from "@/app/comman/FrontApi";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [categoriesList, setCategoriesList] = useState([
    { id: 0, name: "All Courses" },
  ]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [counsellor, setCounsellor] = useState({
    name: "",
    email: "",
    phone: "",
    query: "I would like to know more about your courses.",
  });
  const [submitted, setSubmitted] = useState(false);

  "AllCourses - baseUrl:", baseUrl;
  "AllCourses - xApiKey:", xApiKey;

  useEffect(() => {
    if (!baseUrl || !xApiKey) {
      setError(
        "API configuration error: baseUrl or xApiKey is missing or invalid."
      );
      console.error(
        "API config error - baseUrl:",
        baseUrl,
        "xApiKey:",
        xApiKey
      );
      setCourses([
        {
          id: "11",
          name: "Test Course",
          description: "Test",
          certificate: "Test",
          duration: "4 weeks",
          mode: "Online",
          startDate: "Flexible",
        },
      ]);
      setCategoriesList([
        { id: 0, name: "All Courses" },
        { id: "1", name: "Test Category" },
      ]);
      setLoading(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (!baseUrl || !xApiKey) return;
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        setError(null);
        ("Fetching initial data...");
        const [coursesRes, categoriesRes] = await Promise.all([
          getAllCourses(),
          getAllCourseCategoriesV2(),
        ]);
        "Courses Response:", JSON.stringify(coursesRes.data, null, 2);
        "Categories Response:", JSON.stringify(categoriesRes.data, null, 2);
        const coursesData = coursesRes.data?.data || [];
        const categoriesData = categoriesRes.data?.data || [];
        if (!Array.isArray(coursesData))
          throw new Error("Invalid courses data");
        if (!Array.isArray(categoriesData))
          throw new Error("Invalid categories data");
        setCourses(coursesData);
        setCategoriesList([{ id: 0, name: "All Courses" }, ...categoriesData]);
      } catch (err) {
        setError(`Failed to load data: ${err.message}`);
        console.error("Fetch error:", err.message, err.response?.data);
        setCourses([
          {
            id: "11",
            name: "Test Course",
            description: "Test",
            certificate: "Test",
            duration: "4 weeks",
            mode: "Online",
            startDate: "Flexible",
          },
        ]);
        setCategoriesList([
          { id: 0, name: "All Courses" },
          { id: "1", name: "Test Category" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  const fetchCourses = async (categoryId = 0) => {
    if (!baseUrl || !xApiKey) {
      setError("API configuration error: baseUrl or xApiKey is missing.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      `Fetching courses for categoryId: ${categoryId}`;
      const response =
        categoryId === 0
          ? await getAllCourses()
          : await getCoursesByCategory(categoryId);
      "Fetch Courses Response:", JSON.stringify(response.data, null, 2);
      const coursesData = response.data?.data || [];
      if (!Array.isArray(coursesData)) throw new Error("Invalid courses data");
      setCourses(
        coursesData.map((course) => ({
          ...course,
          id: course.id.toString(), // Ensure id is a string for consistency with Link
        }))
      );
    } catch (err) {
      setError(`Fetch failed: ${err.message}`);
      console.error("Fetch error:", err.message, err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!baseUrl || !xApiKey) {
      setError("API configuration error: baseUrl or xApiKey is missing.");
      return;
    }
    if (!searchQuery.trim()) {
      fetchCourses();
      return;
    }
    try {
      setLoading(true);
      setError(null);
      "Searching for:", searchQuery;
      const response = await searchCourses(searchQuery);
      "Search Response:", JSON.stringify(response.data, null, 2);
      const coursesData = response.data?.data || [];
      if (!Array.isArray(coursesData)) throw new Error("Invalid search data");
      setCourses(
        coursesData.map((course) => ({
          ...course,
          id: course.id.toString(), // Ensure id is a string for consistency with Link
        }))
      );
    } catch (err) {
      setError(`Search failed: ${err.message}`);
      console.error("Search error:", err.message, err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleCounsellorSubmit = async (e) => {
    e.preventDefault();
    if (!baseUrl || !xApiKey) {
      setError("API configuration error: baseUrl or xApiKey is missing.");
      return;
    }
    try {
      setLoading(true);
      const response = await submitCounsellorQuery(counsellor);
      "Counsellor Response:", JSON.stringify(response.data, null, 2);
      alert(response.data?.message || "Submitted!");
      setCounsellor({
        name: "",
        email: "",
        phone: "",
        query: "I would like to know more about your courses.",
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err.message, err.response?.data);
      alert(`Failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (id) => {
    setSearchQuery("");
    setActiveCategory(id);
    fetchCourses(id);
  };

  "Render - Courses:", courses.map((c) => ({ id: c.id, name: c.name })); // Log only id and name for brevity
  "Render - Categories:", categoriesList;
  "Render - Loading:", loading, "Error:", error;

  return (
    <section className="p-6 md:px-16 md:py-16 grayBackground">
      <h3 className="text-4xl mb-3 font-semibold">
        Choose a category to find your course
      </h3>
      <p>70+ Live online courses chosen by 3000+ working professionals</p>
      <form onSubmit={handleSearch} className="my-6 flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-[300px]"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              fetchCourses();
            }}
            className="text-blue-800 underline text-sm"
            disabled={loading}
          >
            Clear Search
          </button>
        )}
      </form>
      {categoriesList.length === 1 && !loading && (
        <p className="text-red-600">No categories available</p>
      )}
      <ul className="flex gap-4 flex-wrap my-6">
        {categoriesList.map((item) => (
          <li
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
            className="cursor-pointer"
          >
            {item.id === activeCategory ? (
              <span className="bg-blue-900 px-6 py-3 text-white rounded inline-block">
                {item.name}
              </span>
            ) : (
              <span className="text-blue px-6 py-3 bg-white rounded inline-block hover:bg-blue-900 hover:text-white">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
      {loading ? (
        <p>Loading courses...</p>
      ) : error ? (
        <div className="text-red-600">
          <p>Error: {error}</p>
          <p>Check console for details.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.length > 0 ? (
            courses.map((item) => {
              return (
                <div key={item.id} className="bg-white p-8 rounded shadow-sm">
                  <Link href={`/courses-detail/${item.id}`}>
                    <div className="block">
                      <span className="px-3 rounded text-light text-sm inline-flex items-center gap-2 bgAntiquewhite">
                        <SlGraph /> Course
                      </span>
                      <div className="border-b py-4">
                        <h4 className="textBlueDark font-semibold text-2xl">
                          {item.name || "Untitled Course"}
                        </h4>
                        <p className="textBlack">
                          {item.description || "No description available."}
                        </p>
                      </div>
                      <div className="my-3">
                        <ul>
                          <li className="flex gap-3 items-center mb-1 text-sm">
                            <PiCertificateBold />{" "}
                            {item.certificate || "Certificate Info Unavailable"}
                          </li>
                          <li className="flex gap-3 items-center mb-1 text-sm">
                            <IoTimeOutline />{" "}
                            {item.duration || "Duration Not Available"}
                          </li>
                          <li className="flex gap-3 items-center mb-1 text-sm">
                            <SlCalender /> {item.mode || "Mode Not Specified"}
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6">
                        <span className="text-green-600 text-sm rounded">
                          {item.startDate || "Flexible Start Date"}
                        </span>
                        <div className="flex gap-2 items-center mt-4 bg-blue-900 text-white px-6 py-2 rounded justify-center hover:bg-blue-800 transition duration-200 w-max">
                          View course Details <FaAngleRight />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-600 mt-4">
              {searchQuery
                ? `No results for "${searchQuery}"`
                : "No courses available"}
            </p>
          )}
        </div>
      )}
      <div className="mt-16 bg-white p-8 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-4">
          Need help choosing a course?
        </h3>
        {submitted ? (
          <p className="text-green-600">Submitted successfully!</p>
        ) : (
          <form onSubmit={handleCounsellorSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={counsellor.name}
              onChange={(e) =>
                setCounsellor({ ...counsellor, name: e.target.value })
              }
              className="border p-2 rounded"
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={counsellor.email}
              onChange={(e) =>
                setCounsellor({ ...counsellor, email: e.target.value })
              }
              className="border p-2 rounded"
              disabled={loading}
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              value={counsellor.phone}
              onChange={(e) =>
                setCounsellor({ ...counsellor, phone: e.target.value })
              }
              className="border p-2 rounded"
              disabled={loading}
            />
            <textarea
              placeholder="What would you like to know?"
              required
              value={counsellor.query}
              onChange={(e) =>
                setCounsellor({ ...counsellor, query: e.target.value })
              }
              className="border p-2 rounded"
              rows={3}
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Query"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AllCourses;
