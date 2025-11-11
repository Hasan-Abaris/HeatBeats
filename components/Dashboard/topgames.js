"use client";

import React from "react";
import { ThumbsUp, ThumbsDown, PlayCircle, Tag } from "lucide-react";

const games = [
  {
    id: 1,
    name: "Drop It ( Leaderboard demo )",
    link: "https://demo.cloudarcade.net/game/drop-it",
    played: 30610,
    category: ["Arcade"],
    likesPercent: 86,
    thumbsUp: 211,
    thumbsDown: 34,
  },
  {
    id: 2,
    name: "Anti Virus",
    link: "https://demo.cloudarcade.net/game/anti-virus",
    played: 20039,
    category: ["Action", "Arcade"],
    likesPercent: 84,
    thumbsUp: 254,
    thumbsDown: 48,
  },
  {
    id: 3,
    name: "Kill The Coronavirus",
    link: "https://demo.cloudarcade.net/game/kill-the-coronavirus",
    played: 14343,
    category: ["Arcade", "Hypercasual"],
    likesPercent: 77,
    thumbsUp: 143,
    thumbsDown: 42,
  },
  {
    id: 4,
    name: "Skydom",
    link: "https://demo.cloudarcade.net/game/skydom",
    played: 14194,
    category: ["Puzzle", "Bejeweled", "InGame Purchase"],
    likesPercent: 83,
    thumbsUp: 206,
    thumbsDown: 41,
  },
  {
    id: 5,
    name: "Road Crash",
    link: "https://demo.cloudarcade.net/game/road-crash",
    played: 12892,
    category: ["Racing", "Hypercasual", "InGame Purchase"],
    likesPercent: 84,
    thumbsUp: 103,
    thumbsDown: 19,
  },
  {
    id: 6,
    name: "Escape Out",
    link: "https://demo.cloudarcade.net/game/escape-out",
    played: 10087,
    category: ["Hypercasual"],
    likesPercent: 84,
    thumbsUp: 134,
    thumbsDown: 25,
  },
  {
    id: 7,
    name: "Pool 8",
    link: "https://demo.cloudarcade.net/game/pool-8",
    played: 8425,
    category: ["Puzzle", "Sports"],
    likesPercent: 73,
    thumbsUp: 54,
    thumbsDown: 19,
  },
  {
    id: 8,
    name: "Drunken Duel",
    link: "https://demo.cloudarcade.net/game/drunken-duel",
    played: 8127,
    category: ["2 Player", "Hypercasual"],
    likesPercent: 81,
    thumbsUp: 81,
    thumbsDown: 18,
  },
  {
    id: 9,
    name: "Snake Challenge",
    link: "https://demo.cloudarcade.net/game/snake-challenge",
    played: 6547,
    category: ["Arcade"],
    likesPercent: 85,
    thumbsUp: 86,
    thumbsDown: 15,
  },
  {
    id: 10,
    name: "Sugar Heroes",
    link: "https://demo.cloudarcade.net/game/sugar-heroes",
    played: 6244,
    category: ["Puzzle"],
    likesPercent: 84,
    thumbsUp: 59,
    thumbsDown: 11,
  },
];

function Topgames() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
        Top Games
      </h3>

      {/* Mobile: Cards Layout */}
      <div className="lg:hidden space-y-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-200"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                  #{game.id}
                </span>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-1"
                >
                  {game.name}
                </a>
              </div>
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Play →
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="flex items-center gap-2 text-sm">
                <PlayCircle size={16} className="text-gray-500" />
                <span className="font-medium">{game.played.toLocaleString()}</span>
                <span className="text-gray-500">plays</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-sm">
                <span className="font-semibold text-lg">{game.likesPercent}%</span>
                <span className="text-xs text-gray-500">like</span>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-1 mb-4">
              {game.category.map((cat, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Thumbs */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <ThumbsUp size={16} className="text-green-500" />
                  <span>{game.thumbsUp}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsDown size={16} className="text-red-500" />
                  <span>{game.thumbsDown}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <th className="py-4 px-6 text-left font-semibold">#</th>
              <th className="py-4 px-6 text-left font-semibold">Game Name</th>
              <th className="py-4 px-6 text-left font-semibold">Played</th>
              <th className="py-4 px-6 text-left font-semibold">Category</th>
              <th className="py-4 px-6 text-right font-semibold">Likes</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr
                key={game.id}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-all duration-200"
              >
                <td className="py-4 px-6 font-semibold text-gray-900">
                  #{game.id}
                </td>
                <td className="py-4 px-6">
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    {game.name}
                  </a>
                </td>
                <td className="py-4 px-6 font-medium text-gray-700">
                  {game.played.toLocaleString()}
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap gap-1">
                    {game.category.map((cat, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {game.likesPercent}%
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <ThumbsUp size={16} className="text-green-500" />
                        <span>{game.thumbsUp}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsDown size={16} className="text-red-500" />
                        <span>{game.thumbsDown}</span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Topgames;