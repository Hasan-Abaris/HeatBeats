"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Communityfaq from "@/components/view/Community"; // Show below Home page
import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function MainPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { key: "home", label: "Home", path: "/" },
    { key: "forum", label: "Forum", path: "/forum" },
    { key: "contest", label: "Contest", path: "/Contest" },
    { key: "support", label: "Support", path: "/Support" },
  ];

  const handleAcademicClick = () => {
    router.push("/Homemain");
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* 🌐 Navbar */}
      {/* ↓ Lowered z-index to 100 so Header (z-[1000]) stays above */}
      <nav className="bg-white shadow-sm sticky top-0 z-[100]  px-5">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3">
          {/* Left: Tabs / Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-green-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>

            {/* Tabs (Desktop) */}
            <div className="hidden lg:flex gap-6">
              {tabs.map((tab) => {
                const isActive = pathname === tab.path;
                return (
                  <button
                    key={tab.key}
                    onClick={() => router.push(tab.path)}
                    className={`py-2 px-4 text-base font-medium border-b-2 transition-colors ${
                      isActive
                        ? "border-green-700 text-black"
                        : "border-transparent text-black hover:text-black-"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Search + Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-green-700 w-32 sm:w-48 md:w-64">
              <input
                type="search"
                placeholder="Search"
                className="outline-none px-1 py-0.5 text-sm w-full"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>

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
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    router.push(tab.path);
                    setMenuOpen(false);
                  }}
                  className={`py-2 text-left text-base font-medium border-b ${
                    isActive
                      ? "text-black border-grenn-700"
                      : "text-black hover:text-black border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* 🏠 Community section only for Home page */}
      {pathname === "/" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Communityfaq />
        </div>
      )}

    {/* 🎓 Floating Buttons */}
<div className="fixed right-4 bottom-4 flex flex-col gap-3 sm:right-6 sm:bottom-6 z-50">
  {/* Academic */}
  <button
    onClick={() => router.push("/Homemain")}
    className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full shadow-lg border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-sm sm:text-base"
  >
    🎓 <span>Academy</span>
  </button>

  {/* Events */}
  <button
    onClick={() => router.push("/Event")}
    className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full shadow-lg border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-sm sm:text-base"
  >
    📅 <span>Events</span>
  </button>

  {/* Live Stream */}
  <button
    onClick={() => router.push("/Livestream")}
    className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full shadow-lg border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-sm sm:text-base"
  >
    🎥 <span>Live Stream</span>
  </button>
</div>

    </div>
  );
}
