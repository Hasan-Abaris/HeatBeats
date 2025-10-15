"use client";

import React, { useRef, useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from "./Cards";
import Link from "next/link";

function TrendingCard({ selectedCategory }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // 🎮 Static games + courses
  const allItems = [
    // Games
    {
      id: 1,
      title: "Chess Masterclass",
      category: "board",
      image: "/images/Courses/chess.jpg",
      description: "Learn chess strategies from beginner to advanced.",
      link: "/Courses/chess",
    },
    {
      id: 2,
      title: "Ludo Fun",
      category: "board",
      image: "/images/Courses/ludo.jpg",
      description: "Play Ludo and learn fun techniques.",
      link: "/Courses/ludo",
    },
    {
      id: 3,
      title: "PUBG Tactics",
      category: "esports",
      image: "/images/Courses/pubg.jpg",
      description: "Master PUBG strategies and team play.",
      link: "/Courses/pubg",
    },
    {
      id: 4,
      title: "Among Us Strategies",
      category: " ",
      image: "/images/Courses/amongus.jpg",
      description: "Learn how to play as crewmate or impostor.",
      link: "/Courses/amongus",
    },
    {
      id: 5,
      title: "Sudoku Challenge",
      category: "puzzle",
      image: "/images/Courses/sudoku.jpg",
      description: "Improve your logic with Sudoku puzzles.",
      link: "/Courses/sudoku",
    },
    // Game Courses
    {
      id: 6,
      title: "Advanced Chess Course",
      category: "gamecourses",
      image: "/images/courses/chess-course.jpg",
      description: "Become a chess grandmaster with this course.",
      link: "/courses/chess",
    },
    {
      id: 7,
      title: "PUBG Masterclass Course",
      category: "gamecourses",
      image: "/images/courses/pubg-course.jpg",
      description: "Learn advanced PUBG strategies and team coordination.",
      link: "/courses/pubg",
    },
    {
      id: 8,
      title: "Among Us Strategy Course",
      category: "gamecourses",
      image: "/images/courses/amongus-course.jpg",
      description: "Master Among Us game strategies as a course.",
      link: "/courses/amongus",
    },
  ];

  // ✅ Filter by selected category
  const TrendingItems =
    selectedCategory && selectedCategory !== "all"
      ? allItems.filter((item) => item.category === selectedCategory)
      : allItems;

  // Scroll helpers
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
    const max = TrendingItems.length - visibleCards;
    setMaxIndex(max >= 0 ? max : 0);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex, TrendingItems]);

  useEffect(() => {
    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, [TrendingItems.length]);

  return (
    <div className="relative mt-3">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
      >
        {TrendingItems.map((item, idx) => (
          <div
            key={item.id}
            ref={idx === 0 ? cardRef : null}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-2 snap-start"
          >
            <Cards data={item} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
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

      {/* Browse All */}
      <div className="flex justify-center mb-4 text-center mt-6">
        <Link
          href="/all-courses"
          className="bg-gradient-to-r from-[#248DE4] to-[#243BE4] px-4 py-2 text-white rounded-sm font-semibold hover:bg-blue-800 transition-all"
        >
          Browse All Games & Courses
        </Link>
      </div>
      <p className="text-center text-sm text-gray-500">
        Explore our wide range of trending games and courses
      </p>
    </div>
  );
}

export default TrendingCard;
