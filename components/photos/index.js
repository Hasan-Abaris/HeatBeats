"use client";
import React from "react";
import { Heart, Download, Share2, ImagePlus, List } from "lucide-react";

export default function Photos() {
  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/600?random=${i + 1}`,
    title: `Epic Gaming Moment #${i + 1}`,
    likes: Math.floor(Math.random() * 500) + 100,
  }));

  return (
    <div className="min-h-screen mt-8 mb-12 space-y-20">
      {/* SAVED PHOTOS SECTION */}
      <section>
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-3">
            <ImagePlus size={34} className="text-emerald-400" />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              Saved Photos
            </h1>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Relive your most legendary gaming memories. View, download, and share your saved moments with the HeatsBeasts community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Photo */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-sm font-semibold mb-2">{photo.title}</h3>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-xs">{photo.likes} Likes</span>
                  <div className="flex gap-3">
                    <button className="p-2 bg-gray-800/70 rounded-full hover:bg-emerald-600 transition">
                      <Heart size={16} className="text-white" />
                    </button>
                    <button className="p-2 bg-gray-800/70 rounded-full hover:bg-emerald-600 transition">
                      <Download size={16} className="text-white" />
                    </button>
                    <button className="p-2 bg-gray-800/70 rounded-full hover:bg-emerald-600 transition">
                      <Share2 size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Button */}
        <div className="text-center mt-16">
          <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg">
            📸 Upload New Photo
          </button>
        </div>
      </section>

      {/* LIST PHOTOS SECTION */}
      <section>
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-3">
            <List size={30} className="text-emerald-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              List Photos
            </h2>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Scroll through your saved photo feed. Perfect for viewing all your gaming highlights in one smooth list.
          </p>
        </div>

        <div className="space-y-6">
          {photos.slice(0, 6).map((photo) => (
            <div
              key={photo.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-gray-900 rounded-2xl p-5 hover:bg-gray-800 transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full sm:w-64 h-48 object-cover rounded-xl shadow-md hover:shadow-emerald-500/30 transition"
              />
              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-semibold text-white">{photo.title}</h3>
                <p className="text-gray-400 text-sm">
                  Captured during an epic gaming session — a true victory moment worth saving!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{photo.likes} Likes</span>
                  <div className="flex gap-3">
                    <button className="p-2 bg-gray-800/70 rounded-full hover:bg-emerald-600 transition">
                      <Heart size={16} className="text-white" />
                    </button>
                    <button className="p-2 bg-gray-800/70 rounded-full hover:bg-emerald-600 transition">
                      <Download size={16} className="text-white" />
                    </button>
                    <button className="p-2 bg-gray-800/70 rounded-full hover:bg-emerald-600 transition">
                      <Share2 size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
