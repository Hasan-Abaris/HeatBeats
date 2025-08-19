"use client";
import React, { useRef, useState, useEffect } from "react";
import data from "@/data/trndingData.json";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from "./Cards";
import Link from "next/link";

function TrendingCard() {
  const TrendingCourse = data?.trendingCourses || [];
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (container && card) {
      const cardWidth = card.offsetWidth;
      container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  const updateMaxIndex = () => {
    const screenWidth = window.innerWidth;
    const visibleCards = screenWidth >= 1024 ? 4 : screenWidth >= 640 ? 2 : 1;
    const max = TrendingCourse.length - visibleCards;
    setMaxIndex(max >= 0 ? max : 0);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, [TrendingCourse.length]);

  return (
    <div className="relative mt-3">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
      >
        {TrendingCourse.map((course, idx) => (
          <div
            key={idx}
            ref={idx === 0 ? cardRef : null}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-2 snap-start"
          >
            <div>
              <Cards data={course} />
              <Cards data={course} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[38%] left-[-27px] transform -translate-y-1/2 z-10">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className="textOrange bg-white p-3 rounded-full hover:bg-gray-500 shadow-lg text-2xl font-extrabold"
        >
          <MdOutlineArrowBackIos />
        </button>
      </div>
      <div className="absolute top-[38%] right-[-19px] transform -translate-y-1/2 z-10">
        <button
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))}
          className="textOrange bg-white p-3 rounded-full shadow-lg hover:bg-gray-500 text-2xl font-extrabold"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>

      {/* ✅ Working Link to All Courses Page */}
      <div className="flex justify-center mb-4 text-center mt-6">
        <Link
          href="/all-courses"
          className="bg-gradient-to-r from-[#248DE4] to-[#243BE4] px-4 py-2 text-white rounded-sm font-semibold hover:bg-blue-800 transition-all"
        >
          Browse All Courses
        </Link>
      </div>
      <p className="text-center text-sm text-gray-500">
        Explore our wide range of courses
      </p>
    </div>
  );
}

export default TrendingCard;
