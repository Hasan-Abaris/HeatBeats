"use client";

import Link from "next/link";
import React, { useState } from "react";

const MegaMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 relative z-50">
      <li className="flex items-center cursor-pointer">
        <Link href="/all-courses" className="text-base textBlueDark">
          All Courses
        </Link>
      </li>

      <li className="flex items-center cursor-pointer">
        <Link href="/corporate-training" className="text-base textBlueDark">
          Corporate Training
        </Link>
      </li>

      {/* Resources with toggle dropdown */}
      <li className="relative">
        <span
          onClick={toggleMenu}
          className="cursor-pointer select-none flex items-center text-base textBlueDark"
        >
          Resources
        </span>

        {menuVisible && (
          <div className="lg:absolute top-full left-0 mt-2 w-full lg:w-[90vw] lg:max-w-[200px] bg-white border shadow-lg rounded-md">
            <Link
              href="/blogs"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuVisible(false)}
            >
              Blog
            </Link>
            <Link
              href="/webinar"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuVisible(false)}
            >
              Webinar
            </Link>
            <Link
              href="/community"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuVisible(false)}
            >
              Community
            </Link>
          </div>
        )}
      </li>
    </ul>
  );
};

export default MegaMenu;