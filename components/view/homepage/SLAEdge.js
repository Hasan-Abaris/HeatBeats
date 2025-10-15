"use client";
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";


const features = [
  {
    icon: <FaGamepad className="text-6xl text-indigo-500" />,
    title: "Live Game Coaching",
    desc: "Train with expert gamers in real-time",
  },
  {
    icon: <FaTrophy className="text-6xl text-yellow-500" />,
    title: "Skill Challenges",
    desc: "Compete in weekly gaming events",
  },
  {
    icon: <FaClock className="text-6xl text-sky-500" />,
    title: "24/7 Access",
    desc: "Learn and play anytime you want",
  },
  {
    icon: <FaChartLine className="text-6xl text-green-500" />,
    title: "Track Progress",
    desc: "View your rank, badges, and achievements",
  },
];

const news = [
  {
    text: "PUBG introduces the new 'Victory Arena' training mode for advanced players.",
    source: "GameSpot",
  },
  {
    text: "Valorant adds a new Agent with game-changing abilities in its latest patch.",
    source: "IGN",
  },
  {
    text: "Ludo World Championship 2025 announced – registrations open now!",
    source: "GamingToday",
  },
  {
    text: "Chess Masters launches an online course for speed chess training.",
    source: "eSportsNews",
  },
];
;

export default function SLAEdge() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = news.length - 1;

  return (
    <div className="w-[1130px] mx-auto relative m-4">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-lg font-semibold text-gray-800 mb-8">The Game Edge</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {item.icon}
              <p className="text-sm font-bold text-gray-800 mt-2">{item.title}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>


        <div className="flex items-center justify-center gap-4 relative mt-6">

          <button
            className="absolute left-0 p-2 bg-white rounded-full shadow text-gray-700"
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          >
            <MdOutlineArrowBackIos />
          </button>


          <div className="text-center px-8">
            <p className="text-[16px] font-semibold text-gray-900 mb-2 max-w-[600px]">
              {news[currentIndex].text}
            </p>
            <div className="flex items-center justify-center text-xs text-gray-600">
              <span className="text-sky-600 font-medium mr-1 cursor-pointer underline">
                Read more
              </span>
              <span className="font-semibold">{news[currentIndex].source}</span>
            </div>
          </div>


          <button
            className="absolute right-0 p-2 bg-white rounded-full shadow text-gray-700"
            onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))}
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>


        <div className="flex justify-center mt-4 gap-2">
          {news.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentIndex ? "bg-sky-800" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}