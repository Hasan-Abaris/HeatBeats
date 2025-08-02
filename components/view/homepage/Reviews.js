"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const data = [
  {
    name: "K W Vinod Kumar",
    role: "Senior Manager IT Operations",
    course: "CISSP Certification Training",
    feedback: "Grateful for an Exceptional Learning Experience! I would like to extend my heartfelt thanks to Sta...",
    avatar: "/images/discoverimage/face.png",
  },
  {
    name: "Devesh Bhatt",
    role: "Data Analyst",
    course: "Best Power BI Training Courses by ...",
    feedback: "I took Power BI certification training course and the experience I had was very good. The Instructor...",
    avatar: "/images/discoverimage/face.png",
  },
  {
    name: "Harsha KR",
    role: "Dotcom Senior Analyst",
    course: "Data Science with Python Certifica...",
    feedback: "I recently completed the Data Science with Python course from Edureka, and I’m excited to share my...",
    avatar: "/images/discoverimage/face.png",
  },
];

function Reviews() {
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
    const visibleCards = screenWidth >= 1024 ? 3 : screenWidth >= 640 ? 2 : 1;
    setMaxIndex(data.length - visibleCards);
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
    <div className="w-[1130px] mx-auto relative">
      <h2 className="text-2xl font-bold mb-4 mt-6">Reviews</h2>
      <div
        ref={containerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            ref={idx === 0 ? cardRef : null}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2 snap-start"
          >
            <div className="bg-white shadow-md rounded-md p-5 h-full">
              <div className="flex items-center mb-2">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="flex items-center gap-1 font-semibold text-gray-800">
                    {item.name}
                    <FaLinkedin className="text-[#0A66C2] text-sm" />
                  </div>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-800 font-medium mb-2">
                {item.course}
              </p>
              <p className="italic text-gray-600 text-sm">
                {item.feedback}{" "}
                <span className="text-sky-500 font-medium cursor-pointer">Read More</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[50%] left-[-27px] transform -translate-y-1/2 z-10">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className="text-orange-500 bg-white p-3 rounded-full hover:bg-gray-100 shadow-md text-xl"
        >
          <MdOutlineArrowBackIos />
        </button>
      </div>
      <div className="absolute top-[50%] right-[-19px] transform -translate-y-1/2 z-10">
        <button
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))}
          className="text-orange-500 bg-white p-3 rounded-full hover:bg-gray-100 shadow-md text-xl"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>

<div className="text-center mt-4">
  <Link href="/reviews" className="text-xs text-blue-800 font-semibold uppercase cursor-pointer">
    View all reviews &gt;
  </Link>
</div>

    </div>
  );
}

export default Reviews;
