"use client";
import React from "react";
import { PlusCircle, Heart, Eye } from "lucide-react";

export default function Stories() {
  const stories = [
    {
      user: "Rohan",
      story: "Just won my first match!",
      img: "https://picsum.photos/400/250?random=10",
      views: 128,
      likes: 45,
      time: "2h ago",
    },
    {
      user: "Aisha",
      story: "Streaming tonight!",
      img: "https://picsum.photos/400/250?random=11",
      views: 220,
      likes: 92,
      time: "4h ago",
    },
    {
      user: "Zunaira",
      story: "Unlocked a rare skin 💎🔥",
      img: "https://picsum.photos/400/250?random=12",
      views: 340,
      likes: 150,
      time: "1d ago",
    },
    {
      user: "Arjun",
      story: "Squad victory in ranked mode!",
      img: "https://picsum.photos/400/250?random=13",
      views: 480,
      likes: 210,
      time: "2d ago",
    },
  ];

  return (
    <div className="min-h-screen mt-8 mb-12 space-y-16">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
          Stories
        </h1>
        <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
          Share your gaming moments, match highlights, and daily vibes with the{" "}
          <span className="text-emerald-400 font-semibold">HeatsBeasts</span> community 🔥
        </p>
      </div>

      {/* Create Story Section */}
      <div className="px-4">
        <div className="max-w-sm mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/20">
          <PlusCircle size={48} className="text-emerald-400 mb-3" />
          <h2 className="text-lg font-semibold text-white">Share Your Story</h2>
          <p className="text-gray-400 text-sm mt-1">
            Capture your latest win, stream, or epic gameplay moment
          </p>
          <button className="mt-5 bg-emerald-600 px-6 py-2 text-sm font-medium rounded-md hover:bg-emerald-500 transition">
            Add Story
          </button>
        </div>
      </div>

      {/* My Stories List */}
      <div className="px-4">
        <h2 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
          📸 My Stories List
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stories.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={s.img}
                alt={s.user}
                className="w-full h-52 object-cover opacity-90 hover:opacity-100 transition"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="font-semibold text-lg">{s.user}</h2>
                  <span className="text-xs text-gray-300">{s.time}</span>
                </div>
                <p className="text-gray-300 text-sm italic mb-2">{s.story}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1">
                    <Eye size={14} className="text-emerald-400" /> {s.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-pink-500" /> {s.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-400 mb-2">Want to explore what others are sharing?</p>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg">
          Explore All Stories
        </button>
      </div>
    </div>
  );
}
