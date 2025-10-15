"use client";

import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

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

  // Static data
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
      {/* 🔵 Top strip */}
      <div className="px-6 md:px-16 py-2 bgBlueDark">
        <div className="flex justify-between flex-wrap items-center">
          <ul className="flex gap-6 flex-wrap">
            <li className="text-white flex gap-3 text-sm items-center">
              <IoCallSharp /> New Course Enquiry:
            </li>
            <li className="text-white flex gap-3 text-sm items-center">
              +91-8851746286<span>(Toll Free)</span>
            </li>
          </ul>

          <div className="text-white text-sm flex gap-2 items-center">
            🎉 <span>Limited Time Offer! Enroll now and get 20% off</span>
            <Link href="#" className="text-yellow-200 underline">
              Know more
            </Link>
          </div>
        </div>
      </div>

      {/* ⚪ Main Header */}
      <header className="border-b flex justify-between items-center px-6 py-3 md:px-16 bg-white w-full">
        {/* LEFT: logo + category + search */}
        <div className="flex gap-5 items-center flex-wrap">
          <Link href="/">
            <img
              src="/images/Sports2.jpg"
              width={50}
              height={20}
              className="w-20 md:h-17"
              alt="Courier Connect logo"
            />
          </Link>

          {/* Category Dropdown */}
          <div className="relative group">
            <button
              className="textBlueDark border rounded text-white px-5 py-1 flex items-center gap-2 hover:bg-sky-700 hover:text-white"
              style={{ borderColor: "#005483" }}
            >
              Category
              <MdOutlineArrowDropDown className="text-2xl" />
            </button>

            {/* Mega Dropdown */}
            <div className="absolute hidden group-hover:block border bg-white text-black rounded mt-[1px] w-[800px] h-[400px] z-40">
              <div className="flex h-full">
                {/* Category List */}
                <div className="flex-1 border-r-2 overflow-auto bg-gray-100">
                  <ul className="flex flex-col gap-1">
                    {categories.map((item) => (
                      <li
                        key={item.id}
                        className="group flex items-center justify-between p-3 rounded cursor-pointer hover:bg-white transition"
                      >
                        <span>{item.name}</span>
                        <IoMdArrowDropright className="w-4 h-4" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Courses */}
                <div className="flex-1 border-r-2 overflow-auto bg-gray-100">
                  <ul className="flex flex-col gap-1">
                    {courses.map((course) => (
                      <li
                        key={course.id}
                        className="group flex items-center justify-between p-2 rounded cursor-pointer hover:bg-white transition"
                      >
                        <span className="text-sm">{course.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Preview */}
                <div className="flex-1 border rounded-md p-4 max-w-sm">
                  <div>Live Course</div>
                  <hr />
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {courses[0].name}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span className="text-blue-600 font-medium">
                      {courses[0].learners} Learners
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {courses[0].desc}
                  </p>
                  <button className="w-full text-blue-600 border border-blue-600 rounded-md py-2 text-sm hover:bg-blue-50 transition">
                    View Course Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative grayBackground rounded-full cursor-pointer">
            <Input
              type="text"
              placeholder="Search Courses"
              className="border-0 ps-[34px] w-[350px] rounded-full"
              onFocus={() => setIsActive(true)}
            />
            <span className="absolute left-2 top-2 textBlueDark text-xl">
              <RiSearchLine />
            </span>
          </div>

          <SearchOverlay isOpen={isActive} onClose={handleRemove} />
        </div>

        {/* RIGHT: nav area */}
        <div className="flex items-center">
          <button
            className="lg:hidden textBlueDark text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          <div className="hidden lg:flex gap-5 items-center">
            {!isLoggedIn && <MegaMenu />}

            <div className="flex gap-3 items-center">
              {isLoggedIn ? (
                <>
                  <Link href="/refer" className="text-base textBlueDark">
                    Refer
                  </Link>
                  <Link href="/all-courses" className="text-base textBlueDark">
                    All Courses
                  </Link>
                  <Link href="/community" className="text-base textBlueDark">
                    Community
                  </Link>
                  <button className="text-xl textBlueDark">
                    <FaBell />
                  </button>
                  <div className="relative">
                    <button
                      className="text-xl textBlueDark flex items-center"
                      onClick={() => setProfileOpen(!profileOpen)}
                    >
                      <FiUser />
                      <span className="ml-1 text-base">User</span>
                      <MdOutlineArrowDropDown className="text-2xl" />
                    </button>
                    {profileOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                        <Link
                          href="/my-profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Profile
                        </Link>
                        <Link
                          href="/orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Orders
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                    className="text-base whitespace-nowrap px-3 py-1 rounded textBlueDark border-2"
                    style={{ borderColor: "#005483" }}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="text-base whitespace-nowrap px-3 py-1 rounded textBlueDark border-2"
                    style={{ borderColor: "#005483" }}
                  >
                    Log in
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
