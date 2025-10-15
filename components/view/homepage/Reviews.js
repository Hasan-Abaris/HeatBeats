"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const data = [
  {
    name: "Aarav Sharma",
    role: "Game Developer Intern at Unity Studios",
    course: "Advanced Game Development with Unity",
    feedback:
      "The course helped me master Unity scripting and 3D design. The mentors were industry pros who guided us with real-world game projects...",
    avatar: "/images/discoverimage/face.png",
  },
  {
    name: "Meera Patel",
    role: "Esports Event Manager",
    course: "Esports Management & Strategy Program",
    feedback:
      "Super insightful course! Learned how to manage gaming events, sponsorships, and online communities. Highly recommend for esports enthusiasts...",
    avatar: "/images/discoverimage/face.png",
  },
  {
    name: "Rohan Gupta",
    role: "YouTube Streamer & Content Creator",
    course: "Streaming & Gaming Content Creation Masterclass",
    feedback:
      "Loved every bit of it! Learned how to optimize Twitch streams, grow audiences, and edit gaming highlights professionally...",
    avatar: "/images/discoverimage/face.png",
  },
  {
    name: "Sara Khan",
    role: "Game Tester at PixelEdge Studios",
    course: "Game QA Testing and Bug Reporting Certification",
    feedback:
      "An amazing start for my gaming career. The live projects gave real testing experience on mobile and PC titles...",
    avatar: "/images/discoverimage/face.png",
  },
  {
    name: "Yash Verma",
    role: "Unreal Engine Developer",
    course: "Unreal Engine Game Design Bootcamp",
    feedback:
      "Hands-on course that dives deep into environment design, lighting, and animation in Unreal Engine. Perfect for aspiring game designers...",
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
