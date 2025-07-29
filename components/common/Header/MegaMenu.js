"use client";

import Link from "next/link";
import React, { useState } from "react";

const MegaMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <ul className="flex gap-8 relative z-50">
        <li className="flex items-center cursor-pointer">
          <Link href="/all-courses">All Courses</Link>
        </li>

        <li className="flex items-center cursor-pointer">
          <Link href="/corporate-taining">Corporate Training</Link>
        </li>

        {/* Resources with toggle dropdown */}
        <li className="relative">
          <span
            onClick={toggleMenu}
            className="cursor-pointer select-none flex items-center"
          >
            Resources
          </span>

          {menuVisible && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-lg rounded-md">
              <Link
                href="/blogs"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Blog
              </Link>
              <Link
                href="/webinar"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Webinar
              </Link>
              <Link
                href="/community"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Community
              </Link>
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default MegaMenu;
