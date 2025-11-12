"use client";
import React from "react";
import { Newspaper } from "lucide-react";

export default function NewsHeader() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      {/* 🎮 Background gradient with pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#14532d] to-[#10b981] opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div>

      {/* 💎 Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 backdrop-blur-sm">
        {/* Icon and Title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-white/10 p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <Newspaper size={36} className="text-white drop-shadow-md" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Esports & Gaming Headlines
          </h1>
        </div>

        {/* Underline animation */}
        <div className="relative w-40 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full overflow-hidden mb-5">
          <div className="absolute inset-0 bg-white/60 animate-[pulse_2s_infinite]"></div>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-green-100 text-sm sm:text-lg leading-relaxed">
          Stay ahead of the competition with the freshest updates from the gaming world —
          tournaments, launches, pro scenes, and more!
        </p>

        {/* Glowing edge effect */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}
