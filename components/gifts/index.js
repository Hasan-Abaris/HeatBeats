"use client";
import React from "react";
import { Gift, Sparkles, Coins, Send } from "lucide-react";

export default function Gifts() {
  const gifts = [
    {
      name: "Energy Drink",
      price: 200,
      rarity: "Common",
      img: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png",
      desc: "Boost your friend's energy during their next match!",
    },
    {
      name: "Game Skin",
      price: 500,
      rarity: "Rare",
      img: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
      desc: "Gift a premium weapon or character skin to your squadmate.",
    },
    {
      name: "VIP Badge",
      price: 1000,
      rarity: "Legendary",
      img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      desc: "Give your friend VIP access and show ultimate support!",
    },
    {
      name: "Mystery Loot Box",
      price: 750,
      rarity: "Epic",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076048.png",
      desc: "Contains a random exclusive HeatsBeasts collectible!",
    },
    {
      name: "Golden Trophy",
      price: 1200,
      rarity: "Legendary",
      img: "https://cdn-icons-png.flaticon.com/512/2599/2599691.png",
      desc: "Reward your teammate for their tournament victory!",
    },
    {
      name: "Streamer Badge",
      price: 400,
      rarity: "Rare",
      img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      desc: "Show appreciation to your favorite streamer or content creator.",
    },
  ];

  const rarityColors = {
    Common: "text-gray-400 border-gray-600",
    Rare: "text-blue-400 border-blue-500",
    Epic: "text-purple-400 border-purple-500",
    Legendary: "text-yellow-400 border-yellow-400",
  };

  return (
    <div className="min-h-screen mt-8 mb-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-3 mb-3">
          <Gift size={36} className="text-emerald-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            Send a Gift
          </h1>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto">
          Celebrate victories, birthdays, or just show appreciation to your gaming buddies. 
          Send virtual gifts and make their day more legendary!
        </p>
      </div>

      {/* Gift Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gifts.map((gift) => (
          <div
            key={gift.name}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 text-center relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-emerald-600/40"
          >
            {/* Rarity Badge */}
            <span
              className={`absolute top-3 right-3 text-xs border px-2 py-0.5 rounded-full font-semibold ${rarityColors[gift.rarity]}`}
            >
              {gift.rarity}
            </span>

            {/* Image */}
            <div className="relative">
              <img
                src={gift.img}
                alt={gift.name}
                className="w-20 h-20 mx-auto mb-4 object-contain transform hover:scale-110 transition-transform"
              />
              <div className="absolute -bottom-2 right-[35%] bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-md flex items-center gap-1">
                <Coins size={12} /> {gift.price}
              </div>
            </div>

            {/* Gift Info */}
            <h2 className="text-lg font-semibold text-white mt-3">{gift.name}</h2>
            <p className="text-gray-400 text-sm mt-1">{gift.desc}</p>

            {/* Buttons */}
            <div className="flex justify-center mt-5 gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-500 transition">
                <Send size={14} /> Send Gift
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition">
                <Sparkles size={14} /> Preview
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-16">
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-black font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg">
          🎉 View Gift History
        </button>
      </div>
    </div>
  );
}
