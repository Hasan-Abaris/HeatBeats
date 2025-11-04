"use client"
import React, { useState } from "react";

const VideoGallery = () => {
  const [activeTag, setActiveTag] = useState("all");

  const tags = ["all", "travel", "food", "nature", "music"];

  const videos = [
    {
      id: 1,
      tag: "travel",
      title: "Exploring the Mountains",
      thumbnail: "https://via.placeholder.com/400x250?text=Travel+1",
    },
    {
      id: 2,
      tag: "food",
      title: "Delicious Street Food",
      thumbnail: "https://via.placeholder.com/400x250?text=Food+1",
    },
    {
      id: 3,
      tag: "nature",
      title: "Sunset in the Forest",
      thumbnail: "https://via.placeholder.com/400x250?text=Nature+1",
    },
    {
      id: 4,
      tag: "music",
      title: "Live Concert Vibes",
      thumbnail: "https://via.placeholder.com/400x250?text=Music+1",
    },
    {
      id: 5,
      tag: "travel",
      title: "City Lights Adventure",
      thumbnail: "https://via.placeholder.com/400x250?text=Travel+2",
    },
  ];

  const filteredVideos =
    activeTag === "all"
      ? videos
      : videos.filter((video) => video.tag === activeTag);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Video Gallery
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              activeTag === tag
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{video.title}</h3>
              <p className="text-sm text-gray-500 mt-1">#{video.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
