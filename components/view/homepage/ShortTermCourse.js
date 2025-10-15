"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Cards from "./Cards";

const data = [
  {
    id: 1,
    title: "Beginner Chess Bootcamp (7 Days)",
    rating: 4.8,
    reviews: 4200,
    stars: 5,
    image: "/images/courses/chess.jpg",
    description: "Master chess openings and tactics in just one week.",
    link: "/courses/chess-bootcamp",
  },
  {
    id: 2,
    title: "PUBG Advanced Combat Training (5 Days)",
    rating: 4.6,
    reviews: 3800,
    stars: 4,
    image: "/images/courses/pubg.jpg",
    description:
      "Learn shooting accuracy, team play, and map tactics in 5 days.",
    link: "/courses/pubg-training",
  },
  {
    id: 3,
    title: "Ludo Strategy Workshop (3 Days)",
    rating: 4.5,
    reviews: 2600,
    stars: 4,
    image: "/images/courses/ludo.jpg",
    description: "Improve your winning probability through logic and timing.",
    link: "/courses/ludo-workshop",
  },
  {
    id: 4,
    title: "Among Us Deception Skills Camp (2 Days)",
    rating: 4.7,
    reviews: 3100,
    stars: 5,
    image: "/images/courses/amongus.jpg",
    description: "Learn how to detect imposters and bluff like a pro.",
    link: "/courses/amongus-camp",
  },
  {
    id: 5,
    title: "Online Game Streaming Crash Course (1 Week)",
    rating: 4.9,
    reviews: 5000,
    stars: 5,
    image: "/images/courses/streaming-short.jpg",
    description: "Start your gaming channel with basic OBS and streaming tips.",
    link: "/courses/streaming-crashcourse",
  },
];
function ShortTermCourse() {
  const TrendingCourse = data || [];
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
    <div className="w-[1130px] mx-auto relative">
      <h2 className="text-2xl font-bold mb-4 mt-6">Short-Term Game Courses</h2>
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
              <Cards data={course} title={true} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[61%] left-[-27px] transform -translate-y-1/2 z-10">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className="textOrange bg-white p-3 rounded-full hover:bg-gray-500 shadow-lg text-2xl font-extrabold"
        >
          <MdOutlineArrowBackIos />
        </button>
      </div>
      <div className="absolute top-[61%]  right-[-19px] transform -translate-y-1/2 z-10">
        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
          }
          className="textOrange bg-white p-3 rounded-full shadow-lg hover:bg-gray-500 text-2xl font-extrabold"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default ShortTermCourse;
