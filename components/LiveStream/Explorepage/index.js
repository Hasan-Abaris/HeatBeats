"use client"
import React from "react";

function Explorepage() {
  const tags = [
    "All",
    "Gaming",
    "Music",
    "News",
    "Sports",
    "Travel",
    "Movies",
    "Fashion",
    "Technology",
  ];

  const videos = [
    {
      id: 1,
      title: "Exploring the Mountains",
      thumbnail: "https://source.unsplash.com/600x400/?mountains,travel",
      views: "12K views",
    },
    {
      id: 2,
      title: "New Tech Innovations 2025",
      thumbnail: "https://source.unsplash.com/600x400/?technology",
      views: "9.5K views",
    },
    {
      id: 3,
      title: "Top 10 Songs of the Year",
      thumbnail: "https://source.unsplash.com/600x400/?music,concert",
      views: "15K views",
    },
    {
      id: 4,
      title: "Football World Cup Highlights",
      thumbnail: "https://source.unsplash.com/600x400/?football",
      views: "8.2K views",
    },
    {
      id: 5,
      title: "How to Cook Pasta Perfectly",
      thumbnail: "https://source.unsplash.com/600x400/?food,pasta",
      views: "6.4K views",
    },
  ];

  return (
    <div className="p-6">
      {/* ===== Tag Scroll ===== */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 whitespace-nowrap bg-gray-100 hover:bg-green-100 text-gray-700 rounded-full text-sm font-medium transition"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ===== Video Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 truncate">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{video.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorepage;
