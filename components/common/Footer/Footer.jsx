"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const footerData = {
    TRENDING_GAME_COURSES: [
      "Unity Game Development Course",
      "Unreal Engine 5 Masterclass",
      "Mobile Game Design and Monetization",
      "3D Game Environment Art with Blender",
      "Multiplayer Game Programming with C#",
      "AI for Game Developers",
      "Game UI/UX Design Essentials",
      "VR & AR Game Development Bootcamp",
      "Character Animation for Games",
      "Indie Game Publishing and Marketing",
      "Level Design Mastery Course",
      "Python for Game Automation",
      "Roblox Game Creation Course",
    ],
    ADVANCED_GAME_MASTER_PROGRAMS: [
      "Full Stack Game Developer Master Program",
      "AAA Game Design and Production",
      "Advanced Unreal Engine Developer Program",
      "Metaverse Game Development Course",
      "Professional 3D Game Art & Animation Program",
      "Blockchain & NFT Game Development",
      "Esports Management & Game Marketing",
      "Cinematic Game Production Masterclass",
      "AI & Machine Learning in Gaming",
      "Advanced AR/VR Game Simulation Program",
      "Cloud Gaming Infrastructure Program",
      "Game Physics and Mathematics for Developers",
      "Cross-Platform Game Development with Unity",
      "Game Studio Entrepreneurship Program",
      "Real-Time 3D Rendering Techniques",
    ],
    GAME_EDU_FOR_BUSINESS: ["Corporate Game Training", "Partner With Us"],
  };

  return (
    <footer className="bg-black text-white p-6 md:px-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* MAIN HEADING */}
        <h2 className="uppercase text-2xl font-bold text-white">HeatBeats</h2>

        {/* TOP GRID */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {/* Trending Game Courses */}
          <div>
            <h3 className="text-lg font-bold pb-2 mb-4 text-center sm:text-start">
              TRENDING GAME COURSES
            </h3>
            <ul className="space-y-3 text-center sm:text-start  text-[#76b900]">
              {footerData.TRENDING_GAME_COURSES.map((item, index) => (
                <li key={index} className="text-sm cursor-pointer hover:text-gray-300 transition">
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced Master Game Programs */}
          <div>
            <h3 className="text-lg font-bold pb-2 mb-4 text-center sm:text-start">
              ADVANCED GAME MASTER PROGRAMS
            </h3>
            <ul className="space-y-3 text-center sm:text-start  text-[#76b900]">
              {footerData.ADVANCED_GAME_MASTER_PROGRAMS.map((item, index) => (
                <li key={index} className="text-sm hover:text-gray-300 transition">
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <h3 className="text-lg font-bold pb-2 mb-4 text-center sm:text-start">
              HeatBeasts FOR BUSINESS
            </h3>
            <ul className="space-y-3 text-center sm:text-start  text-[#76b900]">
              {footerData.GAME_EDU_FOR_BUSINESS.map((item, index) => (
                <li key={index} className="text-sm hover:text-gray-300 transition">
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>

            {/* APP DOWNLOAD */}
            <div className="space-y-4 w-fit mt-8">
              <p className="text-sm uppercase ">Download App</p>
              <a href="#" className="flex items-center space-x-2 border border-white rounded-md px-4 py-2">
                <img src="/images/apple.png" className="h-5" />
                <span>
                  <p className="text-xs">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </span>
              </a>
              <a href="#" className="flex items-center space-x-2 border border-white rounded-md px-4 py-2">
                <img src="/images/store.png" className="h-5" />
                <span>
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-base font-semibold">Google Play</p>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* BLOG TOPICS */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">
            TRENDING GAME ARTICLES
          </h3>
          <ul className="flex flex-wrap gap-2 break-words text-[#76b900] ">
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">Unity vs Unreal: Which Engine Wins? |</Link>
            </li>
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">The Rise of AI in Game Development |</Link>
            </li>
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">Top 10 Game Design Mistakes |</Link>
            </li>
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">How to Become a Game Developer in 2025 |</Link>
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="mt-6">
          <h3 className="text-lg font-bold  mb-4">CATEGORIES</h3>
          <ul className="flex flex-wrap gap-2 break-words text-[#76b900]">
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">Game Design |</Link>
            </li>
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">3D Art |</Link>
            </li>
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">Programming |</Link>
            </li>
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">AR/VR |</Link>
            </li>
            <li className="text-sm hover:text-gray-300 transition">
              <Link href="/">Game Business |</Link>
            </li>
          </ul>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col text-center md:text-left space-y-6">
            <div>
              <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
                <strong>Address:</strong>
                <br  className="text-[#76b900]"/>
                HeatBeasts HQ, 42 Pixel Street, Tech City, Gamingland 400001
              </p>
            </div>
            <div>
              <p className="text-sm">
                © 2025 HeatBeasts. Powered by:
                <a
                  href="https://abarissoftech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline ml-1"
                >
                  Abaris Softech
                </a>
              </p>
            </div>
          </div>

          <ul className="flex justify-center md:justify-end space-x-5">
            <li>
              <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded">
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
