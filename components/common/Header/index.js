"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Bell, User } from "lucide-react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ user, setUser }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {}, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setDropdownOpen(false);
    window.dispatchEvent(new Event("userChange"));
  };

  const profileOptions = [
    { name: "Dashboard", link: "/Dashboard" },
    { name: "News", link: "/news" },

    { name: "Friends", link: "/friends" },
    { name: "Gifts", link: "/gifts" },
    { name: "Photos", link: "/photos" },
    { name: "Groups", link: "/groups" },
    { name: "Packages", link: "/packages" },
    { name: "Stories", link: "/stories" },
    { name: "Questions", link: "/questions" },
    { name: "Ads", link: "/ads" },
    { name: "Logout", action: handleLogout },
  ];

  return (
    <header className=" top-4 z-[2000] flex justify-center w-full bg-black ">
      {/* 🌟 Floating Centered Navbar Container */}
      <div className="flex items-center justify-between w-[90%] max-w-6xl bg-gradient-to-r from-[#0B0F1A] via-[#0F1425] to-[#0B0F1A] shadow-lg border border-[#1b1f2a] rounded-full px-6 lg:px-10 py-3 backdrop-blur-md">
        {/* ===== LEFT: LOGO ===== */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <div className="bg-[#7B5CFF] h-10 w-10 flex items-center justify-center rounded-xl shadow-md">
            <span className="text-white font-bold text-lg">EC</span>
          </div>
          <div>
            <h1 className="text-white text-lg font-semibold tracking-wide">
              ESPORTS
            </h1>
            <p className="text-gray-400 text-xs tracking-widest">Community</p>
          </div>
        </Link>

        {/* ===== CENTER NAV LINKS ===== */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col absolute top-20 left-0 w-full bg-[#0F1425] border-t border-[#1b1f2a] p-4 gap-4"
              : "hidden lg:flex"
          } items-center justify-center gap-8 text-gray-300 font-medium text-[15px]`}
        >
          <Link href="/Tournament" className="hover:text-white transition">
            Tournaments
          </Link>
          <Link href="/Dashboard" className="hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/Livestream" className="hover:text-white transition">
            Livestream
          </Link>
          <Link href="/blogs" className="hover:text-white transition">
            Blogs
          </Link>
          <Link href="/Event" className="hover:text-white transition">
            Event
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link href="/aboutus" className="hover:text-white transition">
            About
          </Link>
        </nav>

        {/* ===== RIGHT SIDE BUTTONS ===== */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="p-2 rounded-full bg-[#121829] border border-[#1e2538] text-gray-300 hover:text-white hover:border-[#343c52] transition">
            <Search size={18} />
          </button>

          {/* Bell */}
          <button className="p-2 rounded-full bg-[#121829] border border-[#1e2538] text-gray-300 hover:text-white hover:border-[#343c52] transition">
            <Bell size={18} />
          </button>

          {/* Auth Buttons / Profile */}
          {!user ? (
            <>
              <Link
                href="/login"
                className="flex items-center gap-2 bg-[#1a1f33] border border-[#2a3149] text-gray-300 px-4 py-2 rounded-full hover:text-white hover:border-[#414967] transition"
              >
                <User size={16} />
                Login
              </Link>

              <Link
                href="/signup"
                className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-[#1a1f33] border border-[#2a3149] text-gray-300 px-4 py-2 rounded-full hover:text-white hover:border-[#414967] transition"
              >
                {user.username || user.name || "Profile"}{" "}
                <MdOutlineArrowDropDown className="text-lg" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#141820] border border-[#2a3149] rounded-lg shadow-lg text-white py-2 z-[3000]">
                  {profileOptions.map((item, i) =>
                    item.action ? (
                      <button
                        key={i}
                        onClick={item.action}
                        className="block w-full text-left px-4 py-2 hover:bg-white/10 transition"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        key={i}
                        href={item.link}
                        className="block px-4 py-2 hover:bg-white/10 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
