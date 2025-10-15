"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import EducatorCard from "./EducatorCard";
import { educatorsData } from "../../../data/educatorsData"; // Static data

const EducatorsSlider = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Only show first 4 educators on home page
  const sliderData = educatorsData.slice(0, 5);

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
    const max = sliderData.length - visibleCards;
    setMaxIndex(max >= 0 ? max : 0);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, []);

  return (
    <div className="w-[1130px] mx-auto relative mt-10">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Educators</h2>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
      >
        {sliderData.map((educator, idx) => (
          <div
            key={educator.id}
            ref={idx === 0 ? cardRef : null}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-2 snap-start"
          >
            <EducatorCard data={educator} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-[50%] left-[-20px] transform -translate-y-1/2 z-10">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className="textOrange bg-white p-3 rounded-full hover:bg-gray-500 shadow-lg text-2xl font-extrabold"
        >
          <MdOutlineArrowBackIos />
        </button>
      </div>
      <div className="absolute top-[50%] right-[-20px] transform -translate-y-1/2 z-10">
        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
          }
          className="textOrange bg-white p-3 rounded-full shadow-lg hover:bg-gray-500 text-2xl font-extrabold"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>

      {/* View More Link (Centered) */}
      <div className="mt-6 flex justify-center">
        <a
          href="Coaches/educators"
          className="text-blue-600 font-semibold text-sm hover:underline"
        >
          VIEW MORE &gt;
        </a>
      </div>
    </div>
  );
};

export default EducatorsSlider;
