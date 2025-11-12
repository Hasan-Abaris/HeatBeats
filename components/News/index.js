"use client";
import React from "react";
import NewsHeader from "@/components/News/NewsHeader";
import NewsList from "@/components/News/NewsList";
import { Flame, MessageSquare } from "lucide-react";

export default function NewsPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 sm:px-12 py-10">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header Section */}
        <NewsHeader />

        {/* 📰 Featured News Banner */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/images/courses/esports.jpg"
            alt="Featured News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="text-3xl font-extrabold mb-2">
              Epic Showdown: Global Esports Finals Kick Off!
            </h2>
            <p className="text-gray-200 text-sm sm:text-base max-w-2xl">
              The world’s best esports teams are battling it out in a record-breaking global
              tournament — full of surprises, upsets, and pure adrenaline.
            </p>
          </div>
        </div>

        {/* 🧾 Main News List */}
        <NewsList />

        {/* 🔥 Trending Topics */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2 mb-5">
            <Flame size={22} /> Trending Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Valorant Masters 2025",
              "PUBG Esports Update",
              "GTA VI Leaks",
              "CS2 Major News",
              "Twitch Streamer Awards",
              "Top 10 FPS Games 2025",
              "Battle Royale Meta",
              "VR Gaming Boom",
            ].map((topic, i) => (
              <span
                key={i}
                className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm rounded-full hover:bg-emerald-200 transition"
              >
                #{topic}
              </span>
            ))}
          </div>
        </div>

        {/* 🏆 Editor’s Picks Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-emerald-600 mb-6">Editor’s Picks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Future of Esports: Where Next?",
                img: "/images/courses/esports.jpg",
              },
              {
                title: "Best Gaming Setups of 2025",
                img: "/images/courses/gamedesign.jpg",
              },
              {
                title: "Esports Athletes Who Inspire",
                img: "/images/courses/streaming-short.jpg",
              },
            ].map((pick, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-emerald-400/30 transition"
              >
                <img
                  src={pick.img}
                  alt={pick.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{pick.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💬 Discussion CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-2xl py-10 px-6 shadow-lg mt-16">
          <h2 className="text-2xl font-bold mb-3 flex justify-center items-center gap-2">
            <MessageSquare size={24} /> Join the Discussion!
          </h2>
          <p className="text-sm mb-5">
            Share your opinions on the latest esports headlines and connect with gamers worldwide.
          </p>
          <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Go to Community Forum
          </button>
        </div>
      </div>
    </section>
  );
}
