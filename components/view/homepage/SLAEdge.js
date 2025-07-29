"use client";
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle className="text-6xl text-teal-500" />,
    title: "Real Time Doubt Resolution",
    desc: "with Live Instructors",
  },
  {
    icon: <FaInfinity className="text-6xl text-purple-600" />,
    title: "Unlimited Access",
    desc: "to Online Learning Repository",
  },
  {
    icon: <FaClock className="text-6xl text-blue-600" />,
    title: "24/7",
    desc: "Learning Assistants to Guide When You Are Stuck",
  },
  {
    icon: <FaChartLine className="text-6xl text-orange-500" />,
    title: "Track Your",
    desc: "Career Growth",
  },
];

const news = [
  {
    text: "Edureka offers the University of Cambridge Online’s new Generative AI Course for Business Professionals",
    source: "CXOtoday.com",
  },
  {
    text: "Edureka Launches Free Courses for Beginners in Data & AI",
    source: "BusinessLine",
  },
  {
    text: "Edureka Expands Partnership With Leading Universities",
    source: "TechCrunch",
  },
];

export default function SLAEdge() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = news.length - 1;

  return (
    <div className="w-[1130px] mx-auto relative m-4">
      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-lg font-semibold text-gray-800 mb-8">The SLA Edge</h2>
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
