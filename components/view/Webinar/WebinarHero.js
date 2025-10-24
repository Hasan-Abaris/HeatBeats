import { FaSearch, FaGamepad, FaUsers } from "react-icons/fa";
import Image from "next/image";

export default function WebinarHero() {
  return (
    <div className="relative bg-gradient-to-br from-[#0a1a2f] to-[#001b44] text-white overflow-hidden h-[60vh] md:h-[70vh]">
      <div className="px-10 md:px-24 pt-28 pb-24 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left column */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-snug tracking-wide">
            HeatBeasts Game Masterclass
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-snug text-gray-200">
            Join live gaming webinars and masterclasses hosted by top players.  
            Learn strategies, tips, and tricks for your favorite games like  
            <span className="text-yellow-400 font-semibold"> PUBG, Ludo, Carrom, and Chess</span>.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-3xl mx-auto md:mx-0">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
            <input
              type="text"
              placeholder="Search webinars by game, coach, or skill level"
              className="w-full py-4 pl-14 pr-4 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Right graphic */}
        <div className="hidden md:flex flex-1 justify-end items-center mt-8 md:mt-0 relative">
          <div className="relative w-[340px] h-[280px]">
            <Image
              src="/images/gaming-hero.svg"
              alt="Gaming masterclass illustration"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Stats Section (Bottom Right) */}
      <div className="absolute bottom-10 right-10 flex gap-10 text-white">
        <div className="flex items-center space-x-3">
          <FaGamepad className="text-3xl text-orange-400" />
          <div>
            <p className="text-2xl font-bold">500+</p>
            <p className="text-sm text-gray-300">Gaming Webinars</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaUsers className="text-3xl text-orange-400" />
          <div>
            <p className="text-2xl font-bold">50,000+</p>
            <p className="text-sm text-gray-300">Active Players</p>
          </div>
        </div>
      </div>
    </div>
  );
}
