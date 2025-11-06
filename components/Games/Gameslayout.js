"use client";
import React from "react";

const categories = [
  { name: "Top players", icon: "sport.svg", link: "/Games/players" },

  { name: ".IO", icon: "other.svg", link: "/Games/3d" },
  { name: "2 Player", icon: "2-player.svg", link: "/Games/3d" },
  { name: "3D", icon: "3d.svg", link: "/Games/3d" },
  { name: "Action", icon: "actions.svg", link: "/Games/3d" },
  { name: "Adventure", icon: "adventure.svg", link: "/Games/3d" },
  { name: "Arcade", icon: "arcade.svg", link: "/Games/3d" },
  { name: "Puzzle", icon: "puzzle.svg", link: "/Games/3d" },
  { name: "Racing", icon: "racing.svg", link: "/Games/3d" },
  { name: "Sports", icon: "sport.svg", link: "/Games/3d" },
];

export default function GamesSidebar() {
  return (
    <aside className="left-sidebar bg-black text-white w-64 min-h-full flex flex-col">
      {/* Header */}
      <div className="side-header flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <div className="burger-btn">
          <span className="bi bi-text-paragraph text-2xl text-white"></span>
        </div>

        {/* Replaced logo with HeatBeasts text */}
        <div className="site-title text-center flex-1">
          <h1 className="text-xl font-extrabold tracking-wide text-white">
            Heat<span className="text-red-500">Beasts</span>
          </h1>
        </div>

        <div className="burger-btn">
          <span className="bi bi-three-dots-vertical text-2xl text-white"></span>
        </div>
      </div>

      {/* Categories */}
      <ul className="p-2 space-y-2 flex-1 overflow-y-auto">
        {categories.map((cat, i) => (
          <li key={i} className="category-item">
            <a
              href={cat.link}
              className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded-md transition"
            >
              <span className="g-icon w-10 h-10 flex items-center justify-center">
                <img
                  src={`https://theme.cloudarcade.net/content/themes/arcade-one/images/icon/${cat.icon}`}
                  alt={cat.name}
                  width={40}
                  height={40}
                />
              </span>
              {cat.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
