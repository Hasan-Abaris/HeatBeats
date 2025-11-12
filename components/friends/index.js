"use client";
import React from "react";
import { MessageCircle, UserPlus, Gamepad2 } from "lucide-react";

export default function Friends() {
  const friends = [
    {
      name: "Zunaira Khan",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "online",
      level: 45,
      mutual: 12,
    },
    {
      name: "Arjun Mehta",
      avatar: "https://i.pravatar.cc/150?img=7",
      status: "offline",
      level: 38,
      mutual: 9,
    },
    {
      name: "Riya Sharma",
      avatar: "https://i.pravatar.cc/150?img=8",
      status: "online",
      level: 52,
      mutual: 17,
    },
    {
      name: "Karan Patel",
      avatar: "https://i.pravatar.cc/150?img=11",
      status: "away",
      level: 41,
      mutual: 8,
    },
    {
      name: "Aisha Noor",
      avatar: "https://i.pravatar.cc/150?img=13",
      status: "online",
      level: 60,
      mutual: 21,
    },
    {
      name: "Vikram Rao",
      avatar: "https://i.pravatar.cc/150?img=15",
      status: "offline",
      level: 34,
      mutual: 6,
    },
  ];

  const statusColor = {
    online: "bg-emerald-500",
    offline: "bg-gray-500",
    away: "bg-yellow-500",
  };

  return (
    <div className="min-h-screen mt-6 mb-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
          Your HeatsBeasts Friends
        </h1>
        <p className="text-gray-400 mt-2">
          Connect, play, and grow together with your gaming squad.
        </p>
      </div>

      {/* Friends Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {friends.map((f) => (
          <div
            key={f.name}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-600/40"
          >
            {/* Status Badge */}
            <div
              className={`absolute top-3 left-3 w-3 h-3 rounded-full ${
                statusColor[f.status]
              }`}
            ></div>

            {/* Avatar */}
            <div className="relative">
              <img
                src={f.avatar}
                alt={f.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 right-16 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-md">
                Lv {f.level}
              </div>
            </div>

            {/* Friend Info */}
            <h2 className="text-lg font-semibold mt-4 text-white">{f.name}</h2>
            <p className="text-sm text-gray-400">Mutual Friends: {f.mutual}</p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-5">
              <button className="flex items-center gap-2 bg-emerald-600 px-4 py-2 rounded-md text-sm hover:bg-emerald-500 transition">
                <MessageCircle size={16} /> Message
              </button>
              <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-600 transition">
                <UserPlus size={16} /> Add
              </button>
            </div>

            {/* Game Tag */}
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Gamepad2 size={16} />
              <span>Currently playing: Valorant</span>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all">
          Find More Players
        </button>
      </div>
    </div>
  );
}
