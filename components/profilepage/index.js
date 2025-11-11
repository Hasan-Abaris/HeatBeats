"use client";

import React, { useState } from "react";

function ProfileContent() {
  const [activeTab, setActiveTab] = useState("information");

  return (
    <div className="bg-[#0f0f10] min-h-screen text-white flex flex-col items-center font-sans">
      {/* ===== Banner ===== */}
      <div className="relative w-full max-w-6xl h-52 md:h-96 rounded-b-2xl overflow-hidden shadow-lg">
        <img
          src="/images/courses/podcast1.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-1 left-6 flex items-end">
          <img
            src="/images/Educators/david.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-[#0f0f10] object-cover shadow-xl"
          />
        </div>
      </div>

      {/* ===== Profile Details ===== */}
      <div className="mt-20 w-full max-w-5xl px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-2">
              Rahul Sharma
              <span className="text-gray-400 text-sm">• Joined Feb 2023</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">📍 Lucknow, India</p>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-end gap-10 mt-5 md:mt-0">
            <div>
              <p className="text-xl font-semibold">1.2k</p>
              <p className="text-gray-400 text-sm">Followers</p>
            </div>
            <div>
              <p className="text-xl font-semibold">324</p>
              <p className="text-gray-400 text-sm">Following</p>
            </div>
            <div>
              <p className="text-xl font-semibold">58</p>
              <p className="text-gray-400 text-sm">Posts</p>
            </div>
          </div>
        </div>

        {/* ===== Tabs ===== */}
        <div className="mt-8 border-b border-gray-700 flex justify-center md:justify-start">
          <button
            onClick={() => setActiveTab("information")}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              activeTab === "information"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Information
          </button>
          <button
            onClick={() => setActiveTab("posts")}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              activeTab === "posts"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Posts
          </button>
        </div>

        {/* ===== Tab Content ===== */}
        <div className="mt-8">
          {activeTab === "information" ? (
            <div className="space-y-6 bg-[#1a1a1c] p-6 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <p>
                  <span className="font-semibold text-gray-300">Full Name:</span>{" "}
                  Rahul Sharma
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Email:</span>{" "}
                  rahuls@example.com
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Occupation:</span>{" "}
                  Esports Player & Content Creator
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Member Since:</span>{" "}
                  February 2023
                </p>
              </div>

              <p>
                <span className="font-semibold text-gray-300">Bio:</span>{" "}
                Passionate gamer, streamer & community builder 🎮. I love sharing my experiences
                with the gaming world and connecting with like-minded players.
              </p>

              {/* Highlights Section */}
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">🏆 Highlights</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-300">
                  <li>Top 10 in BGMI Nationals 2024</li>
                  <li>Represented India in Asia Esports Cup</li>
                  <li>Streamer with 50k+ community</li>
                  <li>Collaborated with major gaming brands</li>
                </ul>
              </div>

              {/* Interests */}
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">🎮 Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {["Gaming", "Tech", "Vlogging", "Music", "Travel"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#252528] text-sm rounded-full text-gray-300 border border-gray-700"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* ===== Post Cards ===== */}
              <div className="bg-[#1a1a1c] p-4 rounded-xl hover:bg-[#222] transition shadow-md">
                <p className="text-gray-400 text-sm mb-2">
                  <span className="font-semibold text-white">Rahul Sharma</span> • 2 days ago
                </p>
                <p>
                  Just achieved my new high score in BGMI 🔥 — that final zone was wild!
                </p>
                <img
                  src="/images/courses/pubg.jpg"
                  alt="Post"
                  className="w-full rounded-lg mt-3"
                />
              </div>

              <div className="bg-[#1a1a1c] p-4 rounded-xl hover:bg-[#222] transition shadow-md">
                <p className="text-gray-400 text-sm mb-2">
                  <span className="font-semibold text-white">Rahul Sharma</span> • 1 week ago
                </p>
                <p>Met some awesome players at the #IQOOCommunity meetup 🎮✨</p>
                <img
                  src="images/courses/amongus-course.jpg"
                  alt="Meetup"
                  className="w-full rounded-lg mt-3"
                />
              </div>

              {/* ===== Gallery ===== */}
              <div className="bg-[#1a1a1c] p-5 rounded-xl shadow-md">
                <h3 className="text-blue-400 font-semibold mb-3">📸 Recent Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "images/courses/podcast1.jpg",
                    "images/courses/podcast2.jpg",
                    "images/courses/podcast1.jpg",
                    "images/courses/podcast2.jpg",
                    "images/courses/podcast1.jpg",
                    "images/courses/podcast2.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Gallery ${i}`}
                      className="w-full h-36 object-cover rounded-lg hover:scale-105 transition"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
