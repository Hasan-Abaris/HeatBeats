"use client";

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import MegaMenu from "./MegaMenu";
import SearchOverlay from "@/components/common/SearchOverlay";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRemove = () => setIsActive(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileOpen(false);
  };

  const categories = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "Graphic Design" },
    { id: 4, name: "Marketing" },
  ];

  const courses = [
    { id: 1, name: "React for Beginners", learners: 240, desc: "Learn React from scratch" },
    { id: 2, name: "Mastering Python", learners: 320, desc: "Deep dive into Python programming" },
  ];

  return (
    <>
      {/* 🔵 Top Strip */}
      <div className="px-4 md:px-16 py-2 bg-black text-sm">
        <div className="flex flex-wrap justify-between items-center gap-2 text-white">
          <ul className="flex gap-4 flex-wrap items-center">
            <li className="flex gap-2 items-center">
              <IoCallSharp /> New Course Enquiry:
            </li>
            <li>
              +91-8851746286 <span>(Toll Free)</span>
            </li>
          </ul>

          <div className="flex gap-2 items-center text-light-green-200">
            🎉 <span>Limited Time Offer! Enroll now and get 20% off</span>
            <Link href="#" className="text-green-300 underline">
              Know more
            </Link>
          </div>
        </div>
      </div>

      {/* ⚪ Main Header */}
      <header className="border-b bg-white w-full sticky top-0 z-[2000] shadow-md">
        <div className="flex flex-wrap justify-between items-center px-6 md:px-16 py-3">
          {/* LEFT: Logo + Category + Search */}
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <Link href="/">
              <img
                src="/images/Sports2.jpg"
                width={50}
                height={20}
                className="w-20 h-auto"
                alt="Logo"
              />
            </Link>

            {/* Category Dropdown */}
            <div className="relative group hidden sm:block">
              <button
                className="border rounded text-black px-4 py-1 flex items-center gap-2 hover:bg-green-600 hover:text-white transition"
                style={{ borderColor: "#8BC34A" }}
              >
                Category
                <MdOutlineArrowDropDown className="text-2xl" />
              </button>

              {/* Mega Dropdown */}
              <div className="absolute hidden group-hover:block border bg-white text-black rounded mt-1 w-full sm:w-[700px] md:w-[800px] h-auto md:h-[400px] z-[3000] shadow-xl">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Categories */}
                  <div className="flex-1 border-b md:border-r overflow-auto bg-gray-50">
                    <ul className="flex flex-col gap-1">
                      {categories.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between p-3 hover:bg-green-100 cursor-pointer transition"
                        >
                          <span>{item.name}</span>
                          <IoMdArrowDropright className="w-4 h-4" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Courses */}
                  <div className="flex-1 border-b md:border-r overflow-auto bg-gray-50">
                    <ul className="flex flex-col gap-1">
                      {courses.map((course) => (
                        <li
                          key={course.id}
                          className="p-2 hover:bg-green-100 cursor-pointer transition text-sm"
                        >
                          {course.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preview */}
                  <div className="flex-1 p-4">
                    <h2 className="text-lg font-semibold mb-2 text-black">
                      {courses[0].name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">{courses[0].desc}</p>
                    <p className="text-green-700 text-sm mb-3">
                      {courses[0].learners} Learners
                    </p>
                    <button className="w-full border border-green-600 text-green-600 rounded-md py-2 text-sm hover:bg-green-50 transition">
                      View Course Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-auto flex-1 sm:flex-initial">
              <Input
                type="text"
                placeholder="Search Courses"
                className="border-0 ps-[34px] w-full sm:w-[250px] md:w-[350px] rounded-full bg-gray-100"
                onFocus={() => setIsActive(true)}
              />
              <span className="absolute left-2 top-2 text-gray-500 text-xl">
                <RiSearchLine />
              </span>
              <SearchOverlay isOpen={isActive} onClose={handleRemove} />
            </div>
          </div>

          {/* RIGHT: Nav Area */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-gray-700 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="hidden lg:flex items-center gap-5">
              {!isLoggedIn && <MegaMenu />}
              <div className="flex items-center gap-3">
                {isLoggedIn ? (
                  <>
                    <Link href="/refer" className="text-gray-700">
                      Refer
                    </Link>
                    <Link href="/all-courses" className="text-gray-700">
                      All Courses
                    </Link>
                    <Link href="/community" className="text-gray-700">
                      Community
                    </Link>
                    <FaBell className="text-gray-700 text-xl" />
                    <div className="relative">
                      <button
                        className="flex items-center text-gray-700"
                        onClick={() => setProfileOpen(!profileOpen)}
                      >
                        <FiUser className="text-xl" />
                        <MdOutlineArrowDropDown className="text-2xl" />
                      </button>
                      {profileOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-[4000]">
                          <Link
                            href="/my-profile"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            My Profile
                          </Link>
                          <Link
                            href="/orders"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            My Orders
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signup"
                      className="px-3 py-1 rounded border-2 text-black text-sm hover:bg-green-600 hover:text-white transition"
                      style={{ borderColor: "#8BC34A" }}
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/login"
                      className="px-3 py-1 rounded border-2 text-black text-sm hover:bg-green-600 hover:text-white transition"
                      style={{ borderColor: "#8BC34A" }}
                    >
                      Log in
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md border-t flex flex-col items-center gap-3 py-4 z-[3000]">
            <Link href="/refer" className="text-gray-700 hover:text-green-600">
              Refer
            </Link>
            <Link href="/all-courses" className="text-gray-700 hover:text-green-600">
              All Courses
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-green-600">
              Community
            </Link>
            <Link href="/signup" className="text-gray-700 hover:text-green-600">
              Sign Up
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-green-600">
              Log in
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
