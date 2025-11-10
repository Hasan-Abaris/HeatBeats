"use client";

import React, { useState } from "react";

const gameCategories = [
  "Action Games",
  "Strategy Games",
  "Racing & Sports",
  "Puzzle & Logic",
  "Simulation Games",
  "Adventure & Story Games",
  "Multiplayer & Esports",
];

const testimonials = [
  {
    id: 1,
    name: "Aarav Khan",
    role: "Pro Gamer - Valorant",
    rating: 5,
    date: "October 2025",
    review:
      "Esports Community Academy helped me improve my reflexes and game sense. The live coaching sessions are top-notch!",
  },
  {
    id: 2,
    name: "Simran Patel",
    role: "Casual Gamer",
    rating: 4,
    date: "September 2025",
    review:
      "I joined the beginner program and learned a lot about teamwork and aiming techniques. Totally worth it!",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Tournament Player",
    rating: 5,
    date: "August 2025",
    review:
      "The tournaments here are so well organized! Great rewards and fair competition every time.",
  },
  {
    id: 4,
    name: "Fatima Sheikh",
    role: "Mobile Gamer - BGMI",
    rating: 4,
    date: "July 2025",
    review:
      "Loved the mobile gaming sessions! Coaches really understand what new players need to level up.",
  },
  {
    id: 5,
    name: "Vikram Das",
    role: "PC Gamer - Apex Legends",
    rating: 5,
    date: "June 2025",
    review:
      "Amazing experience! The Esports Community trainers helped me fix my gameplay mistakes and improve my strategy.",
  },
  {
    id: 6,
    name: "Ananya Gupta",
    role: "Streamer & Creator",
    rating: 5,
    date: "May 2025",
    review:
      "I started streaming thanks to Esports Community! They taught me content creation and live streaming basics. So fun!",
  },
];

const testimonialsPerPage = 3;

const Review = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="bg-gray-50 py-10">
      <div className="w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Main Reviews */}
        <div className="md:col-span-3 space-y-6">
          {currentTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md flex gap-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white"
                style={{ backgroundColor: "#ff4500" }}
              >
                {item.name?.[0] || "?"}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.role}</p>
                <div className="flex items-center text-yellow-400 mb-2">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
                <p className="text-gray-700 text-sm">{item.review}</p>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-800 mb-3">
              Platform Ratings
            </h4>
            <div className="flex items-center justify-between mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">4.8 / 5 (2,300+)</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Discord"
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">4.9 / 5 (1,800+)</span>
            </div>
            <div className="flex items-center justify-between">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2504/2504942.png"
                alt="YouTube"
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">4.7 / 5 (3,000+)</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-800 mb-3">
              Game Categories
            </h4>
            <ul className="space-y-2">
              {gameCategories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-orange-600 hover:underline cursor-pointer"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
