"use client"

import React, { useState } from "react";


function Livepage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Trending", "Popular", "New"];

  const videos = [
    {
      id: 1,
      user: "williams654",
      likes: 544,
      views: 387,
      profile: "/uploads/profile_pic/male1.jpg",
      src: "https://web.reelboost.online/2e411309-bfb2-43be-a079-a738ce565640",
    },
    {
      id: 2,
      user: "james55",
      likes: 437,
      views: 170,
      profile: "/uploads/profile_pic/male-2.jpg",
      src: "https://web.reelboost.online/64159be1-6d18-4f1f-b686-a885cb9a55cf",
    },
    {
      id: 3,
      user: "george43",
      likes: 164,
      views: 121,
      profile: "/uploads/profile_pic/male-3.jpg",
      src: "https://web.reelboost.online/db479000-bb20-4e55-93e1-178b5219e311",
    },
    {
      id: 4,
      user: "martha34",
      likes: 143,
      views: 117,
      profile: "/uploads/profile_pic/female-1.jpg",
      src: "https://web.reelboost.online/134fe038-dccc-4851-82ff-5215ffe78c1b",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Tabs */}
      <div className="flex justify-center mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium transition border-b-2 ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Live Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Live</h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative rounded-lg overflow-hidden bg-black h-[280px] w-full max-w-[260px] mx-auto shadow hover:shadow-lg transition"
          >
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Top Left Label */}
            <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-semibold py-1 px-3 rounded-md">
              Live
            </div>

            {/* Top Right Stats */}
            <div className="absolute top-2 right-2 flex gap-3 bg-black/50 rounded-md px-2 py-1 text-white text-[10px]">
              <div className="flex items-center gap-1">
                ❤️ <span>{video.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                👁️ <span>{video.views}</span>
              </div>
            </div>

            {/* Bottom Profile Info */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
              <img
                src={video.profile}
                alt={video.user}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <span className="text-sm font-semibold">{video.user}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Livepage;
