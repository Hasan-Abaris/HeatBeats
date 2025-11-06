"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, LogOut, Home, Compass, Users, Radio, User } from "lucide-react";

export default function LiveStreamLayout({ children }) {
  const pathname = usePathname();

  // Sidebar routes
  const menuItems = [
    { name: "For You", path: "/Livestream", icon: <Home size={22} /> },
    { name: "Explore", path: "/Livestream/explore", icon: <Compass size={22} /> },
    { name: "Live", path: "/Livestream/live", icon: <Radio size={22} /> },
    { name: "Profile", path: "/Livestream/profile", icon: <User size={22} /> },
    { name: "Setting", path: "/Livestream/setting", icon: <Settings size={22} /> },
  ];

  // Suggested Accounts Data
  const suggestedAccounts = [
    {
      name: "محمد",
      username: "محمدعدنان",
      img: "https://reelboost.online/uploads/avatar/male-avatar-3.png",
    },
    {
      name: "shubham dongare",
      username: "TWEETitIndia",
      img: "https://reelboost.online/uploads/avatar/female-avatar-3.png",
    },
    {
      name: "cristian",
      username: "RubensMarinho",
      img: "https://reelboost.online/uploads/avatar/male-avatar-5.png",
    },
    {
      name: "caren",
      username: "CarenDe Vera",
      img: "https://reelboost.online/uploads/avatar/female-avatar-3.png",
    },
  ];

  return (
    <div className="flex min-h-[calc(100vh-120px)] bg-gray-50 text-gray-900">
      {/* ===== Sidebar ===== */}
      <aside className="hidden lg:flex sticky top-[80px] h-fit overflow-y-auto no-scrollbar w-[270px] py-5 shadow-md flex-col justify-between bg-white">
        <div className="flex flex-col gap-8">
          {/* ==== Main Menu ==== */}
          <div className="space-y-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-4 px-10 py-3 w-full transition-all duration-200 rounded-r-2xl ${
                    isActive
                      ? "text-green-600 bg-green-50"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium text-[16px]">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* ==== Suggested Accounts ==== */}
          <div className="px-10 border-t pt-4">
            <h2 className="text-base text-gray-500 pb-5">Suggested Accounts</h2>
            {suggestedAccounts.map((user) => (
              <Link
                key={user.name}
                href="/Livestream/message"
                className="flex gap-3 items-center mb-4 cursor-pointer hover:bg-gray-50 rounded-lg p-1 transition"
              >
                <div className="rounded-full w-[40px] h-[40px] overflow-hidden">
                  <img
                    alt={user.name}
                    src={user.img}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs font-medium text-dark truncate max-w-[100px]">
                    {user.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 truncate max-w-[80px]">
                    {user.username}
                  </p>
                </div>
              </Link>
            ))}
            <button className="cursor-pointer text-sm hover:underline text-green-600">
              See all
            </button>
          </div>

          {/* ==== Popular Hashtags ==== */}
          <div className="px-10 border-t pt-4">
            <h2 className="text-base text-gray-500 pb-5">Popular Hashtags</h2>
            {[
              { tag: "#travel", posts: 15 },
              { tag: "#beachtravel", posts: 6 },
              { tag: "#food", posts: 5 },
              { tag: "#traveldiary", posts: 4 },
            ].map((h) => (
              <div key={h.tag} className="flex gap-3 items-start mb-4 cursor-pointer">
                <div className="rounded-full border-2 p-2 border-gray-200">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-lg text-gray-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.78428 14L8.2047 10H4V8H8.41491L8.94043 3H10.9514L10.4259 8H14.4149L14.9404 3H16.9514L16.4259 8H20V10H16.2157L15.7953 14H20V16H15.5851L15.0596 21H13.0486L13.5741 16H9.58509L9.05957 21H7.04855L7.57407 16H4V14H7.78428ZM9.7953 14H13.7843L14.2047 10H10.2157L9.7953 14Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-medium text-dark">{h.tag}</h3>
                  <p className="text-[11px] text-gray-500">{h.posts} posts</p>
                </div>
              </div>
            ))}
            <button className="text-sm text-green-600 cursor-pointer hover:underline">
              See all
            </button>
          </div>
        </div>
      </aside>

      {/* ===== Main Content Area ===== */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {children}
      </main>
    </div>
  );
}
