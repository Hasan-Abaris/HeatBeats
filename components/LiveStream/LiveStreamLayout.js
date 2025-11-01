"use client";
import React from "react";
import {
  Video,
  Settings,
  Bell,
  Search,
  LogOut,
} from "lucide-react";

/**
 * LiveStreamLayout
 * - Full-width layout with top navbar and footer
 * - Content is fully visible (no hidden parts)
 * - Responsive, scrollable design
 */

export default function LiveStreamLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* ===== Top Navbar ===== */}
      <header className="sticky top-0 z-20 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <Video className="text-red-600" />
            <h1 className="text-xl font-semibold">Live Studio</h1>
          </div>

          {/* Middle Section (Search) */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1.5 w-80">
            <Search size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search streams..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2">
              <Video size={16} />
              Go Live
            </button>

            <button
              title="Notifications"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Bell size={18} className="text-gray-600" />
            </button>

            <img
              src="/avatar.jpg"
              alt="User"
              className="w-8 h-8 rounded-full border object-cover"
            />
          </div>
        </div>
      </header>

      {/* ===== Page Content ===== */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 overflow-y-auto">
        {children}
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-white border-t mt-auto py-4 px-6 text-center text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2025 Live Studio — All rights reserved.</p>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
              <Settings size={14} /> Settings
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-red-600">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
