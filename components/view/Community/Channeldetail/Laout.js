"use client";

import Link from "next/link";

const items = [
  { name: "Dashboard", url: "/#" },
  { name: "Content",  url: "/Channeldetail" },
  { name: "Analytics", url: "/Channeldetail/Analytics" },
  { name: "Community", url: "/Channeldetail/Community" },
  { name: "Subtitles", url: "/Channeldetail/Subtitles" },
  { name: "Settings", url: "/Channeldetail/Settings" },
  { name: "Send feedback", url: "/dashboard/feedback" },
];

export default function Sidebar() {
  return (
    <aside className="left-sidebar bg-black text-white w-64 min-h-screen flex flex-col">
      
      {/* Header */}
      <div className="side-header flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <div className="burger-btn">
          <span className="bi bi-text-paragraph text-2xl text-white"></span>
        </div>

        <div className="site-title text-center flex-1">
          <h1 className="text-xl font-extrabold tracking-wide text-white">
            Dashboard<span className="text-red-500">Panel</span>
          </h1>
        </div>

        <div className="burger-btn">
          <span className="bi bi-three-dots-vertical text-2xl text-white"></span>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="p-2 space-y-2 flex-1 overflow-y-auto">
        {items.map((item, i) => (
          <li key={i} className="category-item">
            <Link
              href={item.url}
              className="flex items-center gap-3 hover:bg-gray-800 p-2 rounded-md transition"
            >
             
             
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
