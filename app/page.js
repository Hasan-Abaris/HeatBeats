"use client";
import React, { useState } from "react";
import Communityfaq from "@/components/view/Community"; // Home tab content
import ForumTab from "@/components/view/Community/ForumTab"; // Forum page
import SupportTab from "@/components/view/Community/SupportTab"; // Support page
import MoreTab from "@/components/view/Community/OtherTab"; // More page

// Import Heroicons
import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("home"); // which tab is active

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <Communityfaq />; // Home content
      case "forum":
        return <ForumTab />; // Forum content
      case "support":
        return <SupportTab />; // Support content
      case "more":
        return <MoreTab />; // More content
      default:
        return <Communityfaq />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🌐 Navbar with tabs on left and search + icons on right */}
      <div className="flex justify-between items-center bg-white shadow-sm sticky top-0 z-50 px-6 py-3 border-b">
        {/* Left: Tabs */}
        <div className="flex gap-6">
          {[
            { key: "home", label: "Home" },
            { key: "forum", label: "Forum" },
            { key: "more", label: "Contest" },
          { key: "support", label: "Support" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-2 px-4 text-lg font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Search bar + Message + Personal Center */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="search"
              placeholder="Community search"
              className="outline-none px-1 py-0.5 text-sm"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>

          {/* Message Icon */}
          <button
            aria-label="Message center"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-600" />
          </button>

          {/* Personal Center Icon */}
          <button
            aria-label="Personal center"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <UserCircleIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* 🧩 Tab Content */}
      <div className="max-w-7xl mx-auto p-6">{renderTabContent()}</div>
    </div>
  );
}
