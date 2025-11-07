"use client";

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchOverlay from "@/components/common/SearchOverlay";
import { Input } from "@/components/ui/input";

export function Header({ user, setUser }) {
  const [isActive, setIsActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {}, [user]);

  const handleRemove = () => setIsActive(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setDropdownOpen(false);
    window.dispatchEvent(new Event("userChange"));
  };

  const categories = [
    { id: 1, name: "Action Games" },
    { id: 2, name: "Sports Games" },
    { id: 3, name: "Adventure Games" },
    { id: 4, name: "Racing Games" },
    { id: 5, name: "Multiplayer Games" },
  ];

  const featuredGames = [
    {
      id: 1,
      name: "Call of Duty: Warzone",
      players: "1M+ Active Players",
      desc: "Battle royale action with intense combat and teamwork.",
    },
    {
      id: 2,
      name: "FIFA 24",
      players: "800K+ Players",
      desc: "Realistic football experience with stunning visuals.",
    },
  ];

  // ✅ Added Dashboard at the top + proper links for each option
  const profileOptions = [
    { name: "Dashboard", link: "/Dashboard" },
    { name: "Add Event", link: "/Dashboard/add-event" },
    { name: "List Event", link: "/Dashboard/list-event" },
    { name: "Add Game", link: "/Dashboard/add-game" },
    { name: "List Game", link: "/Dashboard/list-game" },
    { name: "Add Tournament", link: "/Dashboard/add-tournament" },
    { name: "List Tournament", link: "/Dashboard/list-tournament" },
    { name: "Add Course", link: "/Dashboard/add-course" },
    { name: "List Course", link: "/Dashboard/list-course" },
    { name: "My Tickets", link: "/Dashboard/my-tickets" },
    { name: "Booking List", link: "/Dashboard/bookings" },
    { name: "My Students", link: "/Dashboard/my-students" },
    { name: "My Tournaments List", link: "/Dashboard/my-tournaments" },
  ];

  return (
    <>
      {/* 🔵 Top Strip */}
      <div className="w-full bg-[#0b0604] text-sm border-b border-white/10 backdrop-blur-md px-6 md:px-16 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-200 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <IoCallSharp className="text-green-400" />
            <span>Support: +91-8851746286 (Toll Free)</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1 text-green-300">
            🎉 <span>Join Now & Unlock Exclusive Game Rewards!</span>
            <Link href="#" className="text-green-400 underline ml-1">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* ⚪ Main Header */}
      <header className="sticky top-0 left-0 w-full z-[2000] bg-[#0b0604]/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="flex justify-between items-center px-6 md:px-16 py-3">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-5">
            <Link href="/">
              <img
                src="/images/Sports2.jpg"
                width={60}
                height={20}
                className="w-20 h-auto rounded-md"
                alt="Logo"
              />
            </Link>

            {/* 🎮 Category Dropdown */}
            <div className="relative group hidden md:block">
              <button className="px-4 py-1.5 rounded-2xl bg-transparent text-white flex items-center gap-2 border border-white/20 hover:bg-white/10 transition">
                Categories <MdOutlineArrowDropDown className="text-2xl" />
              </button>

              <div className="absolute hidden group-hover:block bg-[#141010]/95 text-white rounded-2xl mt-2 w-[750px] shadow-2xl border border-white/10 backdrop-blur-lg overflow-hidden z-[3000]">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="flex-1 border-r border-white/10">
                    <ul className="flex flex-col gap-1">
                      {categories.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between p-3 hover:bg-white/10 cursor-pointer transition"
                        >
                          <span>{item.name}</span>
                          <IoMdArrowDropright className="w-4 h-4" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 border-r border-white/10">
                    <ul className="flex flex-col gap-1">
                      {featuredGames.map((game) => (
                        <li
                          key={game.id}
                          className="p-2 hover:bg-white/10 cursor-pointer transition text-sm"
                        >
                          {game.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 p-4">
                    <h2 className="text-lg font-semibold mb-2">
                      {featuredGames[0].name}
                    </h2>
                    <p className="text-sm text-gray-400 mb-2">
                      {featuredGames[0].desc}
                    </p>
                    <p className="text-green-400 text-sm mb-3">
                      {featuredGames[0].players}
                    </p>
                    <button className="w-full border border-green-500 text-green-400 rounded-md py-2 text-sm hover:bg-green-500 hover:text-white transition">
                      View Game Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔍 Search Bar */}
            <div className="relative hidden sm:block">
              <Input
                type="text"
                placeholder="Search Games..."
                className="border-0 ps-[34px] w-[250px] md:w-[350px] rounded-full bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-400 transition"
                onFocus={() => setIsActive(true)}
              />
              <span className="absolute left-2 top-2.5 text-gray-400 text-xl">
                <RiSearchLine />
              </span>
              <SearchOverlay isOpen={isActive} onClose={handleRemove} />
            </div>
          </div>

          {/* RIGHT SIDE NAV LINKS */}
          <div className="hidden lg:flex items-center gap-6 text-white">
            <Link href="/Tournament" className="hover:text-green-400 transition">
              Tournament
            </Link>
            <Link href="/Games" className="hover:text-green-400 transition">
              Games
            </Link>
            <Link href="/Livestream" className="hover:text-green-400 transition">
              Live Stream
            </Link>
            <Link href="/Event" className="hover:text-green-400 transition">
              Event
            </Link>
            <Link href="/contact" className="hover:text-green-400 transition">
              Contact
            </Link>
            <Link href="/aboutus" className="hover:text-green-400 transition">
              About
            </Link>

            {/* ✅ User Dropdown */}
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded-2xl border border-white/20 text-white text-sm hover:bg-white/10 transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-1.5 rounded-2xl border border-white/20 text-white text-sm hover:bg-white/10 transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-1.5 rounded-2xl border border-white/20 text-white text-sm flex items-center gap-2 hover:bg-white/10 transition"
                >
                  {user.username || user.name || "Profile"}{" "}
                  <MdOutlineArrowDropDown className="text-xl" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#141010] border border-white/10 rounded-lg shadow-lg text-white py-2 z-[3000]">
                    {profileOptions.map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        className="block px-4 py-2 hover:bg-white/10 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-white/10 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 📱 Mobile Menu */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>
    </>
  );
}
