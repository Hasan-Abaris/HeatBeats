"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Communityfaq from "@/components/view/Community"; // Home tab content
import ForumTab from "@/components/view/Community/ForumTab"; // Forum page
import SupportTab from "@/components/view/Community/SupportTab"; // Support page
import MoreTab from "@/components/view/Community/OtherTab"; // More page

import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <Communityfaq />;
      case "forum":
        return <ForumTab />;
      case "support":
        return <SupportTab />;
      case "more":
        return <MoreTab />;
      default:
        return <Communityfaq />;
    }
  };

  const handleAcademicClick = () => {
    router.push("/Homemain");
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 🌐 Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3">
          {/* Left: Tabs / Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>

            {/* Tabs (hidden on small screens) */}
            <div className="hidden lg:flex gap-6">
              {[
                { key: "home", label: "Home" },
                { key: "forum", label: "Forum" },
                { key: "more", label: "Contest" },
                { key: "support", label: "Support" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-2 px-4 text-base font-medium border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-blue-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Search + Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search */}
            <div className="flex items-center gap-2 border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500 w-32 sm:w-48 md:w-64">
              <input
                type="search"
                placeholder="Search"
                className="outline-none px-1 py-0.5 text-sm w-full"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>

            {/* Icons */}
            <button
              aria-label="Message center"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-600" />
            </button>

            <button
              aria-label="Personal center"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <UserCircleIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 pb-3 flex flex-col gap-2">
            {[
              { key: "home", label: "Home" },
              { key: "forum", label: "Forum" },
              { key: "more", label: "Contest" },
              { key: "support", label: "Support" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setMenuOpen(false);
                }}
                className={`py-2 text-left text-base font-medium border-b ${
                  activeTab === tab.key
                    ? "text-blue-600 border-blue-500"
                    : "text-gray-700 hover:text-blue-500 border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 🧩 Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {renderTabContent()}
      </div>

      {/* 🎓 Floating Academic Button */}
      <button
        onClick={handleAcademicClick}
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 text-sm sm:text-base"
      >
        Academic
      </button>
    </div>
  );
}
