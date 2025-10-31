"use client";
import React from "react";
import { Video, Settings, Bell } from "lucide-react";

export default function LiveStreamLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Navbar */}
      <header className="flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <Video className="text-red-600" />
          <h1 className="text-xl font-semibold">Live Studio</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
            Go Live
          </button>
          <Bell className="text-gray-600" />
          <img
            src="/avatar.jpg"
            alt="User"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </header>

      {/* Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
