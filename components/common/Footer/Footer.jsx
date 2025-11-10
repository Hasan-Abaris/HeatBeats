"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerData = {
    TRENDING_GAME_COURSES: [
      "Unity Game Development Course",
      "Unreal Engine 5 Masterclass",
      "Mobile Game Design and Monetization",
      "3D Game Environment Art with Blender",
      "Multiplayer Game Programming with C#",
      "AI for Game Developers",
    ],
    ADVANCED_GAME_MASTER_PROGRAMS: [
      "Full Stack Game Developer Master Program",
      "AAA Game Design and Production",
      "Advanced Unreal Engine Developer Program",
      "Metaverse Game Development Course",
      "Professional 3D Game Art & Animation Program",
    ],
    GAME_EDU_FOR_BUSINESS: ["Corporate Game Training", "Partner With Us"],
  };

  const socialIcons = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaTwitter, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
    { Icon: FaYoutube, link: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] via-black to-[#111] text-white pt-16 pb-10 px-6 md:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#76b90022,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="uppercase text-4xl font-extrabold text-[#76b900] tracking-wider drop-shadow-[0_0_10px_#76b900]">
            Esports Community
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            The future of gaming starts here.
          </p>
        </div>

        {/* Collapsible Menu Sections */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(footerData).map(([title, items]) => (
            <div
              key={title}
              className="bg-[#111111]/60 backdrop-blur-md border border-gray-800 hover:border-[#76b900] transition rounded-xl shadow-lg p-5"
            >
              <button
                onClick={() => toggleSection(title)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-[#76b900]"
              >
                {title.replaceAll("_", " ")}
                {openSection === title ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </button>

              {openSection === title && (
                <ul className="mt-4 space-y-2 transition-all duration-300">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-300 hover:text-[#76b900] transition"
                    >
                      <Link href="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Address + Socials */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Address:</strong> Esports Community HQ, 42 Pixel Street, Tech City, Gamingland 400001
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 <span className="text-[#76b900] font-semibold">Esports Community</span>. Powered by{" "}
              <a
                href="https://abarissoftech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#76b900] transition"
              >
                Abaris Softech
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {socialIcons.map(({ Icon, link }, idx) => (
              <Link
                key={idx}
                href={link}
                className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-full border border-gray-700 hover:border-[#76b900] hover:text-[#76b900] transition-all duration-300 hover:shadow-[0_0_10px_#76b900]"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
