"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SlCalender, SlGraph } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";

import {
  getAllCourses,
  getCoursesByCategory,
  getAllCourseCategories,
  searchCourses,
  submitCounsellorQuery,
} from "@/app/comman/FrontApi";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [counsellor, setCounsellor] = useState({
    name: "",
    email: "",
    phone: "",
    query: "I would like to know more about your courses.",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchCourses();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await getAllCourseCategories();
      const data = res?.data?.data || [];
      setCategoriesList([{ id: 0, name: "All Courses" }, ...data]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCourses = async (categoryId = 0) => {
    try {
      setLoading(true);
      const response =
        categoryId === 0
          ? await getAllCourses()
          : await getCoursesByCategory(categoryId);
      setCourses(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      fetchCourses();
      return;
    }
    try {
      setLoading(true);
      const res = await searchCourses(searchQuery);
      setCourses(res?.data?.data || []);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCounsellorSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitCounsellorQuery(counsellor);
      alert(res?.data?.message || "Query submitted!");
      setCounsellor({
        name: "",
        email: "",
        phone: "",
        query: "I would like to know more about your courses.",
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  const handleCategoryClick = (id) => {
    setSearchQuery(""); // Reset search
    setActiveCategory(id);
    fetchCourses(id);
  };

  return (
    <section className="p-6 md:px-16 md:py-16 grayBackground">
      <h3 className="text-4xl mb-3 font-semibold">Choose a category to find your course</h3>
      <p>70+ Live online courses chosen by 3000+ working professionals</p>

      {/* Search */}
      <form onSubmit={handleSearch} className="my-6 flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-[300px]"
        />
        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded">
          Search
        </button>
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              fetchCourses();
            }}
            className="text-blue-800 underline text-sm"
          >
            Clear Search
          </button>
        )}
      </form>

      {/* Categories */}
      <ul className="flex gap-4 flex-wrap my-6">
        {categoriesList.map((item) => (
          <li key={item.id} onClick={() => handleCategoryClick(item.id)} className="cursor-pointer">
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

      {/* Courses */}
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.length > 0 ? (
            courses.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded shadow-sm">
                <Link href={`/all-courses/${item.id}`}>
                  <span className="px-3 rounded text-light text-sm inline-flex items-center gap-2 bgAntiquewhite">
                    <SlGraph /> Course
                  </span>
                  <div className="border-b py-4">
                    <h4 className="textBlueDark font-semibold text-2xl">
                      {item.name || "Untitled Course"}
                    </h4>
                    <p className="textBlack">{item.description || "No description available."}</p>
                  </div>
                  <div className="my-3">
                    <ul>
                      <li className="flex gap-3 items-center mb-1 text-sm">
                        <PiCertificateBold /> Certificate Info Unavailable
                      </li>
                      <li className="flex gap-3 items-center mb-1 text-sm">
                        <IoTimeOutline /> Duration Not Available
                      </li>
                      <li className="flex gap-3 items-center mb-1 text-sm">
                        <SlCalender /> Mode Not Specified
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <span className="text-green-600 text-sm rounded">
                      Flexible Start Date
                    </span>
                    <span className="flex gap-2 items-center mt-4 border-2 p-2 rounded justify-center text-lg text-gray-500">
                      View course Details <FaAngleRight />
                    </span>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 mt-4">
              {searchQuery
                ? `No results found for "${searchQuery}"`
                : "No courses available"}
            </p>
          )}
        </div>
      )}

      {/* Counsellor Form */}
      <div className="mt-16 bg-white p-8 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Need help choosing a course?</h3>
        {submitted ? (
          <p className="text-green-600">Submitted successfully!</p>
        ) : (
          <form onSubmit={handleCounsellorSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={counsellor.name}
              onChange={(e) => setCounsellor({ ...counsellor, name: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={counsellor.email}
              onChange={(e) => setCounsellor({ ...counsellor, email: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              value={counsellor.phone}
              onChange={(e) => setCounsellor({ ...counsellor, phone: e.target.value })}
              className="border p-2 rounded"
            />
            <textarea
              placeholder="What would you like to know?"
              required
              value={counsellor.query}
              onChange={(e) => setCounsellor({ ...counsellor, query: e.target.value })}
              className="border p-2 rounded"
              rows={3}
            />
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded">
              Submit Query
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AllCourses;
