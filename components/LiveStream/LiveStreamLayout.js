"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Home, Compass, Radio, User, Menu, X, Hash } from "lucide-react";

export default function LiveStreamLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Hide sidebar on message or profile pages
  const hideSidebar =
    pathname === "/Livestream/message" ||
    pathname.startsWith("/Livestream/message/profile");

  // Menu Items
  const menuItems = [
    { name: "For You", path: "/Livestream", icon: <Home size={22} /> },
    { name: "Explore", path: "/Livestream/explore", icon: <Compass size={22} /> },
    { name: "Live", path: "/Livestream/live", icon: <Radio size={22} /> },
    { name: "Profile", path: "/Livestream/profile", icon: <User size={22} /> },
    { name: "Setting", path: "/Livestream/setting", icon: <Settings size={22} /> },
  ];

  const suggestedAccounts = [
    { name: "محمد", username: "محمدعدنان", img: "https://reelboost.online/uploads/avatar/male-avatar-3.png" },
    { name: "shubham dongare", username: "TWEETitIndia", img: "https://reelboost.online/uploads/avatar/female-avatar-3.png" },
    { name: "cristian", username: "RubensMarinho", img: "https://reelboost.online/uploads/avatar/male-avatar-5.png" },
    { name: "caren", username: "CarenDe Vera", img: "https://reelboost.online/uploads/avatar/female-avatar-3.png" },
  ];

  const popularHashtags = [
    { tag: "#travel", posts: 15 },
    { tag: "#beachtravel", posts: 6 },
    { tag: "#food", posts: 5 },
    { tag: "#traveldiary", posts: 4 },
  ];

  // Reusable Sidebar Content
  const SidebarContent = () => (
    <div className="flex flex-col h-full overflow-y-auto py-4">
      {/* Main Navigation */}
      <nav className="space-y-1 px-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Suggested Accounts */}
      <section className="mt-6 border-t border-gray-200 pt-5 px-4">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">Suggested Accounts</h3>
        <div className="space-y-3">
          {suggestedAccounts.map((user) => (
            <Link
              key={user.username}
              href="/Livestream/message"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">@{user.username}</p>
              </div>
            </Link>
          ))}
          <button className="text-sm text-green-600 font-medium hover:underline mt-2">
            See all
          </button>
        </div>
      </section>

      {/* Popular Hashtags */}
      <section className="mt-6 border-t border-gray-200 pt-5 px-4 pb-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">Popular Hashtags</h3>
        <div className="space-y-3">
          {popularHashtags.map((h) => (
            <div
              key={h.tag}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <Hash size={16} className="text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{h.tag}</p>
                <p className="text-xs text-gray-500">{h.posts} posts</p>
              </div>
            </div>
          ))}
          <button className="text-sm text-green-600 font-medium hover:underline mt-2">
            See all
          </button>
        </div>
      </section>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Mobile Menu Button */}
      {!hideSidebar && (
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation menu"
          className="lg:hidden fixed top-5 left-5 z-50 bg-white p-2.5 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Mobile Overlay */}
      {sidebarOpen && !hideSidebar && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {!hideSidebar && (
        <>
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex lg:w-72 bg-white shadow-lg sticky top-20 h-[calc(100vh-5rem)] overflow-hidden">
            <SidebarContent />
          </aside>

          {/* Mobile Sidebar Drawer */}
          <div
            className={`fixed inset-y-0 left-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Menu</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={22} />
              </button>
            </div>
            <SidebarContent />
          </div>
        </>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 transition-all duration-300 ${
          hideSidebar ? "max-w-full" : "max-w-7xl"
        }`}
      >
        {children}
      </main>
    </div>
  );
}